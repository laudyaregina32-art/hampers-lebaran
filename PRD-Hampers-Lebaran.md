# PRD — Website Hampers Lebaran

**Versi dokumen:** 1.0  
**Tanggal:** 20 Oktober 2026  
**Status:** Draft siap dijadikan acuan pengembangan  
**Nama proyek:** Website Hampers Lebaran (nama brand dapat ditentukan kemudian)

## 1. Ringkasan Produk

Website katalog dan pemasaran hampers Lebaran yang membantu calon pelanggan menemukan paket, melihat portofolio, memahami layanan, membaca panduan, lalu meminta informasi atau penawaran melalui WhatsApp. Tampilan harus modern, tenang, premium, mudah digunakan, responsif, dan mengutamakan foto produk.

**Prinsip utama**
- Mobile-first, cepat, mudah dipahami.
- Mengutamakan informasi produk yang nyata dan jelas.
- SEO teknis yang rapi serta konten yang menjawab pertanyaan pelanggan.
- CTA WhatsApp yang konsisten dan mudah dijangkau.
- Tanpa framework CSS selain Bootstrap; CSS tambahan ditulis sendiri.
- Tidak menjanjikan peringkat Google atau kemunculan pada jawaban AI. SEO/AEO/GEO membantu mesin memahami konten, tetapi hasil tetap bergantung pada banyak faktor.

## 2. Tujuan Bisnis

1. Menampilkan pilihan hampers Lebaran dalam katalog yang mudah dipindai.
2. Mendapatkan pertanyaan harga, kustomisasi, ketersediaan, dan pemesanan lewat WhatsApp.
3. Membangun kepercayaan melalui foto asli, proses kerja, portofolio, FAQ, dan informasi bisnis.
4. Mendatangkan trafik organik dari pencarian komersial dan informasional.
5. Mendukung pembagian halaman ke media sosial dengan Open Graph metadata.

### KPI yang disarankan
- Klik CTA WhatsApp dan klik nomor telepon.
- Jumlah percakapan/permintaan penawaran yang berasal dari website (dicatat secara manual atau melalui analitik yang sesuai).
- Organic clicks, impressions, CTR, dan query dari Google Search Console.
- Core Web Vitals dan error teknis.
- Halaman produk/artikel yang mendapat kunjungan organik.
- Rasio pengguna yang melihat paket lalu menekan CTA.

Target angka ditentukan setelah baseline tersedia; jangan mengarang target konversi sebelum data awal ada.

## 3. Target Pengguna

### B2C
- Individu yang mencari hadiah Lebaran untuk keluarga, kerabat, teman, atau tuan rumah.
- Pelanggan yang membutuhkan hampers siap pilih atau custom.

### B2B
- HR/GA, procurement, pemilik usaha, panitia acara, dan perusahaan yang memerlukan hampers untuk karyawan, klien, mitra, atau relasi bisnis.

### Kebutuhan utama
- Melihat foto dan isi paket.
- Mengetahui kisaran harga, minimum order, opsi custom, waktu produksi, pengiriman, dan cara pemesanan.
- Memastikan paket sesuai anggaran dan penerima.
- Bertanya cepat tanpa harus mengisi formulir panjang.

## 4. Ruang Lingkup

### Termasuk
- Halaman Beranda, Tentang, Paket (dropdown), Portofolio, Blog.
- Halaman detail paket dan artikel.
- Navigasi responsive Bootstrap dengan dropdown.
- CTA WhatsApp menuju `https://wa.me/6281913905507`.
- Katalog paket, galeri, FAQ, formulir brief sederhana opsional.
- SEO on-page dan teknis, structured data yang sesuai, Open Graph, sitemap, robots.txt, canonical, favicon, halaman legal.
- Aksesibilitas dasar, performa, analitik dengan persetujuan bila diperlukan, dan dokumentasi deployment.

### Tidak termasuk pada versi awal
- Checkout dan pembayaran online.
- Akun pelanggan, keranjang, dashboard admin, stok real-time.
- Otomasi WhatsApp API.
- Review palsu atau testimoni yang tidak dapat diverifikasi.
- Harga, klaim kapasitas, garansi, sertifikasi, klien, dan statistik yang belum dikonfirmasi.

## 5. Navigasi dan Sitemap

