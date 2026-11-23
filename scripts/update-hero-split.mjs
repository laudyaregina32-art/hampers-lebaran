import fs from 'fs';
import { execSync } from 'child_process';

console.log('1. Updating Hero Layout & Styles...');

// Definisikan CSS baru untuk hero beranda dengan layout split (kiri & kanan) dan tombol di pojok kiri bawah
const heroSplitCss = `
/* ===== HERO BERANDA (SPLIT LAYOUT: TEKS KIRI & KANAN, BG HAMPERS TENGAH) ===== */
.hl-hero {
  position: relative !important;
  width: 100% !important;
  min-height: clamp(560px, 82vh, 720px) !important;
  padding-top: clamp(6.5rem, 10.5vw, 8.75rem) !important;
  padding-bottom: clamp(3.25rem, 5.5vw, 4.75rem) !important;
  margin-top: 0 !important;
  background-color: #eaf0e9 !important;
  background-image: linear-gradient(
    to right,
    rgba(234, 240, 233, 0.88) 0%,
    rgba(234, 240, 233, 0.42) 28%,
    rgba(234, 240, 233, 0.0) 42%,
    rgba(234, 240, 233, 0.0) 58%,
    rgba(234, 240, 233, 0.42) 72%,
    rgba(234, 240, 233, 0.88) 100%
  ), url('../images/hero-bg-hampers.webp') !important;
  background-size: cover !important;
  background-position: center center !important;
  background-repeat: no-repeat !important;
  display: flex !important;
  align-items: center !important;
}

@media (max-width: 991.98px) {
  .hl-hero {
    min-height: auto !important;
    background-image: linear-gradient(
      to bottom,
      rgba(234, 240, 233, 0.94) 0%,
      rgba(234, 240, 233, 0.72) 35%,
      rgba(234, 240, 233, 0.15) 55%,
      rgba(234, 240, 233, 0.92) 100%
    ), url('../images/hero-bg-hampers-768.webp') !important;
    background-position: center top !important;
    padding-top: clamp(5.75rem, 10vw, 7.5rem) !important;
    padding-bottom: clamp(3rem, 5vw, 4.5rem) !important;
  }
}

.hl-hero__container {
  position: relative !important;
  z-index: 2 !important;
  width: 100% !important;
}

.hl-hero__row {
  min-height: clamp(380px, 54vh, 480px) !important;
  display: flex !important;
  justify-content: space-between !important;
  align-items: stretch !important;
}

/* Kolom Kiri: Judul di atas & Tombol di Pojok Kiri Bawah */
.hl-hero__col-left {
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
  z-index: 2 !important;
}

.hl-hero__left-content {
  max-width: 520px !important;
}

.hl-hero__kicker {
  display: inline-flex !important;
  align-items: center !important;
  gap: 0.5rem !important;
  align-self: flex-start !important;
  background: rgba(33, 60, 53, 0.08) !important;
  color: #213c35 !important;
  font-size: 0.85rem !important;
  font-weight: 700 !important;
  letter-spacing: 0.12em !important;
  text-transform: uppercase !important;
  padding: 0.42rem 1.15rem !important;
  border-radius: 100px !important;
  margin-bottom: 1.35rem !important;
  border: 1px solid rgba(33, 60, 53, 0.18) !important;
}

.hl-hero__h1 {
  font-family: var(--hl-font-serif) !important;
  font-size: clamp(2.4rem, 4.4vw, 3.65rem) !important;
  font-weight: 300 !important;
  line-height: 1.16 !important;
  letter-spacing: -0.025em !important;
  color: #1b2622 !important;
  margin-bottom: 1rem !important;
}

.hl-hero__h1-sub {
  display: block !important;
  font-style: italic !important;
  font-weight: 300 !important;
  color: #37594f !important;
}

/* Tombol CTA di Pojok Kiri Bawah */
.hl-hero__ctas--bottom-left {
  display: flex !important;
  flex-wrap: wrap !important;
  gap: 0.85rem !important;
  align-items: center !important;
  margin-top: 2rem !important;
  margin-bottom: 0 !important;
}

/* Kolom Kanan: Teks Deskripsi & Keunggulan */
.hl-hero__col-right {
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: flex-end !important;
  z-index: 2 !important;
}

.hl-hero__right-card {
  background: rgba(255, 255, 255, 0.68) !important;
  backdrop-filter: blur(8px) !important;
  -webkit-backdrop-filter: blur(8px) !important;
  padding: clamp(1.35rem, 2.2vw, 1.85rem) !important;
  border-radius: var(--hl-radius-md, 14px) !important;
  border: 1px solid rgba(200, 213, 203, 0.75) !important;
  box-shadow: 0 10px 30px rgba(33, 60, 53, 0.08) !important;
  max-width: 480px !important;
}

.hl-hero__desc {
  color: #3d4f47 !important;
  font-size: clamp(1.02rem, 1.55vw, 1.18rem) !important;
  line-height: 1.72 !important;
  margin-bottom: 1.35rem !important;
}

.hl-hero__perks {
  display: flex !important;
  flex-direction: column !important;
  gap: 0.75rem !important;
  padding-top: 1.15rem !important;
  border-top: 1px solid rgba(200, 213, 203, 0.7) !important;
}

.hl-hero__perk-item {
  display: inline-flex !important;
  align-items: center !important;
  gap: 0.55rem !important;
  font-size: 0.92rem !important;
  font-weight: 600 !important;
  color: #213c35 !important;
}

.hl-hero__perk-item svg {
  color: #37594f !important;
  stroke: #37594f !important;
  flex-shrink: 0 !important;
}

@media (max-width: 991.98px) {
  .hl-hero__row {
    min-height: auto !important;
    gap: 2rem !important;
  }
  .hl-hero__col-right {
    align-items: stretch !important;
  }
  .hl-hero__right-card {
    max-width: 100% !important;
  }
}

/* Tombol WhatsApp Menggunakan Warna Hijau Branding (#213c35) bukan Hijau Neon WA */
.hl-btn-wa {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 0.5rem !important;
  min-height: 50px !important;
  padding: 0.82rem 1.85rem !important;
  background: #213c35 !important;
  color: #ffffff !important;
  border: 1.5px solid #213c35 !important;
  border-radius: 8px !important;
  font-weight: 600 !important;
  font-size: 1rem !important;
  font-family: var(--hl-font-sans) !important;
  text-decoration: none !important;
  transition: all 0.22s ease !important;
  box-shadow: 0 4px 16px rgba(33, 60, 53, 0.25) !important;
  cursor: pointer !important;
}
.hl-btn-wa:hover, .hl-btn-wa:focus-visible {
  background: #152722 !important;
  border-color: #152722 !important;
  color: #ffffff !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 24px rgba(33, 60, 53, 0.38) !important;
}

.hl-btn-primary {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 0.5rem !important;
  min-height: 50px !important;
  padding: 0.82rem 1.85rem !important;
  background: #37594f !important;
  color: #ffffff !important;
  border: 1.5px solid #37594f !important;
  border-radius: 8px !important;
  font-weight: 600 !important;
  font-size: 1rem !important;
  font-family: var(--hl-font-sans) !important;
  text-decoration: none !important;
  transition: all 0.22s ease !important;
  box-shadow: 0 4px 16px rgba(55, 89, 79, 0.22) !important;
  cursor: pointer !important;
}
.hl-btn-primary:hover, .hl-btn-primary:focus-visible {
  background: #213c35 !important;
  border-color: #213c35 !important;
  color: #ffffff !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 24px rgba(33, 60, 53, 0.35) !important;
}
`;

