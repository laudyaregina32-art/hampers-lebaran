# Design System & UI Specification — Website Hampers Lebaran

**Versi:** 1.0  
**Tanggal:** 20 Oktober 2026  
**Arah visual:** Muted Grey · Warm Minimal · Editorial · Premium, tidak berlebihan

## 1. Arah Desain

Website harus terasa tenang, rapi, hangat, dan terpercaya. Abu-abu pudar menjadi warna dasar, sementara warna krem hangat dan aksen sage/charcoal memberi kesan hampers yang berkelas. Foto produk menjadi pusat perhatian; dekorasi jangan sampai mengalahkan produk.

**Kata kunci visual:** understated, natural, tactile, editorial, generous whitespace, product-first.

Hindari:
- Abu-abu terlalu gelap pada semua permukaan.
- Efek glassmorphism berlebihan yang menurunkan keterbacaan.
- Gradien mencolok, animasi berat, terlalu banyak rounded pill.
- Foto stok yang tidak sesuai paket asli.
- Teks kecil atau kontras rendah hanya demi tampilan minimalis.

## 2. Palet Warna

| Token | Hex | Penggunaan |
|---|---|---|
| `--hl-bg` | `#F3F3F0` | Latar utama abu-abu pudar |
| `--hl-surface` | `#FFFFFF` | Kartu dan permukaan utama |
| `--hl-surface-muted` | `#E8E8E3` | Section alternatif |
| `--hl-gray-200` | `#D5D6D0` | Border |
| `--hl-gray-500` | `#777873` | Ikon dan teks sekunder yang lolos uji kontras |
| `--hl-text` | `#282A27` | Teks utama |
| `--hl-text-muted` | `#62645F` | Teks pendukung |
| `--hl-accent` | `#7B806C` | Aksen sage |
| `--hl-accent-dark` | `#545A48` | Tombol/hover aksen |
| `--hl-warm` | `#E9DDCC` | Krem hangat dekoratif |
| `--hl-footer` | `#292B28` | Footer gelap |
| `--hl-footer-text` | `#F4F3EE` | Teks footer |

Catatan aksesibilitas: abu-abu muda untuk dekorasi/border, bukan untuk teks kecil. Pastikan rasio kontras teks dan latar memenuhi WCAG 2.2 AA bila memungkinkan. Uji kombinasi aktual; jangan mengandalkan penilaian visual saja.

## 3. Tipografi

Pilihan:
- **Heading:** `Playfair Display` atau font serif editorial sejenis, jika performa dan lisensinya sesuai.
- **Body/UI:** `Inter`, `system-ui`, atau font sans-serif sistem.
- Batasi maksimal dua keluarga font.
- Sediakan fallback sistem dan hindari memuat terlalu banyak weight.
- Jika memakai Google Fonts, pertimbangkan self-hosting atau strategi privasi/performa yang sesuai.

Skala:
- H1 desktop: `clamp(2.5rem, 5vw, 4.5rem)`, line-height 1.05–1.15.
- H1 mobile: sekitar 2.25rem, disesuaikan agar tidak memenuhi layar.
- H2: `clamp(1.8rem, 3vw, 2.8rem)`.
- H3/card title: 1.15–1.4rem.
- Body: 1rem–1.125rem, line-height 1.6–1.75.
- Caption/metadata: minimal 0.875rem jika tetap terbaca.
- CTA: 0.95–1rem dengan weight 600.

Jangan memakai heading besar pada setiap section. Gunakan hierarki konsisten.

## 4. Spacing, Grid, dan Bentuk

- Gunakan sistem spacing 4/8px.
- Container Bootstrap: `container` untuk konten standar, `container-fluid` hanya untuk section yang memang lebar.
- Lebar teks artikel: sekitar 65–75 karakter per baris.
- Jarak antar section desktop: 88–120px; tablet: 64–80px; mobile: 48–64px.
- Padding kartu: 20–28px.
- Radius kartu: 12–18px.
- Radius tombol: 6–10px; jangan terlalu bulat.
- Border tipis `1px solid var(--hl-gray-200)`.
- Shadow sangat halus; hindari shadow hitam pekat.
- Gunakan rasio gambar konsisten per tipe kartu.

## 5. Design Tokens CSS

