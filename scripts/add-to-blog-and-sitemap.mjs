import fs from 'fs';

// 1. Tambahkan card ke blog.html
let blogHtml = fs.readFileSync('c:/hamperslebaran/blog.html', 'utf8');

const newCard = `          <!-- Artikel: Hampers Lebaran Sederhana -->
          <div class="col-md-6 col-lg-4">
            <a href="blog/hampers-lebaran-sederhana.html" class="hl-card">
              <div class="hl-card__img-wrap hl-card__img-wrap--landscape">
                <img src="assets/images/hampers-keluarga.webp"
                  alt="Hampers Lebaran Sederhana yang Berkesan untuk Keluarga dan Kerabat" width="400" height="267"
                  style="width:100%;height:100%;object-fit:cover;" loading="lazy">
              </div>
              <div class="hl-card__body">
                <div class="hl-meta">
                  <span>Inspirasi &amp; Tips</span>
                  <time datetime="2026-11-11">11 November 2026</time>
                </div>
                <h3 class="hl-card__title">Hampers Lebaran Sederhana yang Berkesan untuk Keluarga</h3>
                <p class="hl-card__desc">Ide bingkisan Hari Raya fungsional dengan kemasan minimalis, isi bermanfaat, dan pilihan anggaran fleksibel.</p>
                <span class="hl-card__link">Baca artikel <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg></span>
              </div>
            </a>
          </div>

`;

// Cari kartu pertama di blog.html
const cardMarker = '<div class="col-md-6 col-lg-4">';
const firstCardPos = blogHtml.indexOf(cardMarker);

if (firstCardPos !== -1 && !blogHtml.includes('blog/hampers-lebaran-sederhana.html')) {
  blogHtml = blogHtml.substring(0, firstCardPos) + newCard + blogHtml.substring(firstCardPos);
  fs.writeFileSync('c:/hamperslebaran/blog.html', blogHtml, 'utf8');
  console.log('Successfully added card to blog.html');
} else {
  console.log('Card already exists or marker not found in blog.html');
}

// 2. Tambahkan URL ke sitemap.xml
let sitemapXml = fs.readFileSync('c:/hamperslebaran/sitemap.xml', 'utf8');
const newSitemapEntry = `  <url>
    <loc>https://hamperslebaran.biz.id/blog/hampers-lebaran-sederhana</loc>
    <priority>0.7</priority>
    <changefreq>monthly</changefreq>
  </url>
`;

if (!sitemapXml.includes('https://hamperslebaran.biz.id/blog/hampers-lebaran-sederhana')) {
  sitemapXml = sitemapXml.replace('</urlset>', `${newSitemapEntry}</urlset>`);
  fs.writeFileSync('c:/hamperslebaran/sitemap.xml', sitemapXml, 'utf8');
  console.log('Successfully added URL to sitemap.xml');
} else {
  console.log('URL already exists in sitemap.xml');
}

