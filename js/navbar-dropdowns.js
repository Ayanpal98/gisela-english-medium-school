/**
 * Gisela English Medium High School - Navigation & Utility Controller
 * Handles:
 * - Desktop dropdown menus for all 10 navigation items
 * - Mobile drawer & accordion controls
 * - Accessibility font-size adjustment (A-, A, A+) & high contrast toggle
 * - Search bar filter & modal triggers (Online Fee, Alumni)
 */

(function () {
  'use strict';

  function initNavbarAndUtilities() {
    // 1. Accessibility Toolbar
    let currentFontSize = 100; // base percentage
    const btnDec = document.getElementById('btnFontDec');
    const btnReset = document.getElementById('btnFontReset');
    const btnInc = document.getElementById('btnFontInc');
    const btnContrast = document.getElementById('btnContrastToggle');

    if (btnDec) {
      btnDec.addEventListener('click', () => {
        if (currentFontSize > 85) {
          currentFontSize -= 5;
          document.documentElement.style.fontSize = currentFontSize + '%';
        }
      });
    }

    if (btnReset) {
      btnReset.addEventListener('click', () => {
        currentFontSize = 100;
        document.documentElement.style.fontSize = '100%';
      });
    }

    if (btnInc) {
      btnInc.addEventListener('click', () => {
        if (currentFontSize < 125) {
          currentFontSize += 5;
          document.documentElement.style.fontSize = currentFontSize + '%';
        }
      });
    }

    if (btnContrast) {
      btnContrast.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
      });
    }

    // 2. Search Box Submission & Filtering
    const searchForm = document.getElementById('schoolSearchForm');
    const searchInput = document.getElementById('schoolSearchInput');

    if (searchForm && searchInput) {
      searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim().toLowerCase();
        if (!query) return;

        // Smart page routing based on query keywords
        if (query.includes('admiss') || query.includes('apply') || query.includes('enquir') || query.includes('form') || query.includes('fee')) {
          window.location.hash = '#admissions';
        } else if (query.includes('princ') || query.includes('head') || query.includes('messag')) {
          window.location.hash = '#principal-message';
        } else if (query.includes('class') || query.includes('course') || query.includes('acad') || query.includes('curric')) {
          window.location.hash = '#academics';
        } else if (query.includes('hostel') || query.includes('room') || query.includes('stay')) {
          window.location.hash = '#hostel';
        } else if (query.includes('photo') || query.includes('video') || query.includes('galler')) {
          window.location.hash = '#gallery';
        } else if (query.includes('contact') || query.includes('phone') || query.includes('mail') || query.includes('locat')) {
          window.location.hash = '#contact';
        } else if (query.includes('portal') || query.includes('login')) {
          window.location.href = 'portal.html';
        } else {
          // Highlight match on page or scroll to admissions/contact
          window.location.hash = '#admissions';
        }
      });
    }

    // 3. Desktop Dropdown Menus
    const navItems = document.querySelectorAll('.nav-item.has-dropdown');

    navItems.forEach((item) => {
      const btn = item.querySelector('.nav-dropdown-btn');
      const panel = item.querySelector('.dropdown-panel');
      if (!btn || !panel) return;

      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = item.classList.contains('is-open');

        // Close other open dropdowns
        navItems.forEach((other) => {
          if (other !== item) {
            other.classList.remove('is-open');
            const otherBtn = other.querySelector('.nav-dropdown-btn');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        if (isOpen) {
          item.classList.remove('is-open');
          btn.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('is-open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });

      // Hover triggers
      item.addEventListener('mouseenter', () => {
        btn.setAttribute('aria-expanded', 'true');
      });

      item.addEventListener('mouseleave', () => {
        if (!item.classList.contains('is-open')) {
          btn.setAttribute('aria-expanded', 'false');
        }
      });

      // Close on sublink click
      panel.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          item.classList.remove('is-open');
          btn.setAttribute('aria-expanded', 'false');
        });
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-item.has-dropdown')) {
        navItems.forEach((item) => {
          item.classList.remove('is-open');
          const btn = item.querySelector('.nav-dropdown-btn');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });
      }
    });

    // 4. Mobile Menu Drawer Toggle
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');

    if (mobileBtn && mobileDrawer) {
      mobileBtn.addEventListener('click', () => {
        const isHidden = mobileDrawer.classList.toggle('hidden');
        mobileBtn.setAttribute('aria-expanded', String(!isHidden));
        mobileBtn.innerHTML = isHidden 
          ? '<i data-lucide="menu" class="w-6 h-6"></i>'
          : '<i data-lucide="x" class="w-6 h-6"></i>';
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
          window.lucide.createIcons();
        }
      });

      // Close mobile drawer when an anchor link is clicked
      mobileDrawer.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          mobileDrawer.classList.add('hidden');
          mobileBtn.setAttribute('aria-expanded', 'false');
          mobileBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
          if (window.lucide && typeof window.lucide.createIcons === 'function') {
            window.lucide.createIcons();
          }
        });
      });
    }

    // 5. Online Fee & Alumni Modal/Alert Handlers
    const feeBtn = document.getElementById('navOnlineFeeBtn');
    const alumniBtn = document.getElementById('navAlumniBtn');

    if (feeBtn) {
      feeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'portal.html#fee';
      });
    }

    if (alumniBtn) {
      alumniBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.hash = '#contact';
      });
    }

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbarAndUtilities);
  } else {
    initNavbarAndUtilities();
  }
})();