```css
:root {
  --hl-bg: #f3f3f0;
  --hl-surface: #ffffff;
  --hl-surface-muted: #e8e8e3;
  --hl-border: #d5d6d0;
  --hl-text: #282a27;
  --hl-text-muted: #62645f;
  --hl-gray: #777873;
  --hl-accent: #7b806c;
  --hl-accent-dark: #545a48;
  --hl-warm: #e9ddcc;
  --hl-footer: #292b28;
  --hl-footer-text: #f4f3ee;

  --hl-radius-sm: 8px;
  --hl-radius-md: 14px;
  --hl-radius-lg: 18px;
  --hl-shadow-card: 0 8px 24px rgb(40 42 39 / 6%);

  --hl-space-1: 0.25rem;
  --hl-space-2: 0.5rem;
  --hl-space-3: 0.75rem;
  --hl-space-4: 1rem;
  --hl-space-6: 1.5rem;
  --hl-space-8: 2rem;
  --hl-space-12: 3rem;
  --hl-space-16: 4rem;
  --hl-space-24: 6rem;
}

body {
  background: var(--hl-bg);
  color: var(--hl-text);
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.65;
}

.hl-section {
  padding-block: clamp(3rem, 7vw, 7rem);
}

.hl-section--surface {
  background: var(--hl-surface);
}

.hl-eyebrow {
  color: var(--hl-accent-dark);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.hl-heading {
  font-family: "Playfair Display", Georgia, serif;
  letter-spacing: -0.025em;
  line-height: 1.12;
}

.hl-card {
  height: 100%;
  overflow: hidden;
  border: 1px solid var(--hl-border);
  border-radius: var(--hl-radius-md);
  background: var(--hl-surface);
  box-shadow: var(--hl-shadow-card);
}

.hl-btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 46px;
  padding: 0.75rem 1.25rem;
  border: 1px solid var(--hl-accent-dark);
  border-radius: var(--hl-radius-sm);
  background: var(--hl-accent-dark);
  color: #fff;
  font-weight: 600;
  text-decoration: none;
}

.hl-btn-primary:hover,
.hl-btn-primary:focus-visible {
  background: var(--hl-text);
  border-color: var(--hl-text);
  color: #fff;
}

:focus-visible {
  outline: 3px solid var(--hl-accent);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Prefix class khusus dengan `hl-` untuk mengurangi konflik dengan Bootstrap. CSS di atas adalah fondasi; cek kontras warna tombol dan teks pada hasil implementasi.

## 6. Navbar

### Desktop
- Tinggi visual sekitar 76–88px.
- Latar `--hl-bg` atau putih semi-solid dengan border bawah tipis.
- Logo kiri, navigasi di tengah/kanan, CTA WhatsApp di ujung kanan.
- Link: Beranda, Tentang, Paket ▾, Portofolio, Blog.
- Dropdown Paket berisi Semua Paket dan kategori yang benar-benar tersedia.
- Status aktif memakai warna teks/garis bawah, bukan hanya perubahan warna samar.
- Navbar sticky opsional; jika sticky, jangan menutup heading ketika anchor link digunakan.

### Mobile
- Logo kiri, tombol menu kanan.
- Gunakan Bootstrap navbar collapse dan tombol dengan `aria-controls`, `aria-expanded`, serta label yang tepat.
- Dropdown Paket bisa dibuka dengan tap dan keyboard.
- CTA WhatsApp tersedia di menu dan/atau sebagai tombol floating yang tidak menutup konten.
- Hindari dua CTA floating yang bertumpuk.

## 7. Beranda — Susunan Visual

### Section 1: Hero
Layout desktop dua kolom:
- Kiri: eyebrow “HAMPERS LEBARAN”, H1, deskripsi 2–3 baris, CTA “Jelajahi Paket” dan “Konsultasi WhatsApp”.
- Kanan: foto hampers unggulan dalam rasio 4:5 atau 5:6, dengan latar krem atau abu-abu lembut.
- Tambahkan label kecil hanya jika faktual, misalnya “Pilihan custom tersedia” jika layanan tersebut memang ada.
- Mobile: teks dan CTA terlebih dahulu, foto sesudahnya atau sesuai hasil uji konversi.

Contoh H1 sementara:
“Berbagi Hangat di Hari Raya dengan Hampers Lebaran”
H1 harus disesuaikan dengan brand, target pasar, dan kata kunci utama yang dipilih.

### Section 2: Kategori
- 3–4 kartu kategori.
- Foto konsisten, judul, deskripsi pendek, tautan eksplisit.
- Gunakan rasio 4:5 atau 3:2 secara konsisten.

### Section 3: Pilihan paket
- 3 atau 4 kartu per baris desktop, 2 tablet, 1 mobile atau 2 mobile bila ukuran cukup.
- Foto, nama, deskripsi ringkas, harga/keterangan harga yang benar, CTA detail.
- Jangan menampilkan “Mulai Rp…” bila harga awal tidak terkonfirmasi.

### Section 4: Keunggulan
- 3 poin dengan ikon sederhana.
- Gunakan manfaat konkret, bukan klaim superlatif tanpa bukti.

### Section 5: Cara pemesanan
- 4–5 langkah bernomor.
- Pada mobile tampil vertikal; jangan membuat diagram yang terlalu rumit.

### Section 6: Portofolio
- Grid foto asli dengan crop konsisten.
- Beri caption dan tautan detail proyek.

### Section 7: Artikel
- 3 kartu dengan gambar, kategori, judul, tanggal, dan tautan “Baca artikel”.

### Section 8: FAQ dan CTA
- Accordion Bootstrap dengan akses keyboard dan judul pertanyaan yang jelas.
- Jawaban lengkap tetap tersedia di HTML yang dapat diakses.
- CTA penutup berwarna aksen gelap dengan teks kontras.

## 8. Halaman Paket dan Detail Produk

### Listing kategori
- Breadcrumb.
- H1 dan intro.
- Filter sederhana hanya bila diperlukan.
- Grid kartu konsisten.
- Area bantuan memilih paket.
- FAQ kategori dan CTA.

### Kartu paket
- Foto produk.
- Nama paket.
- Deskripsi 1–2 kalimat.
- Harga yang dikonfirmasi atau “Hubungi kami untuk penawaran”.
- CTA sekunder “Lihat Detail”.
- Jangan menaruh terlalu banyak badge.

### Detail paket
- Breadcrumb.
- Galeri foto kiri dan informasi paket kanan pada desktop; susun vertikal pada mobile.
- Nama sebagai H1, isi paket, opsi kustomisasi, harga/keterangan harga, minimum order dan lead time jika benar.
- Tombol WhatsApp dengan pesan awal yang menyebut nama paket.
- Bagian “Paket serupa”, FAQ, dan portofolio terkait.
- Tampilkan informasi penting tanpa harus membuka accordion.

## 9. Portofolio

- Gunakan galeri modular dengan grid Bootstrap.
- Foto memiliki crop yang rapi namun tidak menghilangkan detail penting.
- Halaman detail proyek menjelaskan konteks, kebutuhan, pilihan kemasan, proses, dan hasil faktual.
- Minta izin sebelum menampilkan logo, nama klien, atau dokumentasi yang dapat mengidentifikasi pihak lain.
- Hindari angka hasil atau klaim performa yang tidak dapat dibuktikan.

## 10. Blog

### Listing
- Judul halaman, deskripsi, artikel unggulan, kategori, grid artikel, pagination.
- Tidak perlu sidebar pada mobile; sidebar desktop opsional.
- Tanggal terbit dan tanggal pembaruan harus akurat.

### Detail artikel
- Breadcrumb, kategori, H1, penulis/editor, tanggal, gambar utama, isi artikel, daftar isi bila panjang, tautan internal, referensi, FAQ bila bermanfaat, CTA.
- Lebar konten terbatas agar nyaman dibaca.
- Hindari teks abu-abu muda untuk paragraf panjang.
- Gambar diberi caption jika membantu konteks.

## 11. Footer

Gunakan footer charcoal (`--hl-footer`) dengan teks terang. Struktur 3–4 kolom:
1. Logo dan deskripsi brand.
2. Navigasi: Tentang, Paket, Portofolio, Blog.
3. Kontak: WhatsApp dan email/alamat hanya jika terverifikasi.
4. Sosial media dan kebijakan privasi/syarat.

Baris paling bawah: copyright dengan tahun dinamis saat implementasi. Jangan menampilkan alamat fiktif atau ikon sosial media tanpa tautan valid.

## 12. Tombol WhatsApp

URL dasar:
`https://wa.me/6282131087971`

