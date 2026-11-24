import fs from 'fs';
import { headPreSchema, navPart, footerPart, formatInline, slugify } from './md-parser-utils.mjs';

const rawMd = fs.readFileSync('C:/Users/User/.gemini/antigravity/brain/740afdbe-e763-4324-9cec-93c4d631557e/.user_uploaded/media_1795486347663_00320177.md', 'utf8');

// Definisi 4 artikel
const articleConfigs = [
  {
    rawStart: '# ARTIKEL PILAR',
    rawEnd: '# CLUSTER 1',
    slug: 'hampers-lebaran-kekinian',
    categoryBadge: 'Inspirasi & Panduan',
    heroImage: '../assets/images/hampers-kekinian-hero.webp',
    thumbImage: 'assets/images/hampers-kekinian-thumb.webp',
    heroAlt: 'Hampers Lebaran kekinian dengan kemasan elegan dan kurasi produk berkualitas',
    heroCaption: 'Panduan lengkap hampers Lebaran kekinian memadukan kue kering premium, minuman istimewa, dan personalisasi kemasan berkesan.',
    readTime: '9 menit baca',
    relatedArticles: [
      {
        slug: 'inspirasi-hampers-lebaran-kekinian',
        title: '15 Inspirasi Hampers Lebaran Kekinian Berkesan',
        badge: 'Ide & Inspirasi',
        thumb: '../assets/images/inspirasi-hampers-kekinian-thumb.webp'
      },
      {
        slug: 'hampers-lebaran-klien-relasi-bisnis',
        title: 'Rekomendasi Hampers Lebaran Klien & Bisnis',
        badge: 'Corporate Gifting',
        thumb: '../assets/images/hampers-klien-bisnis-thumb.webp'
      },
      {
        slug: 'vendor-hampers-lebaran-custom-perusahaan',
        title: 'Vendor Hampers Lebaran Custom Perusahaan',
        badge: 'Vendor & Pengadaan',
        thumb: '../assets/images/vendor-hampers-custom-thumb.webp'
      }
    ]
  },
  {
    rawStart: '# CLUSTER 1',
    rawEnd: '# CLUSTER 2',
    slug: 'inspirasi-hampers-lebaran-kekinian',
    categoryBadge: 'Ide & Inspirasi',
    heroImage: '../assets/images/inspirasi-hampers-kekinian-hero.webp',
    thumbImage: 'assets/images/inspirasi-hampers-kekinian-thumb.webp',
    heroAlt: '15 inspirasi hampers Lebaran kekinian untuk keluarga dan sahabat',
    heroCaption: 'Koleksi 15 inspirasi hampers Lebaran modern dari kombinasi kue kering lezat, teh herbal, hingga perlengkapan ibadah elegan.',
    readTime: '8 menit baca',
    relatedArticles: [
      {
        slug: 'hampers-lebaran-kekinian',
        title: 'Panduan Lengkap Hampers Lebaran Kekinian',
        badge: 'Inspirasi & Panduan',
        thumb: '../assets/images/hampers-kekinian-thumb.webp'
      },
      {
        slug: 'hampers-lebaran-klien-relasi-bisnis',
        title: 'Rekomendasi Hampers Lebaran Klien & Bisnis',
        badge: 'Corporate Gifting',
        thumb: '../assets/images/hampers-klien-bisnis-thumb.webp'
      },
      {
        slug: 'vendor-hampers-lebaran-custom-perusahaan',
        title: 'Vendor Hampers Lebaran Custom Perusahaan',
        badge: 'Vendor & Pengadaan',
        thumb: '../assets/images/vendor-hampers-custom-thumb.webp'
      }
    ]
  },
  {
    rawStart: '# CLUSTER 2',
    rawEnd: '# CLUSTER 3',
    slug: 'hampers-lebaran-klien-relasi-bisnis',
    categoryBadge: 'Corporate Gifting',
    heroImage: '../assets/images/hampers-klien-bisnis-hero.webp',
    thumbImage: 'assets/images/hampers-klien-bisnis-thumb.webp',
    heroAlt: 'Rekomendasi hampers Lebaran kekinian untuk klien dan relasi bisnis perusahaan',
    heroCaption: 'Hampers Lebaran corporate untuk mempererat hubungan bisnis dengan kemasan eksklusif dan opsi branding logo perusahaan.',
    readTime: '8 menit baca',
    relatedArticles: [
      {
        slug: 'hampers-lebaran-kekinian',
        title: 'Panduan Lengkap Hampers Lebaran Kekinian',
        badge: 'Inspirasi & Panduan',
        thumb: '../assets/images/hampers-kekinian-thumb.webp'
      },
      {
        slug: 'inspirasi-hampers-lebaran-kekinian',
        title: '15 Inspirasi Hampers Lebaran Kekinian Berkesan',
        badge: 'Ide & Inspirasi',
        thumb: '../assets/images/inspirasi-hampers-kekinian-thumb.webp'
      },
      {
        slug: 'vendor-hampers-lebaran-custom-perusahaan',
        title: 'Vendor Hampers Lebaran Custom Perusahaan',
        badge: 'Vendor & Pengadaan',
        thumb: '../assets/images/vendor-hampers-custom-thumb.webp'
      }
    ]
  },
  {
    rawStart: '# CLUSTER 3',
    rawEnd: null,
    slug: 'vendor-hampers-lebaran-custom-perusahaan',
    categoryBadge: 'Vendor & Pengadaan',
    heroImage: '../assets/images/vendor-hampers-custom-hero.webp',
    thumbImage: 'assets/images/vendor-hampers-custom-thumb.webp',
    heroAlt: 'Vendor hampers Lebaran custom untuk pengadaan perusahaan dan instansi',
    heroCaption: 'Panduan bermitra dengan vendor hampers Lebaran custom untuk pengadaan korporat berskala besar secara tepat waktu.',
    readTime: '9 menit baca',
    relatedArticles: [
      {
        slug: 'hampers-lebaran-kekinian',
        title: 'Panduan Lengkap Hampers Lebaran Kekinian',
        badge: 'Inspirasi & Panduan',
        thumb: '../assets/images/hampers-kekinian-thumb.webp'
      },
      {
        slug: 'inspirasi-hampers-lebaran-kekinian',
        title: '15 Inspirasi Hampers Lebaran Kekinian Berkesan',
        badge: 'Ide & Inspirasi',
        thumb: '../assets/images/inspirasi-hampers-kekinian-thumb.webp'
      },
      {
        slug: 'hampers-lebaran-klien-relasi-bisnis',
        title: 'Rekomendasi Hampers Lebaran Klien & Bisnis',
        badge: 'Corporate Gifting',
        thumb: '../assets/images/hampers-klien-bisnis-thumb.webp'
      }
    ]
  }
];

