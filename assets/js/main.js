/**
 * Hampers Lebaran — Main JavaScript
 * Ultra-fast Zero-Delay Navigation & Interactive Elements
 */

'use strict';

// ----- WhatsApp CTA Helpers -----
const WA_NUMBER = '6282131087971';
const WA_BASE = 'https://wa.me/' + WA_NUMBER;

function buildWAUrl(message) {
  return WA_BASE + '?text=' + encodeURIComponent(message);
}

// Inject URL ke semua tombol WA dan copyright tahun
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
  const isMobile = () => window.matchMedia('(max-width: 991.98px)').matches;

  const openNavbar = () => {
    if (!navbarCollapse || !navbarToggler) return;
    navbarCollapse.classList.add('show');
    navbarToggler.setAttribute('aria-expanded', 'true');
    navbarToggler.classList.add('is-active');
  };

  const closeNavbar = () => {
    if (!navbarCollapse || !navbarToggler) return;
    navbarCollapse.classList.remove('show');
    navbarToggler.setAttribute('aria-expanded', 'false');
    navbarToggler.classList.remove('is-active');

    navbarCollapse.querySelectorAll('.dropdown-menu.show').forEach(menu => {
      menu.classList.remove('show');
    });
    navbarCollapse.querySelectorAll('.dropdown-toggle[aria-expanded="true"]').forEach(btn => {
      btn.setAttribute('aria-expanded', 'false');
      btn.classList.remove('show');
    });
  };

  const toggleNavbar = () => {
    if (!navbarCollapse) return;
    const isExpanded = navbarCollapse.classList.contains('show');
    if (isExpanded) {
      closeNavbar();
    } else {
      openNavbar();
    }
  };

  if (navbarCollapse && navbarToggler) {
    navbarToggler.addEventListener('click', (e) => {
      if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
        setTimeout(() => {
          const isOpen = navbarCollapse.classList.contains('show') || navbarCollapse.classList.contains('collapsing');
          navbarToggler.classList.toggle('is-active', isOpen);
          navbarToggler.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        }, 60);
        return;
      }
      e.preventDefault();
      toggleNavbar();
    });

    const dropdownToggles = navbarCollapse.querySelectorAll('.dropdown-toggle');

    const openDropdown = (toggle, menu, parentDropdown) => {
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

    document.addEventListener('click', (e) => {
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
            if (bsCollapse) bsCollapse.hide();
          }
        }
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isMobile() && navbarCollapse.classList.contains('show')) {
        closeNavbar();
        if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) bsCollapse.hide();
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

  // Back to Top Button
  const backToTopBtn = document.getElementById('hlBackToTop');
  const scrollToTop = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

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
    window.addEventListener('scroll', () => {
      if (!tickingBtt) {
        requestAnimationFrame(toggleBackToTop);
        tickingBtt = true;
      }
    }, { passive: true });
  }

  // ----- Page Feature Initializers (Run on load & after every instant navigation) -----
  const initPageFeatures = () => {
    initNonCritical();

    // Product image thumbnails
    const thumbs = document.querySelectorAll('.hl-product-thumb');
    const mainImgWrap = document.querySelector('.hl-product-main-img');
    if (thumbs.length && mainImgWrap) {
      thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
          thumbs.forEach(t => t.classList.remove('active'));
          thumb.classList.add('active');
          const img = thumb.querySelector('img');
          const mainImg = mainImgWrap.querySelector('img');
          if (img && mainImg) mainImg.src = img.src;
        });
        thumb.addEventListener('keydown', e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            thumb.click();
          }
        });
      });
    }

    // Smooth scroll for anchor links
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
        } catch (err) {}
      });
    });

    // Accordions
    document.querySelectorAll('.hl-accordion .accordion-button').forEach(btn => {
      btn.addEventListener('click', function(e) {
        if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) return;
        e.preventDefault();
        const targetSel = this.getAttribute('data-bs-target') || this.getAttribute('href');
        if (!targetSel) return;
        const targetEl = document.querySelector(targetSel);
        if (!targetEl) return;
        const isExpanded = this.getAttribute('aria-expanded') === 'true' || targetEl.classList.contains('show');
        const parentSel = targetEl.getAttribute('data-bs-parent');
        if (parentSel && !isExpanded) {
          const parentEl = document.querySelector(parentSel);
          if (parentEl) {
            parentEl.querySelectorAll('.accordion-collapse.show').forEach(openEl => {
              if (openEl !== targetEl) {
                openEl.classList.remove('show');
                const otherBtn = parentEl.querySelector('[data-bs-target="#' + openEl.id + '"], [href="#' + openEl.id + '"]');
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

    // Portfolio keyboard accessibility
    document.querySelectorAll('.hl-portfolio-item').forEach(item => {
      const link = item.querySelector('a');
      if (link) {
        item.setAttribute('tabindex', '0');
        item.addEventListener('keydown', e => {
          if (e.key === 'Enter') link.click();
        });
      }
    });

    // Back to top click listeners
    document.querySelectorAll('.js-back-to-top, #hlBackToTop, .hl-footer-btt').forEach(btn => {
      btn.addEventListener('click', scrollToTop);
      btn.addEventListener('touchend', scrollToTop, { passive: true });
    });
  };

  // Initial run
  initPageFeatures();

  // ===== Instant Seamless Page Router (Zero Jeda / Zero Delay Navigation) =====
  const pageCache = new Map();

  const updateNavbarActiveState = (targetUrl) => {
    try {
      const parsed = new URL(targetUrl, window.location.href);
      let filename = parsed.pathname.split('/').pop() || 'index.html';
      if (filename === '') filename = 'index.html';

      document.querySelectorAll('.hl-navbar .nav-link:not(.dropdown-toggle), .hl-navbar .dropdown-item').forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;
        let linkFile = href.split('#')[0].split('?')[0].split('/').pop() || 'index.html';
        if (linkFile === '') linkFile = 'index.html';

        if (linkFile === filename) {
          link.classList.add('active');
          link.setAttribute('aria-current', 'page');
        } else {
          link.classList.remove('active');
          link.removeAttribute('aria-current');
        }
      });

      const paketToggle = document.getElementById('navDropdownPaket');
      if (paketToggle) {
        const isPaket = filename.startsWith('paket');
        paketToggle.classList.toggle('active', isPaket);
        if (isPaket) {
          paketToggle.setAttribute('aria-current', 'page');
        } else {
          paketToggle.removeAttribute('aria-current');
        }
      }
    } catch (e) {}
  };

  const prefetchUrl = async (url) => {
    if (!url || pageCache.has(url)) return;
    try {
      const parsed = new URL(url, window.location.href);
      if (parsed.origin !== window.location.origin) return;
      if (parsed.pathname === window.location.pathname && !parsed.hash) return;
      const res = await fetch(parsed.href);
      if (res.ok) {
        const text = await res.text();
        pageCache.set(url, text);
        pageCache.set(parsed.pathname, text);
        pageCache.set(parsed.href, text);
      }
    } catch (e) {}
  };

  const attachPrefetchHandlers = () => {
    document.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('https://wa.me') || href.startsWith('javascript:')) return;
      a.addEventListener('pointerenter', () => prefetchUrl(href), { passive: true, once: true });
      a.addEventListener('touchstart', () => prefetchUrl(href), { passive: true, once: true });
    });
  };

  attachPrefetchHandlers();

  // Instant Page Swap Handler
  const swapToPage = async (url, pushHistory = true) => {
    try {
      let htmlText = pageCache.get(url) || pageCache.get(new URL(url, window.location.href).href);
      if (!htmlText) {
        const res = await fetch(url);
        if (!res.ok) throw new Error('HTTP ' + res.status);
        htmlText = await res.text();
        pageCache.set(url, htmlText);
      }

      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlText, 'text/html');

      const newMain = doc.querySelector('main#main-content');
      const currentMain = document.querySelector('main#main-content');
      if (!newMain || !currentMain) {
        window.location.href = url;
        return;
      }

      const performSwap = () => {
        // Update Title
        if (doc.title) document.title = doc.title;

        // Swap Main Content
        currentMain.innerHTML = newMain.innerHTML;

        // Inject any stylesheet from new page if not already loaded
        doc.querySelectorAll('link[rel="stylesheet"], link[as="style"]').forEach(l => {
          const href = l.getAttribute('href');
          if (href && !document.querySelector('link[href="' + href + '"]')) {
            const clone = l.cloneNode(true);
            document.head.appendChild(clone);
          }
        });

        // Update active class on navbar
        updateNavbarActiveState(url);

        // Scroll to top
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

        // Close mobile navbar
        if (isMobile() && navbarCollapse && navbarCollapse.classList.contains('show')) {
          closeNavbar();
        }

        // Re-initialize features
        initPageFeatures();
        attachPrefetchHandlers();
      };

      if (document.startViewTransition) {
        document.startViewTransition(performSwap);
      } else {
        performSwap();
      }

      if (pushHistory) {
        window.history.pushState({ url: url }, doc.title || '', url);
      }
    } catch (err) {
      window.location.href = url;
    }
  };

  // Intercept internal link clicks to deliver ZERO JEDA navigation
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;
    if (e.defaultPrevented) return;
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (link.getAttribute('target') === '_blank') return;
    if (link.classList.contains('dropdown-toggle')) return;

    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('https://wa.me') || href.startsWith('javascript:')) return;

    try {
      const parsed = new URL(href, window.location.href);
      if (parsed.origin !== window.location.origin) return;

      // Same page anchor link
      if (parsed.pathname === window.location.pathname) {
        if (parsed.hash) return; // handled by anchor scroll
        e.preventDefault();
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        return;
      }

      e.preventDefault();
      swapToPage(href, true);
    } catch (err) {
      // Allow default navigation
    }
  });

  // Handle browser back and forward button
  window.addEventListener('popstate', (e) => {
    swapToPage(window.location.href, false);
  });
});