Menu utama:
1. Beranda — `/`
2. Tentang — `/tentang/`
3. Paket — dropdown:
   - Semua Paket — `/paket/`
   - Hampers Premium — `/paket/hampers-premium/`
   - Hampers Kue & Camilan — `/paket/hampers-kue-camilan/`
   - Hampers Perlengkapan Ibadah — `/paket/hampers-perlengkapan-ibadah/`
   - Hampers Custom / Corporate — `/paket/hampers-custom/`
   *Kategori hanya ditayangkan bila memang tersedia.*
4. Portofolio — `/portofolio/`
5. Blog — `/blog/`

Halaman pendukung:
- Detail paket — `/paket/{slug}/`
- Detail proyek portofolio — `/portofolio/{slug}/`
- Detail artikel — `/blog/{slug}/`
- FAQ — `/faq/` atau bagian FAQ pada halaman relevan
- Kontak — `/kontak/`
- Kebijakan Privasi — `/kebijakan-privasi/`
- Syarat & Ketentuan — `/syarat-ketentuan/`
- 404 — halaman tidak ditemukan

## 6. Spesifikasi Konten per Halaman

### 6.1 Beranda
Urutan yang disarankan:
1. **Header/navbar:** logo/brand, Beranda, Tentang, Paket dropdown, Portofolio, Blog, tombol WhatsApp.
2. **Hero:** H1 unik, ringkasan nilai produk, CTA “Lihat Paket” dan “Konsultasi via WhatsApp”, foto hampers utama.
3. **Trust strip:** fakta yang dapat dibuktikan seperti jenis layanan, opsi personalisasi, atau cakupan pengiriman. Jangan memasang angka klaim tanpa bukti.
4. **Kategori paket:** kartu kategori dengan foto dan tautan ke kategori terkait.
5. **Paket pilihan:** foto, nama, isi ringkas, harga atau “Hubungi untuk harga”, opsi custom, CTA detail.
6. **Keunggulan layanan:** kualitas kemasan, personalisasi, bantuan pemilihan, penanganan pesanan—hanya jika benar tersedia.
7. **Cara pemesanan:** pilih paket → konsultasi → konfirmasi isi/harga/jumlah → pembayaran sesuai kebijakan → produksi → pengiriman.
8. **Portofolio pilihan:** foto proyek asli dan keterangan.
9. **Proses kerja:** brief, desain, persetujuan, produksi, pengecekan, pengiriman.
10. **Artikel terbaru:** 3 artikel yang benar-benar relevan.
11. **FAQ:** pertanyaan umum dengan jawaban terlihat di halaman.
12. **CTA penutup:** ajakan berkonsultasi melalui WhatsApp.
13. **Footer:** kontak, jam operasional, area layanan yang benar, tautan navigasi, sosial media, legal, copyright.

### 6.2 Tentang
- H1 menjelaskan bisnis dan fokus layanannya.
- Cerita brand: latar belakang, misi, dan nilai.
- Jenis pelanggan yang dilayani.
- Alur kerja dan standar pengecekan yang benar-benar dilakukan.
- Foto tim, ruang kerja, atau proses nyata bila tersedia.
- Data perusahaan, alamat, jam kerja, dan kontak yang valid.
- CTA konsultasi.
- Hindari klaim “terbaik”, “nomor satu”, atau angka pengalaman tanpa bukti.

### 6.3 Halaman Paket / kategori
- H1 sesuai kategori dan intent pencarian.
- Intro singkat yang membantu memilih paket.
- Filter sederhana jika jumlah produk cukup banyak: kategori, kisaran harga, penerima, atau jenis isi.
- Kartu produk: foto, nama, deskripsi, isi paket, kisaran harga (jika disetujui), opsi personalisasi, minimum pemesanan (jika berlaku), CTA detail.
- Penjelasan apakah isi dapat berubah, ketentuan ketersediaan, lead time, pengiriman, dan pemesanan.
- FAQ kategori.
- Tautan internal ke kategori terkait, portofolio, dan artikel.
- Jangan memakai filter yang menghasilkan banyak URL kosong/duplikat untuk diindeks.

### 6.4 Detail paket
- Breadcrumb.
- Nama paket sebagai H1.
- Galeri foto asli, alt text deskriptif, dan gambar utama yang jelas.
- Harga atau keterangan cara meminta penawaran; tulis apa saja yang termasuk.
- Isi paket dan variasi yang tersedia.
- Ukuran/kemasan jika relevan.
- Opsi kartu ucapan, logo, nama penerima, atau branding—hanya bila tersedia.
- Minimum order, estimasi produksi, pengiriman, ketersediaan, dan ketentuan perubahan.
- CTA WhatsApp dengan pesan awal berisi nama paket.
- Produk terkait.
- FAQ khusus paket.
- Informasi terakhir diperbarui jika informasi memang ditinjau ulang.
- Schema Product hanya bila halaman benar-benar mewakili produk dan semua properti akurat. Jangan memasang rating/review fiktif.