// Robust Markdown to HTML Converter for Pandoc-style articles
function parsePandocArticleBody(rawText) {
  // Pre-normalize line breaks inside links: [text\nmore](url) -> [text more](url)
  let text = rawText.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, p1, p2) => {
    return `[${p1.replace(/\s+/g, ' ').trim()}](${p2.replace(/\s+/g, '').trim()})`;
  });

  // Normalize cross-article anchor links to actual .html links
  text = text.replace(/#rekomendasi-hampers-lebaran-kekinian-untuk-klien-dan-relasi-bisnis-perusahaan/g, 'hampers-lebaran-klien-relasi-bisnis.html');
  text = text.replace(/#vendor-hampers-lebaran-kekinian-custom-untuk-kebutuhan-perusahaan-dan-corporate/g, 'vendor-hampers-lebaran-custom-perusahaan.html');
  text = text.replace(/#15-inspirasi-hampers-lebaran-kekinian-yang-berkesan-untuk-keluarga-dan-kerabat/g, 'inspirasi-hampers-lebaran-kekinian.html');
  text = text.replace(/#hampers-lebaran-kekinian-untuk-hadiah-keluarga-kerabat-dan-perusahaan/g, 'hampers-lebaran-kekinian.html');

  // Replace text table simulation
  const tableRegex = /Komponen\s+Total\s*\n\s*-+\s+-+\s*\n\s*Isi produk\s+Rp17\.750\.000\s*\n\s*Kemasan dan perakitan\s+Rp2\.500\.000\s*\n\s*Penyimpanan dan perlengkapan\s+Rp750\.000\s*\n\s*\*\*Total biaya yang dihitung\*\*\s+\*\*Rp21\.000\.000\*\*\s*\n\s*\*\*Biaya per paket\*\*\s+\*\*Rp210\.000\*\*/g;
  
  const tableHtml = `
<div class="hl-table-hint"><span>↔ Geser tabel ke samping untuk melihat lengkap</span></div>
<div class="hl-table-wrapper" tabindex="0" role="region" aria-label="Tabel simulasi biaya produksi hampers">
  <table>
    <thead>
      <tr>
        <th>Komponen</th>
        <th style="text-align:right;">Total Biaya (100 Paket)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Isi produk</td>
        <td style="text-align:right;">Rp17.750.000</td>
      </tr>
      <tr>
        <td>Kemasan dan perakitan</td>
        <td style="text-align:right;">Rp2.500.000</td>
      </tr>
      <tr>
        <td>Penyimpanan dan perlengkapan</td>
        <td style="text-align:right;">Rp750.000</td>
      </tr>
      <tr style="font-weight:700;background:var(--hl-surface-muted);">
        <td>Total Biaya yang Dihitung</td>
        <td style="text-align:right;color:var(--hl-accent-dark);">Rp21.000.000</td>
      </tr>
      <tr style="font-weight:700;">
        <td>Estimasi Biaya per Paket</td>
        <td style="text-align:right;color:var(--hl-accent-dark);">Rp210.000</td>
      </tr>
    </tbody>
  </table>
</div>
`;
  text = text.replace(tableRegex, tableHtml);

  // Split into paragraphs by blank lines (2 or more newlines)
  let blocks = text.split(/\n\s*\n+/);
  let html = [];
  let inList = false;

  function flushList() {
    if (inList) {
      html.push('</ul>');
      inList = false;
    }
  }

  for (let block of blocks) {
    let trimmed = block.trim();
    if (!trimmed) continue;

    // Table block already converted
    if (trimmed.includes('<div class="hl-table-wrapper"')) {
      flushList();
      html.push(trimmed);
      continue;
    }

    // Headings
    if (trimmed.startsWith('### ')) {
      flushList();
      let headingText = trimmed.replace(/^###\s+/, '').replace(/\\/g, '').trim();
      let id = slugify(headingText);
      html.push(`<h3 id="${id}">${formatInline(headingText)}</h3>`);
      continue;
    }
    if (trimmed.startsWith('## ')) {
      flushList();
      let headingText = trimmed.replace(/^##\s+/, '').replace(/\\/g, '').trim();
      let id = slugify(headingText);
      html.push(`<h2 id="${id}">${formatInline(headingText)}</h2>`);
      continue;
    }

    // Bullet lists
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      let items = trimmed.split(/\n[-*]\s+/);
      items[0] = items[0].replace(/^[-*]\s+/, '');
      if (!inList) {
        html.push('<ul>');
        inList = true;
      }
      for (let it of items) {
        let cleanIt = it.replace(/\s+/g, ' ').replace(/\\/g, '').trim();
        html.push(`  <li>${formatInline(cleanIt)}</li>`);
      }
      continue;
    } else {
      flushList();
    }

    // Numbered subheadings or lists (e.g., "1. Hampers kue kering klasik")
    let numHeadingMatch = trimmed.match(/^(\d+\.\s+[^\n]+)/);
    if (numHeadingMatch && trimmed.indexOf('\n') !== -1 && trimmed.length > 50) {
      let lines = trimmed.split('\n');
      let titleLine = lines[0].replace(/\\/g, '').trim();
      let rest = lines.slice(1).join(' ').replace(/\s+/g, ' ').replace(/\\/g, '').trim();
      let id = slugify(titleLine);
      html.push(`<h3 id="${id}">${formatInline(titleLine)}</h3>`);
      if (rest) {
        html.push(`<p>${formatInline(rest)}</p>`);
      }
      continue;
    }

    // Normal paragraph: join wrapped lines with spaces
    let singleLine = trimmed.split('\n').map(l => l.trim()).join(' ').replace(/\\/g, '');
    html.push(`<p>${formatInline(singleLine)}</p>`);
  }

  flushList();
  return html.join('\n');
}

// Function to parse an article section
function parseArticle(config) {
  const startIdx = rawMd.indexOf(config.rawStart);
  let endIdx = config.rawEnd ? rawMd.indexOf(config.rawEnd) : rawMd.length;
  let text = rawMd.substring(startIdx, endIdx);

  // Meta Title
  let metaTitle = text.match(/\*\*Meta Title:\*\*\s*(.+)/)?.[1]?.replace(/\\/g, '')?.trim();
  // Meta Description
  let metaDescMatch = text.match(/\*\*Meta Description:\*\*\s*([\s\S]*?)(?=\*\*(?:Focus Keyphrase|Supporting Keywords))/);
  let metaDesc = metaDescMatch ? metaDescMatch[1].replace(/[\r\n\\]+/g, ' ').trim() : '';

  // H1
  let h1Match = text.match(/^# (.+)$/m);
  let h1 = h1Match ? h1Match[1].trim() : metaTitle;

  // FAQ section
  let faqIdx = text.indexOf('## Pertanyaan Seputar Pemesanan Hampers Lebaran');
  let faqText = faqIdx !== -1 ? text.substring(faqIdx) : '';
  let contentText = faqIdx !== -1 ? text.substring(0, faqIdx) : text;

  // Clean metadata block from body
  contentText = contentText.replace(/^# ARTIKEL PILAR[\s\S]*?## Metadata[\s\S]*?(?=# [^\n]+)/, '');
  contentText = contentText.replace(/^# CLUSTER \d+[\s\S]*?## Metadata[\s\S]*?(?=# [^\n]+)/, '');
  contentText = contentText.replace(/^# [^\n]+/, ''); // remove H1 from body

  // Extract Key takeaways (Hal Penting Sebelum...)
  let keyTakeaways = [];
  let halPentingMatch = contentText.match(/## Hal Penting Sebelum [^\n]+([\s\S]*?)(?=## )/);
  if (halPentingMatch) {
    let bullets = [...halPentingMatch[1].matchAll(/^[-*]\s+(.+)$/gm)].map(m => m[1].replace(/\\/g, '').trim());
    keyTakeaways = bullets;
    contentText = contentText.replace(/## Hal Penting Sebelum [^\n]+[\s\S]*?(?=## )/, '');
  }

  // Parse FAQs
  let faqs = [];
  if (faqText) {
    // split by ###
    let qBlocks = faqText.split(/^### /m).slice(1);
    for (let qBlock of qBlocks) {
      let lines = qBlock.trim().split('\n');
      let question = lines[0].replace(/\\/g, '').trim();
      let answer = lines.slice(1).join(' ').replace(/\s+/g, ' ').replace(/\\/g, '').trim();
      faqs.push({ question, answer });
    }
  }

  // TOC
  let toc = [];
  if (keyTakeaways.length > 0) {
    toc.push({ id: 'ringkasan-inti', text: 'Ringkasan Inti' });
  }
  let h2Matches = [...contentText.matchAll(/^## (.+)$/gm)];
  for (let m of h2Matches) {
    let title = m[1].replace(/\\/g, '').trim();
    toc.push({ id: slugify(title), text: title });
  }
  if (faqs.length > 0) {
    toc.push({ id: 'faq-section', text: 'Pertanyaan Seputar Pemesanan' });
  }

  return {
    ...config,
    h1,
    metaTitle,
    metaDesc,
    keyTakeaways,
    contentText,
    faqs,
    toc
  };
}

// Generate complete HTML
function generateHtml(art) {
  const publishDateText = '24 November 2026';
  const publishDateTimeIso = '2026-11-24T09:14:00+07:00';
  const authorName = 'Vida Rahmawati';
  const authorRole = 'Content Specialist & Konsultan Hampers Lebaran';

  const faqSchema = art.faqs.map(f => ({
    "@type": "Question",
    "name": f.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": f.answer
    }
  }));

  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `https://hamperslebaran.biz.id/blog/${art.slug}#article`,
        "headline": art.h1,
        "description": art.metaDesc,
        "url": `https://hamperslebaran.biz.id/blog/${art.slug}`,
        "datePublished": publishDateTimeIso,
        "dateModified": publishDateTimeIso,
        "image": {
          "@type": "ImageObject",
          "url": `https://hamperslebaran.biz.id/${art.heroImage.replace('../', '')}`,
          "width": 800,
          "height": 450
        },
        "articleSection": art.categoryBadge,
        "inLanguage": "id-ID",
        "author": {
          "@type": "Person",
          "name": authorName,
          "jobTitle": authorRole,
          "image": "https://hamperslebaran.biz.id/assets/images/foto-regina.webp",
          "url": "https://hamperslebaran.biz.id/tentang"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Hampers Lebaran",
          "logo": {
            "@type": "ImageObject",
            "url": "https://hamperslebaran.biz.id/assets/images/logo.webp"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://hamperslebaran.biz.id/blog/${art.slug}`
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://hamperslebaran.biz.id/blog/${art.slug}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Beranda",
            "item": "https://hamperslebaran.biz.id/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://hamperslebaran.biz.id/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": art.h1,
            "item": `https://hamperslebaran.biz.id/blog/${art.slug}`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `https://hamperslebaran.biz.id/blog/${art.slug}#faq`,
        "mainEntity": faqSchema
      }
    ]
  };

  let newHead = headPreSchema
    .replace(/<title>.*?<\/title>/, `<title>${art.metaTitle} — Hampers Lebaran</title>`)
    .replace(/<meta name="description"[\s\S]*?>/, `<meta name="description"\n    content="${art.metaDesc}">`)
    .replace(/<link rel="canonical" href=".*?">/, `<link rel="canonical" href="https://hamperslebaran.biz.id/blog/${art.slug}">`)
    .replace(/<meta property="og:title" content=".*?">/, `<meta property="og:title" content="${art.metaTitle} — Hampers Lebaran">`)
    .replace(/<meta property="og:description"[\s\S]*?>/, `<meta property="og:description"\n    content="${art.metaDesc}">`)
    .replace(/<meta property="og:url" content=".*?">/, `<meta property="og:url" content="https://hamperslebaran.biz.id/blog/${art.slug}">`)
    .replace(/<meta property="og:image" content=".*?">/, `<meta property="og:image" content="https://hamperslebaran.biz.id/${art.heroImage.replace('../', '')}">`)
    .replace(/<meta property="og:image:alt" content=".*?">/, `<meta property="og:image:alt" content="${art.heroAlt}">`)
    .replace(/<meta name="twitter:title" content=".*?">/, `<meta name="twitter:title" content="${art.metaTitle} — Hampers Lebaran">`)
    .replace(/<meta name="twitter:description"[\s\S]*?>/, `<meta name="twitter:description"\n    content="${art.metaDesc}">`)
    .replace(/<meta name="twitter:image" content=".*?">/, `<meta name="twitter:image" content="https://hamperslebaran.biz.id/${art.heroImage.replace('../', '')}">`);

  const tocHtml = art.toc.map(item => `                <li><a href="#${item.id}">${item.text}</a></li>`).join('\n');

  // Key takeaways HTML
  let keyTakeawaysHtml = '';
  if (art.keyTakeaways.length > 0) {
    keyTakeawaysHtml = `
              <h2 id="ringkasan-inti">Ringkasan Inti</h2>
              <div class="hl-info-box my-4" style="background:var(--hl-warm);border-left:4px solid var(--hl-accent);">
                <ul style="margin-bottom:0;padding-left:1.2rem;color:var(--hl-text-muted);">
                  ${art.keyTakeaways.map(k => `<li>${formatInline(k)}</li>`).join('\n                  ')}
                </ul>
              </div>
    `;
  }

  // Cross-pillar read also box
  let readAlsoHtml = '';
  if (art.slug !== 'hampers-lebaran-kekinian') {
    readAlsoHtml = `
              <div class="hl-read-also">
                <p class="hl-read-also__label">&#128214; Baca Panduan Utama</p>
                <a href="hampers-lebaran-kekinian.html">Panduan Lengkap Hampers Lebaran Kekinian untuk Keluarga dan Perusahaan &rarr;</a>
              </div>
    `;
  } else {
    readAlsoHtml = `
              <div class="hl-read-also">
                <p class="hl-read-also__label">&#128214; Eksplorasi Serial Kekinian</p>
                <a href="inspirasi-hampers-lebaran-kekinian.html">15 Inspirasi Hampers Lebaran Kekinian Berkesan untuk Keluarga &rarr;</a>
              </div>
    `;
  }

  // Main body HTML
  let bodyContentHtml = parsePandocArticleBody(art.contentText);

  // In-article contextual links injection
  if (art.slug === 'hampers-lebaran-kekinian') {
    bodyContentHtml = bodyContentHtml.replace('kue kering dan makanan khas Lebaran', '<a href="../paket/hampers-kue-camilan.html">kue kering dan makanan khas Lebaran</a>');
    bodyContentHtml = bodyContentHtml.replace('katalog utama', '<a href="../paket.html">katalog utama</a>');
  } else if (art.slug === 'inspirasi-hampers-lebaran-kekinian') {
    bodyContentHtml = bodyContentHtml.replace('paket kue kering', '<a href="../paket/hampers-kue-camilan.html">paket kue kering</a>');
    bodyContentHtml = bodyContentHtml.replace('perlengkapan ibadah', '<a href="../paket/hampers-perlengkapan-ibadah.html">perlengkapan ibadah</a>');
  } else if (art.slug === 'hampers-lebaran-klien-relasi-bisnis') {
    bodyContentHtml = bodyContentHtml.replace('hampers custom', '<a href="../paket/hampers-custom.html">hampers custom</a>');
    bodyContentHtml = bodyContentHtml.replace('katalog paket hampers', '<a href="../paket.html">katalog paket hampers</a>');
  } else if (art.slug === 'vendor-hampers-lebaran-custom-perusahaan') {
    bodyContentHtml = bodyContentHtml.replace('paket hampers corporate custom', '<a href="../paket/hampers-custom.html">paket hampers corporate custom</a>');
    bodyContentHtml = bodyContentHtml.replace('konsultasi kebutuhan hampers', '<a href="https://wa.me/6282131087971">konsultasi kebutuhan hampers</a>');
  }

  // FAQ HTML
  let faqHtml = art.faqs.map(f => `
                <details>
                  <summary>${f.question}</summary>
                  <div class="hl-faq-answer">${f.answer}</div>
                </details>
  `).join('');

  // Related Cards HTML
  let relatedCardsHtml = art.relatedArticles.map(rel => `
                <div class="col-md-4">
                  <a href="${rel.slug}.html" class="hl-card" style="height:100%;border-radius:var(--hl-radius-sm);">
                    <div class="hl-card__img-wrap hl-card__img-wrap--landscape" style="height:130px;">
                      <img src="${rel.thumb}" alt="${rel.title}" width="400" height="267"
                        style="width:100%;height:100%;object-fit:cover;" loading="lazy">
                    </div>
                    <div class="hl-card__body" style="padding:0.9rem;">
                      <span style="font-size:0.75rem;font-weight:600;color:var(--hl-accent);text-transform:uppercase;">${rel.badge}</span>
                      <h3 class="hl-card__title" style="font-size:0.92rem;line-height:1.35;margin-top:0.35rem;margin-bottom:0;">${rel.title}</h3>
                    </div>
                  </a>
                </div>
  `).join('');

  const mainHtml = `  <main id="main-content">
    <div class="hl-page-header hl-page-header--article">
      <div class="container">
        <nav aria-label="Breadcrumb">
          <ol class="hl-breadcrumb">
            <li><a href="../index.html">Beranda</a></li>
            <li><a href="../blog.html">Blog</a></li>
            <li><span aria-current="page">${art.h1}</span></li>
          </ol>
        </nav>
        <span class="hl-badge mb-2">${art.categoryBadge}</span>
        <h1 class="hl-page-header__title hl-page-header__title--article">${art.h1}</h1>
      </div>
    </div>

    <section class="hl-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">

            <div class="hl-article-meta-bar">
              <div class="hl-article-author-info">
                <img src="../assets/images/foto-regina.webp" alt="Foto ${authorName}" class="hl-author-avatar" width="44"
                  height="44" loading="eager">
                <div>
                  <span class="hl-author-name">${authorName}</span>
                  <span class="hl-author-title">${authorRole}</span>
                </div>
              </div>
              <div class="hl-article-date-info">
                <time datetime="${publishDateTimeIso}">${publishDateText}</time>
                <span class="hl-read-time">&#128337; ${art.readTime}</span>
              </div>
            </div>

            <!-- Hero image artikel -->
            <figure style="border-radius:var(--hl-radius-md);overflow:hidden;margin-bottom:2.5rem;">
              <img src="${art.heroImage}" alt="${art.heroAlt}" width="800"
                height="450" style="width:100%;aspect-ratio:16/9;max-height:450px;object-fit:cover;object-position:center;border-radius:var(--hl-radius-md);"
                loading="eager">
              <figcaption style="font-size:0.8rem;color:var(--hl-text-muted);padding:0.5rem 0;">${art.heroCaption}</figcaption>
            </figure>

            <!-- Daftar Isi -->
            <nav class="hl-toc" aria-label="Daftar Isi Artikel">
              <p class="hl-toc__title">&#128196; Daftar Isi</p>
              <ol>
${tocHtml}
              </ol>
            </nav>

            <article class="hl-article-body">
${keyTakeawaysHtml}
${readAlsoHtml}
${bodyContentHtml}

              <!-- FAQ Section -->
              <div class="hl-article-faq" id="faq-section">
                <h2 class="hl-article-faq__title">FAQ Seputar ${art.h1}</h2>
${faqHtml}
              </div>
            </article>

            <!-- CTA in article -->
            <div class="hl-info-box mt-5" style="background:var(--hl-warm);border-color:var(--hl-border);">
              <p style="font-weight:700;color:var(--hl-text);margin-bottom:0.5rem;font-size:1.1rem;">&#127873; Butuh Solusi Pengadaan Hampers Lebaran?</p>
              <p style="color:var(--hl-text-muted);font-size:0.9rem;margin-bottom:1rem;">Temukan koleksi bingkisan Hari Raya terbaik dengan kemasan elegan, isi fungsional, dan jaminan pengiriman aman bersama tim Hampers Lebaran.</p>
              <a href="https://wa.me/6282131087971?text=Halo%2C%20saya%20membaca%20artikel%20${art.slug}%20dan%20ingin%20berkonsultasi%20pemesanan."
                class="hl-btn-wa" target="_blank" rel="noopener noreferrer" style="font-size:0.9rem;min-height:42px;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Konsultasi via WhatsApp
              </a>
            </div>

            <!-- Related articles / Topical Cluster Nav -->
            <div class="mt-5 pt-4" style="border-top:1px solid var(--hl-border);">
              <h2 style="font-size:1.15rem;font-weight:700;margin-bottom:1.5rem;">&#128218; Panduan Terkait Serial Hampers Lebaran Kekinian</h2>
              <div class="row g-3">
${relatedCardsHtml}
              </div>
            </div>

            <!-- Identitas Penulis -->
            <div class="hl-author-bio">
              <div class="hl-author-bio__avatar">
                <img src="../assets/images/foto-regina.webp" alt="Foto ${authorName}" width="72" height="72"
                  loading="lazy">
              </div>
              <div>
                <p class="hl-author-bio__name">${authorName}</p>
                <p class="hl-author-bio__role">${authorRole}</p>
                <p class="hl-author-bio__desc">${authorName} adalah spesialis kurasi hampers dan gifting di Hampers Lebaran dengan pengalaman lebih dari 6 tahun dalam industri hantaran hari raya dan corporate gifting. Berpengalaman dalam merancang paket bingkisan Idulfitri berkualitas di Malang, Surabaya, dan pengiriman ke seluruh wilayah Indonesia.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  </main>
`;

  return `${newHead}  <!-- Schema.org JSON-LD (Rich Graph Standard 2027) -->
  <script type="application/ld+json">
${JSON.stringify(schemaJson, null, 2)}
  </script>
</head>
${navPart}${mainHtml}${footerPart}`;
}

// 1. Generate the 4 articles
const parsedArticles = articleConfigs.map(c => parseArticle(c));

for (const art of parsedArticles) {
  const html = generateHtml(art);
  const outPath = `blog/${art.slug}.html`;
  fs.writeFileSync(outPath, html, 'utf8');
  console.log(`Generated: ${outPath}`);
}

console.log('ALL ARTICLES GENERATED CLEANLY!');
