import fs from 'fs';
import path from 'path';

// 1. UPDATE scratch/style_backup.css & assets/css/style.css
console.log('--- 1. Updating Master CSS Styles ---');

const masterPaletteVars = `
:root {
  /* Haraya Brand Identity Palette */
  --hl-primary: #1d332b;
  --hl-primary-dark: #12221c;
  --hl-accent: #37594f;
  --hl-accent-dark: #1d332b;
  --hl-accent-light: #527c70;
  --hl-gold: #c29b38;
  --hl-gold-light: #dfb958;
  
  --hl-bg: #f8f7f4;
  --hl-surface: #ffffff;
  --hl-surface-muted: #eef3ed;
  --hl-border: #d4ded6;
  --hl-border-gold: rgba(194, 155, 56, 0.4);
  --hl-warm: #eef3ed;
  
  --hl-text: #17231e;
  --hl-text-muted: #4e5f57;
  --hl-gray: #6e7e77;
  
  --hl-footer: #17231e;
  --hl-footer-text: #f0f4f1;
  
  --hl-radius-sm: 8px;
  --hl-radius-md: 14px;
  --hl-radius-lg: 18px;
  --hl-shadow-card: 0 8px 24px rgba(23, 35, 30, 0.05);
  --hl-shadow-card-hover: 0 16px 40px rgba(23, 35, 30, 0.1);
  --hl-transition: 200ms ease;

  --hl-font-serif: "Cormorant Garamond", Georgia, serif;
  --hl-font-sans: "Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --hl-font-brand: "Montserrat", sans-serif;
}
`;