### 6.5 Portofolio
- Intro tentang jenis proyek.
- Galeri foto proyek nyata.
- Setiap item: nama proyek/kategori, kebutuhan klien, solusi, jenis paket, material/kemasan yang benar, hasil yang dapat diverifikasi.
- Persetujuan klien untuk penggunaan logo, nama, foto, atau testimoni.
- Filter kategori opsional.
- CTA konsultasi proyek serupa.

### 6.6 Blog
- Halaman listing dengan kategori, pencarian sederhana opsional, artikel unggulan, pagination.
- Kartu artikel berisi judul, ringkasan, gambar, tanggal terbit/perbarui yang jujur, penulis/editor jika ada.
- Artikel memiliki halaman detail, daftar isi untuk artikel panjang, heading terstruktur, sumber untuk fakta eksternal, gambar dengan alt, tautan internal, FAQ bila berguna, CTA yang tidak mengganggu.
- Tampilkan profil penulis/editor dan kebijakan editorial bila ada.
- Jangan memproduksi banyak artikel tipis yang hanya mengulang keyword.

### 6.7 Kontak
- Tombol WhatsApp utama.
- Nomor telepon, email, alamat, jam operasional, dan area layanan hanya jika valid.
- Formulir singkat opsional: nama, kebutuhan, jumlah, tenggat, anggaran opsional, catatan. Jelaskan penggunaan data.
- Tampilkan respons setelah validasi formulir dan sediakan alternatif WhatsApp.
- Peta hanya jika alamat fisik benar dan layak dipublikasikan.

### 6.8 FAQ
Topik yang perlu dijawab jika relevan:
- Bagaimana cara memesan?
- Apa saja isi paket?
- Apakah isi atau kemasan bisa custom?
- Berapa harga dan minimum order?
- Berapa lama produksi?
- Apakah menerima pesanan perusahaan?
- Apakah tersedia kartu ucapan atau logo?
- Bagaimana pengiriman dan ongkir dihitung?
- Bagaimana ketentuan pembayaran, pembatalan, dan perubahan pesanan?
- Bagaimana mengecek ketersediaan?
Jawaban harus sesuai kebijakan bisnis nyata, bukan asumsi.

## 7. Persyaratan WhatsApp

Nomor tujuan: `6281913905507`  
Format link: `https://wa.me/6281913905507?text={URL_ENCODED_MESSAGE}`

Contoh pesan:
“Halo, saya ingin bertanya tentang paket hampers Lebaran. Boleh minta katalog, isi paket, harga, dan estimasi produksinya?”

Ketentuan:
- Gunakan HTTPS dan URL-encode teks pesan.
- Tombol navbar, hero, detail paket, footer, dan tombol floating dapat menuju nomor yang sama.
- Pada detail paket, sertakan nama paket pada pesan awal.
- Buka tab baru hanya bila memang dibutuhkan; jika menggunakan `target="_blank"`, sertakan `rel="noopener noreferrer"`.
- Jangan mengirim data formulir otomatis ke pihak lain tanpa persetujuan pengguna.
- Uji link pada desktop dan perangkat seluler.

## 8. Persyaratan Desain dan Teknologi

- HTML5 semantik, Bootstrap stable yang dipilih saat implementasi, CSS buatan sendiri, dan JavaScript seperlunya.
- Bootstrap dipakai untuk grid, navbar responsive, dropdown, utility, dan komponen dasar.
- Tidak menggunakan Tailwind, Bulma, Materialize, atau framework CSS lain.
- Hindari menimpa semua class Bootstrap secara global; gunakan prefix class proyek, misalnya `hl-`.
- Responsive: 360px, 390px, 768px, 1024px, dan 1440px.
- Semua gambar memakai ukuran yang sesuai, kompresi modern (WebP/AVIF bila didukung), `width`/`height`, dan lazy-load untuk gambar di bawah fold.
- Gambar hero utama jangan lazy-load jika menjadi elemen LCP; prioritaskan dengan hati-hati.
- Kontras teks, fokus keyboard, label input, alt gambar, dan navigasi keyboard.
- Hormati `prefers-reduced-motion`.
- Tidak ada teks penting yang hanya muncul melalui hover.

