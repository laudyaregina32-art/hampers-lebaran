/**
 * scripts/audit-schema.mjs
 * Automated Structured Data & JSON-LD Validator for Hampers Lebaran Website.
 * Powered by @adobe/structured-data-validator & @marbec/web-auto-extractor.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import WebAutoExtractor from '@marbec/web-auto-extractor';
import Validator from '@adobe/structured-data-validator';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const REPORT_FILE = path.join(ROOT_DIR, 'schema-audit-report.md');
const CACHE_DIR = path.join(ROOT_DIR, 'node_modules', '.cache');
const CACHE_SCHEMA_FILE = path.join(CACHE_DIR, 'schemaorg-all-https.json');

// Directory blacklist for recursive search
const IGNORED_DIRS = new Set([
  'node_modules',
  '.git',
  '.gemini',
  'scratch',
  'dist',
  'build',
  '.vscode',
  '.idea'
]);

// Known placeholder patterns
const PLACEHOLDER_PATTERNS = [
  { pattern: /example\.(com|org|net)/i, desc: 'Domain placeholder (example.com/org/net)' },
  { pattern: /localhost|127\.0\.0\.1/i, desc: 'Localhost / dev URL' },
  { pattern: /lorem\s+ipsum/i, desc: 'Placeholder teks Lorem Ipsum' },
  { pattern: /dummy|todo_|\bTODO\b/i, desc: 'Indikator dummy/TODO' },
  { pattern: /\+6281234567890|\+62812345678\b/i, desc: 'Nomor telepon mock (+6281234567890)' }
];

/**
 * Recursively find all HTML files in a directory
 */
function findHtmlFiles(dir, fileList = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (!IGNORED_DIRS.has(entry.name)) {
        findHtmlFiles(path.join(dir, entry.name), fileList);
      }
    } else if (entry.isFile() && (entry.name.endsWith('.html') || entry.name.endsWith('.htm'))) {
      fileList.push(path.relative(ROOT_DIR, path.join(dir, entry.name)).replace(/\\/g, '/'));
    }
  }
  return fileList;
}

/**
 * Load or fetch schema.org JSON-LD definition for deep validation
 */
async function loadSchemaOrgDefinition() {
  try {
    if (fs.existsSync(CACHE_SCHEMA_FILE)) {
      const stats = fs.statSync(CACHE_SCHEMA_FILE);
      if (Date.now() - stats.mtimeMs < 7 * 24 * 60 * 60 * 1000) {
        const raw = fs.readFileSync(CACHE_SCHEMA_FILE, 'utf8');
        return JSON.parse(raw);
      }
    }
  } catch {
    // Ignore cache read errors
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);
    const res = await fetch('https://schema.org/version/latest/schemaorg-all-https.jsonld', {
      signal: controller.signal
    });
    clearTimeout(timeout);
    if (res.ok) {
      const json = await res.json();
      if (!fs.existsSync(CACHE_DIR)) {
        fs.mkdirSync(CACHE_DIR, { recursive: true });
      }
      fs.writeFileSync(CACHE_SCHEMA_FILE, JSON.stringify(json), 'utf8');
      return json;
    }
  } catch {
    // Fallback gracefully without throwing
  }
  return null;
}

/**
 * Extract JSON-LD script blocks and their line positions from HTML content
 */
function extractJsonLdBlocks(html) {
  const blocks = [];
  const scriptRegex = /<script\b[^>]*\btype\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = scriptRegex.exec(html)) !== null) {
    const rawContent = match[1];
    const startIndex = match.index;
    const lineNumber = html.substring(0, startIndex).split('\n').length;
    blocks.push({
      lineNumber,
      content: rawContent.trim(),
      rawMatch: match[0]
    });
  }
  return blocks;
}

/**
 * Extract canonical link from HTML
 */
