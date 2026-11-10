const fs = require('fs');
const path = require('path');

const baseDir = process.cwd();

// 1. ide-hampers-lebaran-malang.html
const f1 = path.join(baseDir, 'blog', 'ide-hampers-lebaran-malang.html');
let c1 = fs.readFileSync(f1, 'utf8');

c1 = c1.replace(
  'Bagi Anda yang berdomisili atau ingin mengirimkan paket ke wilayah Malang Raya, layanan terintegrasi pada <a href="../hampers-lebaran-malang.html">hampers Lebaran Malang</a> siap membantu pengadaan dari hulu ke hilir.',
  'Bagi Anda yang ingin mengirimkan paket bingkisan berkualitas, layanan terintegrasi pada <a href="../index.html">halaman beranda Hampers Lebaran</a> siap membantu pengadaan dari hulu ke hilir.'
);

c1 = c1.replace(
  'Kunjungi layanan resmi <a href="../hampers-lebaran-malang.html" style="font-weight:700;text-decoration:underline;">paket hampers Lebaran Malang</a> untuk diskusi konsep, katalog harga, dan pembuatan mockup gratis.',
  'Kunjungi <a href="../kontak.html" style="font-weight:700;text-decoration:underline;">halaman kontak kami</a> atau jelajahi koleksi di <a href="../index.html" style="font-weight:700;text-decoration:underline;">beranda Hampers Lebaran</a> untuk diskusi konsep, katalog harga, dan pembuatan mockup gratis.'
);

c1 = c1.replace(
  'memungkinkan penambahan item custom branding secara leluasa melalui layanan <a href="../hampers-lebaran-malang.html">paket hampers Lebaran Malang</a>.',
  'memungkinkan penambahan item custom branding secara leluasa melalui <a href="../paket/hampers-custom.html">paket hampers custom</a> kami.'
);

fs.writeFileSync(f1, c1, 'utf8');
console.log('[SUCCESS] ide-hampers-lebaran-malang.html updated');

// 2. rekomendasi-hampers-lebaran-di-malang.html
const f2 = path.join(baseDir, 'blog', 'rekomendasi-hampers-lebaran-di-malang.html');
let c2 = fs.readFileSync(f2, 'utf8');

c2 = c2.replace(
  'menggunakan penyedia <a href="../hampers-lebaran-malang.html">layanan hampers Lebaran Malang</a> memberikan ketenangan pikiran',
  'menggunakan <a href="../index.html">layanan penyedia hampers Lebaran profesional</a> memberikan ketenangan pikiran'
);

c2 = c2.replace(
  'Seluruh koleksi di atas dapat Anda pesan langsung melalui halaman <a href="../hampers-lebaran-malang.html" style="font-weight:700;text-decoration:underline;">paket hampers Lebaran Malang</a> kami, lengkap dengan jaminan pengiriman kurir lokal aman ke Kota Malang, Kota Batu, dan Kabupaten Malang.',
  'Seluruh koleksi di atas dapat Anda pesan langsung melalui katalog <a href="../paket.html" style="font-weight:700;text-decoration:underline;">paket hampers Lebaran</a> kami, lengkap dengan jaminan pengiriman kurir lokal aman ke Kota Malang, Kota Batu, dan Kabupaten Malang.'
);

c2 = c2.replace(
  'hubungi tim <a href="../hampers-lebaran-malang.html">paket hampers Lebaran Malang</a> kami untuk pelayanan cepat dan bergaransi.',
  'hubungi tim kami di <a href="../kontak.html">halaman kontak resmi</a> atau kunjungi <a href="../index.html">halaman beranda Hampers Lebaran</a> untuk pelayanan cepat dan bergaransi.'
);

fs.writeFileSync(f2, c2, 'utf8');
console.log('[SUCCESS] rekomendasi-hampers-lebaran-di-malang.html updated');

// 3. tas-hampers-lebaran.html
const f3 = path.join(baseDir, 'blog', 'tas-hampers-lebaran.html');
let c3 = fs.readFileSync(f3, 'utf8');

c3 = c3.replace(
  'Sementara untuk Anda yang berdomisili di kawasan Jawa Timur, khususnya Malang Raya, layanan penyediaan hantaran lokal dapat diakses melalui <a href="../hampers-lebaran-malang.html">paket hampers Lebaran Malang</a>.',
  'Sementara untuk Anda yang berdomisili di kawasan Jawa Timur, khususnya Malang Raya, layanan penyediaan hantaran berkualitas dapat diakses langsung melalui <a href="../index.html">halaman beranda Hampers Lebaran</a>.'
);

c3 = c3.replace(
  'Temukan pilihan lengkapnya pada layanan <a href="../hampers-lebaran-malang.html" style="font-weight:700;text-decoration:underline;">paket hampers Lebaran Malang</a> kami.',
  'Temukan pilihan lengkapnya pada katalog <a href="../paket.html" style="font-weight:700;text-decoration:underline;">paket hampers Lebaran</a> kami.'
);

c3 = c3.replace(
  'tersedia dengan waktu pengerjaan yang cepat melalui penyedia <a href="../hampers-lebaran-malang.html">paket hampers Lebaran Malang</a> kami.',
  'tersedia dengan waktu pengerjaan yang cepat melalui layanan <a href="../paket/hampers-custom.html">paket hampers custom</a> kami.'
);

fs.writeFileSync(f3, c3, 'utf8');
console.log('[SUCCESS] tas-hampers-lebaran.html updated');

// 4. hampers-lebaran-berdasarkan-penerima.html
const f4 = path.join(baseDir, 'blog', 'hampers-lebaran-berdasarkan-penerima.html');
let c4 = fs.readFileSync(f4, 'utf8');

c4 = c4.replace(
  'Pelajari selengkapnya pada panduan <a href="../hampers-lebaran-perusahaan.html">hampers Lebaran perusahaan</a> kami.',
  'Pelajari selengkapnya pada katalog <a href="../paket/hampers-custom.html">hampers custom korporat</a> di situs kami.'
);

fs.writeFileSync(f4, c4, 'utf8');
console.log('[SUCCESS] hampers-lebaran-berdasarkan-penerima.html updated');

// 5. hampers-lebaran-korporat.html
const f5 = path.join(baseDir, 'blog', 'hampers-lebaran-korporat.html');
let c5 = fs.readFileSync(f5, 'utf8');

c5 = c5.replace(
  'href="../faq.html">halaman FAQ</a>',
  'href="../kontak.html">layanan kontak kami</a>'
);

fs.writeFileSync(f5, c5, 'utf8');
console.log('[SUCCESS] hampers-lebaran-korporat.html updated');

// 6. tips-memilih-hampers-lebaran.html
const f6 = path.join(baseDir, 'blog', 'tips-memilih-hampers-lebaran.html');
let c6 = fs.readFileSync(f6, 'utf8');

c6 = c6.replace(
  'pesanan dalam jumlah besar. Baca juga <a href="../faq.html">halaman FAQ</a> kami untuk',
  'pesanan dalam jumlah besar. Kunjungi juga <a href="../index.html">halaman beranda penyedia hampers</a> serta <a href="../kontak.html">layanan kontak</a> kami untuk'
);

fs.writeFileSync(f6, c6, 'utf8');
console.log('[SUCCESS] tips-memilih-hampers-lebaran.html updated');