// 1. Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');

// Update preload
indexHtml = indexHtml.replace(
  /<link rel="preload" as="image" href="assets\/images\/[^"]+"[^>]*>/,
  '<link rel="preload" as="image" href="assets/images/hero-bg-hampers.webp" type="image/webp" fetchpriority="high">'
);

// HTML Baru untuk hero
const newHeroHtml = `<!-- ===== HERO BERANDA (SPLIT TEKS KIRI & KANAN, BG HAMPERS TENGAH) ===== -->
    <section class="hl-hero" id="hero" aria-labelledby="hero-heading">
      <div class="container hl-hero__container">
        <div class="row hl-hero__row justify-content-between align-items-stretch">
          <!-- Kolom Kiri: Kicker, Heading H1, dan Tombol di Pojok Kiri Bawah -->
          <div class="col-12 col-lg-5 col-xl-5 hl-hero__col-left">
            <div class="hl-hero__left-content">
              <div class="hl-hero__kicker">
                <span class="hl-kicker-star">✦</span> KOLEKSI SPESIAL IDULFITRI 2027
              </div>
              <h1 class="hl-heading hl-hero__h1" id="hero-heading">
                Hampers Lebaran 2027 <span class="hl-hero__h1-sub">untuk Berbagi Kebahagiaan</span>
              </h1>
            </div>
            <!-- Tombol CTA di Pojok Kiri Bawah -->
            <div class="hl-hero__ctas hl-hero__ctas--bottom-left">
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
          </div>

          <!-- Kolom Kanan: Teks Deskripsi & Keunggulan -->
          <div class="col-12 col-lg-5 col-xl-5 hl-hero__col-right">
            <div class="hl-hero__right-card">
              <p class="hl-hero__desc">
                Hampers Lebaran 2027 menyediakan pilihan bingkisan premium, kue dan camilan, perlengkapan ibadah, serta
                paket custom untuk keluarga, sahabat, dan mitra bisnis.
              </p>
              <div class="hl-hero__perks">
                <span class="hl-hero__perk-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                  100% Halal &amp; Higienis
                </span>
                <span class="hl-hero__perk-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                  Garansi Pengiriman Aman
                </span>
                <span class="hl-hero__perk-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                  Custom Desain &amp; Logo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>`;

