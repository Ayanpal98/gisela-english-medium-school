/**
 * Gisela English Medium High School - Navigation Dropdown Controller
 * Handles accessible dropdown menus for desktop and mobile navigation.
 */

(function () {
  'use strict';

  function initNavbarDropdowns() {
    const dropdownItems = document.querySelectorAll('.nav-dropdown-item');
    const mobileMenu = document.getElementById('mobile');
    const menuBtn = document.getElementById('menu');

    // Desktop Dropdown Triggers
    dropdownItems.forEach((item) => {
      const trigger = item.querySelector('.nav-dropdown-trigger');
      const menu = item.querySelector('.nav-dropdown-menu');
      if (!trigger || !menu) return;

      // Toggle on click for touch screens and accessibility
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = item.classList.contains('is-open');

        // Close other open dropdowns
        dropdownItems.forEach((other) => {
          if (other !== item) {
            other.classList.remove('is-open');
            const otherBtn = other.querySelector('.nav-dropdown-trigger');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        if (isOpen) {
          item.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });

      // Hover opens and updates aria-expanded
      item.addEventListener('mouseenter', () => {
        trigger.setAttribute('aria-expanded', 'true');
      });

      item.addEventListener('mouseleave', () => {
        if (!item.classList.contains('is-open')) {
          trigger.setAttribute('aria-expanded', 'false');
        }
      });

      // Keyboard navigation
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          item.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
          trigger.focus();
        }
      });

      // Close dropdown when a sublink is clicked
      const links = menu.querySelectorAll('a');
      links.forEach((link) => {
        link.addEventListener('click', () => {
          item.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
        });
      });
    });

    // Close all open desktop dropdowns when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-dropdown-item')) {
        dropdownItems.forEach((item) => {
          item.classList.remove('is-open');
          const trigger = item.querySelector('.nav-dropdown-trigger');
          if (trigger) trigger.setAttribute('aria-expanded', 'false');
        });
      }
    });

    // Mobile Navigation: Close mobile drawer when an anchor link is clicked
    if (mobileMenu) {
      const mobileLinks = mobileMenu.querySelectorAll('a');
      mobileLinks.forEach((link) => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          if (menuBtn) {
            menuBtn.setAttribute('aria-expanded', 'false');
            menuBtn.setAttribute('aria-label', 'Open navigation');
          }
        });
      });
    }

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbarDropdowns);
  } else {
    initNavbarDropdowns();
  }
})();
