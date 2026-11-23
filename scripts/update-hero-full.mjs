import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

// 1. Update hl-navbar styling in inlined CSS
const navRegex = /\.hl-navbar\s*\{[\s\S]*?font-family:\s*Inter[\s\S]*?\}/;
const newNavCss = `.hl-navbar {
      box-shadow: none !important;
      background: transparent !important;
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
      border-bottom: 1px solid transparent !important;
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      width: 100% !important;
      z-index: 1030 !important;
      transition: background-color .3s ease, border-color .3s ease, box-shadow .3s ease, backdrop-filter .3s ease !important;
      font-family: var(--hl-font-sans);
    }

    .hl-navbar.is-scrolled,
    .hl-navbar.is-mobile-open {
      background: rgba(234, 240, 233, .96) !important;
      backdrop-filter: blur(10px) !important;
      -webkit-backdrop-filter: blur(10px) !important;
      border-bottom: 1px solid var(--hl-border) !important;
      box-shadow: 0 4px 20px rgba(33, 60, 53, .08) !important;
    }`;

if (navRegex.test(html)) {
  html = html.replace(navRegex, newNavCss);
  console.log('hl-navbar CSS updated');
} else {
  console.log('WARNING: navRegex did not match');
}

// 2. Update hl-hero--editorial styling in inlined CSS
const heroRegex = /\/\* ===== Editorial Hero \(Styled as Foto 2\) ===== \*\/[\s\S]*?\.hl-hero__ctas--centered\s*\{[\s\S]*?margin-bottom:\s*0\.5rem;\s*\}/;
const newHeroCss = `/* ===== Editorial Hero Full-Width Edge-to-Edge ===== */
    .hl-hero--editorial {
      padding: 0 !important;
      margin: 0 !important;
      width: 100% !important;
      max-width: 100% !important;
      background: #f6e8df;
      position: relative;
    }
    .hl-hero__editorial-wrapper {
      width: 100% !important;
      max-width: 100% !important;
      margin: 0 !important;
      padding: 0 !important;
    }
    .hl-hero__editorial-visual {
      width: 100% !important;
      max-width: 100% !important;
      margin: 0 !important;
      padding: 0 !important;
      line-height: 0;
      position: relative;
    }
    .hl-hero__editorial-visual picture {
      display: block;
      width: 100%;
      margin: 0;
      padding: 0;
      line-height: 0;
    }
    .hl-hero__editorial-img {
      width: 100% !important;
      max-width: 100% !important;
      height: auto !important;
      display: block !important;
      margin: 0 !important;
      border-radius: 0 !important;
      box-shadow: none !important;
      border: none !important;
      object-fit: cover !important;
    }
    .hl-hero__cta-container {
      padding-top: clamp(1.25rem, 2.5vw, 2.25rem);
      padding-bottom: clamp(1.25rem, 2.5vw, 2.25rem);
      text-align: center;
    }
    .hl-hero__ctas--centered {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.15rem;
      margin: 0 auto;
    }`;

if (heroRegex.test(html)) {
  html = html.replace(heroRegex, newHeroCss);
  console.log('hl-hero CSS updated');
} else {
  console.log('WARNING: heroRegex did not match');
}

// 3. Update HTML Hero Markup to remove .container and make it 100% edge-to-edge
const heroMarkupRegex = /<!-- ===== HERO ===== -->[\s\S]*?<!-- Centered CTA Action Buttons -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
const newHeroMarkup = `<!-- ===== HERO FULL WIDTH ===== -->
    <section class="hl-hero hl-hero--editorial" aria-labelledby="hero-heading">
      <div class="hl-hero__editorial-wrapper">
        <!-- Visual Banner Editorial Full Width (Edge-to-Edge dari Top 0) -->
        <div class="hl-hero__editorial-visual">
          <picture>
            <source media="(min-width: 1200px)" srcset="assets/images/hero-banner-editorial-1920.webp">
            <source media="(min-width: 769px)" srcset="assets/images/hero-banner-editorial.webp">
            <source media="(min-width: 481px)" srcset="assets/images/hero-banner-editorial-768.webp">
            <img src="assets/images/hero-banner-editorial.webp" alt="Hampers Lebaran 2027 untuk Berbagi Kebahagiaan"
              class="hl-hero__editorial-img" width="1920" height="1279" fetchpriority="high" loading="eager" decoding="sync">
          </picture>
        </div>

        <!-- Accessible Text & Heading for SEO & Assistive Tech -->
        <h1 class="visually-hidden" id="hero-heading">Hampers Lebaran 2027 untuk Berbagi Kebahagiaan</h1>
        <p class="visually-hidden">
          Hampers Lebaran 2027 menyediakan pilihan bingkisan premium, kue dan camilan, perlengkapan ibadah, serta
          paket custom untuk keluarga, sahabat, dan mitra bisnis.
        </p>

        <!-- CTA Action Buttons -->
        <div class="container hl-hero__cta-container">
          <div class="hl-hero__ctas hl-hero__ctas--centered">
            <a href="paket.html" class="hl-btn-primary" id="hero-cta-paket">
              Jelajahi Paket
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="https://wa.me/6282131087971?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20hampers%20Lebaran.%20Boleh%20minta%20katalog%2C%20isi%20paket%2C%20harga%2C%20dan%20estimasi%20produksinya%3F"
              class="hl-btn-wa" target="_blank" rel="noopener noreferrer" id="hero-cta-wa">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Konsultasi WhatsApp
            </a>
          </div>
        </div>
      </div>`;

if (heroMarkupRegex.test(html)) {
  html = html.replace(heroMarkupRegex, newHeroMarkup);
  console.log('Hero markup updated');
} else {
  console.log('WARNING: heroMarkupRegex did not match');
}

fs.writeFileSync('index.html', html, 'utf8');
console.log('index.html saved successfully');
