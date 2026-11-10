import fs from 'fs';
import path from 'path';

const blogHtmlPath = path.join(process.cwd(), 'blog.html');
let blogHtml = fs.readFileSync(blogHtmlPath, 'utf8');

const cardsHtml = `
          <!-- Artikel Pilar: 10 Ide Hampers Lebaran Sederhana untuk Keluarga -->
          <div class="col-md-6 col-lg-4">
            <a href="blog/ide-hampers-lebaran-sederhana-untuk-keluarga.html" class="hl-card">
              <div class="hl-card__img-wrap hl-card__img-wrap--landscape">
                <img src="assets/images/ide-hampers-lebaran-keluarga.webp"
                  alt="10 Ide Hampers Lebaran Sederhana untuk Keluarga" width="400" height="267"
                  style="width:100%;height:100%;object-fit:cover;" loading="lazy">
              </div>
              <div class="hl-card__body">
                <div class="hl-meta">
                  <span>Inspirasi Ide</span>
                  <time datetime="2026-11-10">10 November 2026</time>
                </div>
                <h3 class="hl-card__title">10 Ide Hampers Lebaran Sederhana untuk Keluarga</h3>
                <p class="hl-card__desc">Inspirasi bingkisan Idulfitri sederhana dengan isi bermanfaat, kemasan cantik, dan harga terjangkau untuk mempererat tali silaturahmi keluarga.</p>
                <span class="hl-card__link">Baca artikel <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg></span>
              </div>
            </a>
          </div>

          <!-- Artikel Cluster 1: Hampers Lebaran Sederhana dengan Budget Terjangkau -->
          <div class="col-md-6 col-lg-4">
            <a href="blog/hampers-lebaran-budget-terjangkau.html" class="hl-card">
              <div class="hl-card__img-wrap hl-card__img-wrap--landscape">
                <img src="assets/images/hampers-lebaran-murah.webp"
                  alt="Hampers Lebaran Murah dan Budget Terjangkau" width="400" height="267"
                  style="width:100%;height:100%;object-fit:cover;" loading="lazy">
              </div>
              <div class="hl-card__body">
                <div class="hl-meta">
                  <span>Tips Hemat</span>
                  <time datetime="2026-11-10">10 November 2026</time>
                </div>
                <h3 class="hl-card__title">Hampers Lebaran Murah dan Budget Terjangkau</h3>
                <p class="hl-card__desc">Panduan menyusun bingkisan Lebaran hemat di bawah Rp100.000 dengan pilihan isi berkualitas, kemasan ramah bujet, dan penataan mewah.</p>
                <span class="hl-card__link">Baca artikel <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg></span>
              </div>
            </a>
          </div>

          <!-- Artikel Cluster 2: Rekomendasi Isi Hampers Lebaran Sederhana yang Bermanfaat -->
          <div class="col-md-6 col-lg-4">
            <a href="blog/isi-hampers-lebaran-sederhana.html" class="hl-card">
              <div class="hl-card__img-wrap hl-card__img-wrap--landscape">
                <img src="assets/images/isi-hampers-lebaran.webp"
                  alt="Rekomendasi Isi Hampers Lebaran Sederhana" width="400" height="267"
                  style="width:100%;height:100%;object-fit:cover;" loading="lazy">
              </div>
              <div class="hl-card__body">
                <div class="hl-meta">
                  <span>Rekomendasi Isi</span>
                  <time datetime="2026-11-10">10 November 2026</time>
                </div>
                <h3 class="hl-card__title">Rekomendasi Isi Hampers Lebaran Sederhana</h3>
                <p class="hl-card__desc">Kurasi produk kue kering, snack, teh herbal, sirup manis, perlengkapan ibadah, hingga alat makan fungsional yang paling disukai.</p>
                <span class="hl-card__link">Baca artikel <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg></span>
              </div>
            </a>
          </div>

          <!-- Artikel Cluster 3: Hampers Lebaran Sederhana untuk Teman, Saudara, dan Rekan Kerja -->
          <div class="col-md-6 col-lg-4">
            <a href="blog/hampers-lebaran-berdasarkan-penerima.html" class="hl-card">
              <div class="hl-card__img-wrap hl-card__img-wrap--landscape">
                <img src="assets/images/hampers-lebaran-untuk-teman.webp"
                  alt="Hampers Lebaran untuk Teman Saudara dan Rekan" width="400" height="267"
                  style="width:100%;height:100%;object-fit:cover;" loading="lazy">
              </div>
              <div class="hl-card__body">
                <div class="hl-meta">
                  <span>Panduan Penerima</span>
                  <time datetime="2026-11-10">10 November 2026</time>
                </div>
                <h3 class="hl-card__title">Hampers Lebaran untuk Teman Saudara dan Rekan</h3>
                <p class="hl-card__desc">Tips memilih bingkisan Idulfitri yang tepat sesuai hubungan penerima, mulai dari hadiah personal santai hingga bingkisan rekan kerja formal.</p>
                <span class="hl-card__link">Baca artikel <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg></span>
              </div>
            </a>
          </div>
`;

const needle = '<div class="row g-4">';
if (blogHtml.includes(needle)) {
  const parts = blogHtml.split(needle);
  // Reconstruct with cards inserted after the first occurrence of <div class="row g-4">
  blogHtml = parts[0] + needle + cardsHtml + parts.slice(1).join(needle);
  fs.writeFileSync(blogHtmlPath, blogHtml, 'utf8');
  console.log('[SUCCESS] 4 kartu artikel baru berhasil disisipkan ke blog.html');
} else {
  console.error('[ERROR] Needle tidak ditemukan!');
}
