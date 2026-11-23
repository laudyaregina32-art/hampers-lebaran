import fs from 'fs';

// 1. Buat gambar background yang sempurna
// Kita pastikan assets/images/hero-bg-hampers.webp adalah foto hampers asli
console.log('1. Preparing hero background image...');

// 2. Update CSS di scratch/style_backup.css dan assets/css/style.css
console.log('2. Updating CSS...');

const heroFullBgCss = `
/* ===== HERO WITH FULL-BLEED BACKGROUND IMAGE ===== */
.hl-hero {
  position: relative !important;
  width: 100% !important;
  min-height: clamp(540px, 82vh, 760px) !important;
  padding-top: clamp(6.75rem, 11vw, 9.5rem) !important;
  padding-bottom: clamp(3.5rem, 6vw, 5.5rem) !important;
  margin-top: 0 !important;
  background-color: #edf3ec !important;
  background-image: linear-gradient(
    to right,
    rgba(244, 247, 244, 0.96) 0%,
    rgba(244, 247, 244, 0.92) 36%,
    rgba(244, 247, 244, 0.65) 55%,
    rgba(244, 247, 244, 0.20) 75%,
    rgba(244, 247, 244, 0.05) 100%
  ), url('../images/hero-bg-hampers.webp') !important;
  background-size: cover !important;
  background-position: center right !important;
  background-repeat: no-repeat !important;
  display: flex !important;
  align-items: center !important;
}

@media (max-width: 991.98px) {
  .hl-hero {
    min-height: auto !important;
    background-image: linear-gradient(
      to bottom,
      rgba(244, 247, 244, 0.97) 0%,
      rgba(244, 247, 244, 0.90) 48%,
      rgba(244, 247, 244, 0.35) 100%
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

.hl-hero__content-col {
  max-width: 680px !important;
}

.hl-hero__kicker {
  display: inline-flex !important;
  align-items: center !important;
  gap: 0.5rem !important;
  align-self: flex-start !important;
  background: rgba(194, 155, 56, 0.15) !important;
  color: #8c6712 !important;
  font-size: 0.85rem !important;
  font-weight: 700 !important;
  letter-spacing: 0.12em !important;
  text-transform: uppercase !important;
  padding: 0.42rem 1.15rem !important;
  border-radius: 100px !important;
  margin-bottom: 1.35rem !important;
  border: 1px solid rgba(194, 155, 56, 0.35) !important;
}

.hl-hero__h1 {
  font-family: var(--hl-font-serif) !important;
  font-size: clamp(2.5rem, 4.8vw, 3.85rem) !important;
  font-weight: 300 !important;
  line-height: 1.15 !important;
  letter-spacing: -0.025em !important;
  color: #1d332b !important;
  margin-bottom: 1.35rem !important;
}

.hl-hero__h1-sub {
  display: block !important;
  font-style: italic !important;
  font-weight: 300 !important;
  color: #37594f !important;
}

.hl-hero__desc {
  color: #4e5f57 !important;
  font-size: clamp(1.05rem, 1.7vw, 1.22rem) !important;
  line-height: 1.75 !important;
  max-width: 600px !important;
  margin-bottom: 2rem !important;
}

.hl-hero__ctas {
  display: flex !important;
  flex-wrap: wrap !important;
  gap: 1.15rem !important;
  align-items: center !important;
  margin-bottom: 2rem !important;
}

.hl-btn-primary {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 0.5rem !important;
  min-height: 52px !important;
  padding: 0.85rem 1.95rem !important;
  background: #1d332b !important;
  color: #ffffff !important;
  border: 1.5px solid #1d332b !important;
  border-radius: 8px !important;
  font-weight: 600 !important;
  font-size: 1.02rem !important;
  font-family: var(--hl-font-sans) !important;
  text-decoration: none !important;
  transition: all 0.2s ease !important;
  box-shadow: 0 4px 16px rgba(29, 51, 43, 0.28) !important;
  cursor: pointer !important;
}
.hl-btn-primary:hover {
  background: #12221c !important;
  border-color: #12221c !important;
  color: #ffffff !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 22px rgba(29, 51, 43, 0.38) !important;
}

.hl-btn-wa {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 0.5rem !important;
  min-height: 52px !important;
  padding: 0.85rem 1.95rem !important;
  background: #25D366 !important;
  color: #ffffff !important;
  border: 1.5px solid #25D366 !important;
  border-radius: 8px !important;
  font-weight: 600 !important;
  font-size: 1.02rem !important;
  font-family: var(--hl-font-sans) !important;
  text-decoration: none !important;
  transition: all 0.2s ease !important;
  box-shadow: 0 4px 16px rgba(37, 211, 102, 0.3) !important;
  cursor: pointer !important;
}
.hl-btn-wa:hover {
  background: #1ea952 !important;
  border-color: #1ea952 !important;
  color: #ffffff !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 22px rgba(37, 211, 102, 0.45) !important;
}

.hl-hero__perks {
  display: flex !important;
  flex-wrap: wrap !important;
  align-items: center !important;
  gap: 1.35rem !important;
  padding-top: 1.25rem !important;
  border-top: 1px solid rgba(212, 222, 214, 0.8) !important;
  max-width: 600px !important;
}

.hl-hero__perk-item {
  display: inline-flex !important;
  align-items: center !important;
  gap: 0.45rem !important;
  font-size: 0.88rem !important;
  font-weight: 600 !important;
  color: #4e5f57 !important;
}

.hl-hero__perk-item svg {
  color: #c29b38 !important;
  stroke: #c29b38 !important;
  flex-shrink: 0 !important;
}
`;

// Update scratch/style_backup.css
let backupCss = fs.readFileSync('scratch/style_backup.css', 'utf8');
backupCss += '\n' + heroFullBgCss;
fs.writeFileSync('scratch/style_backup.css', backupCss, 'utf8');

// Update assets/css/style.css
let styleCss = fs.readFileSync('assets/css/style.css', 'utf8');
styleCss += '\n' + heroFullBgCss;
fs.writeFileSync('assets/css/style.css', styleCss, 'utf8');

// 3. Update index.html
console.log('3. Updating index.html hero section...');
let indexHtml = fs.readFileSync('index.html', 'utf8');

const heroSectionRegex = /<!-- ===== HERO[\s\S]*?<\/section>/;
const newHeroHtml = `<!-- ===== HERO BERANDA (FULL BACKGROUND FOTO HAMPERS) ===== -->
    <section class="hl-hero" id="hero" aria-labelledby="hero-heading">
      <div class="container hl-hero__container">
        <div class="row">
          <!-- Kolom Konten Hero (Berada di atas Background Foto Hampers) -->
          <div class="col-12 col-lg-8 col-xl-7 hl-hero__content-col">
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
            <!-- Tombol CTA Langsung di Hero -->
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
            <!-- Trust Highlights -->
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
        </div>
      </div>
    </section>`;

indexHtml = indexHtml.replace(heroSectionRegex, newHeroHtml);

// Tambahkan inlined CSS ke index.html
indexHtml = indexHtml.replace('</style>', heroFullBgCss + '\n</style>');

fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('index.html updated with full background hero.');
