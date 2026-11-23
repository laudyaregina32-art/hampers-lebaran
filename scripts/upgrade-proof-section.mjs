import fs from 'fs';
import { execSync } from 'child_process';

console.log('Upgrading proof cards and guarantee section to luxury design...');

const luxuryProofCss = `
/* ===== LUXURY PROOF CARDS & GUARANTEE BANNER ===== */
.hl-hero__proof-wrapper {
  margin-top: clamp(1rem, 2vw, 1.5rem) !important;
  margin-bottom: 0 !important;
  padding-top: clamp(1.25rem, 2.5vw, 1.75rem) !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 1.5rem !important;
  width: 100% !important;
}

.hl-hero__proof-grid {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  gap: 1.35rem !important;
  width: 100% !important;
}

@media (max-width: 991.98px) {
  .hl-hero__proof-grid {
    grid-template-columns: 1fr !important;
    gap: 1rem !important;
  }
}

.hl-hero__proof-card {
  display: flex !important;
  flex-direction: column !important;
  padding: 1.35rem 1.45rem !important;
  background: linear-gradient(145deg, #ffffff 0%, #f6faf5 100%) !important;
  border: 1px solid rgba(184, 151, 61, 0.22) !important;
  border-top: 3px solid #213c35 !important;
  border-radius: 14px !important;
  box-shadow: 0 6px 20px rgba(33, 60, 53, 0.05) !important;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease !important;
  height: 100% !important;
}

.hl-hero__proof-card:hover {
  transform: translateY(-4px) !important;
  box-shadow: 0 14px 32px rgba(33, 60, 53, 0.1) !important;
  border-color: rgba(184, 151, 61, 0.45) !important;
}

.hl-hero__proof-top {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  margin-bottom: 0.95rem !important;
  width: 100% !important;
}

.hl-hero__proof-icon {
  width: 44px !important;
  height: 44px !important;
  border-radius: 50% !important;
  background: linear-gradient(135deg, rgba(33, 60, 53, 0.08) 0%, rgba(184, 151, 61, 0.16) 100%) !important;
  border: 1px solid rgba(184, 151, 61, 0.3) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  color: #213c35 !important;
  flex-shrink: 0 !important;
}

.hl-hero__proof-icon svg {
  width: 20px !important;
  height: 20px !important;
  stroke: #213c35 !important;
}

.hl-hero__proof-num {
  font-family: var(--hl-font-serif) !important;
  font-size: 1.4rem !important;
  font-weight: 700 !important;
  color: #b8973d !important;
  opacity: 0.75 !important;
  line-height: 1 !important;
}

.hl-hero__proof-title {
  font-family: var(--hl-font-sans) !important;
  font-size: 1.05rem !important;
  font-weight: 700 !important;
  color: #1b2622 !important;
  margin-bottom: 0.45rem !important;
  line-height: 1.35 !important;
}

.hl-hero__proof-desc {
  font-family: var(--hl-font-sans) !important;
  font-style: normal !important;
  font-size: 0.88rem !important;
  color: #4e5f58 !important;
  line-height: 1.6 !important;
  margin-bottom: 0 !important;
}

.hl-hero__guarantee {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 0.85rem !important;
  padding: 0.85rem 1.85rem !important;
  background: linear-gradient(90deg, #ffffff 0%, #f4f8f4 50%, #ffffff 100%) !important;
  border-radius: 100px !important;
  border: 1px solid rgba(184, 151, 61, 0.35) !important;
  box-shadow: 0 4px 16px rgba(33, 60, 53, 0.04) !important;
  margin-top: 0.25rem !important;
}

@media (max-width: 767.98px) {
  .hl-hero__guarantee {
    border-radius: 12px !important;
    flex-direction: column !important;
    text-align: center !important;
    padding: 1rem 1.25rem !important;
  }
}

.hl-hero__guarantee-stars {
  color: #c89524 !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 3px !important;
  flex-shrink: 0 !important;
}

.hl-hero__guarantee-stars svg {
  width: 16px !important;
  height: 16px !important;
  fill: #c89524 !important;
}

.hl-hero__guarantee-text {
  font-family: var(--hl-font-sans) !important;
  font-style: normal !important;
  font-size: 0.92rem !important;
  color: #213c35 !important;
  line-height: 1.5 !important;
  margin-bottom: 0 !important;
}

.hl-hero__guarantee-text strong {
  color: #1b2622 !important;
  font-weight: 700 !important;
}
`;

