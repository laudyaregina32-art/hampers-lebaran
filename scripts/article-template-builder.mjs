import fs from 'fs';

// Baca template dasar dari bisnis-hampers-lebaran.html
const template = fs.readFileSync('c:/hamperslebaran/blog/bisnis-hampers-lebaran.html', 'utf8');

const headPreSchema = template.substring(0, template.indexOf('<!-- Schema.org JSON-LD'));
const navPart = template.substring(template.indexOf('<body>'), template.indexOf('<main id="main-content">'));
const footerPart = template.substring(template.indexOf('<footer class="hl-footer">'));

function buildArticleHtml({
  slug,
  title,
  metaTitle,
  metaDesc,
  badge,
  publishDate,
  readTime,
  heroImage,
  heroAlt,
  heroCaption,
  tocList,
  articleBodyHtml,
  relatedCardsHtml,
  faqJson,
  faqHtml
}) {
  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `https://hamperslebaran.biz.id/blog/${slug}#article`,
        "headline": title,
        "description": metaDesc,
        "url": `https://hamperslebaran.biz.id/blog/${slug}`,
        "datePublished": `${publishDate}T09:00:00+07:00`,
        "dateModified": `${publishDate}T09:00:00+07:00`,
        "image": {
          "@type": "ImageObject",
          "url": `https://hamperslebaran.biz.id/${heroImage.replace('../', '')}`,
          "width": 1200,
          "height": 630
        },
        "articleSection": badge,
        "inLanguage": "id-ID",
        "author": {
          "@type": "Person",
          "name": "Laudya Regina Julia",
          "jobTitle": "Content Writer & Konsultan Hampers Lebaran",
          "image": "https://hamperslebaran.biz.id/assets/images/foto-regina.webp",
          "url": "https://hamperslebaran.biz.id/tentang"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Hampers Lebaran",
          "logo": {
            "@type": "ImageObject",
            "url": "https://hamperslebaran.biz.id/assets/images/logo.webp"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://hamperslebaran.biz.id/blog/${slug}`
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://hamperslebaran.biz.id/blog/${slug}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Beranda",
            "item": "https://hamperslebaran.biz.id/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://hamperslebaran.biz.id/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": title,
            "item": `https://hamperslebaran.biz.id/blog/${slug}`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `https://hamperslebaran.biz.id/blog/${slug}#faq`,
        "mainEntity": faqJson
      }
    ]
  };

  let newHead = headPreSchema
    .replace(/<title>.*?<\/title>/, `<title>${metaTitle} — Hampers Lebaran</title>`)
    .replace(/<meta name="description"[\s\S]*?>/, `<meta name="description"\n    content="${metaDesc}">`)
    .replace(/<link rel="canonical" href=".*?">/, `<link rel="canonical" href="https://hamperslebaran.biz.id/blog/${slug}">`)
    .replace(/<meta property="og:title" content=".*?">/, `<meta property="og:title" content="${metaTitle} — Hampers Lebaran">`)
    .replace(/<meta property="og:description"[\s\S]*?>/, `<meta property="og:description"\n    content="${metaDesc}">`)
    .replace(/<meta property="og:url" content=".*?">/, `<meta property="og:url" content="https://hamperslebaran.biz.id/blog/${slug}">`)
    .replace(/<meta property="og:image" content=".*?">/, `<meta property="og:image" content="https://hamperslebaran.biz.id/${heroImage.replace('../', '')}">`)
    .replace(/<meta property="og:image:alt" content=".*?">/, `<meta property="og:image:alt" content="${title}">`)
    .replace(/<meta name="twitter:title" content=".*?">/, `<meta name="twitter:title" content="${metaTitle} — Hampers Lebaran">`)
    .replace(/<meta name="twitter:description"[\s\S]*?>/, `<meta name="twitter:description"\n    content="${metaDesc}">`)
    .replace(/<meta name="twitter:image" content=".*?">/, `<meta name="twitter:image" content="https://hamperslebaran.biz.id/${heroImage.replace('../', '')}">`);

  const tocHtml = tocList.map(item => `                <li><a href="#${item.id}">${item.text}</a></li>`).join('\n');

  const mainHtml = `  <main id="main-content">
    <div class="hl-page-header hl-page-header--article">
      <div class="container">
        <nav aria-label="Breadcrumb">
          <ol class="hl-breadcrumb">
            <li><a href="../index.html">Beranda</a></li>
            <li><a href="../blog.html">Blog</a></li>
            <li><span aria-current="page">${title}</span></li>
          </ol>
        </nav>
        <div class="hl-meta mb-3">
          <span class="hl-badge">${badge}</span>
          <time datetime="${publishDate}T09:00:00+07:00" style="font-size:0.85rem;color:var(--hl-text-muted);">11 November 2026</time>
        </div>
        <h1 class="hl-heading" id="article-heading">
          ${title}
        </h1>
      </div>
    </div>

    <section class="hl-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">

            <!-- Author Byline -->
            <div class="hl-author-byline">
              <div class="hl-author-byline__avatar">
                <img src="../assets/images/foto-regina.webp" alt="Foto Laudya Regina Julia" width="44" height="44"
                  loading="lazy">
              </div>
              <div>
                <span class="hl-author-byline__name">Laudya Regina Julia</span><br>
                <time datetime="${publishDate}T09:00:00+07:00" style="font-size:0.82rem;">11 November 2026</time> &middot;
                <span style="font-size:0.82rem;">${readTime}</span>
              </div>
            </div>

            <!-- Hero image artikel -->
            <figure style="border-radius:var(--hl-radius-md);overflow:hidden;margin-bottom:2.5rem;">
              <img src="${heroImage}" alt="${heroAlt}" width="800"
                height="450" style="width:100%;aspect-ratio:16/9;max-height:450px;object-fit:cover;object-position:center;border-radius:var(--hl-radius-md);"
                loading="eager">
              <figcaption style="font-size:0.8rem;color:var(--hl-text-muted);padding:0.5rem 0;">${heroCaption}</figcaption>
            </figure>

            <!-- Daftar Isi -->
            <nav class="hl-toc" aria-label="Daftar Isi Artikel">
              <p class="hl-toc__title">&#128196; Daftar Isi</p>
              <ol>
${tocHtml}
              </ol>
            </nav>

            <article class="hl-article-body">
${articleBodyHtml}

              <!-- FAQ Section -->
              <div class="hl-article-faq" id="faq-section">
                <h2 class="hl-article-faq__title">FAQ Seputar ${title}</h2>
${faqHtml}
              </div>
            </article>

            <!-- CTA in article -->
            <div class="hl-info-box mt-5" style="background:var(--hl-warm);border-color:var(--hl-border);">
              <p style="font-weight:700;color:var(--hl-text);margin-bottom:0.5rem;font-size:1.1rem;">&#127873; Butuh Solusi Pengadaan Hampers Lebaran?</p>
              <p style="color:var(--hl-text-muted);font-size:0.9rem;margin-bottom:1rem;">Temukan koleksi bingkisan Hari Raya terbaik dengan kemasan elegan, isi fungsional, dan jaminan pengiriman aman bersama tim kami.</p>
              <a href="https://wa.me/6282131087971?text=Halo%2C%20saya%20membaca%20artikel%20${slug}%20dan%20ingin%20berkonsultasi%20pemesanan."
                class="hl-btn-wa" target="_blank" rel="noopener noreferrer" style="font-size:0.9rem;min-height:42px;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Konsultasi via WhatsApp
              </a>
            </div>

            <!-- Related articles / Topical Cluster Nav -->
            <div class="mt-5 pt-4" style="border-top:1px solid var(--hl-border);">
              <h2 style="font-size:1.15rem;font-weight:700;margin-bottom:1.5rem;">&#128218; Panduan Terkait Serial Hampers Lebaran Sederhana</h2>
              <div class="row g-3">
${relatedCardsHtml}
              </div>
            </div>

            <!-- Identitas Penulis -->
            <div class="hl-author-bio">
              <div class="hl-author-bio__avatar">
                <img src="../assets/images/foto-regina.webp" alt="Foto Laudya Regina Julia" width="72" height="72"
                  loading="lazy">
              </div>
              <div>
                <p class="hl-author-bio__name">Laudya Regina Julia</p>
                <p class="hl-author-bio__role">Content Writer &amp; Konsultan Hampers Lebaran</p>
                <p class="hl-author-bio__desc">Laudya Regina Julia adalah penulis konten spesialis di Hampers Lebaran dengan pengalaman lebih dari 5 tahun dalam industri gifting dan parcel premium. Ia memiliki keahlian mendalam di bidang kurasi produk, desain kemasan modern, serta strategi pengadaan hampers korporat berskala besar. Laudya rutin berbagi tips, panduan, dan tren terbaru seputar hampers Idulfitri melalui blog ini.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  </main>
`;

  return `${newHead}  <!-- Schema.org JSON-LD (Rich Graph Standard 2027-2027) -->
  <script type="application/ld+json">
${JSON.stringify(schemaJson, null, 2)}
  </script>
</head>
${navPart}${mainHtml}${footerPart}`;
}

export { buildArticleHtml };
