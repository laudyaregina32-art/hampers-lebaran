import fs from 'fs';
import { execSync } from 'child_process';

console.log('Adjusting hero container spacing: pulling left content inward with comfortable margin...');

let indexHtml = fs.readFileSync('index.html', 'utf8');

// Ganti container-fluid menjadi container dengan padding yang seimbang
indexHtml = indexHtml.replace(
  /<div class="container-fluid[^"]*hl-hero__container">/,
  '<div class="container hl-hero__container">'
);

// Update CSS di index.html
const updatedHeroCss = `
/* ===== HERO BERANDA (BALANCED SPACING, COMFORTABLE MARGINS) ===== */
.hl-hero {
  position: relative !important;
  width: 100% !important;
  min-height: clamp(480px, 56.25vw, 640px) !important;
  padding-top: clamp(6rem, 8.5vw, 7.8rem) !important;
  padding-bottom: clamp(2.5rem, 4vw, 3.5rem) !important;
  margin-top: 0 !important;
  background-color: #eaf0e9 !important;
  background-image: url('../images/hero-bg-hampers.webp') !important;
  background-size: cover !important;
  background-position: center center !important;
  background-repeat: no-repeat !important;
  display: flex !important;
  align-items: center !important;
}

@media (max-width: 991.98px) {
  .hl-hero {
    min-height: auto !important;
    background-image: linear-gradient(
      to bottom,
      rgba(234, 240, 233, 0.94) 0%,
      rgba(234, 240, 233, 0.72) 32%,
      rgba(234, 240, 233, 0.20) 58%,
      rgba(234, 240, 233, 0.92) 100%
    ), url('../images/hero-bg-hampers-768.webp') !important;
    background-position: center top !important;
    padding-top: clamp(5.25rem, 9vw, 6.75rem) !important;
    padding-bottom: clamp(2.5rem, 4vw, 3.5rem) !important;
  }
}

.hl-hero__container {
  position: relative !important;
  z-index: 2 !important;
  width: 100% !important;
  padding-left: clamp(1.25rem, 3vw, 2.5rem) !important;
  padding-right: clamp(1.25rem, 3vw, 2.5rem) !important;
}

.hl-hero__row {
  min-height: clamp(340px, 40vw, 450px) !important;
  display: flex !important;
  justify-content: space-between !important;
  align-items: stretch !important;
}

/* Kolom Kiri: Punya margin bernapas dari tepi kiri, tidak nempel */
.hl-hero__col-left {
  display: flex !important;
  flex-direction: column !important;
  justify-content: space-between !important;
  z-index: 2 !important;
  max-width: 420px !important;
  padding-left: 0.5rem !important;
}

.hl-hero__left-content {
  max-width: 420px !important;
}

.hl-hero__kicker {
  display: inline-flex !important;
  align-items: center !important;
  gap: 0.45rem !important;
  align-self: flex-start !important;
  background: transparent !important;
  border: none !important;
  padding: 0 !important;
  color: #213c35 !important;
  font-size: 0.85rem !important;
  font-weight: 700 !important;
  letter-spacing: 0.12em !important;
  text-transform: uppercase !important;
  margin-bottom: 0.85rem !important;
}

.hl-hero__h1 {
  font-family: var(--hl-font-serif) !important;
  font-size: clamp(2.2rem, 3.6vw, 3.25rem) !important;
  font-weight: 300 !important;
  line-height: 1.16 !important;
  letter-spacing: -0.025em !important;
  color: #1b2622 !important;
  margin-bottom: 0.75rem !important;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.7) !important;
}

.hl-hero__h1-sub {
  display: block !important;
  font-style: italic !important;
  font-weight: 300 !important;
  color: #37594f !important;
}

/* Tombol CTA di Pojok Kiri Bawah */
.hl-hero__ctas--bottom-left {
  display: flex !important;
  flex-wrap: wrap !important;
  gap: 0.85rem !important;
  align-items: center !important;
  margin-top: 1.85rem !important;
  margin-bottom: 0 !important;
}

/* Kolom Kanan: Ramping, Menempel rapi di sisi kanan container */
.hl-hero__col-right {
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: flex-end !important;
  margin-left: auto !important;
  z-index: 2 !important;
  padding-right: 0.5rem !important;
}

.hl-hero__right-card {
  width: 100% !important;
  max-width: 295px !important;
  background: rgba(255, 255, 255, 0.82) !important;
  backdrop-filter: blur(10px) !important;
  -webkit-backdrop-filter: blur(10px) !important;
  border: 1px solid rgba(200, 213, 203, 0.75) !important;
  border-radius: 12px !important;
  padding: 0.95rem 1.15rem !important;
  box-shadow: 0 6px 20px rgba(33, 60, 53, 0.07) !important;
}

.hl-hero__desc {
  color: #2b3d36 !important;
  font-size: 0.85rem !important;
  line-height: 1.55 !important;
  margin-bottom: 0.8rem !important;
  text-align: left !important;
}

.hl-hero__perks {
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  gap: 0.45rem !important;
  padding-top: 0.75rem !important;
  border-top: 1px solid rgba(200, 213, 203, 0.8) !important;
}

.hl-hero__perk-item {
  display: inline-flex !important;
  align-items: center !important;
  gap: 0.45rem !important;
  font-size: 0.82rem !important;
  font-weight: 600 !important;
  color: #1b2622 !important;
}

.hl-hero__perk-item svg {
  color: #213c35 !important;
  stroke: #213c35 !important;
  width: 14px !important;
  height: 14px !important;
  flex-shrink: 0 !important;
}

@media (max-width: 991.98px) {
  .hl-hero__row {
    min-height: auto !important;
    gap: 1.75rem !important;
  }
  .hl-hero__col-left {
    padding-left: 0 !important;
  }
  .hl-hero__col-right {
    align-items: stretch !important;
    margin-left: 0 !important;
    padding-right: 0 !important;
  }
  .hl-hero__right-card {
    max-width: 100% !important;
  }
}

/* Tombol WhatsApp Hijau Branding */
.hl-btn-wa {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 0.5rem !important;
  min-height: 48px !important;
  padding: 0.78rem 1.65rem !important;
  background: #213c35 !important;
  color: #ffffff !important;
  border: 1.5px solid #213c35 !important;
  border-radius: 8px !important;
  font-weight: 600 !important;
  font-size: 0.96rem !important;
  font-family: var(--hl-font-sans) !important;
  text-decoration: none !important;
  transition: all 0.22s ease !important;
  box-shadow: 0 4px 14px rgba(33, 60, 53, 0.22) !important;
  cursor: pointer !important;
}
.hl-btn-wa:hover, .hl-btn-wa:focus-visible {
  background: #152722 !important;
  border-color: #152722 !important;
  color: #ffffff !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 22px rgba(33, 60, 53, 0.35) !important;
}

.hl-btn-primary {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 0.5rem !important;
  min-height: 48px !important;
  padding: 0.78rem 1.65rem !important;
  background: #37594f !important;
  color: #ffffff !important;
  border: 1.5px solid #37594f !important;
  border-radius: 8px !important;
  font-weight: 600 !important;
  font-size: 0.96rem !important;
  font-family: var(--hl-font-sans) !important;
  text-decoration: none !important;
  transition: all 0.22s ease !important;
  box-shadow: 0 4px 14px rgba(55, 89, 79, 0.22) !important;
  cursor: pointer !important;
}
.hl-btn-primary:hover, .hl-btn-primary:focus-visible {
  background: #213c35 !important;
  border-color: #213c35 !important;
  color: #ffffff !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 22px rgba(33, 60, 53, 0.35) !important;
}
`;

// Replace inlined CSS in index.html
const oldHeroCssRegex = /\/\* ===== HERO BERANDA[\s\S]*?(?=<\/style>)/;
const inlineHeroCss = updatedHeroCss.replace(/\.\.\/images\//g, 'assets/images/');
if (oldHeroCssRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(oldHeroCssRegex, inlineHeroCss + '\n');
}

// Bump cache-busting to v=18
indexHtml = indexHtml.replace(/\?v=\d+/g, '?v=18');

fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('index.html updated successfully.');

// Update assets/css/style.css and scratch/style_backup.css
function updateStyleCss(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const cssRegex = /\/\* ===== HERO[\s\S]*$/;
  if (cssRegex.test(content)) {
    content = content.replace(cssRegex, updatedHeroCss);
  } else {
    content += '\n' + updatedHeroCss;
  }
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(filePath + ' updated successfully.');
}

updateStyleCss('assets/css/style.css');
updateStyleCss('scratch/style_backup.css');

// Rebuild minified CSS
console.log('Rebuilding minified CSS...');
execSync('node scripts/build-all-css.mjs', { stdio: 'inherit' });
console.log('All done!');