## 9. SEO, AEO, GEO, dan Metadata

### 9.1 SEO on-page
- Satu H1 utama yang menjelaskan tujuan halaman; H2/H3 tersusun logis.
- Title unik per halaman, ringkas dan akurat; bukan sekadar daftar keyword.
- Meta description unik yang menjelaskan manfaat dan mendorong klik tanpa klaim berlebihan.
- URL pendek, deskriptif, lowercase, gunakan tanda hubung.
- Canonical absolut dan konsisten untuk halaman yang layak diindeks.
- Tautan internal dengan anchor yang menjelaskan tujuan.
- Konten orisinal yang membantu pengguna memilih/memesan.
- Optimasi gambar: nama file deskriptif, alt text kontekstual, ukuran file efisien, dan metadata gambar sosial.
- Breadcrumb yang terlihat dan sesuai struktur situs.
- Bahasa utama `id`.
- Hindari keyword stuffing, doorway pages, teks tersembunyi, dan konten duplikat.

### 9.2 SEO teknis
- HTTPS dan domain kanonis.
- Status HTTP benar: 200 untuk halaman aktif, 301 untuk perpindahan permanen, 404/410 untuk konten yang benar-benar tidak ada/dihapus.
- `robots.txt` tidak memblokir aset penting atau halaman yang perlu dirayapi.
- `sitemap.xml` berisi URL kanonis yang ingin diindeks; `lastmod` hanya diperbarui ketika konten benar-benar berubah.
- Google Search Console dan Bing Webmaster Tools.
- Pantau indeksasi, Core Web Vitals, broken links, redirect chains, halaman 404, dan log bila tersedia.
- Hindari halaman tipis, duplikat akibat parameter filter, serta halaman pencarian internal yang tidak perlu diindeks.
- Jangan mengandalkan meta keywords; mesin pencari utama tidak menggunakannya sebagai sinyal ranking.
- `noindex` hanya untuk halaman yang memang tidak ingin tampil di hasil pencarian; jangan memblokirnya di robots.txt sekaligus berharap crawler membaca `noindex`.

### 9.3 AEO (Answer Engine Optimization)
- Jawab pertanyaan penting secara langsung dengan bahasa alami.
- Letakkan ringkasan jawaban di awal bagian, lalu detail pendukung.
- Gunakan FAQ yang terlihat oleh pengguna; schema bukan jaminan rich result.
- Sertakan definisi, langkah pemesanan, komposisi paket, kisaran harga bila tersedia, syarat, waktu produksi, dan cakupan layanan yang faktual.
- Gunakan judul berbentuk pertanyaan jika cocok dengan intent pengguna.
- Cantumkan sumber dan tanggal peninjauan untuk informasi yang berubah.
- Jangan membuat halaman “jawaban AI” yang tipis atau mengulang pertanyaan dengan variasi keyword.

### 9.4 GEO (Generative Engine Optimization)
- Sajikan informasi brand, layanan, kategori produk, kontak, dan area layanan secara konsisten di situs.
- Bangun halaman yang memiliki fakta spesifik, foto asli, detail produk, proses kerja, penulis/editor, sumber, dan bukti proyek.
- Gunakan struktur heading, tautan internal, metadata, serta structured data yang sesuai dan konsisten dengan konten terlihat.
- Dapatkan penyebutan/tautan yang relevan dan wajar dari sumber terpercaya; jangan membeli skema link.
- Pastikan halaman dapat diakses crawler dan konten utama tidak hanya tersedia setelah interaksi yang sulit dirender.
- Tidak ada schema khusus yang menjamin masuk jawaban AI; GEO adalah praktik konten dan entitas yang membantu pemahaman, bukan jaminan sitasi.

### 9.5 Schema.org / JSON-LD
Gunakan JSON-LD, satu entitas yang konsisten, dan validasi setiap template. Schema harus merepresentasikan konten yang benar-benar terlihat.

