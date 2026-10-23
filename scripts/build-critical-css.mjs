import fs from 'fs';
import CleanCSS from 'clean-css';

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
html {
  background-color: var(--hl-bg);
  scroll-behavior: smooth;
}
@media (prefers-reduced-motion: no-preference) {
  main#main-content { animation: hlPageFadeIn 0.18s ease-out; }
}
@keyframes hlPageFadeIn { from { opacity: 0.92; } to { opacity: 1; } }
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
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}
.row > * {
  box-sizing: border-box;
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
}
.g-3 { --bs-gutter-x: 1rem; --bs-gutter-y: 1rem; }
.g-4 { --bs-gutter-x: 1.5rem; --bs-gutter-y: 1.5rem; }
.g-5 { --bs-gutter-x: 3rem; --bs-gutter-y: 3rem; }

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
@media (min-width: 992px) {
  .hl-navbar-inner {
    min-height: 76px;
    height: 76px;
    align-items: stretch;
    flex-wrap: nowrap;
  }
  .hl-navbar .navbar-brand { align-self: center; }
  .hl-navbar .hl-btn-wa { align-self: center; }
  .hl-navbar .navbar-collapse { height: 100%; display: flex !important; }
  .hl-navbar .navbar-nav { height: 100%; align-items: stretch; display: flex !important; flex-direction: row; }
  .hl-navbar .nav-item { display: flex; align-items: center; }
  .hl-hero__content-col { padding-top: clamp(0.75rem, 1.5vw, 1.5rem); }
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
.navbar-nav {
  display: flex;
  flex-direction: column;
  list-style: none !important;
  margin: 0;
  padding: 0;
}
.nav-item { list-style: none !important; }
.dropdown-menu {
  display: none !important;
  list-style: none !important;
  margin: 0;
  padding: 0;
  position: absolute;
}
.dropdown-menu.show {
  display: block !important;
}
.dropdown-item {
  display: block;
  list-style: none !important;
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

.hl-hero__ctas .hl-btn-primary, .hl-hero__ctas .hl-btn-wa {
  min-height: 52px;
  padding: 0.88rem 1.9rem;
  font-size: 1.05rem;
  border-radius: 10px;
}
.hl-hero__img-col { position: relative; }
.hl-hero__img-wrap {
  aspect-ratio: 4 / 5;
  width: 100%;
  max-width: 520px;
  margin-inline: auto;
  border-radius: var(--hl-radius-lg);
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(40, 42, 39, 0.12);
  border: 1px solid var(--hl-border);
  background: var(--hl-warm);
}
.hl-hero__img-wrap picture, .hl-hero__img-wrap img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: var(--hl-radius-lg);
  aspect-ratio: 4 / 5;
}
.hl-hero__badge {
  position: absolute;
  bottom: 1.75rem;
  left: -0.75rem;
  background: var(--hl-surface);
  border: 1px solid var(--hl-border);
  border-radius: var(--hl-radius-md);
  padding: 0.85rem 1.2rem;
  box-shadow: var(--hl-shadow-card-hover);
  display: flex;
  align-items: center;
  gap: 0.85rem;
  font-size: 0.95rem;
  font-weight: 600;
}
.hl-hero__badge-icon {
  width: 44px;
  height: 44px;
  background: var(--hl-warm);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.35rem;
  flex-shrink: 0;
}
.hl-hero__proof-wrapper {
  margin-top: 2rem;
  padding-top: 1.6rem;
  border-top: 1px solid rgba(213, 214, 208, 0.8);
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
}
.hl-hero__proof-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.1rem;
}
.hl-hero__proof-card {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  padding: 1.05rem 1.25rem;
  background: var(--hl-surface);
  border: 1px solid var(--hl-border);
  border-radius: var(--hl-radius-md);
  box-shadow: 0 4px 16px rgba(40, 42, 39, 0.05);
}
.hl-hero__proof-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--hl-warm);
  color: var(--hl-accent-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid rgba(184, 151, 61, 0.25);
}
.hl-hero__proof-icon svg {
  width: 20px;
  height: 20px;
  stroke: var(--hl-accent-dark);
}
.hl-hero__proof-title {
  font-size: 1.02rem;
  font-weight: 700;
  color: var(--hl-text);
  margin-bottom: 0.35rem;
  line-height: 1.3;
}
.hl-hero__proof-desc {
  font-size: 0.88rem;
  color: var(--hl-text-muted);
  line-height: 1.55;
  margin-bottom: 0;
}
.hl-hero__guarantee {
  display: flex;
  align-items: flex-start;
  gap: 0.95rem;
  padding: 0.95rem 1.25rem;
  background: rgba(233, 221, 204, 0.6);
  border-radius: var(--hl-radius-md);
  border: 1px dashed rgba(184, 151, 61, 0.7);
}
.hl-hero__guarantee-stars {
  color: #c89524;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  flex-shrink: 0;
  padding-top: 0.15rem;
}
.hl-hero__guarantee-stars svg {
  width: 15px;
  height: 15px;
  fill: #c89524;
}
.hl-hero__guarantee-text {
  font-size: 0.92rem;
  color: var(--hl-accent-dark);
  line-height: 1.52;
  margin-bottom: 0;
}
.hl-hero__guarantee-text strong { color: var(--hl-text); }
@media (max-width: 575.98px) {
  .hl-hero__proof-grid { grid-template-columns: 1fr; }
  .hl-hero__guarantee { flex-direction: column; align-items: flex-start; gap: 0.45rem; }
  .hl-hero__guarantee-stars { padding-top: 0; }
  .hl-hero__badge { left: 0; right: 0; margin: 0 1rem; bottom: 1rem; }
  .hl-hero__ctas { flex-direction: column; align-items: stretch; }
  .hl-hero__ctas .hl-btn-primary, .hl-hero__ctas .hl-btn-wa { text-align: center; justify-content: center; }
}

