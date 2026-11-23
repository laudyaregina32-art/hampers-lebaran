import fs from 'fs';
import { execSync } from 'child_process';

console.log('Restoring Klien Kami marquee & proof section into hero...');

const fullHeroHtml = `<!-- ===== HERO BERANDA (SPLIT TEKS KIRI & KANAN, BG HAMPERS TENGAH + KLIEN KAMI) ===== -->
    <section class="hl-hero" id="hero" aria-labelledby="hero-heading" style="padding-bottom: clamp(2.5rem, 4.5vw, 4rem) !important;">
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

      <!-- ===== CLIENTS TRUST MARQUEE & PROOF (KLIEN KAMI) ===== -->
      <div class="container hl-hero__trust-container" style="position: relative; z-index: 2; margin-top: clamp(2rem, 3.8vw, 3.25rem);">
        <!-- Divider Garis -->
        <hr class="hl-hero__row-divider"
          style="border:none !important;border-top:1px solid rgba(200, 213, 203, 0.75) !important;margin-top:0 !important;margin-bottom:0 !important;width:100% !important;">

        <!-- ===== CLIENT TRUST MARQUEE ===== -->
        <div class="hl-clients-marquee" role="region" aria-label="Klien dan Mitra Perusahaan">
          <p class="hl-clients-marquee__heading">Dipercaya Oleh Berbagai Perusahaan Terkemuka &amp; Instansi Pemerintahan</p>
          <div class="hl-clients-marquee__track-wrapper">
            <div class="hl-clients-marquee__track">
              <div class="hl-clients-marquee__item"><img src="assets/images/bankjatim.webp" alt="Bank Jatim" loading="lazy" height="34" width="130"></div>
              <div class="hl-clients-marquee__item"><img src="assets/images/bca.webp" alt="BCA" loading="lazy" height="34" width="130"></div>
              <div class="hl-clients-marquee__item"><img src="assets/images/bpjs.webp" alt="BPJS" loading="lazy" height="34" width="130"></div>
              <div class="hl-clients-marquee__item"><img src="assets/images/ibs-software.webp" alt="IBS Software" loading="lazy" height="34" width="130"></div>
              <div class="hl-clients-marquee__item"><img src="assets/images/mandiri.webp" alt="Bank Mandiri" loading="lazy" height="34" width="130"></div>
              <div class="hl-clients-marquee__item"><img src="assets/images/otoritas.webp" alt="OJK Otoritas" loading="lazy" height="34" width="130"></div>
              <div class="hl-clients-marquee__item"><img src="assets/images/pertamina.webp" alt="Pertamina" loading="lazy" height="34" width="130"></div>
              <!-- Duplicate set 2 -->
              <div class="hl-clients-marquee__item" aria-hidden="true"><img src="assets/images/bankjatim.webp" alt="" loading="lazy" height="34" width="130"></div>
              <div class="hl-clients-marquee__item" aria-hidden="true"><img src="assets/images/bca.webp" alt="" loading="lazy" height="34" width="130"></div>
              <div class="hl-clients-marquee__item" aria-hidden="true"><img src="assets/images/bpjs.webp" alt="" loading="lazy" height="34" width="130"></div>
              <div class="hl-clients-marquee__item" aria-hidden="true"><img src="assets/images/ibs-software.webp" alt="" loading="lazy" height="34" width="130"></div>
              <div class="hl-clients-marquee__item" aria-hidden="true"><img src="assets/images/mandiri.webp" alt="" loading="lazy" height="34" width="130"></div>
              <div class="hl-clients-marquee__item" aria-hidden="true"><img src="assets/images/otoritas.webp" alt="" loading="lazy" height="34" width="130"></div>
              <div class="hl-clients-marquee__item" aria-hidden="true"><img src="assets/images/pertamina.webp" alt="" loading="lazy" height="34" width="130"></div>
            </div>
          </div>
        </div>

        <!-- Highlight Keunggulan & Garansi Layanan (Full Width 3 Kolom) -->
        <div class="hl-hero__proof-wrapper"
          style="margin-top:clamp(0.75rem, 1.5vw, 1.25rem) !important;margin-bottom:0 !important;padding-top:clamp(1.25rem, 2vw, 1.75rem) !important;">
          <div class="hl-hero__proof-grid">
            <div class="hl-hero__proof-card">
              <div class="hl-hero__proof-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path
                    d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" />
                </svg>
              </div>
              <div>
                <p class="hl-hero__proof-title">Pilihan Hampers Berkualitas</p>
                <p class="hl-hero__proof-desc">Aneka kue kering, kurma, camilan, dan perlengkapan ibadah dengan pilihan
                  paket sesuai kebutuhan dan anggaran Anda.</p>
              </div>
            </div>
            <div class="hl-hero__proof-card">
              <div class="hl-hero__proof-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                  <path d="m15 5 3 3" />
                </svg>
              </div>
              <div>
                <p class="hl-hero__proof-title">Personalisasi Hadiah</p>
                <p class="hl-hero__proof-desc">Sesuaikan kemasan, kartu ucapan, pita, dan logo perusahaan untuk
                  menciptakan bingkisan yang lebih personal dan berkesan.</p>
              </div>
            </div>
            <div class="hl-hero__proof-card">
              <div class="hl-hero__proof-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <p class="hl-hero__proof-title">Pengiriman Aman & Terpercaya</p>
                <p class="hl-hero__proof-desc">Pengemasan dengan perlindungan tambahan untuk membantu menjaga kondisi
                  hampers hingga sampai ke penerima.</p>
              </div>
            </div>
          </div>

          <div class="hl-hero__guarantee">
            <div class="hl-hero__guarantee-stars" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 24 24">
                <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <svg width="15" height="15" viewBox="0 0 24 24">
                <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <svg width="15" height="15" viewBox="0 0 24 24">
                <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <svg width="15" height="15" viewBox="0 0 24 24">
                <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <svg width="15" height="15" viewBox="0 0 24 24">
                <polygon
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <p class="hl-hero__guarantee-text">
              <strong>Terpercaya untuk Idulfitri:</strong> Melayani pesanan personal keluarga &amp; pengadaan
              korporat dengan kemasan aman se-Indonesia.
            </p>
          </div>
        </div>
      </div>
    </section>`;

let indexHtml = fs.readFileSync('index.html', 'utf8');
indexHtml = indexHtml.replace(/<!-- ===== HERO[\s\S]*?<\/section>/, fullHeroHtml);
fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('index.html updated with Klien Kami restored.');

console.log('Rebuilding CSS...');
execSync('node scripts/build-all-css.mjs', { stdio: 'inherit' });
console.log('CSS rebuilt successfully.');