const globalNavAndHeaderCss = `
/* Global Transparent Overlapping Navbar */
.hl-navbar {
  background: transparent !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  border-bottom: 1px solid transparent !important;
  box-shadow: none !important;
  padding: 0;
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  width: 100% !important;
  z-index: 1030 !important;
  font-family: var(--hl-font-sans);
  transition: background-color .3s ease, border-color .3s ease, box-shadow .3s ease, backdrop-filter .3s ease !important;
}

.hl-navbar.is-scrolled {
  background: rgba(248, 247, 244, 0.95) !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  border-bottom: 1px solid var(--hl-border) !important;
  box-shadow: 0 4px 20px rgba(23, 35, 30, 0.06) !important;
}

@media (max-width: 991.98px) {
  .hl-navbar.is-mobile-open {
    background: rgba(248, 247, 244, 0.98) !important;
    backdrop-filter: blur(12px) !important;
    border-bottom: 1px solid var(--hl-border) !important;
  }
}

/* Global Overlapping Page Header for All Sub-Pages */
.hl-page-header {
  background: linear-gradient(180deg, #edf3ec 0%, #f8f7f4 100%) !important;
  border-bottom: 1px solid var(--hl-border) !important;
  margin-top: 0 !important;
  padding-top: clamp(6.25rem, 9.5vw, 8rem) !important;
  padding-bottom: clamp(2.5rem, 4.5vw, 3.75rem) !important;
  margin-bottom: clamp(2rem, 4vw, 3.5rem) !important;
  position: relative;
}

/* Buttons System */
.hl-btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 48px;
  padding: 0.78rem 1.6rem;
  border: 1.5px solid var(--hl-primary);
  border-radius: var(--hl-radius-sm);
  background: var(--hl-primary);
  color: #fff !important;
  font-weight: 600;
  font-size: 0.98rem;
  text-decoration: none;
  transition: background var(--hl-transition), border-color var(--hl-transition), transform var(--hl-transition), box-shadow var(--hl-transition);
  cursor: pointer;
}
.hl-btn-primary:hover, .hl-btn-primary:focus-visible {
  background: var(--hl-primary-dark);
  border-color: var(--hl-primary-dark);
  color: #fff !important;
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(29, 51, 43, 0.25);
}

.hl-btn-wa {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 48px;
  padding: 0.78rem 1.6rem;
  border: 1.5px solid #25D366;
  border-radius: var(--hl-radius-sm);
  background: #25D366;
  color: #fff !important;
  font-weight: 600;
  font-size: 0.98rem;
  text-decoration: none;
  transition: background var(--hl-transition), border-color var(--hl-transition), transform var(--hl-transition), box-shadow var(--hl-transition);
  cursor: pointer;
}
.hl-btn-wa:hover, .hl-btn-wa:focus-visible {
  background: #1ea952;
  border-color: #1ea952;
  color: #fff !important;
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(37, 211, 102, 0.35);
}

/* Home Hero Section (Overlapping Navbar) */
.hl-hero {
  padding-top: clamp(6.25rem, 9.5vw, 8.25rem) !important;
  padding-bottom: clamp(3rem, 5.5vw, 4.5rem) !important;
  background: linear-gradient(180deg, #edf3ec 0%, #f8f7f4 100%) !important;
  position: relative;
  overflow: hidden;
  margin-top: 0 !important;
}

.hl-hero__container {
  position: relative;
  z-index: 2;
}

.hl-hero__content-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hl-hero__kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  align-self: flex-start;
  background: rgba(194, 155, 56, 0.12);
  color: #936e18;
  font-size: 0.84rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.4rem 1.1rem;
  border-radius: 100px;
  margin-bottom: 1.25rem;
  border: 1px solid rgba(194, 155, 56, 0.3);
}

.hl-kicker-star {
  color: var(--hl-gold);
  font-size: 0.95rem;
}

.hl-hero__h1 {
  font-family: var(--hl-font-serif) !important;
  font-size: clamp(2.45rem, 4.6vw, 3.65rem);
  font-weight: 300 !important;
  line-height: 1.18;
  letter-spacing: -0.02em;
  color: var(--hl-primary);
  margin-bottom: 1.25rem;
  text-wrap: balance;
}

.hl-hero__h1-sub {
  display: block;
  font-style: italic;
  font-weight: 300;
  color: var(--hl-accent);
}

.hl-hero__desc {
  color: var(--hl-text-muted);
  font-size: clamp(1.05rem, 1.7vw, 1.2rem);
  line-height: 1.75;
  max-width: 620px;
  margin-bottom: 2rem;
  text-wrap: pretty;
}

.hl-hero__ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 1.15rem;
  align-items: center;
  margin-bottom: 1.75rem;
}

.hl-hero__ctas .hl-btn-primary,
.hl-hero__ctas .hl-btn-wa {
  min-height: 52px;
  padding: 0.88rem 1.85rem;
  font-size: 1.02rem;
  border-radius: 10px;
}

.hl-hero__perks {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.25rem;
  padding-top: 1.1rem;
  border-top: 1px solid var(--hl-border);
}

.hl-hero__perk-item {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.86rem;
  font-weight: 600;
  color: var(--hl-text-muted);
}

.hl-hero__perk-item svg {
  color: var(--hl-gold);
  stroke: var(--hl-gold);
  flex-shrink: 0;
}

/* Image Showcase */
.hl-hero__img-col {
  position: relative;
}

.hl-hero__img-showcase {
  position: relative;
  border-radius: var(--hl-radius-lg);
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(23, 35, 30, 0.12);
  border: 1px solid var(--hl-border);
  background: var(--hl-surface);
  line-height: 0;
}

.hl-hero__product-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.hl-hero__badge {
  position: absolute;
  bottom: 1.25rem;
  left: 1.25rem;
  right: auto;
  background: rgba(255, 255, 255, 0.94);
  backdrop-filter: blur(8px);
  border: 1px solid var(--hl-border);
  border-radius: var(--hl-radius-md);
  padding: 0.75rem 1.15rem;
  box-shadow: 0 8px 24px rgba(23, 35, 30, 0.1);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  line-height: 1.3;
}

.hl-hero__badge-icon {
  width: 40px;
  height: 40px;
  background: rgba(194, 155, 56, 0.15);
  color: var(--hl-gold);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.hl-hero__badge-icon svg {
  stroke: var(--hl-gold);
}

.hl-hero__badge-title {
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--hl-primary);
  margin-bottom: 0.15rem;
}

.hl-hero__badge-sub {
  font-size: 0.8rem;
  font-style: italic;
  color: var(--hl-text-muted);
}
`;

// Append / replace in scratch/style_backup.css and assets/css/style.css
let backupCss = fs.readFileSync('scratch/style_backup.css', 'utf8');
backupCss += '\n' + globalNavAndHeaderCss;
fs.writeFileSync('scratch/style_backup.css', backupCss, 'utf8');

let styleCss = fs.readFileSync('assets/css/style.css', 'utf8');
styleCss += '\n' + globalNavAndHeaderCss;
fs.writeFileSync('assets/css/style.css', styleCss, 'utf8');
console.log('Master CSS files updated.');