.col-auto { flex: 0 0 auto; width: auto; }
.hl-trust-strip {
  background: var(--hl-warm);
  padding: clamp(1.25rem, 3vw, 1.6rem) 0;
  border-top: 1px solid rgba(213, 214, 208, 0.7);
  border-bottom: 1px solid rgba(213, 214, 208, 0.7);
}
.hl-trust-container {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  max-width: 360px;
  margin-inline: auto;
}
.hl-trust-item {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(213, 214, 208, 0.9);
  border-radius: 12px;
  padding: 0.65rem 1.05rem;
  box-shadow: 0 2px 8px rgba(40, 42, 39, 0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.hl-trust-num {
  font-family: var(--hl-font-serif);
  font-weight: 700;
  font-size: 0.82rem;
  letter-spacing: 0.05em;
  color: var(--hl-accent-dark);
  background: var(--hl-warm);
  border: 1px solid rgba(184, 151, 61, 0.35);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.hl-trust-label {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--hl-text);
  line-height: 1.35;
}
@media (min-width: 768px) {
  .hl-trust-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 680px;
    gap: 0.85rem 1.25rem;
  }
}
@media (min-width: 992px) {
  .hl-trust-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    gap: 1.75rem;
  }
  .hl-trust-item {
    background: transparent;
    backdrop-filter: none;
    border: none;
    border-radius: 0;
    padding: 0;
    box-shadow: none;
    position: relative;
  }
  .hl-trust-item:not(:last-child)::after {
    content: "•";
    position: absolute;
    right: -1rem;
    color: rgba(184, 151, 61, 0.6);
    font-size: 1.1rem;
    pointer-events: none;
  }
  .hl-trust-num {
    background: var(--hl-surface);
    border: 1px solid rgba(184, 151, 61, 0.4);
    width: 28px;
    height: 28px;
    font-size: 0.78rem;
  }
  .hl-trust-label {
    font-size: 0.95rem;
    color: var(--hl-accent-dark);
  }
}


.hl-page-header {
  background: linear-gradient(180deg, #faf8f5 0%, #f4eee2 100%);
  border-bottom: 1px solid var(--hl-border);
  padding-block: clamp(2.75rem, 5vw, 4.25rem);
  margin-bottom: clamp(2rem, 4vw, 3.5rem);
}
.hl-page-header .hl-heading {
  font-size: clamp(1.85rem, 3.8vw, 2.75rem);
  font-weight: 700;
  line-height: 1.22;
  letter-spacing: -0.02em;
  margin-bottom: 0.75rem;
  color: var(--hl-text);
}
.hl-page-header__desc {
  color: var(--hl-text-muted);
  font-size: clamp(1rem, 1.8vw, 1.125rem);
  max-width: 620px;
  line-height: 1.7;
  margin-bottom: 0;
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
.hl-breadcrumb li { display: inline-flex; align-items: center; }
.hl-breadcrumb li + li::before {
  content: '›';
  margin-right: 0.4rem;
  margin-left: 0.2rem;
  color: var(--hl-gray);
  font-weight: 600;
  font-size: 0.95rem;
}
.hl-breadcrumb [aria-current="page"] {
  color: var(--hl-accent-dark);
  font-weight: 600;
}

.hl-info-box {
  background: var(--hl-surface-muted);
  border: 1px solid var(--hl-border);
  border-radius: var(--hl-radius-md);
  padding: 1.25rem 1.4rem;
  font-size: 0.88rem;
  color: var(--hl-text-muted);
  box-shadow: 0 2px 10px rgba(40, 42, 39, 0.04);
  margin-top: 1.5rem;
}
.hl-info-box .row {
  align-items: flex-start !important;
}
.hl-info-box__item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
}
.hl-info-box__label {
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--hl-accent-dark);
  font-weight: 700;
  margin-bottom: 0.35rem;
  line-height: 1.25;
}
.hl-info-box__val {
  font-weight: 700;
  margin: 0;
  color: var(--hl-text);
  font-size: 0.92rem;
  line-height: 1.45;
}
`;

const minCritical = new CleanCSS({ level: 2 }).minify(criticalRaw);
fs.writeFileSync('assets/css/critical.min.css', minCritical.styles);
console.log('New critical.min.css written, size:', (minCritical.styles.length / 1024).toFixed(1) + ' KB (' + minCritical.styles.length + ' bytes)');
