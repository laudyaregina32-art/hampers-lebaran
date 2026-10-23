import fs from 'fs';
import CleanCSS from 'clean-css';

// Read both bootstrap.min.css and style.css
const boot = fs.readFileSync('assets/css/bootstrap.min.css', 'utf8');
const style = fs.readFileSync('assets/css/style.css', 'utf8');

// Combine into single main.min.css
const combined = boot + '\n' + style;
const minFull = new CleanCSS({ level: 2 }).minify(combined);
fs.writeFileSync('assets/css/main.min.css', minFull.styles);
console.log('main.min.css written, size:', (minFull.styles.length / 1024).toFixed(1) + ' KB');

// Critical CSS for immediate above-the-fold render
const criticalRaw = `
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
  --hl-shadow-card-hover: 0 16px 40px rgb(40 42 39 / 12%);
  --hl-transition: 200ms ease;
  --hl-gold: #b8973d;
  --hl-font-serif: "Playfair Display", Georgia, serif;
}
*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: var(--hl-bg);
  color: var(--hl-text);
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 1.05rem;
  line-height: 1.68;
  -webkit-font-smoothing: antialiased;
}
.container {
  width: 100%;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 576px) { .container { max-width: 540px; } }
@media (min-width: 768px) { .container { max-width: 720px; } }
@media (min-width: 992px) { .container { max-width: 960px; } }
@media (min-width: 1200px) { .container { max-width: 1140px; } }
@media (min-width: 1400px) { .container { max-width: 1320px; } }
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -0.75rem;
  margin-left: -0.75rem;
}
.col-12 { flex: 0 0 auto; width: 100%; }
.col-sm-6 { flex: 0 0 auto; width: 100%; }
@media (min-width: 576px) { .col-sm-6 { width: 50%; } }
.col-md-6 { flex: 0 0 auto; width: 100%; }
@media (min-width: 768px) { .col-md-6 { width: 50%; } }
.col-lg-3 { flex: 0 0 auto; width: 100%; }
@media (min-width: 992px) { .col-lg-3 { width: 25%; } }
.col-lg-4 { flex: 0 0 auto; width: 100%; }
@media (min-width: 992px) { .col-lg-4 { width: 33.33333333%; } }
.col-lg-5 { flex: 0 0 auto; width: 100%; }
@media (min-width: 992px) { .col-lg-5 { width: 41.66666667%; } }
.col-lg-7 { flex: 0 0 auto; width: 100%; }
@media (min-width: 992px) { .col-lg-7 { width: 58.33333333%; } }
.order-1 { order: 1; }
.order-2 { order: 2; }
@media (min-width: 992px) {
  .order-lg-1 { order: 1; }
  .order-lg-2 { order: 2; }
}
.d-flex { display: flex !important; }
.d-none { display: none !important; }
@media (min-width: 768px) { .d-md-flex { display: flex !important; } }
@media (max-width: 991.98px) { .d-lg-none { display: none !important; } }
.justify-content-center { justify-content: center !important; }
.justify-content-between { justify-content: space-between !important; }
.align-items-center { align-items: center !important; }
.w-100 { width: 100% !important; }
img { display: block; max-width: 100%; height: auto; }
a { color: var(--hl-accent-dark); text-decoration: none; }
.hl-heading {
  font-family: var(--hl-font-serif);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: var(--hl-text);
}
h1.hl-heading { font-size: clamp(2.35rem, 4.5vw, 3.45rem); }
h2.hl-heading { font-size: clamp(1.85rem, 3.4vw, 2.55rem); }
.hl-eyebrow {
  display: inline-block;
  color: var(--hl-accent-dark);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.32rem 0.95rem;
  background: var(--hl-warm);
  border-radius: 100px;
  margin-bottom: 0.95rem;
}
.hl-navbar {
  background: rgba(243, 243, 240, 0.96);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--hl-border);
  position: sticky;
  top: 0;
  z-index: 1030;
}
.hl-navbar-inner {
  min-height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media (max-width: 991.98px) {
  .hl-navbar-inner {
    min-height: 64px;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
  }
}
.hl-navbar-brand, .hl-navbar .navbar-brand {
  font-family: var(--hl-font-serif);
  font-size: 1.45rem;
  font-weight: 700;
  color: var(--hl-text);
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  text-decoration: none;
}
.hl-navbar-brand-text { display: inline-flex; align-items: center; }
.hl-brand-accent { color: var(--hl-gold) !important; font-weight: 700; }
.hl-navbar-logo {
  height: 48px;
  width: 48px;
  object-fit: cover;
  border-radius: 50%;
  display: block;
}
@media (max-width: 768px) {
  .hl-navbar-brand { font-size: 1.25rem; }
  .hl-navbar-logo { height: 40px; width: 40px; }
}
.navbar-toggler {
  border: 1.5px solid var(--hl-border);
  border-radius: var(--hl-radius-sm);
  padding: 0.45rem 0.65rem;
  background: var(--hl-surface);
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
@media (max-width: 991.98px) { .navbar-toggler { display: inline-flex !important; } }
.navbar-toggler-icon {
  display: inline-block;
  width: 22px;
  height: 22px;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%2840,42,39,0.88%29' stroke-linecap='round' stroke-width='2.4' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.hl-navbar .nav-link {
  color: var(--hl-text-muted);
  font-weight: 500;
  font-size: 0.92rem;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
}
.hl-navbar .navbar-collapse { display: flex; align-items: center; }
@media (max-width: 991.98px) {
  .hl-navbar .navbar-collapse:not(.show) { display: none; }
  .hl-navbar .navbar-collapse.show { display: block; width: 100%; }
}
.hl-btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 48px;
  padding: 0.78rem 1.6rem;
  border: 1.5px solid var(--hl-accent-dark);
  border-radius: var(--hl-radius-sm);
  background: var(--hl-accent-dark);
  color: #fff;
  font-weight: 600;
  text-decoration: none;
}
.hl-btn-wa {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 48px;
  padding: 0.78rem 1.6rem;
  border: 1.5px solid #0f824e;
  border-radius: var(--hl-radius-sm);
  background: #0f824e;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
}
.hl-hero {
  padding-block: clamp(3.85rem, 6.2vw, 5.5rem);
  background: var(--hl-bg);
  position: relative;
  overflow: hidden;
}
.hl-hero__content-col { display: flex; flex-direction: column; }
.hl-hero__kicker {
  display: inline-block;
  align-self: flex-start;
  background: var(--hl-warm);
  color: var(--hl-accent-dark);
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.42rem 1.15rem;
  border-radius: 100px;
  margin-bottom: 1.35rem;
  border: 1px solid rgba(226, 218, 204, 0.85);
}
.hl-hero__h1 {
  font-family: var(--hl-font-serif);
  font-size: clamp(2.75rem, 5vw, 3.85rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.025em;
  color: var(--hl-text);
  margin-bottom: 1.45rem;
}
.hl-hero__desc {
  color: var(--hl-text-muted);
  font-size: clamp(1.15rem, 1.9vw, 1.3rem);
  line-height: 1.78;
  max-width: 660px;
  margin-bottom: 2.25rem;
}
.hl-hero__ctas { display: flex; flex-wrap: wrap; gap: 1.15rem; align-items: center; }
.hl-hero__img-wrap {
  border-radius: var(--hl-radius-lg);
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(40, 42, 39, 0.12);
  border: 1px solid var(--hl-border);
  background: var(--hl-warm);
  max-width: 520px;
  margin-inline: auto;
}
.hl-hero__img-wrap img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--hl-radius-lg);
}
.hl-page-header {
  background: linear-gradient(180deg, #faf8f5 0%, #f4eee2 100%);
  border-bottom: 1px solid var(--hl-border);
  padding-block: clamp(2.75rem, 5vw, 4.25rem);
  margin-bottom: clamp(2rem, 4vw, 3.5rem);
}
.hl-breadcrumb {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.35rem;
  font-size: 0.82rem;
  font-weight: 500;
  list-style: none;
  padding: 0.35rem 0.85rem;
  margin: 0 0 1.25rem;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--hl-border);
  border-radius: 100px;
}
`;

const minCritical = new CleanCSS({ level: 2 }).minify(criticalRaw);
fs.writeFileSync('assets/css/critical.min.css', minCritical.styles);
console.log('critical.min.css written, size:', (minCritical.styles.length / 1024).toFixed(1) + ' KB (' + minCritical.styles.length + ' bytes)');
