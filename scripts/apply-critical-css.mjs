import fs from 'fs';

const criticalCss = fs.readFileSync('assets/css/critical.min.css', 'utf8');

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

  // Replace existing <style>...</style> block
  content = content.replace(/<style>:root\{[\s\S]*?<\/style>/g, `<style>${criticalCss}</style>`);

  // Index specific updates
  if (p === 'index.html') {
    // Ensure home.min.css is loaded
    content = content.replace(/assets\/css\/main\.min\.css/g, 'assets/css/home.min.css');

    // Preload matches 400w
    content = content.replace(
      /<link\s+rel="preload"\s+as="image"\s+href="assets\/images\/hampers-idul-fitri[^"]*"\s*(?:imagesrcset="[^"]*"\s*)?(?:imagesizes="[^"]*"\s*)?fetchpriority="high">/g,
      '<link rel="preload" as="image" href="assets/images/hampers-idul-fitri-400.webp" fetchpriority="high">'
    );

    // Picture element: desktop source min-width 577px, fallback src 400w
    content = content.replace(
      /<picture>[\s\S]*?<img[^>]*class="hl-hero__img"[^>]*>[\s\S]*?<\/picture>/g,
      `<picture>
                  <source media="(min-width: 577px)" srcset="assets/images/hampers-idul-fitri-600.webp">
                  <img src="assets/images/hampers-idul-fitri-400.webp"
                    alt="Paket Hampers Lebaran Eksklusif 2026"
                    class="hl-hero__img" width="400" height="500"
                    fetchpriority="high" decoding="async">
                </picture>`
    );
  }

  fs.writeFileSync(p, content);
  console.log(`Updated ${p}`);
}