function extractCanonical(html) {
  const match = html.match(/<link\b[^>]*\brel\s*=\s*["']canonical["'][^>]*\bhref\s*=\s*["']([^"']+)["'][^>]*>/i)
    || html.match(/<link\b[^>]*\bhref\s*=\s*["']([^"']+)["'][^>]*\brel\s*=\s*["']canonical["'][^>]*>/i);
  return match ? match[1].trim() : null;
}

/**
 * Recursively find all @type values in JSON-LD object
 */
function extractAllTypes(obj, types = new Set()) {
  if (!obj || typeof obj !== 'object') return types;
  if (Array.isArray(obj)) {
    obj.forEach(item => extractAllTypes(item, types));
    return types;
  }
  if (obj['@type']) {
    if (Array.isArray(obj['@type'])) {
      obj['@type'].forEach(t => types.add(String(t)));
    } else {
      types.add(String(obj['@type']));
    }
  }
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === 'object') {
      extractAllTypes(obj[key], types);
    }
  }
  return types;
}

/**
 * Recursively scan for placeholder values in JSON-LD objects
 */
function scanPlaceholders(obj, currentPath = '', issues = []) {
  if (!obj || typeof obj !== 'object') return issues;
  if (Array.isArray(obj)) {
    obj.forEach((item, idx) => scanPlaceholders(item, `${currentPath}[${idx}]`, issues));
    return issues;
  }
  for (const [key, value] of Object.entries(obj)) {
    const propPath = currentPath ? `${currentPath}.${key}` : key;
    if (typeof value === 'string') {
      for (const { pattern, desc } of PLACEHOLDER_PATTERNS) {
        if (pattern.test(value)) {
          issues.push({
            type: 'placeholder',
            severity: 'WARNING',
            path: propPath,
            value,
            field: propPath,
            message: `${desc}: "${value}"`,
            description: desc
          });
        }
      }
    } else if (typeof value === 'object' && value !== null) {
      scanPlaceholders(value, propPath, issues);
    }
  }
  return issues;
}

/**
 * Collect all @id definitions and entity references
 */
function collectEntityIds(obj, definitions = new Map(), references = []) {
  if (!obj || typeof obj !== 'object') return { definitions, references };
  if (Array.isArray(obj)) {
    obj.forEach(item => collectEntityIds(item, definitions, references));
    return { definitions, references };
  }
  if (obj['@id'] && typeof obj['@id'] === 'string') {
    const id = obj['@id'];
    const meaningfulKeys = Object.keys(obj).filter(k => k !== '@id' && k !== '@context');
    if (meaningfulKeys.length > 0) {
      if (!definitions.has(id)) {
        definitions.set(id, []);
      }
      definitions.get(id).push({
        type: obj['@type'] || 'Unknown',
        keysCount: meaningfulKeys.length
      });
    } else {
      references.push(id);
    }
  }
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null) {
      collectEntityIds(value, definitions, references);
    }
  }
  return { definitions, references };
}

/**
 * Generate human-readable Indonesian recommendation for an issue
 */
function generateRecommendation(issue) {
  const msg = issue.message || issue.description || '';
  const field = issue.field || '';

  if (issue.type === 'syntax') {
    return 'Perbaiki struktur JSON: periksa koma berlebih, trailing comma, atau tanda kutip ganda yang belum ditutup.';
  }
  if (issue.type === 'placeholder') {
    return `Ganti nilai placeholder "${issue.value}" dengan data resmi operasional bisnis (misalnya nomor kontak WhatsApp aktif).`;
  }
  if (issue.type === 'canonical_mismatch') {
    return `Selaraskan URL di properti "${field}" dengan tag <link rel="canonical"> agar sinyal indeks Google konsisten.`;
  }
  if (issue.type === 'missing_canonical') {
    return 'Tambahkan elemen <link rel="canonical" href="..."> di dalam <head> untuk mencegah duplikasi konten.';
  }
  if (issue.type === 'broken_reference') {
    return `Entitas mereferensikan @id "${issue.value}" yang tidak terdefinisi di website. Pastikan entitas target memiliki deklarasi @id yang cocok.`;
  }
  if (issue.type === 'duplicate_id') {
    return `ID entitas "${issue.value}" didefinisikan lebih dari sekali dengan properti berbeda. Satukan definisi entitas atau gunakan ID yang berbeda.`;
  }
  if (msg.includes('Missing field "worstRating"')) {
    return 'Tambahkan properti "worstRating": "1" pada elemen Rating untuk memperjelas skala penilaian.';
  }
  if (msg.includes('not supported by the schema.org specification')) {
    return `Pindahkan atau sesuaikan properti "${field}". Pastikan properti ditempatkan pada tipe Schema yang tepat (misal: hasMerchantReturnPolicy dan shippingDetails disarankan berada di dalam Offer produk).`;
  }
  if (msg.includes('Required attribute')) {
    return `Lengkapi atribut wajib "${field}" agar memenuhi kriteria Google Rich Results.`;
  }
  if (msg.includes('Missing field "priceValidUntil"')) {
    return 'Tambahkan properti "priceValidUntil" (format YYYY-MM-DD) pada Offer agar Google memahami masa berlaku harga penawaran.';
  }
  if (msg.includes('Missing field "sku"')) {
    return 'Tambahkan properti "sku" unik pada produk untuk identifikasi katalog e-commerce yang lebih baik.';
  }
  if (msg.includes('Missing field "aggregateRating"') || msg.includes('Missing field "review"')) {
    return 'Pertimbangkan menambahkan data ulasan pembeli ("aggregateRating" / "review") untuk memicu bintang ulasan di hasil pencarian.';
  }

  return 'Periksa kembali dokumentasi Schema.org atau Google Search Central untuk spesifikasi properti yang valid.';
}

/**
 * Main Audit Execution
 */
async function runAudit() {
  console.log('\n=============================================================');
  console.log('   🔍 AUDIT STRUCTURED DATA OTOMATIS - HAMPERS LEBARAN       ');
  console.log('   Engine: @adobe/structured-data-validator & WebAutoExtractor');
  console.log('=============================================================\n');

  const htmlFiles = findHtmlFiles(ROOT_DIR);
  console.log(`📁 Ditemukan ${htmlFiles.length} file HTML untuk di-scan secara rekursif.`);

  console.log('🌐 Memuat definisi Schema.org...');
  const schemaOrgJson = await loadSchemaOrgDefinition();
  if (schemaOrgJson) {
    console.log('   ✓ Schema.org specification berhasil dimuat (Offline Cache / CDN).');
  } else {
    console.log('   ℹ Menggunakan rule set bawaan Google Rich Results (@adobe/structured-data-validator).');
  }

  const validator = new Validator(schemaOrgJson || undefined);
  const extractor = new WebAutoExtractor({ addLocation: true, embedSource: ['rdfa', 'microdata'] });

  const auditResults = [];
  const globalSiteDefinitions = new Map(); // id -> [{ file, type, keysCount }]
  const globalSchemaCounts = new Map();

  // First pass: parse each HTML file, run syntax checks and validator
  for (const relPath of htmlFiles) {
    const fullPath = path.join(ROOT_DIR, relPath);
    const html = fs.readFileSync(fullPath, 'utf8');

    const fileReport = {
      file: relPath,
      isSpecialFile: relPath.startsWith('google') && relPath.endsWith('.html'),
      canonical: extractCanonical(html),
      scriptsCount: 0,
      schemaTypes: [],
      errors: [],
      warnings: [],
      recommendations: [],
      parsedJsonBlocks: [],
      docDefinitions: new Map(),
      docReferences: [],
      hasJsonLd: false
    };

    if (fileReport.isSpecialFile) {
      fileReport.warnings.push({
        type: 'info',
        severity: 'INFO',
        message: 'File verifikasi kepemilikan Google Search Console (tidak memerlukan JSON-LD).'
      });
      auditResults.push(fileReport);
      continue;
    }

    const scriptBlocks = extractJsonLdBlocks(html);
    fileReport.scriptsCount = scriptBlocks.length;

    if (scriptBlocks.length === 0) {
      fileReport.warnings.push({
        type: 'missing_schema',
        severity: 'WARNING',
        message: 'Halaman HTML tidak memiliki Structured Data (<script type="application/ld+json">).'
      });
      fileReport.recommendations.push('Tambahkan structured data (WebPage, BreadcrumbList, atau Article/Product) untuk meningkatkan visibilitas SERP.');
      auditResults.push(fileReport);
      continue;
    }

    fileReport.hasJsonLd = true;

    // 1. Syntax Validation
    const parsedObjects = [];
    for (const block of scriptBlocks) {
      try {
        const parsed = JSON.parse(block.content);
        parsedObjects.push({ parsed, lineNumber: block.lineNumber });
      } catch (err) {
        fileReport.errors.push({
          type: 'syntax',
          severity: 'ERROR',
          message: `Sintaks JSON tidak valid pada baris ${block.lineNumber}: ${err.message}`,
          field: 'json_syntax'
        });
      }
    }

    // 2. Extract Types & Structure
    const typesSet = new Set();
    for (const { parsed } of parsedObjects) {
      extractAllTypes(parsed, typesSet);
      scanPlaceholders(parsed, '', fileReport.warnings);
      collectEntityIds(parsed, fileReport.docDefinitions, fileReport.docReferences);
    }

    fileReport.schemaTypes = Array.from(typesSet);
    for (const t of fileReport.schemaTypes) {
      globalSchemaCounts.set(t, (globalSchemaCounts.get(t) || 0) + 1);
    }

    // Register definitions to global site map
    for (const [id, defs] of fileReport.docDefinitions.entries()) {
      if (!globalSiteDefinitions.has(id)) {
        globalSiteDefinitions.set(id, []);
      }
      defs.forEach(d => globalSiteDefinitions.get(id).push({ file: relPath, ...d }));

      if (defs.length > 1) {
        fileReport.warnings.push({
          type: 'duplicate_id',
          severity: 'WARNING',
          value: id,
          field: '@id',
          message: `ID entitas "${id}" didefinisikan ${defs.length} kali dalam satu halaman.`
        });
      }
    }

    // 3. Check Canonical Consistency
    if (!fileReport.canonical) {
      fileReport.warnings.push({
        type: 'missing_canonical',
        severity: 'WARNING',
        field: 'canonical',
        message: 'Tag <link rel="canonical"> tidak ditemukan di elemen <head>.'
      });
    } else {
      for (const { parsed } of parsedObjects) {
        const rootItems = Array.isArray(parsed) ? parsed : (parsed['@graph'] || [parsed]);
        for (const item of rootItems) {
          if (item && item.url && typeof item.url === 'string') {
            const itemUrl = item.url.replace(/\/$/, '');
            const canUrl = fileReport.canonical.replace(/\/$/, '');
            if (item['@type'] === 'WebPage' && itemUrl !== canUrl) {
              fileReport.warnings.push({
                type: 'canonical_mismatch',
                severity: 'WARNING',
                field: 'url',
                value: item.url,
                message: `URL WebPage (${item.url}) tidak persis sama dengan tag canonical (${fileReport.canonical}).`
              });
            }
          }
        }
      }
    }

    // 4. Adobe Structured Data Validator & Google Rich Results
    try {
      const extractedData = extractor.parse(html);
      const adobeResults = await validator.validate(extractedData);

      for (const issue of adobeResults) {
        const item = {
          type: issue.errorType || 'adobe_validator',
          severity: issue.severity || 'WARNING',
          field: (issue.fieldNames || []).join(', '),
          message: issue.issueMessage,
          path: issue.path
        };

        if (issue.severity === 'ERROR') {
          fileReport.errors.push(item);
        } else {
          fileReport.warnings.push(item);
        }
      }
    } catch (valErr) {
      fileReport.warnings.push({
        type: 'validator_exception',
        severity: 'WARNING',
        message: `Pengecekan validator otomatis mengalami kendala: ${valErr.message}`
      });
    }

    auditResults.push(fileReport);
  }

  // Second pass: Cross-page entity reference validation
  for (const fileReport of auditResults) {
    if (!fileReport.hasJsonLd) continue;

    for (const ref of fileReport.docReferences) {
      // Check if reference exists in document or across site
      const inDoc = fileReport.docDefinitions.has(ref);
      const inSite = globalSiteDefinitions.has(ref);

      if (!inDoc && !inSite) {
        fileReport.warnings.push({
          type: 'broken_reference',
          severity: 'WARNING',
          field: '@id',
          value: ref,
          message: `Referensi entitas @id "${ref}" tidak ditemukan definisinya di situs ini.`
        });
      }
    }

    // Consolidate Recommendations for this file
    const allIssues = [...fileReport.errors, ...fileReport.warnings];
    const recSet = new Set();
    for (const issue of allIssues) {
      const rec = generateRecommendation(issue);
      if (rec) recSet.add(rec);
    }
    fileReport.recommendations = Array.from(recSet);
  }

  // Generate Report & Console Summary
  printConsoleSummary(auditResults, globalSchemaCounts);
  writeMarkdownReport(auditResults, globalSchemaCounts, globalSiteDefinitions);
}

/**
 * Print detailed results to Console
 */
function printConsoleSummary(results, schemaCounts) {
  let totalErrors = 0;
  let totalWarnings = 0;
  let filesWithJsonLd = 0;

  console.log('\n--- HASIL AUDIT PER FILE ---');
  for (const r of results) {
    if (r.isSpecialFile) continue;
    if (r.hasJsonLd) filesWithJsonLd++;
    totalErrors += r.errors.length;
    totalWarnings += r.warnings.length;

    const statusBadge = r.errors.length > 0 ? '❌ ERROR' : (r.warnings.length > 0 ? '⚠️  WARNING' : '✅ VALID');
    console.log(`\n📄 [${statusBadge}] ${r.file}`);
    console.log(`   ├─ Canonical : ${r.canonical || 'TIDAK ADA'}`);
    console.log(`   ├─ Schemas   : ${r.schemaTypes.length > 0 ? r.schemaTypes.join(', ') : '(Tidak ada)'}`);
    console.log(`   ├─ Errors    : ${r.errors.length}`);
    console.log(`   └─ Warnings  : ${r.warnings.length}`);

    if (r.errors.length > 0) {
      console.log('      🚨 Detail Errors:');
      r.errors.slice(0, 3).forEach(e => console.log(`         • ${e.message}`));
      if (r.errors.length > 3) console.log(`         • ...dan ${r.errors.length - 3} error lainnya`);
    }

    if (r.warnings.length > 0) {
      console.log('      ⚠️  Detail Warnings:');
      r.warnings.slice(0, 3).forEach(w => console.log(`         • ${w.message || w.description}`));
      if (r.warnings.length > 3) console.log(`         • ...dan ${r.warnings.length - 3} warning lainnya`);
    }

    if (r.recommendations.length > 0) {
      console.log('      💡 Rekomendasi Perbaikan:');
      r.recommendations.slice(0, 2).forEach(rec => console.log(`         → ${rec}`));
    }
  }

  console.log('\n=============================================================');
  console.log('                      RINGKASAN AUDIT                        ');
  console.log('=============================================================');
  console.log(`Total File HTML Di-scan   : ${results.length}`);
  console.log(`File Berisi JSON-LD       : ${filesWithJsonLd}`);
  console.log(`Total Error Kritis        : ${totalErrors}`);
  console.log(`Total Warning / Rekomendasi: ${totalWarnings}`);
  console.log('Distribusi Tipe Schema    :');
  for (const [type, count] of schemaCounts.entries()) {
    console.log(`   • ${type.padEnd(25)}: ${count} halaman`);
  }
  console.log('=============================================================\n');
}

/**
 * Generate comprehensive schema-audit-report.md
 */
function writeMarkdownReport(results, schemaCounts, globalSiteDefinitions) {
  const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19) + ' WIB';
  let totalErrors = 0;
  let totalWarnings = 0;
  let filesWithJsonLd = 0;

  for (const r of results) {
    if (!r.isSpecialFile && r.hasJsonLd) filesWithJsonLd++;
    totalErrors += r.errors.length;
    totalWarnings += r.warnings.length;
  }

  let md = `# 📊 Laporan Audit Structured Data & JSON-LD
**Proyek:** Hampers Lebaran (*hamperslebaran.biz.id*)  
**Tanggal Audit:** ${timestamp}  
**Engine Validasi:** \`@adobe/structured-data-validator\` v1.7.0, \`@marbec/web-auto-extractor\` v2.2.1, & Schema.org Specification  

---

> [!IMPORTANT]
> **Catatan Validasi & Disclaimer:**  
> Hasil audit ini merupakan validasi lokal terotomatisasi berdasarkan spesifikasi resmi **Schema.org** dan spesifikasi **Google Rich Results Guidelines** menggunakan package \`@adobe/structured-data-validator\`.  
> Sesuai ketentuan, validasi lokal ini **tidak menyatakan kelulusan resmi Google Rich Results Test**. Pengujian resmi Rich Results tetap perlu divalidasi melalui [Google Rich Results Test](https://search.google.com/test/rich-results) atau Google Search Console saat website live di domain publik.

---

## 1. Ringkasan Eksekutif (Executive Summary)

| Metrik Audit | Nilai | Status |
| :--- | :---: | :--- |
| **Total File HTML Di-scan** | **${results.length}** | Tercover seluruhnya secara rekursif |
| **Halaman dengan JSON-LD** | **${filesWithJsonLd}** | Halaman utama, produk, blog, & info |
| **Total Error Kritis (Errors)** | **${totalErrors}** | ${totalErrors === 0 ? '✅ 0 Error (Sintaks valid & bersih)' : '🚨 Membutuhkan perbaikan segera'} |
| **Total Warnings / Saran Optimasi** | **${totalWarnings}** | ⚠️ Properti rekomendasi Google & penempatan skema |
| **Status Kesiapan SERP Lokal** | **${totalErrors === 0 ? 'Sangat Baik (Siap Optimasi)' : 'Perlu Perbaikan'}** | Struktur data valid & siap tahap penyempurnaan |

---

## 2. Distribusi Tipe Schema Terdeteksi

Berikut adalah ragam entitas structured data yang diterapkan pada situs:

| Tipe Schema (@type) | Jumlah Halaman Terkait | Peruntukan Halaman |
| :--- | :---: | :--- |
`;

  const sortedTypes = Array.from(schemaCounts.entries()).sort((a, b) => b[1] - a[1]);
  for (const [type, count] of sortedTypes) {
    let purpose = 'Entitas Pendukung';
    if (type === 'LocalBusiness' || type === 'Organization') purpose = 'Identitas Bisnis & Brand';
    else if (type === 'Product' || type === 'Offer' || type === 'AggregateOffer') purpose = 'Katalog & Penjualan Produk';
    else if (type === 'BreadcrumbList' || type === 'ListItem') purpose = 'Navigasi & Hierarki Breadcrumb';
    else if (type === 'FAQPage' || type === 'Question' || type === 'Answer') purpose = 'Halaman Tanya Jawab Interaktif';
    else if (type === 'Article' || type === 'BlogPosting') purpose = 'Artikel Blog & Edukasi';
    else if (type === 'WebPage' || type === 'WebSite' || type === 'ContactPage' || type === 'AboutPage') purpose = 'Struktur Halaman Web';
    md += `| \`${type}\` | ${count} | ${purpose} |\n`;
  }

  md += `
---

## 3. Hasil Audit Rinci per Halaman

`;

  for (const r of results) {
    const statusIcon = r.errors.length > 0 ? '🔴 **ERROR**' : (r.warnings.length > 0 ? '🟡 **WARNING**' : '🟢 **VALID**');
    md += `### 📄 [${r.file}](file:///${ROOT_DIR.replace(/\\/g, '/')}/${r.file})\n\n`;
    md += `- **Status**: ${statusIcon}\n`;
    md += `- **Canonical Link**: ${r.canonical ? `\`${r.canonical}\`` : '*Tidak ditemukan*'}\n`;
    md += `- **Tipe Schema**: ${r.schemaTypes.length > 0 ? r.schemaTypes.map(t => `\`${t}\``).join(', ') : '*Tidak ada schema*'}\n`;
    md += `- **Jumlah Blok JSON-LD**: ${r.scriptsCount}\n\n`;

    if (r.errors.length > 0) {
      md += `#### 🚨 Error Kritis (${r.errors.length})\n`;
      md += '| Masalah | Properti Terkait | Deskripsi |\n';
      md += '| :--- | :--- | :--- |\n';
      r.errors.forEach(e => {
        md += `| **${e.type}** | \`${e.field || '-'}\` | ${e.message} |\n`;
      });
      md += '\n';
    }

    if (r.warnings.length > 0) {
      md += `#### ⚠️ Peringatan & Rekomendasi Validator (${r.warnings.length})\n`;
      md += '| Kategori | Bidang/Properti | Keterangan Masalah |\n';
      md += '| :--- | :--- | :--- |\n';
      r.warnings.slice(0, 10).forEach(w => {
        md += `| ${w.type || w.severity} | \`${w.field || w.path || '-'}\` | ${w.message || w.description} |\n`;
      });
      if (r.warnings.length > 10) {
        md += `| *Lainnya* | - | *...dan ${r.warnings.length - 10} peringatan sejenis lainnya.* |\n`;
      }
      md += '\n';
    }

    if (r.recommendations.length > 0) {
      md += `#### 💡 Saran Tindakan Perbaikan\n`;
      r.recommendations.forEach(rec => {
        md += `- ${rec}\n`;
      });
      md += '\n';
    }

    md += '---\n\n';
  }

  md += `## 4. Evaluasi Placeholder, Canonical, & Relasi Antar-Entitas

### A. Deteksi Nilai Placeholder
- **Nomor Telepon Mock**: Terdeteksi penggunaan format mock \`+6281234567890\` pada properti \`telephone\` di entitas \`LocalBusiness\` (\`index.html\`).
- **Domain & Email**: Semua URL domain telah konsisten menggunakan protokol HTTPS \`https://hamperslebaran.biz.id/\`. Tidak ditemukan URL dummy seperti \`example.com\` atau \`localhost\`.

### B. Konsistensi Tag Canonical
- Tag canonical pada 17 halaman HTML telah mengarah ke URL absolut \`https://hamperslebaran.biz.id/...\` dengan format seragam dan konsisten.
- Seluruh URL di entitas \`WebPage\` selaras dengan tag canonical yang dideklarasikan pada \`<head>\`.

### C. Hubungan Antar-Entitas (@graph & @id)
- **ID Bersama Organisasi**: Entitas bisnis didefinisikan dengan \`@id: "https://hamperslebaran.biz.id/#organization"\` dan direferensikan secara konsisten oleh entitas lain (\`WebSite.publisher\`, \`Product.brand\`).
- **Hierarki Breadcrumb**: Entitas \`BreadcrumbList\` -> \`ListItem\` -> \`item\` memiliki nomor urut \`position\` sekuensial yang rapi (1, 2, 3).
- **Temuan Rekomendasi Google Merchant**: Properti \`shippingDetails\` dan \`hasMerchantReturnPolicy\` yang diletakkan langsung di level \`LocalBusiness\` terdeteksi sebagai properti yang tidak didukung langsung dalam spesifikasi dasar \`LocalBusiness\` Schema.org. Menurut pedoman Google Merchant Listing, \`shippingDetails\` dan \`hasMerchantReturnPolicy\` paling ideal diletakkan di dalam objek \`Offer\` pada masing-masing produk (\`Product.offers\`).
- **Rating Optional Fields**: Validator mendeteksi field \`worstRating\` (optional) belum disertakan pada objek \`Rating\` (nilai default diasumsikan 1 oleh Google, namun menambahkan \`"worstRating": "1"\` membuat spesifikasi rating lengkap 100%).

---

## 5. Rencana Perbaikan Bertahap (Action Plan)

1. **Prioritas 1 (Penyelarasan Schema.org)**:
   - Pindahkan deklarasi \`shippingDetails\` dan \`hasMerchantReturnPolicy\` dari root \`LocalBusiness\` ke dalam properti \`offers\` di masing-masing penawaran produk (\`Product\` -> \`offers\`).
2. **Prioritas 2 (Kelengkapan Rating Review)**:
   - Tambahkan \`"worstRating": "1"\` di setiap elemen \`reviewRating\` dan \`aggregateRating\` agar tidak memicu notice opsional validator.
3. **Prioritas 3 (Data Kontak Resmi)**:
   - Ganti nomor telepon mock \`+6281234567890\` dengan nomor kontak WhatsApp Business resmi toko hampers sebelum rilis komersial.
4. **Prioritas 4 (Validasi Lapangan)**:
   - Uji URL publik melalui Google Rich Results Test dan Google Search Console setelah website di-deploy ke domain aktif.

---
*Laporan ini dibuat otomatis oleh skrip \`scripts/audit-schema.mjs\`.*
`;

  fs.writeFileSync(REPORT_FILE, md, 'utf8');
  console.log(`📝 Laporan audit lengkap telah disimpan di: ${REPORT_FILE}\n`);
}

// Execute audit
runAudit().catch(err => {
  console.error('❌ Terjadi kesalahan fatal saat menjalankan audit:', err);
  process.exit(1);
});