// Ganti section hero di index.html
indexHtml = indexHtml.replace(/<!-- ===== HERO[\s\S]*?<\/section>/, newHeroHtml);

// Bersihkan inlined CSS lama untuk hero with full bleed background
const oldHeroCssRegex = /\/\* ===== HERO WITH FULL-BLEED BACKGROUND IMAGE =====[\s\S]*?(?=<\/style>)/;
if (oldHeroCssRegex.test(indexHtml)) {
  const inlineCssForHero = heroSplitCss.replace(/\.\.\/images\//g, 'assets/images/');
  indexHtml = indexHtml.replace(oldHeroCssRegex, inlineCssForHero + '\n');
} else {
  const inlineCssForHero = heroSplitCss.replace(/\.\.\/images\//g, 'assets/images/');
  indexHtml = indexHtml.replace('</style>', inlineCssForHero + '\n</style>');
}

// Ganti warna #25D366 dan #1ea952 di index.html menjadi hijau branding #213c35
indexHtml = indexHtml.replace(/#25D366/g, '#213c35');
indexHtml = indexHtml.replace(/#1ea952/g, '#152722');

fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('index.html updated successfully.');

// 2. Update assets/css/style.css dan scratch/style_backup.css
function updateStyleFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (oldHeroCssRegex.test(content)) {
    content = content.replace(oldHeroCssRegex, heroSplitCss + '\n');
  } else {
    content += '\n' + heroSplitCss;
  }
  content = content.replace(/#25D366/g, '#213c35');
  content = content.replace(/#1ea952/g, '#152722');
  content = content.replace(/#0f824e/g, '#213c35');
  content = content.replace(/#0b6c40/g, '#152722');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(filePath + ' updated successfully.');
}

updateStyleFile('assets/css/style.css');
updateStyleFile('scratch/style_backup.css');

// 3. Rebuild CSS
console.log('Rebuilding main.min.css & home.min.css...');
execSync('node scripts/build-all-css.mjs', { stdio: 'inherit' });
console.log('All done!');
