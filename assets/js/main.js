/**
 * Hampers Lebaran — Main JavaScript
 * Minimal JS, hanya untuk interaksi yang diperlukan
 */

'use strict';

// ----- Clean URL Handler (Sembunyikan ekstensi .html dari address bar browser) -----
(() => {
  try {
    if (window.history && window.history.replaceState && window.location.protocol.startsWith('http')) {
      const path = window.location.pathname;
      if (path.endsWith('.html')) {
        let cleanPath = path.slice(0, -5);
        if (cleanPath.endsWith('/index') || cleanPath === 'index' || cleanPath === '/index') {
          cleanPath = cleanPath.replace(/\/index$/, '') || '/';
        }
        const cleanUrl = cleanPath + window.location.search + window.location.hash;
        window.history.replaceState(null, document.title, cleanUrl);
      }
    }
  } catch (err) {
    // Abaikan pada environment file://
  }
})();

// ----- WhatsApp CTA Helpers -----
const WA_NUMBER = '6282131087971';
const WA_BASE = `https://wa.me/${WA_NUMBER}`;

/**
 * Buat URL WhatsApp dengan pesan yang sudah di-encode
 * @param {string} message
 * @returns {string}
 */
function buildWAUrl(message) {
  return `${WA_BASE}?text=${encodeURIComponent(message)}`;
}

// Inject URL ke semua tombol WA dan copyright tahun saat idle agar tidak memblokir render / reflow awal
const initNonCritical = () => {
  document.querySelectorAll('[data-wa-message]').forEach(el => {
    const msg = el.dataset.waMessage;
    if (msg) el.href = buildWAUrl(msg);
  });
  document.querySelectorAll('.js-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
};

if ('requestIdleCallback' in window) {
  requestIdleCallback(initNonCritical);
} else {
  setTimeout(initNonCritical, 50);
}

document.addEventListener('DOMContentLoaded', () => {
  // ----- Mobile Navbar Controller & Resilience Handler -----
  const navbarCollapse = document.getElementById('navbarMain');
  const navbarToggler = document.querySelector('.navbar-toggler');

  if (navbarCollapse && navbarToggler) {
    const isMobile = () => window.matchMedia('(max-width: 991.98px)').matches;

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

    // Handler klik dropdown "Paket" di desktop & mobile
    const dropdownToggles = navbarCollapse.querySelectorAll('.dropdown-toggle');

    /**
     * Buka/tutup sub-menu dropdown paket secara manual (tidak bergantung Bootstrap JS)
     * agar selalu bekerja di mobile maupun desktop.
     */
    const openDropdown = (toggle, menu, parentDropdown) => {
      // Bersihkan style inline Popper jika ada, lalu tambahkan class show
      menu.removeAttribute('style');
      menu.classList.add('show');
      toggle.classList.add('show');
      toggle.setAttribute('aria-expanded', 'true');
      if (parentDropdown) parentDropdown.classList.add('show');
    };

    const closeDropdown = (toggle, menu, parentDropdown) => {
      menu.classList.remove('show');
      menu.removeAttribute('style');
      toggle.classList.remove('show');
      toggle.setAttribute('aria-expanded', 'false');
      if (parentDropdown) parentDropdown.classList.remove('show');
    };

    const closeAllDropdowns = () => {
      dropdownToggles.forEach(t => {
        const pd = t.closest('.dropdown');
        const m = pd ? pd.querySelector('.dropdown-menu') : null;
        if (m) closeDropdown(t, m, pd);
      });
    };

    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        const parentDropdown = this.closest('.dropdown');
        const menu = parentDropdown ? parentDropdown.querySelector('.dropdown-menu') : null;
        if (!menu) return;

        const isOpen = menu.classList.contains('show') || (parentDropdown && parentDropdown.classList.contains('show'));

        if (isOpen) {
          closeDropdown(this, menu, parentDropdown);
        } else {
          closeAllDropdowns();
          openDropdown(this, menu, parentDropdown);
        }
      });
    });

    // Otomatis tutup navbar HANYA untuk anchor link di halaman yang sama (misal #portofolio)
    // Jangan batalkan navigasi untuk link halaman (.dropdown-item & halaman lain) agar selalu bisa di-klik di mobile
    const navLinks = navbarCollapse.querySelectorAll('.nav-link:not(.dropdown-toggle), .hl-btn-wa');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          if (isMobile()) {
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
    });

    // Tutup saat user klik di luar area navbar atau dropdown
    document.addEventListener('click', (e) => {
      // Tutup dropdown menu jika klik di luar semua area dropdown
      const anyDropdownContains = Array.from(dropdownToggles).some(toggle => {
        const pd = toggle.closest('.dropdown');
        return pd && pd.contains(e.target);
      });
      if (!anyDropdownContains) {
        closeAllDropdowns();
      }

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
    let isScrolled = false;
    const updateScrollState = () => {
      const shouldBeScrolled = window.scrollY > 10;
      if (shouldBeScrolled !== isScrolled) {
        isScrolled = shouldBeScrolled;
        navbar.classList.toggle('is-scrolled', isScrolled);
      }
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    }, { passive: true });
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

  // ----- Back to Top Button Controllers (Floating & Footer) -----
  const backToTopBtn = document.getElementById('hlBackToTop');
  const allBackToTopBtns = document.querySelectorAll('.js-back-to-top, #hlBackToTop, .hl-footer-btt');

  const scrollToTop = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  allBackToTopBtns.forEach(btn => {
    btn.addEventListener('click', scrollToTop);
    btn.addEventListener('touchend', scrollToTop, { passive: true });
  });

  if (backToTopBtn) {
    let tickingBtt = false;
    const toggleBackToTop = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      if (scrollY > 250) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
      tickingBtt = false;
    };

    const handleScroll = () => {
      if (!tickingBtt) {
        requestAnimationFrame(toggleBackToTop);
        tickingBtt = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });
  }

  // ----- Instant Page Prefetcher & Prerender (Zero-latency navigation, eliminates white blink) -----
  const prefetchedUrls = new Set();
  const prefetchLink = (url) => {
    if (!url || prefetchedUrls.has(url)) return;
    try {
      const parsed = new URL(url, window.location.href);
      if (parsed.origin !== window.location.origin) return;
      if (parsed.pathname === window.location.pathname) return;
      prefetchedUrls.add(url);

      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = parsed.href;
      link.as = 'document';
      document.head.appendChild(link);

      const prerender = document.createElement('link');
      prerender.rel = 'prerender';
      prerender.href = parsed.href;
      document.head.appendChild(prerender);
    } catch (e) {}
  };

  const attachLinkPrefetch = () => {
    // Immediately prefetch primary navigation targets for instant 0ms switching
    const primaryNavUrls = [
      'index.html',
      'tentang.html',
      'paket.html',
      'portofolio.html',
      'blog.html',
      'kontak.html',
      'paket-hampers-premium.html',
      'paket-hampers-kue-camilan.html',
      'paket-hampers-perlengkapan-ibadah.html',
      'paket-hampers-custom.html'
    ];
    primaryNavUrls.forEach(url => prefetchLink(url));

    document.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('https://wa.me') || href.startsWith('javascript:')) return;
      a.addEventListener('pointerenter', () => prefetchLink(href), { passive: true, once: true });
      a.addEventListener('pointerdown', () => prefetchLink(href), { passive: true, once: true });
      a.addEventListener('touchstart', () => prefetchLink(href), { passive: true, once: true });
    });
  };

  if ('requestIdleCallback' in window) {
    requestIdleCallback(attachLinkPrefetch);
  } else {
    setTimeout(attachLinkPrefetch, 100);
  }
});