Contoh dengan teks:
`https://wa.me/6282131087971?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20hampers%20Lebaran.`

Pesan detail paket dapat dibentuk dengan `encodeURIComponent()` di JavaScript atau disiapkan sebagai URL statis. Hindari memasukkan data pribadi yang tidak diperlukan.

Gaya:
- Tombol utama: latar accent-dark, teks putih.
- Ikon WhatsApp opsional; jangan mengandalkan ikon tanpa label.
- Hover/focus jelas.
- Floating button di kanan bawah hanya jika tidak menghalangi cookie notice, footer, atau konten pada layar kecil.

## 13. Foto dan Art Direction

Foto harus menggambarkan produk yang benar-benar dijual.
- Pencahayaan lembut, bayangan natural, latar abu-abu hangat/krem.
- Palet properti: kain linen, kertas tekstur, pita netral, elemen Lebaran yang subtil.
- Variasikan angle: depan, 45 derajat, detail isi, kemasan terbuka, ukuran di tangan jika sesuai, dan foto paket lengkap.
- Jangan mengganti warna/isi produk sampai menyesatkan.
- Simpan master resolusi tinggi; sajikan varian ukuran yang sesuai untuk web.
- Format WebP/AVIF bila kompatibel, fallback bila dibutuhkan.
- Beri `width` dan `height`; lazy-load gambar non-kritis.
- Hero/LCP image sebaiknya tidak lazy-load dan dapat diberi `fetchpriority="high"` jika hasil pengukuran mendukung.
- Alt text menjelaskan isi foto secara alami, bukan menjejalkan keyword.

