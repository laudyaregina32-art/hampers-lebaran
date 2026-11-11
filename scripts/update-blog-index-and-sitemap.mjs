import fs from 'fs';

// 1. Tambahkan 3 kartu baru ke blog.html
let blogHtml = fs.readFileSync('c:/hamperslebaran/blog.html', 'utf8');

const newCards = `          <!-- Artikel: Rekomendasi Isi Hampers Lebaran Sederhana -->
          <div class="col-md-6 col-lg-4">
            <a href="blog/isi-hampers-lebaran-sederhana.html" class="hl-card">
              <div class="hl-card__img-wrap hl-card__img-wrap--landscape">
                <img src="assets/images/hampers-box.webp"
                  alt="Rekomendasi Isi Hampers Lebaran Sederhana yang Bermanfaat" width="400" height="267"
                  style="width:100%;height:100%;object-fit:cover;" loading="lazy">
              </div>
              <div class="hl-card__body">
                <div class="hl-meta">
                  <span>Panduan Isi</span>
                  <time datetime="2026-11-11">11 November 2026</time>
                </div>
                <h3 class="hl-card__title">Rekomendasi Isi Hampers Lebaran Sederhana Bermanfaat</h3>
                <p class="hl-card__desc">Pilihan kurasi kue kering, minuman artisan, perlengkapan ibadah, dan peranti dapur yang fungsional.</p>
                <span class="hl-card__link">Baca artikel <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg></span>
              </div>
            </a>
          </div>

          <!-- Artikel: Kemasan Hampers Lebaran Sederhana Minimalis -->
          <div class="col-md-6 col-lg-4">
            <a href="blog/kemasan-hampers-lebaran-sederhana.html" class="hl-card">
              <div class="hl-card__img-wrap hl-card__img-wrap--landscape">
                <img src="assets/images/blog-tips-kemasan.webp"
                  alt="Kemasan Hampers Lebaran Sederhana Minimalis Menarik" width="400" height="267"
                  style="width:100%;height:100%;object-fit:cover;" loading="lazy">
              </div>
              <div class="hl-card__body">
                <div class="hl-meta">
                  <span>Panduan Kemasan</span>
                  <time datetime="2026-11-11">11 November 2026</time>
                </div>
                <h3 class="hl-card__title">Kemasan Hampers Lebaran Sederhana Konsep Minimalis</h3>
                <p class="hl-card__desc">Inspirasi box karton kraft, keranjang anyaman, pita satin, dan penataan rapi berdaya pikat tinggi.</p>
                <span class="hl-card__link">Baca artikel <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg></span>
              </div>
            </a>
          </div>

          <!-- Artikel: Tips Memilih Hampers Lebaran Sederhana Banyak Orang -->
          <div class="col-md-6 col-lg-4">
            <a href="blog/tips-memilih-hampers-lebaran-sederhana.html" class="hl-card">
              <div class="hl-card__img-wrap hl-card__img-wrap--landscape">
                <img src="assets/images/blog-tips-memilih.webp"
                  alt="Tips Memilih Hampers Lebaran Sederhana untuk Banyak Orang" width="400" height="267"
                  style="width:100%;height:100%;object-fit:cover;" loading="lazy">
              </div>
              <div class="hl-card__body">
                <div class="hl-meta">
                  <span>Tips &amp; Panduan</span>
                  <time datetime="2026-11-11">11 November 2026</time>
                </div>
                <h3 class="hl-card__title">Tips Memilih Hampers Sederhana untuk Banyak Orang</h3>
                <p class="hl-card__desc">Panduan memetakan penerima, alokasi anggaran per tier, serta ketepatan jadwal pemesanan logistik.</p>
                <span class="hl-card__link">Baca artikel <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg></span>
              </div>
            </a>
          </div>

`;

// Sisipkan setelah artikel pilar 'hampers-lebaran-sederhana.html' di blog.html
const pilarCardPos = blogHtml.indexOf('href="blog/hampers-lebaran-sederhana.html"');
if (pilarCardPos !== -1) {
  // cari penutup </div> dari kartu pilar
  const closeCardPos = blogHtml.indexOf('</div>\n          </div>', pilarCardPos);
  if (closeCardPos !== -1 && !blogHtml.includes('blog/isi-hampers-lebaran-sederhana.html')) {
    const insertPoint = closeCardPos + '</div>\n          </div>'.length;
    blogHtml = blogHtml.substring(0, insertPoint) + '\n\n' + newCards + blogHtml.substring(insertPoint);
    fs.writeFileSync('c:/hamperslebaran/blog.html', blogHtml, 'utf8');
    console.log('Added 3 new cluster cards to blog.html');
  }
}