Kandidat schema sesuai kebutuhan:
- `Organization` atau `LocalBusiness` untuk identitas bisnis. Pilih tipe yang paling akurat; jangan mengarang alamat atau jam buka.
- `WebSite` untuk situs.
- `WebPage` untuk halaman umum.
- `BreadcrumbList` untuk halaman bertingkat.
- `Product` untuk halaman produk yang nyata, dengan data valid seperti nama, gambar, deskripsi, dan penawaran bila ada.
- `Offer` hanya jika harga, mata uang, ketersediaan, dan ketentuan benar-benar diketahui.
- `Article` atau `BlogPosting` untuk artikel dengan headline, author, datePublished, dateModified, image, dan publisher yang benar.
- `Person` untuk penulis nyata jika relevan.
- `ContactPoint` hanya jika kontak dan jenis layanannya valid.
- `FAQPage` boleh dipakai untuk menandai FAQ yang terlihat dan memenuhi kebijakan saat ini, tetapi jangan mengandalkan tampilan FAQ rich result di Google.
- `AggregateRating`/`Review` hanya bila review asli, terlihat, dan sesuai pedoman; jangan membuat rating sendiri.
- Jangan menambahkan schema yang tidak relevan hanya demi memperbanyak markup.
- Jangan menaruh harga palsu atau ketersediaan “InStock” yang tidak diketahui.
- Uji di Schema Markup Validator dan Google Rich Results Test untuk jenis hasil yang didukung.

### 9.6 Open Graph dan social sharing
Untuk setiap halaman:
- `og:title`
- `og:type` (`website` untuk halaman utama, `article` untuk artikel bila sesuai)
- `og:url` URL kanonis
- `og:image` URL absolut yang dapat diakses
- `og:description`
- `og:site_name`
- `og:locale` = `id_ID`
- `og:image:alt`
- `og:image:width` dan `og:image:height` bila sesuai

Untuk artikel:
- `article:published_time`, `article:modified_time`, `article:author`, `article:section` dan `article:tag` bila didukung dan akurat.

