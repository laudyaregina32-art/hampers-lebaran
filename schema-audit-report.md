# 📊 Laporan Audit Structured Data & JSON-LD
**Proyek:** Hampers Lebaran (*hamperslebaran.biz.id*)  
**Tanggal Audit:** 2026-10-23 15:48:18 WIB  
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
| **Total File HTML Di-scan** | **18** | Tercover seluruhnya secara rekursif |
| **Halaman dengan JSON-LD** | **17** | Halaman utama, produk, blog, & info |
| **Total Error Kritis (Errors)** | **0** | ✅ 0 Error (Sintaks valid & bersih) |
| **Total Warnings / Saran Optimasi** | **98** | ⚠️ Properti rekomendasi Google & penempatan skema |
| **Status Kesiapan SERP Lokal** | **Sangat Baik (Siap Optimasi)** | Struktur data valid & siap tahap penyempurnaan |

---

## 2. Distribusi Tipe Schema Terdeteksi

Berikut adalah ragam entitas structured data yang diterapkan pada situs:

| Tipe Schema (@type) | Jumlah Halaman Terkait | Peruntukan Halaman |
| :--- | :---: | :--- |
| `ListItem` | 17 | Navigasi & Hierarki Breadcrumb |
| `BreadcrumbList` | 16 | Navigasi & Hierarki Breadcrumb |
| `FAQPage` | 9 | Halaman Tanya Jawab Interaktif |
| `Question` | 9 | Halaman Tanya Jawab Interaktif |
| `Answer` | 9 | Halaman Tanya Jawab Interaktif |
| `Person` | 8 | Entitas Pendukung |
| `Organization` | 8 | Identitas Bisnis & Brand |
| `WebPage` | 7 | Struktur Halaman Web |
| `ImageObject` | 6 | Entitas Pendukung |
| `WebSite` | 6 | Struktur Halaman Web |
| `BlogPosting` | 4 | Artikel Blog & Edukasi |
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
| `ItemList` | 2 | Entitas Pendukung |
| `LocalBusiness` | 1 | Identitas Bisnis & Brand |
| `PostalAddress` | 1 | Entitas Pendukung |
| `GeoCoordinates` | 1 | Entitas Pendukung |
| `OpeningHoursSpecification` | 1 | Entitas Pendukung |
| `PriceSpecification` | 1 | Entitas Pendukung |
| `ContactPage` | 1 | Struktur Halaman Web |
| `Service` | 1 | Entitas Pendukung |
| `Country` | 1 | Entitas Pendukung |
| `BusinessAudience` | 1 | Entitas Pendukung |
| `AggregateOffer` | 1 | Katalog & Penjualan Produk |
| `ContactPoint` | 1 | Entitas Pendukung |
| `AboutPage` | 1 | Struktur Halaman Web |

---

## 3. Hasil Audit Rinci per Halaman

### 📄 [blog-hampers-lebaran-korporat.html](file:///C:/hamperslebaran/blog-hampers-lebaran-korporat.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/blog-hampers-lebaran-korporat.html`
- **Tipe Schema**: `BlogPosting`, `ImageObject`, `Person`, `Organization`, `WebPage`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [blog-kue-kering-lebaran-populer.html](file:///C:/hamperslebaran/blog-kue-kering-lebaran-populer.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/blog-kue-kering-lebaran-populer.html`
- **Tipe Schema**: `BlogPosting`, `Person`, `Organization`, `ImageObject`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [blog-tips-memilih-hampers-lebaran.html](file:///C:/hamperslebaran/blog-tips-memilih-hampers-lebaran.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/blog-tips-memilih-hampers-lebaran.html`
- **Tipe Schema**: `BlogPosting`, `ImageObject`, `Person`, `Organization`, `WebPage`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [blog-tren-kemasan-hampers.html](file:///C:/hamperslebaran/blog-tren-kemasan-hampers.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/blog-tren-kemasan-hampers.html`
- **Tipe Schema**: `BlogPosting`, `ImageObject`, `Person`, `Organization`, `WebPage`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [blog.html](file:///C:/hamperslebaran/blog.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/blog.html`
- **Tipe Schema**: `CollectionPage`, `WebSite`, `BreadcrumbList`, `ListItem`, `FAQPage`, `Question`, `Answer`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [faq.html](file:///C:/hamperslebaran/faq.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/faq.html`
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

### 📄 [kebijakan-privasi.html](file:///C:/hamperslebaran/kebijakan-privasi.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/kebijakan-privasi.html`
- **Tipe Schema**: `WebPage`, `BreadcrumbList`, `ListItem`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [kontak.html](file:///C:/hamperslebaran/kontak.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/kontak.html`
- **Tipe Schema**: `ContactPage`, `BreadcrumbList`, `ListItem`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [paket-hampers-custom.html](file:///C:/hamperslebaran/paket-hampers-custom.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/paket-hampers-custom.html`
- **Tipe Schema**: `Service`, `ImageObject`, `Organization`, `Country`, `BusinessAudience`, `AggregateOffer`, `BreadcrumbList`, `ListItem`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [paket-hampers-kue-camilan.html](file:///C:/hamperslebaran/paket-hampers-kue-camilan.html)

- **Status**: 🟡 **WARNING**
- **Canonical Link**: `https://hamperslebaran.biz.id/paket-hampers-kue-camilan.html`
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

### 📄 [paket-hampers-perlengkapan-ibadah.html](file:///C:/hamperslebaran/paket-hampers-perlengkapan-ibadah.html)

- **Status**: 🟡 **WARNING**
- **Canonical Link**: `https://hamperslebaran.biz.id/paket-hampers-perlengkapan-ibadah.html`
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

### 📄 [paket-hampers-premium.html](file:///C:/hamperslebaran/paket-hampers-premium.html)

- **Status**: 🟡 **WARNING**
- **Canonical Link**: `https://hamperslebaran.biz.id/paket-hampers-premium.html`
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
- **Canonical Link**: `https://hamperslebaran.biz.id/paket.html`
- **Tipe Schema**: `CollectionPage`, `WebSite`, `BreadcrumbList`, `ListItem`, `ItemList`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [portofolio.html](file:///C:/hamperslebaran/portofolio.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/portofolio.html`
- **Tipe Schema**: `CollectionPage`, `WebSite`, `BreadcrumbList`, `ListItem`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [syarat-ketentuan.html](file:///C:/hamperslebaran/syarat-ketentuan.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/syarat-ketentuan.html`
- **Tipe Schema**: `WebPage`, `BreadcrumbList`, `ListItem`
- **Jumlah Blok JSON-LD**: 1

---

### 📄 [tentang.html](file:///C:/hamperslebaran/tentang.html)

- **Status**: 🟢 **VALID**
- **Canonical Link**: `https://hamperslebaran.biz.id/tentang.html`
- **Tipe Schema**: `AboutPage`, `WebSite`, `BreadcrumbList`, `ListItem`
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
