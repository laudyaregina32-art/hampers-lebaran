import fs from 'fs';

const pages = [
  'blog-hampers-lebaran-korporat.html',
  'blog-kue-kering-lebaran-populer.html',
  'blog-tips-memilih-hampers-lebaran.html',
  'blog-tren-kemasan-hampers.html',
  'blog.html',
  'faq.html',
  'index.html',
  'kebijakan-privasi.html',
  'kontak.html',
  'paket-hampers-custom.html',
  'paket-hampers-kue-camilan.html',
  'paket-hampers-perlengkapan-ibadah.html',
  'paket-hampers-premium.html',
  'paket.html',
  'portofolio.html',
  'syarat-ketentuan.html',
  'tentang.html'
];

for (const p of pages) {
  let content = fs.readFileSync(p, 'utf8');

  // 1. Replace Bootstrap CSS CDN with local
  content = content.replace(
    /<link\s+rel="stylesheet"\s+href="https:\/\/cdn\.jsdelivr\.net\/npm\/bootstrap@5\.3\.3\/dist\/css\/bootstrap\.min\.css">/g,
    '<link rel="stylesheet" href="assets/css/bootstrap.min.css">'
  );

  // 2. Replace Bootstrap JS CDN with local
  content = content.replace(
    /<script\s+src="https:\/\/cdn\.jsdelivr\.net\/npm\/bootstrap@5\.3\.3\/dist\/js\/bootstrap\.bundle\.min\.js"[^>]*><\/script>/g,
    '<script src="assets/js/bootstrap.bundle.min.js" defer></script>'
  );

  // 3. Optimize Google Fonts to minimal weights
  const oldFontRegex = /<link\s+rel="preload"\s+href="https:\/\/fonts\.googleapis\.com\/css2\?family=Playfair\+Display[^"]*"\s+as="style"\s+onload="this\.onload=null;this\.rel='stylesheet'">\s*<noscript>\s*<link\s+rel="stylesheet"\s+href="https:\/\/fonts\.googleapis\.com\/css2\?family=Playfair\+Display[^"]*">\s*<\/noscript>/g;
  
  const optimizedFont = `<link rel="preload"
    href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600;700&display=swap"
    as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript>
    <link rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600;700&display=swap">
  </noscript>`;

  content = content.replace(oldFontRegex, optimizedFont);

  // Specific per-page enhancements
  if (p === 'index.html') {
    // Hero preload
    content = content.replace(
      /<link\s+rel="preload"\s+as="image"\s+href="assets\/images\/hampers-idul-fitri[^"]*"\s+imagesrcset="[^"]*"\s+imagesizes="[^"]*"\s+fetchpriority="high">/g,
      `<link rel="preload" as="image" href="assets/images/hampers-idul-fitri-400.webp"
    imagesrcset="assets/images/hampers-idul-fitri-320.webp 320w, assets/images/hampers-idul-fitri-400.webp 400w, assets/images/hampers-idul-fitri-600.webp 600w"
    imagesizes="(max-width: 576px) calc(100vw - 32px), (max-width: 992px) 450px, 500px" fetchpriority="high">`
    );

    // Hero image tag
    content = content.replace(
      /<img\s+src="assets\/images\/hampers-idul-fitri\.webp"[^>]*class="hl-hero__img"[^>]*>/g,
      `<img src="assets/images/hampers-idul-fitri-400.webp"
                  srcset="assets/images/hampers-idul-fitri-320.webp 320w, assets/images/hampers-idul-fitri-400.webp 400w, assets/images/hampers-idul-fitri-600.webp 600w"
                  sizes="(max-width: 576px) calc(100vw - 32px), (max-width: 992px) 450px, 500px"
                  alt="Paket Hampers Lebaran Eksklusif 2026"
                  class="hl-hero__img" width="500" height="625"
                  fetchpriority="high" decoding="async">`
    );

    // 4 Category Cards
    // Card 1: hampers-hijau-emas
    content = content.replace(
      /<img\s+src="assets\/images\/hampers-hijau-emas\.webp"[^>]*alt="Hampers Lebaran Premium"[^>]*>/g,
      `<img src="assets/images/hampers-hijau-emas-400.webp"
                  srcset="assets/images/hampers-hijau-emas-320.webp 320w, assets/images/hampers-hijau-emas-400.webp 400w, assets/images/hampers-hijau-emas-600.webp 600w"
                  sizes="(max-width: 576px) calc(100vw - 32px), (max-width: 992px) calc(50vw - 24px), 280px" alt="Hampers Lebaran Premium"
                  width="400" height="500" style="width:100%;height:100%;object-fit:cover;" loading="lazy" decoding="async">`
    );

    // Card 2: kastengel
    content = content.replace(
      /<img\s+src="assets\/images\/kastengel\.webp"[^>]*alt="Hampers Kue &amp; Camilan Lebaran"[^>]*>/g,
      `<img src="assets/images/kastengel-400.webp"
                  srcset="assets/images/kastengel-320.webp 320w, assets/images/kastengel-400.webp 400w, assets/images/kastengel-600.webp 600w"
                  sizes="(max-width: 576px) calc(100vw - 32px), (max-width: 992px) calc(50vw - 24px), 280px"
                  alt="Hampers Kue &amp; Camilan Lebaran" width="400" height="500"
                  style="width:100%;height:100%;object-fit:cover;" loading="lazy" decoding="async">`
    );

    // Card 3: sajadah
    content = content.replace(
      /<img\s+src="assets\/images\/sajadah\.webp"[^>]*alt="Hampers Perlengkapan Ibadah Lebaran"[^>]*>/g,
      `<img src="assets/images/sajadah-400.webp"
                  srcset="assets/images/sajadah-320.webp 320w, assets/images/sajadah-400.webp 400w, assets/images/sajadah-600.webp 600w"
                  sizes="(max-width: 576px) calc(100vw - 32px), (max-width: 992px) calc(50vw - 24px), 280px"
                  alt="Hampers Perlengkapan Ibadah Lebaran" width="400" height="500"
                  style="width:100%;height:100%;object-fit:cover;" loading="lazy" decoding="async">`
    );

    // Card 4: hampers-sage
    content = content.replace(
      /<img\s+src="assets\/images\/hampers-sage\.webp"[^>]*alt="Hampers Custom Corporate Lebaran"[^>]*>/g,
      `<img src="assets/images/hampers-sage-400.webp"
                  srcset="assets/images/hampers-sage-320.webp 320w, assets/images/hampers-sage-400.webp 400w, assets/images/hampers-sage-600.webp 600w"
                  sizes="(max-width: 576px) calc(100vw - 32px), (max-width: 992px) calc(50vw - 24px), 280px" alt="Hampers Custom Corporate Lebaran"
                  width="400" height="500" style="width:100%;height:100%;object-fit:cover;" loading="lazy" decoding="async">`
    );
  }

  if (p === 'portofolio.html') {
    // Ensure first image is eager & high priority LCP
    content = content.replace(
      /<img\s+src="assets\/images\/hampers-perusahaan\.webp"\s+alt="Hampers Korporat Akhir Tahun"\s+width="400"\s+height="300"\s+style="width:100%;height:100%;object-fit:cover;"\s+loading="lazy">/g,
      `<img src="assets/images/hampers-perusahaan.webp" alt="Hampers Korporat Akhir Tahun" width="400"
                  height="300" style="width:100%;height:100%;object-fit:cover;" loading="eager" fetchpriority="high" decoding="async">`
    );
  }

  if (p === 'paket.html') {
    // Ensure first card is eager & high priority
    content = content.replace(
      /<img\s+src="assets\/images\/hampers-hijau-emas\.webp"\s+alt="Hampers Premium Lebaran"\s+width="400"\s+height="500"\s+style="width:100%;height:100%;object-fit:cover;"\s+loading="lazy">/g,
      `<img src="assets/images/hampers-hijau-emas-400.webp"
                  srcset="assets/images/hampers-hijau-emas-320.webp 320w, assets/images/hampers-hijau-emas-400.webp 400w, assets/images/hampers-hijau-emas-600.webp 600w"
                  sizes="(max-width: 576px) calc(100vw - 32px), (max-width: 992px) calc(50vw - 24px), 280px"
                  alt="Hampers Premium Lebaran" width="400" height="500"
                  style="width:100%;height:100%;object-fit:cover;" loading="eager" fetchpriority="high" decoding="async">`
    );
  }

  fs.writeFileSync(p, content);
  console.log(`Updated ${p}`);
}