const upgradedProofHtml = `        <!-- Highlight Keunggulan & Garansi Layanan (Full Width 3 Kolom) -->
        <div class="hl-hero__proof-wrapper">
          <div class="hl-hero__proof-grid">
            <!-- Card 1 -->
            <div class="hl-hero__proof-card">
              <div class="hl-hero__proof-top">
                <div class="hl-hero__proof-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" />
                  </svg>
                </div>
                <span class="hl-hero__proof-num">01</span>
              </div>
              <div class="hl-hero__proof-body">
                <h3 class="hl-hero__proof-title">Pilihan Hampers Berkualitas</h3>
                <p class="hl-hero__proof-desc">Aneka kue kering, kurma, camilan, dan perlengkapan ibadah dengan kurasi terbaik sesuai kebutuhan dan anggaran Anda.</p>
              </div>
            </div>

            <!-- Card 2 -->
            <div class="hl-hero__proof-card">
              <div class="hl-hero__proof-top">
                <div class="hl-hero__proof-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                    <path d="m15 5 3 3" />
                  </svg>
                </div>
                <span class="hl-hero__proof-num">02</span>
              </div>
              <div class="hl-hero__proof-body">
                <h3 class="hl-hero__proof-title">Personalisasi Hadiah</h3>
                <p class="hl-hero__proof-desc">Kustomisasi kemasan box, kartu ucapan eksklusif, pita satin, hingga penambahan logo perusahaan terpercaya.</p>
              </div>
            </div>

            <!-- Card 3 -->
            <div class="hl-hero__proof-card">
              <div class="hl-hero__proof-top">
                <div class="hl-hero__proof-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <span class="hl-hero__proof-num">03</span>
              </div>
              <div class="hl-hero__proof-body">
                <h3 class="hl-hero__proof-title">Pengiriman Aman & Terpercaya</h3>
                <p class="hl-hero__proof-desc">Pengemasan proteksi berlapis untuk memastikan kondisi hampers tiba sempurna, rapi, dan aman ke penerima.</p>
              </div>
            </div>
          </div>

          <!-- Guarantee Pill Banner -->
          <div class="hl-hero__guarantee">
            <div class="hl-hero__guarantee-stars" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              <svg width="16" height="16" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              <svg width="16" height="16" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              <svg width="16" height="16" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              <svg width="16" height="16" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            </div>
            <p class="hl-hero__guarantee-text">
              <strong>Terpercaya untuk Idulfitri:</strong> Melayani pesanan personal keluarga &amp; pengadaan korporat dengan kemasan aman se-Indonesia.
            </p>
          </div>
        </div>`;

let indexHtml = fs.readFileSync('index.html', 'utf8');

// Replace HTML of proof wrapper
const proofWrapperRegex = /<!-- Highlight Keunggulan & Garansi Layanan[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/;
indexHtml = indexHtml.replace(proofWrapperRegex, upgradedProofHtml + '\n      </div>\n    </section>');

// Append luxuryProofCss into index.html inline styles before </style>
indexHtml = indexHtml.replace('</style>', luxuryProofCss + '\n</style>');

// Bump cache-busting to v=20
indexHtml = indexHtml.replace(/\?v=\d+/g, '?v=20');

fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('index.html updated successfully.');

// Update assets/css/style.css and scratch/style_backup.css
function updateStyleCss(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content += '\n' + luxuryProofCss;
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(filePath + ' updated successfully.');
}

updateStyleCss('assets/css/style.css');
updateStyleCss('scratch/style_backup.css');

// Rebuild minified CSS
console.log('Rebuilding minified CSS...');
execSync('node scripts/build-all-css.mjs', { stdio: 'inherit' });
console.log('All done!');
