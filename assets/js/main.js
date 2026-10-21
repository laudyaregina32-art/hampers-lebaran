/**
 * Hampers Lebaran — Main JavaScript
 * Minimal JS, hanya untuk interaksi yang diperlukan
 */

'use strict';

// ----- WhatsApp CTA Helpers -----
const WA_NUMBER = '6281913905507';
const WA_BASE = `https://wa.me/${WA_NUMBER}`;

/**
 * Buat URL WhatsApp dengan pesan yang sudah di-encode
 * @param {string} message
 * @returns {string}
 */
function buildWAUrl(message) {
  return `${WA_BASE}?text=${encodeURIComponent(message)}`;
}

// Inject URL ke semua tombol WA yang pakai data-wa-message
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-wa-message]').forEach(el => {
    const msg = el.dataset.waMessage;
    el.href = buildWAUrl(msg);
  });

  // Copyright tahun dinamis
  document.querySelectorAll('.js-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // ----- Navbar scroll shadow -----
  const navbar = document.querySelector('.hl-navbar');
  if (navbar) {
    const onScroll = () => {
      if (window.scrollY > 10) {
        navbar.style.boxShadow = '0 4px 20px rgba(40,42,39,0.08)';
      } else {
        navbar.style.boxShadow = '';
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ----- Product image thumbnails -----
  const thumbs = document.querySelectorAll('.hl-product-thumb');
  const mainImgWrap = document.querySelector('.hl-product-main-img');
  if (thumbs.length && mainImgWrap) {
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        const img = thumb.querySelector('img');
        const mainImg = mainImgWrap.querySelector('img');
        if (img && mainImg) {
          mainImg.src = img.src;
        }
      });
      thumb.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          thumb.click();
        }
      });
    });
  }

  // ----- Smooth scroll untuk anchor links (navbar offset) -----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#' || href.length < 2) return;
      try {
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const navH = navbar ? navbar.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - navH - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      } catch (err) {
        // Abaikan jika bukan query selector valid
      }
    });
  });

  // ----- Accordion Interactivity Fallback -----
  // Memastikan semua tombol FAQ selalu bisa dipencet & membuka jawaban
  document.querySelectorAll('.hl-accordion .accordion-button').forEach(btn => {
    btn.addEventListener('click', function(e) {
      // Jika Bootstrap Collapse sudah aktif dan bekerja via bootstrap bundle, delegasikan ke Bootstrap
      if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
        return;
      }

      e.preventDefault();
      const targetSel = this.getAttribute('data-bs-target') || this.getAttribute('href');
      if (!targetSel) return;

      const targetEl = document.querySelector(targetSel);
      if (!targetEl) return;

      const isExpanded = this.getAttribute('aria-expanded') === 'true' || targetEl.classList.contains('show');
      const parentSel = targetEl.getAttribute('data-bs-parent');

      // Tutup item lain dalam accordion yang sama jika single-open (accordion parent)
      if (parentSel && !isExpanded) {
        const parentEl = document.querySelector(parentSel);
        if (parentEl) {
          parentEl.querySelectorAll('.accordion-collapse.show').forEach(openEl => {
            if (openEl !== targetEl) {
              openEl.classList.remove('show');
              const otherBtn = parentEl.querySelector(`[data-bs-target="#${openEl.id}"], [href="#${openEl.id}"]`);
              if (otherBtn) {
                otherBtn.classList.add('collapsed');
                otherBtn.setAttribute('aria-expanded', 'false');
              }
            }
          });
        }
      }

      if (isExpanded) {
        targetEl.classList.remove('show');
        this.classList.add('collapsed');
        this.setAttribute('aria-expanded', 'false');
      } else {
        targetEl.classList.add('show');
        this.classList.remove('collapsed');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ----- Portfolio image overlay keyboard accessibility -----
  document.querySelectorAll('.hl-portfolio-item').forEach(item => {
    const link = item.querySelector('a');
    if (link) {
      item.setAttribute('tabindex', '0');
      item.addEventListener('keydown', e => {
        if (e.key === 'Enter') link.click();
      });
    }
  });
});
