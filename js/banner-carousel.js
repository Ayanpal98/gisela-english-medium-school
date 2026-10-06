/**
 * Gisela English Medium High School - Promotional & Advertisement Banner Carousel
 * Supports official school announcements, achievements, events and third-party sponsored ads.
 * Adheres strictly to the school design system and accessibility standards.
 */

(function () {
  'use strict';

  // Default banners matching the Gisela English Medium High School theme
  const DEFAULT_BANNERS = [
    {
      id: 'banner-admissions-2026',
      image: 'images/banners/admission-2026-desktop.svg',
      mobileImage: 'images/banners/admission-2026-mobile.svg',
      title: 'Admissions Open 2026–27',
      subtitle: 'Classes I–X · Day School & Hostel Facility',
      description: 'Admission enquiries are now being accepted for the 2026–27 session. Providing disciplined, English-medium education in Silachari.',
      link: '#admissions',
      buttonText: 'Enquire Now',
      type: 'school',
      badge: 'Admissions 2026–27',
      sponsored: false,
      style: 'style-b',
      active: true,
      startDate: null,
      endDate: null
    },
    {
      id: 'banner-annual-exhibition',
      image: 'images/banners/annual-exhibition-desktop.svg',
      mobileImage: 'images/banners/annual-exhibition-mobile.svg',
      title: 'Annual Science & Cultural Exhibition 2026',
      subtitle: 'Innovate · Create · Inspire',
      description: 'Student exhibits, working science models and cultural presentations on November 14–16, 2026.',
      link: '#campus',
      buttonText: 'Explore Campus',
      type: 'school',
      badge: 'School Event',
      sponsored: false,
      style: 'style-a', // Style A: Image-only promotional artwork
      active: true,
      startDate: null,
      endDate: null
    },
    {
      id: 'banner-excellence-awards',
      image: 'images/banners/excellence-awards-desktop.svg',
      mobileImage: 'images/banners/excellence-awards-mobile.svg',
      title: 'Celebrating Student Excellence',
      subtitle: 'Academic & Co-Curricular Honours',
      description: 'Commending our students on outstanding performance in state assessments, co-curricular competitions and academic growth.',
      link: '#achievements',
      buttonText: 'View Achievements',
      type: 'school',
      badge: 'School Achievement',
      sponsored: false,
      style: 'style-b',
      active: true,
      startDate: null,
      endDate: null
    },
    {
      id: 'banner-community-bookfair',
      image: 'images/banners/community-bookfair-desktop.svg',
      mobileImage: 'images/banners/community-bookfair-mobile.svg',
      title: 'Silachari Community Educational Book Fair',
      subtitle: 'Community Reading & Educational Resources',
      description: 'Explore curated student books, reading materials and educational stationery in Silachari. Partner educational initiative.',
      link: '#contact',
      buttonText: 'Partner Details',
      type: 'advertisement',
      badge: 'Sponsored',
      sponsored: true, // Third-party advertisement with mandatory "Sponsored" badge
      style: 'style-b',
      active: true,
      startDate: null,
      endDate: null
    }
  ];

  const ROTATION_INTERVAL = 5000; // 5 seconds auto-slide as requested
  const ESC_MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  const esc = (str) => String(str ?? '').replace(/[&<>"']/g, (m) => ESC_MAP[m]);

  function isSlideActive(slide) {
    if (!slide || slide.active === false) return false;
    const now = new Date();
    if (slide.startDate && new Date(slide.startDate) > now) return false;
    if (slide.endDate && new Date(slide.endDate) < now) return false;
    return true;
  }

  function initCarousel() {
    const root = document.getElementById('bannerCarouselRoot');
    if (!root) return;

    let bannerList = DEFAULT_BANNERS;
    try {
      const saved = JSON.parse(localStorage.getItem('giselaBanners') || 'null');
      if (Array.isArray(saved) && saved.length > 0) {
        bannerList = saved;
      }
    } catch (e) {
      // Use defaults if localStorage is empty or unavailable
    }

    const slides = bannerList.filter(isSlideActive);
    if (!slides.length) {
      root.style.display = 'none';
      return;
    }

    let currentIndex = 0;
    let timer = null;
    let isUserPaused = false;
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      isUserPaused = true;
    }

    // Render Markup
    root.innerHTML = `
      <div class="banner-carousel-container" role="region" aria-roledescription="carousel" aria-label="Featured Announcements and Advertisements">
        <!-- Slides Track Wrapper -->
        <div class="banner-track-viewport">
          <div class="banner-slides-track" id="bannerSlidesTrack">
            ${slides.map((slide, index) => renderSlide(slide, index, slides.length)).join('')}
          </div>
        </div>

        <!-- Navigation Controls: Left Arrow -->
        <button type="button" class="banner-nav-btn banner-nav-prev focus-ring" id="bannerPrevBtn" aria-label="Previous slide" title="Previous slide">
          <i data-lucide="chevron-left" class="w-6 h-6"></i>
        </button>

        <!-- Navigation Controls: Right Arrow -->
        <button type="button" class="banner-nav-btn banner-nav-next focus-ring" id="bannerNextBtn" aria-label="Next slide" title="Next slide">
          <i data-lucide="chevron-right" class="w-6 h-6"></i>
        </button>

        <!-- Play / Pause Toggle Button (Upper Right) -->
        <button type="button" class="banner-play-pause-btn focus-ring" id="bannerPlayPauseBtn" aria-label="${isUserPaused ? 'Play slideshow' : 'Pause slideshow'}" title="${isUserPaused ? 'Play slideshow' : 'Pause slideshow'}">
          <i data-lucide="${isUserPaused ? 'play' : 'pause'}" class="w-4 h-4"></i>
        </button>

        <!-- Slide Indicators / Pagination (Bottom Center) -->
        <div class="banner-indicators" role="tablist" aria-label="Slide indicators">
          ${slides.map((slide, index) => `
            <button type="button" role="tab" class="banner-dot focus-ring ${index === 0 ? 'active' : ''}" data-slide-index="${index}" aria-label="Go to slide ${index + 1}: ${esc(slide.title || 'Slide ' + (index + 1))}" aria-selected="${index === 0 ? 'true' : 'false'}"></button>
          `).join('')}
        </div>
      </div>
    `;

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }

    const track = document.getElementById('bannerSlidesTrack');
    const prevBtn = document.getElementById('bannerPrevBtn');
    const nextBtn = document.getElementById('bannerNextBtn');
    const playPauseBtn = document.getElementById('bannerPlayPauseBtn');
    const dots = root.querySelectorAll('.banner-dot');

    function updateSlide(animate = true) {
      if (!track) return;
      if (!animate || prefersReducedMotion) {
        track.style.transition = 'none';
      } else {
        track.style.transition = 'transform 500ms cubic-bezier(0.25, 1, 0.5, 1)';
      }
      track.style.transform = `translateX(-${currentIndex * 100}%)`;

      // Update active indicators
      dots.forEach((dot, idx) => {
        const isActive = idx === currentIndex;
        dot.classList.toggle('active', isActive);
        dot.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      // Update ARIA hidden state on slides
      const allSlides = track.querySelectorAll('.banner-slide');
      allSlides.forEach((s, idx) => {
        const isActive = idx === currentIndex;
        s.setAttribute('aria-hidden', isActive ? 'false' : 'true');
        if (isActive) {
          s.removeAttribute('inert');
        } else {
          s.setAttribute('inert', '');
        }
      });
    }

    function goToSlide(index) {
      currentIndex = (index + slides.length) % slides.length;
      updateSlide(true);
      resetTimer();
    }

    function nextSlide() {
      goToSlide(currentIndex + 1);
    }

    function prevSlide() {
      goToSlide(currentIndex - 1);
    }

    function startTimer() {
      if (timer) clearInterval(timer);
      if (isUserPaused || prefersReducedMotion || slides.length <= 1) return;
      timer = setInterval(() => {
        nextSlide();
      }, ROTATION_INTERVAL);
    }

    function pauseTimer() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    function resetTimer() {
      pauseTimer();
      startTimer();
    }

    function setPlayPauseUI(paused) {
      if (!playPauseBtn) return;
      const label = paused ? 'Play slideshow' : 'Pause slideshow';
      playPauseBtn.setAttribute('aria-label', label);
      playPauseBtn.setAttribute('title', label);
      playPauseBtn.innerHTML = `<i data-lucide="${paused ? 'play' : 'pause'}" class="w-4 h-4"></i>`;
      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    }

    // Event Listeners: Navigation
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
      });
    }

    // Event Listeners: Dots
    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const target = parseInt(dot.getAttribute('data-slide-index'), 10);
        if (!isNaN(target)) {
          goToSlide(target);
        }
      });
    });

    // Event Listeners: Play / Pause Button
    if (playPauseBtn) {
      playPauseBtn.addEventListener('click', () => {
        isUserPaused = !isUserPaused;
        setPlayPauseUI(isUserPaused);
        if (isUserPaused) {
          pauseTimer();
        } else {
          startTimer();
        }
      });
    }

    // Hover Pause on Desktop
    root.addEventListener('mouseenter', () => {
      if (!isUserPaused) {
        pauseTimer();
      }
    });

    root.addEventListener('mouseleave', () => {
      if (!isUserPaused) {
        startTimer();
      }
    });

    // Keyboard Focus Pause
    root.addEventListener('focusin', () => {
      if (!isUserPaused) {
        pauseTimer();
      }
    });

    root.addEventListener('focusout', () => {
      if (!isUserPaused) {
        startTimer();
      }
    });

    // Keyboard Arrow Keys when carousel is active
    root.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextSlide();
      }
    });

    // Tab Inactivity Pause
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        pauseTimer();
      } else if (!isUserPaused) {
        startTimer();
      }
    });

    // Mobile Swipe Handling
    root.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    root.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;
      // Only trigger if horizontal swipe is prominent (> 45px) and exceeds vertical motion
      if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX < 0) {
          nextSlide(); // Swiped left -> next
        } else {
          prevSlide(); // Swiped right -> previous
        }
      }
    }

    // Initialize slide state
    updateSlide(false);
    startTimer();
  }

  function renderSlide(slide, index, total) {
    const isFirst = index === 0;
    const isStyleA = slide.style === 'style-a' || (!slide.title && !slide.description);
    const isSponsored = slide.sponsored === true || slide.type === 'advertisement';
    const badgeLabel = isSponsored ? (slide.badge || 'Sponsored') : (slide.badge || (slide.type === 'school' ? 'Official Announcement' : ''));
    const linkUrl = slide.link || '#';
    const hasLink = Boolean(slide.link);

    // Optimized image priority guidelines:
    // First slide has fetchpriority="high", subsequent have fetchpriority="low" and loading="lazy"
    const priorityAttr = isFirst ? 'fetchpriority="high"' : 'fetchpriority="low" loading="lazy"';

    if (isStyleA) {
      // STYLE A: Image-only promotional artwork
      return `
        <article class="banner-slide banner-slide-artwork" role="group" aria-roledescription="slide" aria-label="Slide ${index + 1} of ${total}: ${esc(slide.title || 'Promotional Banner')}">
          ${hasLink ? `<a href="${esc(linkUrl)}" class="banner-slide-full-link focus-ring" aria-label="${esc(slide.title || 'View details')}">` : `<div class="banner-slide-full-link">`}
            <picture class="banner-picture">
              ${slide.mobileImage ? `<source media="(max-width: 640px)" srcset="${esc(slide.mobileImage)}">` : ''}
              <img src="${esc(slide.image)}" alt="${esc(slide.title || 'School Banner Artwork')}" class="banner-img" ${priorityAttr} width="1500" height="420">
            </picture>
            ${isSponsored ? `
              <div class="banner-sponsored-tag">
                <span class="banner-badge banner-badge-sponsored">
                  <i data-lucide="tag" class="w-3 h-3"></i>
                  ${esc(badgeLabel)}
                </span>
              </div>
            ` : ''}
          ${hasLink ? `</a>` : `</div>`}
        </article>
      `;
    }

    // STYLE B: Background image + optional text overlay + CTA button
    return `
      <article class="banner-slide banner-slide-overlay" role="group" aria-roledescription="slide" aria-label="Slide ${index + 1} of ${total}: ${esc(slide.title || 'Announcement')}">
        <picture class="banner-picture">
          ${slide.mobileImage ? `<source media="(max-width: 640px)" srcset="${esc(slide.mobileImage)}">` : ''}
          <img src="${esc(slide.image)}" alt="" class="banner-img" aria-hidden="true" ${priorityAttr} width="1500" height="420">
        </picture>

        <!-- Gradient Scrim for high legibility -->
        <div class="banner-scrim" aria-hidden="true"></div>

        <!-- Slide Overlay Content -->
        <div class="banner-content-wrap">
          <div class="banner-content-inner">
            <!-- Badge / Tag -->
            <div class="banner-badge-row">
              ${isSponsored ? `
                <span class="banner-badge banner-badge-sponsored">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  ${esc(badgeLabel)}
                </span>
              ` : `
                <span class="banner-badge banner-badge-school">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#d9aa45]"></span>
                  ${esc(badgeLabel)}
                </span>
              `}
              ${slide.subtitle ? `<span class="banner-subtitle">${esc(slide.subtitle)}</span>` : ''}
            </div>

            <!-- Title -->
            <h2 class="banner-title">${esc(slide.title || '')}</h2>

            <!-- Description -->
            ${slide.description ? `<p class="banner-description">${esc(slide.description)}</p>` : ''}

            <!-- CTA Button -->
            ${hasLink && slide.buttonText ? `
              <div class="banner-cta-row">
                <a href="${esc(linkUrl)}" class="banner-cta-btn focus-ring ${isSponsored ? 'banner-cta-sponsored' : 'banner-cta-school'}">
                  <span>${esc(slide.buttonText)}</span>
                  <i data-lucide="arrow-right" class="w-4 h-4 ml-1.5"></i>
                </a>
              </div>
            ` : ''}
          </div>
        </div>
      </article>
    `;
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousel);
  } else {
    initCarousel();
  }

  // Expose reload function for admin previews
  window.reloadGiselaBanners = initCarousel;
})();