// 2. Tambahkan URL ke sitemap.xml
let sitemapXml = fs.readFileSync('c:/hamperslebaran/sitemap.xml', 'utf8');
const urls = [
  'https://hamperslebaran.biz.id/blog/isi-hampers-lebaran-sederhana',
  'https://hamperslebaran.biz.id/blog/kemasan-hampers-lebaran-sederhana',
  'https://hamperslebaran.biz.id/blog/tips-memilih-hampers-lebaran-sederhana'
];

let addedUrls = 0;
for (const u of urls) {
  if (!sitemapXml.includes(u)) {
    const entry = `  <url>
    <loc>${u}</loc>
    <priority>0.7</priority>
    <changefreq>monthly</changefreq>
  </url>
`;
    sitemapXml = sitemapXml.replace('</urlset>', `${entry}</urlset>`);
    addedUrls++;
  }
}

if (addedUrls > 0) {
  fs.writeFileSync('c:/hamperslebaran/sitemap.xml', sitemapXml, 'utf8');
  console.log(`Added ${addedUrls} URLs to sitemap.xml`);
}

// 3. Update internal links di pilar
let pilarHtml = fs.readFileSync('c:/hamperslebaran/blog/hampers-lebaran-sederhana.html', 'utf8');
pilarHtml = pilarHtml.replace(/<div class="row g-3">[\s\S]*?<\/div>\s*<\/div>\s*<!-- Identitas Penulis -->/, `<div class="row g-3">
                <div class="col-sm-6 col-lg-4">
                  <a href="isi-hampers-lebaran-sederhana.html" class="hl-related-card">
                    <div class="hl-related-card__thumb">
                      <img src="../assets/images/hampers-box.webp" alt="Rekomendasi Isi Hampers"
                        style="width:100%;height:100%;object-fit:cover;">
                    </div>
                    <div class="hl-related-card__body">
                      <p class="hl-related-card__cat">Cluster 1 &nbsp;&middot;&nbsp; Isi Produk</p>
                      <p class="hl-related-card__title">Rekomendasi Isi Hampers Lebaran Sederhana</p>
                      <p class="hl-related-card__desc">Pilihan kue kering, minuman seduh, perlengkapan ibadah, dan peranti dapur bermanfaat.</p>
                      <span class="hl-related-card__cta">Baca panduan &rarr;</span>
                    </div>
                  </a>
                </div>
                <div class="col-sm-6 col-lg-4">
                  <a href="kemasan-hampers-lebaran-sederhana.html" class="hl-related-card">
                    <div class="hl-related-card__thumb">
                      <img src="../assets/images/blog-tips-kemasan.webp" alt="Kemasan Hampers Minimalis"
                        style="width:100%;height:100%;object-fit:cover;">
                    </div>
                    <div class="hl-related-card__body">
                      <p class="hl-related-card__cat">Cluster 2 &nbsp;&middot;&nbsp; Desain Kemasan</p>
                      <p class="hl-related-card__title">Kemasan Hampers Sederhana Konsep Minimalis</p>
                      <p class="hl-related-card__desc">Ide box karton kraft, anyaman bambu, pita satin, dan penataan estetik.</p>
                      <span class="hl-related-card__cta">Baca panduan &rarr;</span>
                    </div>
                  </a>
                </div>
                <div class="col-sm-6 col-lg-4">
                  <a href="tips-memilih-hampers-lebaran-sederhana.html" class="hl-related-card">
                    <div class="hl-related-card__thumb">
                      <img src="../assets/images/blog-tips-memilih.webp" alt="Tips Memilih Hampers"
                        style="width:100%;height:100%;object-fit:cover;">
                    </div>
                    <div class="hl-related-card__body">
                      <p class="hl-related-card__cat">Cluster 3 &nbsp;&middot;&nbsp; Pengadaan</p>
                      <p class="hl-related-card__title">Tips Memilih Hampers untuk Banyak Orang</p>
                      <p class="hl-related-card__desc">Strategi membagi pagu bujet dan mengelola logistik pengiriman hari raya.</p>
                      <span class="hl-related-card__cta">Baca panduan &rarr;</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <!-- Identitas Penulis -->`);

fs.writeFileSync('c:/hamperslebaran/blog/hampers-lebaran-sederhana.html', pilarHtml, 'utf8');
console.log('Updated pilar related cards and links.');