// 2. UPDATE index.html HERO MARKUP & INLINE STYLES
console.log('--- 2. Updating index.html ---');
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Replace hero section in index.html
const heroSectionRegex = /<!-- ===== HERO[\s\S]*?<\/section>/;
const newHeroSection = `<!-- ===== HERO BERANDA (TUMPANG TINDIH NAVBAR) ===== -->
    <section class="hl-hero" id="hero" aria-labelledby="hero-heading">
      <div class="container hl-hero__container">
        <div class="row align-items-center g-4 g-lg-5">
          <!-- Kolom Teks & CTA (Kiri) -->
          <div class="col-12 col-lg-6 hl-hero__content-col">
            <div class="hl-hero__kicker">
              <span class="hl-kicker-star">✦</span> KOLEKSI SPESIAL IDULFITRI 2027
            </div>
            <h1 class="hl-heading hl-hero__h1" id="hero-heading">
              Hampers Lebaran 2027 <span class="hl-hero__h1-sub">untuk Berbagi Kebahagiaan</span>
            </h1>
            <p class="hl-hero__desc">
              Hampers Lebaran 2027 menyediakan pilihan bingkisan premium, kue dan camilan, perlengkapan ibadah, serta
              paket custom untuk keluarga, sahabat, dan mitra bisnis.
            </p>
            <!-- Tombol CTA Langsung di Header/Hero -->
            <div class="hl-hero__ctas">
              <a href="paket.html" class="hl-btn-primary" id="hero-cta-paket">
                Jelajahi Paket
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="https://wa.me/6282131087971?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20hampers%20Lebaran.%20Boleh%20minta%20katalog%2C%20isi%20paket%2C%20harga%2C%20dan%20estimasi%20produksinya%3F"
                class="hl-btn-wa" target="_blank" rel="noopener noreferrer" id="hero-cta-wa">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Konsultasi WhatsApp
              </a>
            </div>
            <!-- Trust Highlights di bawah CTA -->
            <div class="hl-hero__perks">
              <span class="hl-hero__perk-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                100% Halal &amp; Higienis
              </span>
              <span class="hl-hero__perk-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                Garansi Pengiriman Aman
              </span>
              <span class="hl-hero__perk-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                Custom Desain &amp; Logo
              </span>
            </div>
          </div>

          <!-- Kolom Foto Produk Hampers (Kanan) -->
          <div class="col-12 col-lg-6 hl-hero__img-col">
            <div class="hl-hero__img-showcase">
              <picture>
                <source media="(min-width: 992px)" srcset="assets/images/hero-hampers-main-1440.webp">
                <source media="(min-width: 576px)" srcset="assets/images/hero-hampers-main.webp">
                <img src="assets/images/hero-hampers-main.webp"
                  alt="Hampers Lebaran 2027 Eksklusif Haraya - Bingkisan Premium Idulfitri"
                  class="hl-hero__product-img" width="1024" height="682" fetchpriority="high" loading="eager" decoding="sync">
              </picture>
              <!-- Floating Badge Eksklusif -->
              <div class="hl-hero__badge">
                <div class="hl-hero__badge-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 12v10H4V12"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
                </div>
                <div>
                  <div class="hl-hero__badge-title">Pilihan Custom &amp; Ready Stock</div>
                  <div class="hl-hero__badge-sub">Tersedia untuk personal &amp; korporat</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;

if (heroSectionRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(heroSectionRegex, newHeroSection);
  console.log('index.html hero section updated');
} else {
  console.log('WARNING: heroSectionRegex did not match');
}

// Append globalNavAndHeaderCss into index.html inline style before </style>
indexHtml = indexHtml.replace('</style>', globalNavAndHeaderCss + '\n</style>');
fs.writeFileSync('index.html', indexHtml, 'utf8');

// 3. UPDATE ALL HTML FILES SO NAVBAR & PAGE HEADER OVERLAP AND TRANSPARENCY WORKS UNIFORMLY
console.log('--- 3. Updating All HTML Files (Overlap & Navbar Transparency) ---');

const allHtmlFiles = [];
function findHtml(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    if (ent.isDirectory() && ent.name !== 'node_modules' && ent.name !== '.git' && ent.name !== 'scratch') {
      findHtml(path.join(dir, ent.name));
    } else if (ent.isFile() && ent.name.endsWith('.html') && !ent.name.startsWith('google')) {
      allHtmlFiles.push(path.join(dir, ent.name));
    }
  }
}
findHtml('.');
console.log('Found', allHtmlFiles.length, 'HTML files to check and standardize.');

const overrideStyleSnippet = `
    /* Overlapping Navbar & Header Synchronization */
    .hl-navbar {
      background: transparent !important;
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
      border-bottom: 1px solid transparent !important;
      box-shadow: none !important;
    }
    .hl-navbar.is-scrolled {
      background: rgba(248, 247, 244, 0.95) !important;
      backdrop-filter: blur(12px) !important;
      -webkit-backdrop-filter: blur(12px) !important;
      border-bottom: 1px solid var(--hl-border) !important;
      box-shadow: 0 4px 20px rgba(23, 35, 30, 0.06) !important;
    }
    .hl-page-header {
      background: linear-gradient(180deg, #edf3ec 0%, #f8f7f4 100%) !important;
      margin-top: 0 !important;
      padding-top: clamp(6.25rem, 9.5vw, 8rem) !important;
      border-bottom: 1px solid var(--hl-border) !important;
    }
`;

for (const filePath of allHtmlFiles) {
  if (filePath === 'index.html') continue;
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('</style>') && !content.includes('Overlapping Navbar & Header Synchronization')) {
    content = content.replace('</style>', overrideStyleSnippet + '\n  </style>');
    fs.writeFileSync(filePath, content, 'utf8');
  }
}
console.log('All HTML files synchronized with overlapping transparent navbar.');
