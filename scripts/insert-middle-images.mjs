import fs from 'fs';

// 1. isi-hampers-lebaran-sederhana.html
let isiHtml = fs.readFileSync('c:/hamperslebaran/blog/isi-hampers-lebaran-sederhana.html', 'utf8');

const figureIsi = `              <figure class="my-4" style="border-radius:var(--hl-radius-md);overflow:hidden;">
                <img src="../assets/images/sajadah.webp"
                  alt="Hampers Lebaran dengan isi perlengkapan ibadah" width="800" height="450"
                  style="width:100%;aspect-ratio:16/9;max-height:450px;object-fit:cover;object-position:center;border-radius:var(--hl-radius-md);" loading="lazy">
                <figcaption style="font-size:0.8rem;color:var(--hl-text-muted);padding:0.5rem 0;text-align:center;">
                  Pilihan isi hampers perlengkapan ibadah yang fungsional dan sarat nilai keberkahan untuk Idulfitri.
                </figcaption>
              </figure>

`;

if (!isiHtml.includes('assets/images/sajadah.webp')) {
  // Letakkan sebelum <h2 id="kombinasi-anggaran">
  isiHtml = isiHtml.replace('<h2 id="kombinasi-anggaran">', figureIsi + '              <h2 id="kombinasi-anggaran">');
  fs.writeFileSync('c:/hamperslebaran/blog/isi-hampers-lebaran-sederhana.html', isiHtml, 'utf8');
  console.log('Added middle image to isi-hampers-lebaran-sederhana.html');
}

// 2. kemasan-hampers-lebaran-sederhana.html
let kemasanHtml = fs.readFileSync('c:/hamperslebaran/blog/kemasan-hampers-lebaran-sederhana.html', 'utf8');

const figureKemasan = `              <figure class="my-4" style="border-radius:var(--hl-radius-md);overflow:hidden;">
                <img src="../assets/images/hampers-rotan.webp"
                  alt="Hampers Lebaran dalam keranjang anyaman dengan dekorasi pita" width="800" height="450"
                  style="width:100%;aspect-ratio:16/9;max-height:450px;object-fit:cover;object-position:center;border-radius:var(--hl-radius-md);" loading="lazy">
                <figcaption style="font-size:0.8rem;color:var(--hl-text-muted);padding:0.5rem 0;text-align:center;">
                  Wadah anyaman natural berpadu hiasan pita satin memberikan kesan tradisional nan estetik.
                </figcaption>
              </figure>

`;

if (!kemasanHtml.includes('assets/images/hampers-rotan.webp')) {
  // Letakkan sebelum <h2 id="pilihan-warna">
  kemasanHtml = kemasanHtml.replace('<h2 id="pilihan-warna">', figureKemasan + '              <h2 id="pilihan-warna">');
  fs.writeFileSync('c:/hamperslebaran/blog/kemasan-hampers-lebaran-sederhana.html', kemasanHtml, 'utf8');
  console.log('Added middle image to kemasan-hampers-lebaran-sederhana.html');
}

// 3. tips-memilih-hampers-lebaran-sederhana.html
let tipsHtml = fs.readFileSync('c:/hamperslebaran/blog/tips-memilih-hampers-lebaran-sederhana.html', 'utf8');

const figureTips = `              <figure class="my-4" style="border-radius:var(--hl-radius-md);overflow:hidden;">
                <img src="../assets/images/hampers-paket.webp"
                  alt="Paket hampers Lebaran untuk keluarga dan rekan kerja" width="800" height="450"
                  style="width:100%;aspect-ratio:16/9;max-height:450px;object-fit:cover;object-position:center;border-radius:var(--hl-radius-md);" loading="lazy">
                <figcaption style="font-size:0.8rem;color:var(--hl-text-muted);padding:0.5rem 0;text-align:center;">
                  Ragam pilihan paket hampers Lebaran dengan kurasi produk bermutu untuk berbagai kelompok penerima.
                </figcaption>
              </figure>

`;

if (!tipsHtml.includes('assets/images/hampers-paket.webp')) {
  // Letakkan sebelum <h2 id="bandingkan-kemasan">
  tipsHtml = tipsHtml.replace('<h2 id="bandingkan-kemasan">', figureTips + '              <h2 id="bandingkan-kemasan">');
  fs.writeFileSync('c:/hamperslebaran/blog/tips-memilih-hampers-lebaran-sederhana.html', tipsHtml, 'utf8');
  console.log('Added middle image to tips-memilih-hampers-lebaran-sederhana.html');
}

