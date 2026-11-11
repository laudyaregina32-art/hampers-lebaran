import fs from 'fs';

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

// Cari kartu berikutnya setelah hampers-lebaran-sederhana.html
const targetAnchor = 'href="blog/hampers-lebaran-unik-2027.html"';
const targetPos = blogHtml.indexOf(targetAnchor);

if (targetPos !== -1) {
  // Cari opening div pembungkus sebelum targetPos: '<div class="col-md-6 col-lg-4">'
  const prevDiv = blogHtml.lastIndexOf('<div class="col-md-6 col-lg-4">', targetPos);
  if (prevDiv !== -1) {
    blogHtml = blogHtml.substring(0, prevDiv) + newCards + '\n' + blogHtml.substring(prevDiv);
    fs.writeFileSync('c:/hamperslebaran/blog.html', blogHtml, 'utf8');
    console.log('Successfully inserted all 3 cards before hampers-lebaran-unik-2027.html');
  }
}

