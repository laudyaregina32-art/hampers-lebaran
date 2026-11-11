# 📊 Laporan Audit Structured Data & JSON-LD
**Proyek:** Hampers Lebaran (*hamperslebaran.biz.id*)  
**Tanggal Audit:** 2026-11-11 03:17:20 WIB  
**Engine Validasi:** `@adobe/structured-data-validator` v1.7.0, `@marbec/web-auto-extractor` v2.2.1, & Schema.org Specification  

---

> [!IMPORTANT]
> **Catatan Validasi & Disclaimer:**  
> Hasil audit ini merupakan validasi lokal terotomatisasi berdasarkan spesifikasi resmi **Schema.org** dan spesifikasi **Google Rich Results Guidelines** menggunakan package `@adobe/structured-data-validator`.  
> Sesuai ketentuan, validasi lokal ini **tidak menyatakan kelulusan resmi Google Rich Results Test**. Pengujian resmi Rich Results tetap perlu divalidasi melalui [Google Rich Results Test](https://search.google.com/test/rich-results) atau Google Search Console saat website live di domain publik.

---

## 1. Ringkasan Eksekutif (Executive Summary)

| Metrik Audit | Nilai | Status |
| :--- | :---: | :--- |
| **Total File HTML Di-scan** | **57** | Tercover seluruhnya secara rekursif |
| **Halaman dengan JSON-LD** | **56** | Halaman utama, produk, blog, & info |
| **Total Error Kritis (Errors)** | **0** | ✅ 0 Error (Sintaks valid & bersih) |
| **Total Warnings / Saran Optimasi** | **99** | ⚠️ Properti rekomendasi Google & penempatan skema |
| **Status Kesiapan SERP Lokal** | **Sangat Baik (Siap Optimasi)** | Struktur data valid & siap tahap penyempurnaan |

---

## 2. Distribusi Tipe Schema Terdeteksi

Berikut adalah ragam entitas structured data yang diterapkan pada situs:

| Tipe Schema (@type) | Jumlah Halaman Terkait | Peruntukan Halaman |
| :--- | :---: | :--- |
| `ListItem` | 56 | Navigasi & Hierarki Breadcrumb |
| `BreadcrumbList` | 55 | Navigasi & Hierarki Breadcrumb |
| `WebPage` | 46 | Struktur Halaman Web |
| `FAQPage` | 43 | Halaman Tanya Jawab Interaktif |
| `Question` | 43 | Halaman Tanya Jawab Interaktif |
| `Answer` | 43 | Halaman Tanya Jawab Interaktif |
| `Organization` | 29 | Identitas Bisnis & Brand |
| `ImageObject` | 25 | Entitas Pendukung |
| `WebSite` | 24 | Struktur Halaman Web |
| `Person` | 23 | Entitas Pendukung |
| `BlogPosting` | 19 | Artikel Blog & Edukasi |
| `Thing` | 14 | Entitas Pendukung |
| `Article` | 8 | Artikel Blog & Edukasi |
| `MerchantReturnPolicy` | 4 | Entitas Pendukung |
| `OfferShippingDetails` | 4 | Entitas Pendukung |
| `MonetaryAmount` | 4 | Entitas Pendukung |
| `DefinedRegion` | 4 | Entitas Pendukung |
| `ShippingDeliveryTime` | 4 | Entitas Pendukung |
| `QuantitativeValue` | 4 | Entitas Pendukung |
| `Product` | 4 | Katalog & Penjualan Produk |
| `Brand` | 4 | Entitas Pendukung |
| `Offer` | 4 | Katalog & Penjualan Produk |
| `AggregateRating` | 4 | Entitas Pendukung |
| `Review` | 4 | Entitas Pendukung |
| `Rating` | 4 | Entitas Pendukung |
| `CollectionPage` | 3 | Entitas Pendukung |
| `LocalBusiness` | 2 | Identitas Bisnis & Brand |
| `PostalAddress` | 2 | Entitas Pendukung |
| `GeoCoordinates` | 2 | Entitas Pendukung |
| `OpeningHoursSpecification` | 2 | Entitas Pendukung |
| `Service` | 2 | Entitas Pendukung |
| `ItemList` | 2 | Entitas Pendukung |
| `AdministrativeArea` | 1 | Entitas Pendukung |
| `PriceSpecification` | 1 | Entitas Pendukung |
| `ContactPage` | 1 | Struktur Halaman Web |
| `Country` | 1 | Entitas Pendukung |
| `BusinessAudience` | 1 | Entitas Pendukung |
| `AggregateOffer` | 1 | Katalog & Penjualan Produk |
| `ContactPoint` | 1 | Entitas Pendukung |
| `AboutPage` | 1 | Struktur Halaman Web |

---

## 3. Hasil Audit Rinci per Halaman

### 📄 [blog/bisnis-hampers-lebaran.html](file:///C:/hamperslebaran/blog/bisnis-hampers-lebaran.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/blog/bisnis-hampers-lebaran`
- **Tipe Schema**: `BlogPosting`, `ImageObject`, `Person`, `Organization`, `WebPage`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [blog/cara-membuat-hampers-lebaran-unik.html](file:///C:/hamperslebaran/blog/cara-membuat-hampers-lebaran-unik.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/blog/cara-membuat-hampers-lebaran-unik`
- **Tipe Schema**: `BlogPosting`, `ImageObject`, `Person`, `Organization`, `WebPage`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [blog/hal-penting-sebelum-memesan-hampers-lebaran.html](file:///C:/hamperslebaran/blog/hal-penting-sebelum-memesan-hampers-lebaran.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/blog/hal-penting-sebelum-memesan-hampers-lebaran`
- **Tipe Schema**: `BlogPosting`, `ImageObject`, `Person`, `Organization`, `WebPage`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [blog/hampers-lebaran-custom.html](file:///C:/hamperslebaran/blog/hampers-lebaran-custom.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/blog/hampers-lebaran-custom`
- **Tipe Schema**: `BlogPosting`, `ImageObject`, `Person`, `Organization`, `WebPage`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [blog/hampers-lebaran-korporat.html](file:///C:/hamperslebaran/blog/hampers-lebaran-korporat.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/blog/hampers-lebaran-korporat`
- **Tipe Schema**: `BlogPosting`, `ImageObject`, `Person`, `Organization`, `WebPage`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [blog/hampers-lebaran-unik-2027.html](file:///C:/hamperslebaran/blog/hampers-lebaran-unik-2027.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/blog/hampers-lebaran-unik-2027`
- **Tipe Schema**: `BlogPosting`, `ImageObject`, `Person`, `Organization`, `WebPage`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [blog/hampers-lebaran-untuk-keluarga-sahabat-rekan-kerja.html](file:///C:/hamperslebaran/blog/hampers-lebaran-untuk-keluarga-sahabat-rekan-kerja.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/blog/hampers-lebaran-untuk-keluarga-sahabat-rekan-kerja`
- **Tipe Schema**: `BlogPosting`, `ImageObject`, `Person`, `Organization`, `WebPage`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [blog/ide-hampers-lebaran-malang.html](file:///C:/hamperslebaran/blog/ide-hampers-lebaran-malang.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/blog/ide-hampers-lebaran-malang`
- **Tipe Schema**: `BlogPosting`, `ImageObject`, `Person`, `Organization`, `WebPage`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [blog/ide-hampers-lebaran-unik-anti-mainstream.html](file:///C:/hamperslebaran/blog/ide-hampers-lebaran-unik-anti-mainstream.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/blog/ide-hampers-lebaran-unik-anti-mainstream`
- **Tipe Schema**: `BlogPosting`, `ImageObject`, `Person`, `Organization`, `WebPage`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [blog/kue-kering-lebaran-populer.html](file:///C:/hamperslebaran/blog/kue-kering-lebaran-populer.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/blog/kue-kering-lebaran-populer`
- **Tipe Schema**: `BlogPosting`, `Person`, `Organization`, `ImageObject`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [blog/pemesanan-hampers-lebaran-jumlah-besar.html](file:///C:/hamperslebaran/blog/pemesanan-hampers-lebaran-jumlah-besar.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/blog/pemesanan-hampers-lebaran-jumlah-besar`
- **Tipe Schema**: `BlogPosting`, `ImageObject`, `Person`, `Organization`, `WebPage`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [blog/perhitungan-hpp-hampers-lebaran.html](file:///C:/hamperslebaran/blog/perhitungan-hpp-hampers-lebaran.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/blog/perhitungan-hpp-hampers-lebaran`
- **Tipe Schema**: `BlogPosting`, `ImageObject`, `Person`, `Organization`, `WebPage`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [blog/persiapan-produk-modal-bisnis-hampers-lebaran.html](file:///C:/hamperslebaran/blog/persiapan-produk-modal-bisnis-hampers-lebaran.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/blog/persiapan-produk-modal-bisnis-hampers-lebaran`
- **Tipe Schema**: `BlogPosting`, `ImageObject`, `Person`, `Organization`, `WebPage`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [blog/produsen-hampers-lebaran.html](file:///C:/hamperslebaran/blog/produsen-hampers-lebaran.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/blog/produsen-hampers-lebaran`
- **Tipe Schema**: `BlogPosting`, `ImageObject`, `Person`, `Organization`, `WebPage`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [blog/rekomendasi-hampers-lebaran-di-malang.html](file:///C:/hamperslebaran/blog/rekomendasi-hampers-lebaran-di-malang.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/blog/rekomendasi-hampers-lebaran-di-malang`
- **Tipe Schema**: `BlogPosting`, `ImageObject`, `Person`, `Organization`, `WebPage`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [blog/supplier-produk-kemasan-hampers-lebaran.html](file:///C:/hamperslebaran/blog/supplier-produk-kemasan-hampers-lebaran.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/blog/supplier-produk-kemasan-hampers-lebaran`
- **Tipe Schema**: `BlogPosting`, `ImageObject`, `Person`, `Organization`, `WebPage`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [blog/tas-hampers-lebaran.html](file:///C:/hamperslebaran/blog/tas-hampers-lebaran.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/blog/tas-hampers-lebaran`
- **Tipe Schema**: `BlogPosting`, `ImageObject`, `Person`, `Organization`, `WebPage`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [blog/tips-memilih-hampers-lebaran.html](file:///C:/hamperslebaran/blog/tips-memilih-hampers-lebaran.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/blog/tips-memilih-hampers-lebaran`
- **Tipe Schema**: `BlogPosting`, `ImageObject`, `Person`, `Organization`, `WebPage`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [blog/tren-kemasan-hampers.html](file:///C:/hamperslebaran/blog/tren-kemasan-hampers.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/blog/tren-kemasan-hampers`
- **Tipe Schema**: `BlogPosting`, `ImageObject`, `Person`, `Organization`, `WebPage`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [blog.html](file:///C:/hamperslebaran/blog.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/blog`
- **Tipe Schema**: `CollectionPage`, `WebSite`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [faq.html](file:///C:/hamperslebaran/faq.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/faq`
- **Tipe Schema**: `FAQPage`, `Question`, `Answer`, `BreadcrumbList`, `ListItem`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [googleda0c1c7a31696976.html](file:///C:/hamperslebaran/googleda0c1c7a31696976.html)

- **Status**: 🟡 **WARNING**
- **Canonical Link**: *Tidak ditemukan*
- **Tipe Schema**: *Tidak ada schema*
- **Jumlah Blok JSON-LD**: 0

#### ⚠️ Peringatan & Rekomendasi Validator (1)
| Kategori | Bidang/Properti | Keterangan Masalah |
| :--- | :--- | :--- |
| info | `-` | File verifikasi kepemilikan Google Search Console (tidak memerlukan JSON-LD). |

---

### 📄 [hampers-lebaran-100-ribuan.html](file:///C:/hamperslebaran/hampers-lebaran-100-ribuan.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/hampers-lebaran-100-ribuan`
- **Tipe Schema**: `WebPage`, `WebSite`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [hampers-lebaran-250-ribuan.html](file:///C:/hamperslebaran/hampers-lebaran-250-ribuan.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/hampers-lebaran-250-ribuan`
- **Tipe Schema**: `WebPage`, `WebSite`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [hampers-lebaran-custom-box.html](file:///C:/hamperslebaran/hampers-lebaran-custom-box.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/hampers-lebaran-custom-box`
- **Tipe Schema**: `WebPage`, `WebSite`, `BreadcrumbList`, `ListItem`, `Thing`, `Article`, `Organization`, `ImageObject`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [hampers-lebaran-custom-logo.html](file:///C:/hamperslebaran/hampers-lebaran-custom-logo.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/hampers-lebaran-custom-logo`
- **Tipe Schema**: `WebPage`, `WebSite`, `BreadcrumbList`, `ListItem`, `Thing`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [hampers-lebaran-custom.html](file:///C:/hamperslebaran/hampers-lebaran-custom.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/hampers-lebaran-custom`
- **Tipe Schema**: `WebPage`, `WebSite`, `BreadcrumbList`, `ListItem`, `Thing`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [hampers-lebaran-isi-cokelat.html](file:///C:/hamperslebaran/hampers-lebaran-isi-cokelat.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/hampers-lebaran-isi-cokelat`
- **Tipe Schema**: `Article`, `WebSite`, `WebPage`, `Organization`, `Thing`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [hampers-lebaran-isi-kurma.html](file:///C:/hamperslebaran/hampers-lebaran-isi-kurma.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/hampers-lebaran-isi-kurma`
- **Tipe Schema**: `Article`, `WebSite`, `WebPage`, `Thing`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [hampers-lebaran-kartu-ucapan.html](file:///C:/hamperslebaran/hampers-lebaran-kartu-ucapan.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/hampers-lebaran-kartu-ucapan`
- **Tipe Schema**: `WebPage`, `WebSite`, `BreadcrumbList`, `ListItem`, `Thing`, `Article`, `Organization`, `ImageObject`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [hampers-lebaran-kemasan-unik.html](file:///C:/hamperslebaran/hampers-lebaran-kemasan-unik.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/hampers-lebaran-kemasan-unik`
- **Tipe Schema**: `WebPage`, `WebSite`, `BreadcrumbList`, `ListItem`, `Thing`, `Article`, `Organization`, `ImageObject`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [hampers-lebaran-malang.html](file:///C:/hamperslebaran/hampers-lebaran-malang.html)

- **Status**: 🟡 **WARNING**
- **Canonical Link**: `https://hamperslebaran.biz.id/hampers-lebaran-malang`
- **Tipe Schema**: `LocalBusiness`, `PostalAddress`, `GeoCoordinates`, `OpeningHoursSpecification`, `WebPage`, `WebSite`, `BreadcrumbList`, `ListItem`, `Service`, `AdministrativeArea`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

#### ⚠️ Peringatan & Rekomendasi Validator (1)
| Kategori | Bidang/Properti | Keterangan Masalah |
| :--- | :--- | :--- |
| duplicate_id | `@id` | ID entitas "https://hamperslebaran.biz.id/#localbusiness" didefinisikan 2 kali dalam satu halaman. |

#### 💡 Saran Tindakan Perbaikan
- ID entitas "https://hamperslebaran.biz.id/#localbusiness" didefinisikan lebih dari sekali dengan properti berbeda. Satukan definisi entitas atau gunakan ID yang berbeda.

---

### 📄 [hampers-lebaran-non-kue.html](file:///C:/hamperslebaran/hampers-lebaran-non-kue.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/hampers-lebaran-non-kue`
- **Tipe Schema**: `Article`, `WebSite`, `WebPage`, `Organization`, `Thing`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [hampers-lebaran-perusahaan.html](file:///C:/hamperslebaran/hampers-lebaran-perusahaan.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/hampers-lebaran-perusahaan`
- **Tipe Schema**: `WebPage`, `WebSite`, `BreadcrumbList`, `ListItem`, `Thing`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [hampers-lebaran-untuk-karyawan.html](file:///C:/hamperslebaran/hampers-lebaran-untuk-karyawan.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/hampers-lebaran-untuk-karyawan`
- **Tipe Schema**: `WebPage`, `WebSite`, `BreadcrumbList`, `ListItem`, `Thing`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [hampers-lebaran-untuk-klien.html](file:///C:/hamperslebaran/hampers-lebaran-untuk-klien.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/hampers-lebaran-untuk-klien`
- **Tipe Schema**: `WebPage`, `WebSite`, `BreadcrumbList`, `ListItem`, `Thing`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [harga-hampers-lebaran.html](file:///C:/hamperslebaran/harga-hampers-lebaran.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/harga-hampers-lebaran`
- **Tipe Schema**: `WebSite`, `Organization`, `WebPage`, `Thing`, `BreadcrumbList`, `ListItem`, `Article`, `ImageObject`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [index.html](file:///C:/hamperslebaran/index.html)

- **Status**: 🟡 **WARNING**
- **Canonical Link**: `https://hamperslebaran.biz.id/`
- **Tipe Schema**: `LocalBusiness`, `PostalAddress`, `GeoCoordinates`, `OpeningHoursSpecification`, `MerchantReturnPolicy`, `OfferShippingDetails`, `MonetaryAmount`, `DefinedRegion`, `ShippingDeliveryTime`, `QuantitativeValue`, `WebSite`, `WebPage`, `ItemList`, `ListItem`, `Product`, `Brand`, `Offer`, `AggregateRating`, `Review`, `Rating`, `Person`, `PriceSpecification`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

#### ⚠️ Peringatan & Rekomendasi Validator (58)
| Kategori | Bidang/Properti | Keterangan Masalah |
| :--- | :--- | :--- |
| schemaOrg | `shippingDetails` | Property "shippingDetails" for type "LocalBusiness" is not supported by the schema.org specification |
| adobe_validator | `addressRegion, postalCode` | One of the following conditions needs to be met: Missing field "addressRegion" (optional) or Missing field "postalCode" (optional) |
| adobe_validator | `audience` | Missing field "audience" (optional) |
| adobe_validator | `color` | Missing field "color" (optional) |
| adobe_validator | `hasCertification` | Missing field "hasCertification" (optional) |
| adobe_validator | `inProductGroupWithID` | Missing field "inProductGroupWithID" (optional) |
| adobe_validator | `isVariantOf` | Missing field "isVariantOf" (optional) |
| adobe_validator | `material` | Missing field "material" (optional) |
| adobe_validator | `mpn` | Missing field "mpn" (optional) |
| adobe_validator | `pattern` | Missing field "pattern" (optional) |
| *Lainnya* | - | *...dan 48 peringatan sejenis lainnya.* |

#### 💡 Saran Tindakan Perbaikan
- Pindahkan atau sesuaikan properti "shippingDetails". Pastikan properti ditempatkan pada tipe Schema yang tepat (misal: hasMerchantReturnPolicy dan shippingDetails disarankan berada di dalam Offer produk).
- Periksa kembali dokumentasi Schema.org atau Google Search Central untuk spesifikasi properti yang valid.
- Tambahkan properti "worstRating": "1" pada elemen Rating untuk memperjelas skala penilaian.

---

### 📄 [isi-hampers-lebaran.html](file:///C:/hamperslebaran/isi-hampers-lebaran.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/isi-hampers-lebaran`
- **Tipe Schema**: `Article`, `WebSite`, `WebPage`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [kebijakan-privasi.html](file:///C:/hamperslebaran/kebijakan-privasi.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/kebijakan-privasi`
- **Tipe Schema**: `WebPage`, `BreadcrumbList`, `ListItem`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [kontak.html](file:///C:/hamperslebaran/kontak.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/kontak`
- **Tipe Schema**: `ContactPage`, `BreadcrumbList`, `ListItem`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [paket/hampers-custom.html](file:///C:/hamperslebaran/paket/hampers-custom.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/paket/hampers-custom`
- **Tipe Schema**: `Service`, `ImageObject`, `Organization`, `Country`, `BusinessAudience`, `AggregateOffer`, `BreadcrumbList`, `ListItem`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [paket/hampers-kue-camilan.html](file:///C:/hamperslebaran/paket/hampers-kue-camilan.html)

- **Status**: 🟡 **WARNING**
- **Canonical Link**: `https://hamperslebaran.biz.id/paket/hampers-kue-camilan`
- **Tipe Schema**: `Product`, `Brand`, `AggregateRating`, `Review`, `Person`, `Rating`, `Offer`, `Organization`, `MerchantReturnPolicy`, `MonetaryAmount`, `OfferShippingDetails`, `DefinedRegion`, `ShippingDeliveryTime`, `QuantitativeValue`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

#### ⚠️ Peringatan & Rekomendasi Validator (13)
| Kategori | Bidang/Properti | Keterangan Masalah |
| :--- | :--- | :--- |
| adobe_validator | `audience` | Missing field "audience" (optional) |
| adobe_validator | `color` | Missing field "color" (optional) |
| adobe_validator | `hasCertification` | Missing field "hasCertification" (optional) |
| adobe_validator | `inProductGroupWithID` | Missing field "inProductGroupWithID" (optional) |
| adobe_validator | `isVariantOf` | Missing field "isVariantOf" (optional) |
| adobe_validator | `material` | Missing field "material" (optional) |
| adobe_validator | `pattern` | Missing field "pattern" (optional) |
| adobe_validator | `size` | Missing field "size" (optional) |
| adobe_validator | `subjectOf` | Missing field "subjectOf" (optional) |
| adobe_validator | `gtin, gtin8, gtin12, gtin13, gtin14, isbn` | Missing one of field "gtin", "gtin8", "gtin12", "gtin13", "gtin14", "isbn" on either product or all offers |
| *Lainnya* | - | *...dan 3 peringatan sejenis lainnya.* |

#### 💡 Saran Tindakan Perbaikan
- Periksa kembali dokumentasi Schema.org atau Google Search Central untuk spesifikasi properti yang valid.
- Tambahkan properti "worstRating": "1" pada elemen Rating untuk memperjelas skala penilaian.

---

### 📄 [paket/hampers-perlengkapan-ibadah.html](file:///C:/hamperslebaran/paket/hampers-perlengkapan-ibadah.html)

- **Status**: 🟡 **WARNING**
- **Canonical Link**: `https://hamperslebaran.biz.id/paket/hampers-perlengkapan-ibadah`
- **Tipe Schema**: `Product`, `Brand`, `AggregateRating`, `Review`, `Person`, `Rating`, `Offer`, `Organization`, `MerchantReturnPolicy`, `MonetaryAmount`, `OfferShippingDetails`, `DefinedRegion`, `ShippingDeliveryTime`, `QuantitativeValue`, `BreadcrumbList`, `ListItem`
- **Jumlah Blok JSON-LD**: 1

#### ⚠️ Peringatan & Rekomendasi Validator (13)
| Kategori | Bidang/Properti | Keterangan Masalah |
| :--- | :--- | :--- |
| adobe_validator | `audience` | Missing field "audience" (optional) |
| adobe_validator | `color` | Missing field "color" (optional) |
| adobe_validator | `hasCertification` | Missing field "hasCertification" (optional) |
| adobe_validator | `inProductGroupWithID` | Missing field "inProductGroupWithID" (optional) |
| adobe_validator | `isVariantOf` | Missing field "isVariantOf" (optional) |
| adobe_validator | `material` | Missing field "material" (optional) |
| adobe_validator | `pattern` | Missing field "pattern" (optional) |
| adobe_validator | `size` | Missing field "size" (optional) |
| adobe_validator | `subjectOf` | Missing field "subjectOf" (optional) |
| adobe_validator | `gtin, gtin8, gtin12, gtin13, gtin14, isbn` | Missing one of field "gtin", "gtin8", "gtin12", "gtin13", "gtin14", "isbn" on either product or all offers |
| *Lainnya* | - | *...dan 3 peringatan sejenis lainnya.* |

#### 💡 Saran Tindakan Perbaikan
- Periksa kembali dokumentasi Schema.org atau Google Search Central untuk spesifikasi properti yang valid.
- Tambahkan properti "worstRating": "1" pada elemen Rating untuk memperjelas skala penilaian.

---

### 📄 [paket/hampers-premium.html](file:///C:/hamperslebaran/paket/hampers-premium.html)

- **Status**: 🟡 **WARNING**
- **Canonical Link**: `https://hamperslebaran.biz.id/paket/hampers-premium`
- **Tipe Schema**: `Organization`, `ImageObject`, `ContactPoint`, `WebSite`, `WebPage`, `BreadcrumbList`, `ListItem`, `Product`, `Brand`, `Offer`, `OfferShippingDetails`, `MonetaryAmount`, `DefinedRegion`, `ShippingDeliveryTime`, `QuantitativeValue`, `MerchantReturnPolicy`, `AggregateRating`, `Review`, `Person`, `Rating`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

#### ⚠️ Peringatan & Rekomendasi Validator (13)
| Kategori | Bidang/Properti | Keterangan Masalah |
| :--- | :--- | :--- |
| adobe_validator | `audience` | Missing field "audience" (optional) |
| adobe_validator | `color` | Missing field "color" (optional) |
| adobe_validator | `hasCertification` | Missing field "hasCertification" (optional) |
| adobe_validator | `inProductGroupWithID` | Missing field "inProductGroupWithID" (optional) |
| adobe_validator | `isVariantOf` | Missing field "isVariantOf" (optional) |
| adobe_validator | `material` | Missing field "material" (optional) |
| adobe_validator | `pattern` | Missing field "pattern" (optional) |
| adobe_validator | `size` | Missing field "size" (optional) |
| adobe_validator | `subjectOf` | Missing field "subjectOf" (optional) |
| adobe_validator | `gtin, gtin8, gtin12, gtin13, gtin14, isbn` | Missing one of field "gtin", "gtin8", "gtin12", "gtin13", "gtin14", "isbn" on either product or all offers |
| *Lainnya* | - | *...dan 3 peringatan sejenis lainnya.* |

#### 💡 Saran Tindakan Perbaikan
- Periksa kembali dokumentasi Schema.org atau Google Search Central untuk spesifikasi properti yang valid.
- Tambahkan properti "worstRating": "1" pada elemen Rating untuk memperjelas skala penilaian.

---

### 📄 [paket.html](file:///C:/hamperslebaran/paket.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/paket`
- **Tipe Schema**: `CollectionPage`, `WebSite`, `BreadcrumbList`, `ListItem`, `ItemList`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [pengadaan-hampers-lebaran.html](file:///C:/hamperslebaran/pengadaan-hampers-lebaran.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/pengadaan-hampers-lebaran`
- **Tipe Schema**: `WebPage`, `WebSite`, `BreadcrumbList`, `ListItem`, `Thing`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [portofolio/hampers-custom-branding-korporat.html](file:///C:/hamperslebaran/portofolio/hampers-custom-branding-korporat.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/portofolio/hampers-custom-branding-korporat`
- **Tipe Schema**: `WebPage`, `BreadcrumbList`, `ListItem`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [portofolio/hampers-keluarga-edisi-lebaran.html](file:///C:/hamperslebaran/portofolio/hampers-keluarga-edisi-lebaran.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/portofolio/hampers-keluarga-edisi-lebaran`
- **Tipe Schema**: `WebPage`, `BreadcrumbList`, `ListItem`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [portofolio/hampers-korporat-akhir-tahun.html](file:///C:/hamperslebaran/portofolio/hampers-korporat-akhir-tahun.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/portofolio/hampers-korporat-akhir-tahun`
- **Tipe Schema**: `WebPage`, `BreadcrumbList`, `ListItem`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [portofolio/hampers-kue-basket-rotan.html](file:///C:/hamperslebaran/portofolio/hampers-kue-basket-rotan.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/portofolio/hampers-kue-basket-rotan`
- **Tipe Schema**: `WebPage`, `BreadcrumbList`, `ListItem`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [portofolio/hampers-lebaran-instansi.html](file:///C:/hamperslebaran/portofolio/hampers-lebaran-instansi.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/portofolio/hampers-lebaran-instansi`
- **Tipe Schema**: `WebPage`, `BreadcrumbList`, `ListItem`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [portofolio/hampers-perlengkapan-ibadah-premium.html](file:///C:/hamperslebaran/portofolio/hampers-perlengkapan-ibadah-premium.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/portofolio/hampers-perlengkapan-ibadah-premium`
- **Tipe Schema**: `WebPage`, `BreadcrumbList`, `ListItem`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [portofolio.html](file:///C:/hamperslebaran/portofolio.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/portofolio`
- **Tipe Schema**: `CollectionPage`, `WebSite`, `BreadcrumbList`, `ListItem`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [supplier-hampers-lebaran.html](file:///C:/hamperslebaran/supplier-hampers-lebaran.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/supplier-hampers-lebaran`
- **Tipe Schema**: `WebPage`, `WebSite`, `BreadcrumbList`, `ListItem`, `Thing`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [syarat-ketentuan.html](file:///C:/hamperslebaran/syarat-ketentuan.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/syarat-ketentuan`
- **Tipe Schema**: `WebPage`, `BreadcrumbList`, `ListItem`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [tentang.html](file:///C:/hamperslebaran/tentang.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/tentang`
- **Tipe Schema**: `AboutPage`, `WebSite`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

## 4. Evaluasi Placeholder, Canonical, & Relasi Antar-Entitas

### A. Deteksi Nilai Placeholder
- **Nomor Telepon Mock**: Terdeteksi penggunaan format mock `+6281234567890` pada properti `telephone` di entitas `LocalBusiness` (`index.html`).
- **Domain & Email**: Semua URL domain telah konsisten menggunakan protokol HTTPS `https://hamperslebaran.biz.id/`. Tidak ditemukan URL dummy seperti `example.com` atau `localhost`.

### B. Konsistensi Tag Canonical
- Tag canonical pada 17 halaman HTML telah mengarah ke URL absolut `https://hamperslebaran.biz.id/...` dengan format seragam dan konsisten.
- Seluruh URL di entitas `WebPage` selaras dengan tag canonical yang dideklarasikan pada `<head>`.

### C. Hubungan Antar-Entitas (@graph & @id)
- **ID Bersama Organisasi**: Entitas bisnis didefinisikan dengan `@id: "https://hamperslebaran.biz.id/#organization"` dan direferensikan secara konsisten oleh entitas lain (`WebSite.publisher`, `Product.brand`).
- **Hierarki Breadcrumb**: Entitas `BreadcrumbList` -> `ListItem` -> `item` memiliki nomor urut `position` sekuensial yang rapi (1, 2, 3).
- **Temuan Rekomendasi Google Merchant**: Properti `shippingDetails` dan `hasMerchantReturnPolicy` yang diletakkan langsung di level `LocalBusiness` terdeteksi sebagai properti yang tidak didukung langsung dalam spesifikasi dasar `LocalBusiness` Schema.org. Menurut pedoman Google Merchant Listing, `shippingDetails` dan `hasMerchantReturnPolicy` paling ideal diletakkan di dalam objek `Offer` pada masing-masing produk (`Product.offers`).
- **Rating Optional Fields**: Validator mendeteksi field `worstRating` (optional) belum disertakan pada objek `Rating` (nilai default diasumsikan 1 oleh Google, namun menambahkan `"worstRating": "1"` membuat spesifikasi rating lengkap 100%).

---

## 5. Rencana Perbaikan Bertahap (Action Plan)

1. **Prioritas 1 (Penyelarasan Schema.org)**:
   - Pindahkan deklarasi `shippingDetails` dan `hasMerchantReturnPolicy` dari root `LocalBusiness` ke dalam properti `offers` di masing-masing penawaran produk (`Product` -> `offers`).
2. **Prioritas 2 (Kelengkapan Rating Review)**:
   - Tambahkan `"worstRating": "1"` di setiap elemen `reviewRating` dan `aggregateRating` agar tidak memicu notice opsional validator.
3. **Prioritas 3 (Data Kontak Resmi)**:
   - Ganti nomor telepon mock `+6281234567890` dengan nomor kontak WhatsApp Business resmi toko hampers sebelum rilis komersial.
4. **Prioritas 4 (Validasi Lapangan)**:
   - Uji URL publik melalui Google Rich Results Test dan Google Search Console setelah website di-deploy ke domain aktif.

---
*Laporan ini dibuat otomatis oleh skrip `scripts/audit-schema.mjs`.*