## 14. Responsive Behavior

Breakpoints Bootstrap sebagai baseline:
- xs: di bawah 576px
- sm: mulai 576px
- md: mulai 768px
- lg: mulai 992px
- xl: mulai 1200px
- xxl: mulai 1400px

Uji secara nyata pada 360, 390, 768, 1024, dan 1440px.
- Pastikan navbar tidak overflow.
- Grid turun dengan rapi.
- Tombol utama minimal nyaman disentuh.
- Foto tidak gepeng.
- Tidak ada horizontal scroll.
- Floating CTA tidak menutup tombol penting.
- Heading panjang membungkus dengan baik.

## 15. Interaksi dan Motion

- Animasi halus 150–250ms untuk hover/focus bila bermanfaat.
- Jangan menunda konten utama dengan intro animation.
- Hindari carousel otomatis; jika digunakan, sediakan kontrol yang jelas.
- Jangan menyampaikan informasi hanya melalui hover.
- Hormati `prefers-reduced-motion`.
- Semua elemen interaktif dapat digunakan dengan keyboard.
- Dropdown, modal, dan accordion menggunakan komponen Bootstrap yang sesuai dan diuji.

## 16. Komponen yang Perlu Dibangun

- `Navbar`
- `PackageDropdown`
- `WhatsAppCTA`
- `HeroSection`
- `SectionHeading`
- `CategoryCard`
- `PackageCard`
- `PortfolioCard`
- `BlogCard`
- `Breadcrumb`
- `FAQAccordion`
- `ContactBriefForm` (opsional)
- `Footer`
- `FloatingWhatsAppButton` (opsional)
- `NotFoundPage`

Jika menggunakan HTML statis, komponen di atas dapat berupa potongan markup yang konsisten, bukan harus memakai framework JavaScript.

## 17. Struktur File (Flat Root)

```text
hampers-lebaran/
├── index.html
├── tentang.html
├── paket.html
├── paket-hampers-premium.html
├── paket-hampers-kue-camilan.html
├── paket-hampers-perlengkapan-ibadah.html
├── paket-hampers-custom.html
├── portofolio.html
├── blog.html
├── blog-tips-memilih-hampers-lebaran.html
├── blog-kue-kering-lebaran-populer.html
├── blog-hampers-lebaran-korporat.html
├── blog-tren-kemasan-hampers.html
├── faq.html
├── kontak.html
├── kebijakan-privasi.html
├── syarat-ketentuan.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
├── robots.txt
└── sitemap.xml
```

Untuk situs kecil, struktur ini bisa disederhanakan. Pastikan path aset dan canonical sesuai URL final setelah deployment.

## 18. Implementasi Bootstrap dan CSS Murni

- Pilih versi Bootstrap stable yang tersedia saat mulai implementasi; hindari versi alpha/beta untuk produksi kecuali memang sengaja diuji.
- Muat Bootstrap CSS dan JS bundle resmi, lalu `assets/css/style.css` setelah Bootstrap.
- JavaScript hanya untuk interaksi yang diperlukan, misalnya dropdown Bootstrap dan pesan CTA dinamis.
- Jangan menambah framework CSS lain.
- Hindari inline CSS berulang; gunakan token dan class proyek.
- Jangan mengubah style bawaan semua `h1`, `a`, `button`, atau `.container` secara agresif.
- Periksa dokumentasi resmi Bootstrap untuk sintaks komponen sesuai versi yang dipilih.

## 19. Pemeriksaan Sebelum Launch

- [ ] Warna dan tipografi konsisten.
- [ ] Kontras teks, focus ring, dan target sentuh memadai.
- [ ] Navbar/dropdown berfungsi di desktop dan mobile.
- [ ] CTA WhatsApp diuji di desktop dan ponsel.
- [ ] Foto asli, tidak rusak, rasio tepat, alt relevan.
- [ ] Tidak ada konten dummy, harga palsu, atau tautan kosong.
- [ ] Tidak ada horizontal scroll.
- [ ] Halaman legal dan kontak benar.
- [ ] Metadata, canonical, Open Graph, dan JSON-LD sesuai tiap halaman.
- [ ] Sitemap, robots, redirect, HTTPS, dan 404 diuji.
- [ ] Reduced motion dan navigasi keyboard diuji.
- [ ] Lakukan audit Lighthouse/PageSpeed dan perbaiki hambatan utama.