### 9.7 Metadata tambahan
- `<html lang="id">`
- UTF-8 dan viewport.
- Title, meta description, canonical.
- `robots` directive bila diperlukan.
- Favicon dan icon untuk perangkat.
- Theme color.
- Twitter/X Card metadata (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`) untuk kompatibilitas berbagi.
- `hreflang` hanya jika tersedia versi bahasa/negara alternatif sungguhan.
- Verifikasi situs untuk Search Console/Bing.
- Jangan menganggap meta keywords atau meta geo sebagai jalan pintas ranking.

## 10. Template Head Metadata

Ganti semua placeholder sebelum produksi; jangan deploy `example.com`.

```html
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Hampers Lebaran [Kota/Brand] | [Brand]</title>
  <meta name="description" content="Temukan pilihan hampers Lebaran untuk keluarga, relasi, dan perusahaan. Lihat isi paket dan konsultasikan kebutuhan Anda.">
  <link rel="canonical" href="https://www.example.com/">
  <meta name="robots" content="index,follow,max-image-preview:large">
  <meta name="theme-color" content="#777873">

  <meta property="og:locale" content="id_ID">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="[Nama Brand]">
  <meta property="og:title" content="Hampers Lebaran [Nama Brand]">
  <meta property="og:description" content="Pilihan hampers Lebaran untuk keluarga, relasi, dan perusahaan.">
  <meta property="og:url" content="https://www.example.com/">
  <meta property="og:image" content="https://www.example.com/assets/images/og-hampers-lebaran.jpg">
  <meta property="og:image:alt" content="Pilihan hampers Lebaran dari [Nama Brand]">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Hampers Lebaran [Nama Brand]">
  <meta name="twitter:description" content="Pilihan hampers Lebaran untuk keluarga, relasi, dan perusahaan.">
  <meta name="twitter:image" content="https://www.example.com/assets/images/og-hampers-lebaran.jpg">
</head>
```

## 11. Contoh JSON-LD Dasar

Gunakan hanya setelah placeholder diganti dengan data nyata. Tambahkan tipe khusus pada template yang sesuai, jangan menyalin semua tipe ke setiap halaman.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.example.com/#organization",
  "name": "[Nama Brand]",
  "url": "https://www.example.com/",
  "logo": "https://www.example.com/assets/images/logo.png",
  "sameAs": [
    "https://www.instagram.com/[akun-valid]"
  ],
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+6281913905507",
    "contactType": "customer service",
    "availableLanguage": ["Indonesian"]
  }]
}
</script>
```

Jangan menambahkan `address`, `priceRange`, jam operasional, rating, atau social URL jika belum dikonfirmasi. Jika bisnis memang melayani lokasi fisik tertentu, evaluasi `LocalBusiness` dan isi alamat/jam yang benar.

## 12. Analitik dan Privasi
- Google Search Console untuk performa pencarian.
- Analitik web opsional untuk page view, klik WhatsApp, klik CTA, dan pengiriman formulir.
- Aktifkan hanya tag yang diperlukan dan sediakan pemberitahuan/kontrol persetujuan jika diwajibkan oleh teknologi dan aturan yang berlaku.
- Kebijakan privasi menjelaskan data yang dikumpulkan, tujuan, penyimpanan, pihak ketiga, dan kontak privasi.
- Jangan mengirim nama, nomor, isi chat, atau data sensitif sebagai parameter analitik.
- Pastikan tombol WhatsApp tidak mengirim pesan otomatis; pengguna tetap menekan tombol kirim di WhatsApp.

## 13. Aksesibilitas dan Kualitas
- HTML semantik: `header`, `nav`, `main`, `section`, `article`, `footer`.
- Satu H1 yang jelas per halaman.
- Alt text untuk gambar informatif; alt kosong untuk gambar dekoratif.
- Form input memiliki label; error dijelaskan dengan teks.
- Kontras memadai, fokus keyboard terlihat, tombol punya nama yang jelas.
- Dropdown dapat dipakai keyboard; menu mobile tidak menjebak fokus.
- Jangan memakai warna saja untuk menyampaikan status.
- Uji navigasi keyboard, pembaca layar dasar, zoom 200%, dan reduced motion.

## 14. Kriteria Penerimaan (Acceptance Criteria)

### Fungsional
- [ ] Navbar berisi Beranda, Tentang, Paket dropdown, Portofolio, Blog.
- [ ] Navbar berfungsi pada desktop dan mobile.
- [ ] Seluruh CTA WhatsApp mengarah ke nomor `6281913905507`.
- [ ] CTA pada detail paket menyertakan nama paket pada pesan awal.
- [ ] Seluruh halaman penting memiliki tautan internal dan footer konsisten.
- [ ] Semua kartu produk/portofolio/artikel membuka halaman yang benar.
- [ ] Tidak ada tautan placeholder, tombol mati, atau gambar rusak.

### Konten dan SEO
- [ ] Setiap halaman memiliki title, description, canonical, dan OG metadata unik.
- [ ] H1, heading, URL, alt text, breadcrumb, dan tautan internal ditinjau.
- [ ] `sitemap.xml` dan `robots.txt` tersedia dan benar.
- [ ] JSON-LD valid, relevan, dan sesuai konten yang terlihat.
- [ ] Tidak ada rating, harga, alamat, testimoni, atau klaim palsu.
- [ ] Halaman 404 dan redirect diuji.
- [ ] Domain dan protokol kanonis konsisten.

### Performa dan UX
- [ ] Layout diuji di ukuran layar utama.
- [ ] Gambar terkompresi dan ukuran dimensi ditentukan.
- [ ] Tidak ada horizontal scroll yang tidak disengaja.
- [ ] Dropdown, tombol, form, fokus, dan navigasi keyboard diuji.
- [ ] Lighthouse/PageSpeed digunakan sebagai pemeriksaan; target Core Web Vitals dievaluasi dari data lapangan bila tersedia.
- [ ] Tidak ada error console kritis.

## 15. Tahapan Implementasi

1. Konfirmasi brand, domain, area layanan, katalog, harga, kebijakan, kontak, dan foto asli.
2. Buat struktur HTML semantik dan navbar/footer.
3. Terapkan design tokens dan layout responsif.
4. Bangun Beranda dan template kartu.
5. Bangun halaman Paket, detail paket, Portofolio, Blog, Tentang, Kontak, FAQ, legal, dan 404.
6. Pasang link WhatsApp dan uji pesan awal.
7. Tambahkan metadata per halaman dan JSON-LD yang sesuai.
8. Buat sitemap, robots, redirect, canonical, dan HTTPS saat deployment.
9. Optimasi gambar, aksesibilitas, dan performa.
10. Validasi markup, metadata, link, Search Console, dan analitik.
11. Tinjau hasil berdasarkan data, bukan janji peringkat.

## 16. Informasi yang Harus Dikonfirmasi Sebelum Launch
- Nama brand, logo, domain, email, alamat, area pengiriman, jam operasional.
- Foto dan nama paket yang benar.
- Harga, isi, opsi custom, minimum order, kapasitas produksi, lead time.
- Ketentuan pembayaran, revisi, pembatalan, retur, dan pengiriman.
- Profil sosial media resmi.
- Testimoni dan izin penggunaan logo/nama klien.
- Identitas penulis/editor blog.
- Kebijakan privasi dan analitik yang akan digunakan.
