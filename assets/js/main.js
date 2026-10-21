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

  // ----- Mobile Navbar Controller & Resilience Handler -----
  const navbarCollapse = document.getElementById('navbarMain');
  const navbarToggler = document.querySelector('.navbar-toggler');

  if (navbarCollapse && navbarToggler) {
    const isMobile = () => window.innerWidth < 992;

    const openNavbar = () => {
      navbarCollapse.classList.add('show');
      navbarToggler.setAttribute('aria-expanded', 'true');
      navbarToggler.classList.add('is-active');
    };

    const closeNavbar = () => {
      navbarCollapse.classList.remove('show');
      navbarToggler.setAttribute('aria-expanded', 'false');
      navbarToggler.classList.remove('is-active');

      // Tutup semua submenu dropdown di dalam navbar saat collapse ditutup
      navbarCollapse.querySelectorAll('.dropdown-menu.show').forEach(menu => {
        menu.classList.remove('show');
      });
      navbarCollapse.querySelectorAll('.dropdown-toggle[aria-expanded="true"]').forEach(btn => {
        btn.setAttribute('aria-expanded', 'false');
        btn.classList.remove('show');
      });
    };

    const toggleNavbar = () => {
      const isExpanded = navbarCollapse.classList.contains('show');
      if (isExpanded) {
        closeNavbar();
      } else {
        openNavbar();
      }
    };

    // Handler klik tombol toggler hamburger
    navbarToggler.addEventListener('click', (e) => {
      // Jika Bootstrap Collapse aktif dan telah menangani event, sinkronkan class
      if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
        setTimeout(() => {
          const isOpen = navbarCollapse.classList.contains('show') || navbarCollapse.classList.contains('collapsing');
          navbarToggler.classList.toggle('is-active', isOpen);
          navbarToggler.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        }, 60);
        return;
      }

      // Fallback jika Bootstrap JS CDN lambat / tidak tersedia
      e.preventDefault();
      toggleNavbar();
    });

    // Handler klik dropdown "Paket" di desktop & mobile agar bisa dibuka/tutup dan dipilih
    const dropdownToggles = navbarCollapse.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function(e) {
        const parentDropdown = this.closest('.dropdown');
        const menu = parentDropdown ? parentDropdown.querySelector('.dropdown-menu') : null;
        if (!menu) return;

        // Cegah lompat langsung agar pengguna bisa melihat dan memilih sub-paket
        e.preventDefault();
        e.stopPropagation();

        const isOpen = menu.classList.contains('show');
        if (isOpen) {
          menu.classList.remove('show');
          this.classList.remove('show');
          this.setAttribute('aria-expanded', 'false');
          if (parentDropdown) parentDropdown.classList.remove('show');
        } else {
          // Tutup dropdown lain yang mungkin sedang terbuka
          document.querySelectorAll('.dropdown-menu.show').forEach(m => m.classList.remove('show'));
          document.querySelectorAll('.dropdown-toggle.show').forEach(t => {
            t.classList.remove('show');
            t.setAttribute('aria-expanded', 'false');
          });

          menu.classList.add('show');
          this.classList.add('show');
          this.setAttribute('aria-expanded', 'true');
          if (parentDropdown) parentDropdown.classList.add('show');
        }
      });
    });

    // Otomatis tutup navbar saat link navigasi atau dropdown item di-klik
    const navLinks = navbarCollapse.querySelectorAll('.nav-link:not(.dropdown-toggle), .dropdown-item, .hl-btn-wa');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (isMobile()) {
          closeNavbar();
          if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse) {
              bsCollapse.hide();
            }
          }
        }
      });
    });

    // Tutup saat user klik di luar area navbar atau dropdown
    document.addEventListener('click', (e) => {
      // Tutup dropdown menu jika klik di luar area dropdown
      dropdownToggles.forEach(toggle => {
        const parentDropdown = toggle.closest('.dropdown');
        if (parentDropdown && !parentDropdown.contains(e.target)) {
          const menu = parentDropdown.querySelector('.dropdown-menu');
          if (menu) menu.classList.remove('show');
          toggle.classList.remove('show');
          toggle.setAttribute('aria-expanded', 'false');
          parentDropdown.classList.remove('show');
        }
      });

      if (isMobile() && navbarCollapse.classList.contains('show')) {
        const isClickInside = navbarCollapse.contains(e.target) || navbarToggler.contains(e.target);
        if (!isClickInside) {
          closeNavbar();
          if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse) {
              bsCollapse.hide();
            }
          }
        }
      }
    });

    // Tutup dengan tombol Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isMobile() && navbarCollapse.classList.contains('show')) {
        closeNavbar();
        if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          }
        }
      }
    });
  }

  // ----- Navbar scroll shadow (requestAnimationFrame to avoid forced reflow) -----
  const navbar = document.querySelector('.hl-navbar');
  if (navbar) {
    let ticking = false;
    const updateScrollState = () => {
      navbar.classList.toggle('is-scrolled', window.scrollY > 10);
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    }, { passive: true });
    updateScrollState();
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
