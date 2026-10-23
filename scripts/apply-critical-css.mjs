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

const cssBlock = `  <!-- Critical CSS Inlined for 0ms Render-Blocking -->
  <style>${criticalCss}</style>
  <link rel="preload" href="assets/css/main.min.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="assets/css/main.min.css"></noscript>`;

for (const p of pages) {
  let content = fs.readFileSync(p, 'utf8');

  // Replace any existing stylesheet links for bootstrap.min.css and style.css
  const linkRegex = /<!--\s*Stylesheets[^>]*-->[\s\S]*?<link\s+rel="stylesheet"\s+href="assets\/css\/bootstrap\.min\.css">\s*<link\s+rel="stylesheet"\s+href="assets\/css\/style\.css">/g;
  
  if (linkRegex.test(content)) {
    content = content.replace(linkRegex, `<!-- Stylesheets -->\n${cssBlock}`);
  } else {
    // Alternative match without comment
    const altRegex = /<link\s+rel="stylesheet"\s+href="assets\/css\/bootstrap\.min\.css">\s*<link\s+rel="stylesheet"\s+href="assets\/css\/style\.css">/g;
    content = content.replace(altRegex, cssBlock);
  }

  // Update card sizes on index.html to match 170px rendered mobile width
  if (p === 'index.html') {
    content = content.replace(
      /sizes="\(max-width: 576px\) calc\(100vw - 32px\), \(max-width: 992px\) calc\(50vw - 24px\), 280px"/g,
      'sizes="(max-width: 576px) 170px, (max-width: 992px) calc(50vw - 24px), 280px"'
    );
  }

  // Update card sizes on paket.html
  if (p === 'paket.html') {
    content = content.replace(
      /sizes="\(max-width: 576px\) calc\(100vw - 32px\), \(max-width: 992px\) calc\(50vw - 24px\), 280px"/g,
      'sizes="(max-width: 576px) 170px, (max-width: 992px) calc(50vw - 24px), 280px"'
    );
  }

  fs.writeFileSync(p, content);
  console.log(`Updated ${p} with critical CSS and non-blocking bundle`);
}
