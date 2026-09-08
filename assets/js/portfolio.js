/* ============================================================
   Portfolio JS — Aeron Jhed V. Lachano
   Lightweight vanilla JavaScript for navigation and interactions
   ============================================================ */

(function () {
  'use strict';

  // ── Sticky Navbar ──────────────────────────────────────────
  const navbar = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scroll-top-btn');

  function getNavbarHeight() {
    return navbar ? navbar.offsetHeight : 64;
  }

  function handleScroll() {
    const scrollY = window.scrollY;

    // Add scrolled class to navbar
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Show/hide scroll-to-top button
    if (scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }

    // Update active nav link
    updateActiveLink();
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // ── Scroll to Top ──────────────────────────────────────────
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── Mobile Hamburger Toggle ────────────────────────────────
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);

      // Toggle hamburger icon to X
      const bars = navToggle.querySelector('.hamburger-bars');
      const close = navToggle.querySelector('.hamburger-close');
      if (bars && close) {
        bars.style.display = isOpen ? 'none' : 'block';
        close.style.display = isOpen ? 'block' : 'none';
      }
    });

    // Close mobile menu when clicking a link
    navLinks.querySelectorAll('.navbar__link').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        const bars = navToggle.querySelector('.hamburger-bars');
        const close = navToggle.querySelector('.hamburger-close');
        if (bars && close) {
          bars.style.display = 'block';
          close.style.display = 'none';
        }
      });
    });

    // Close mobile menu on outside click
    document.addEventListener('click', function (e) {
      if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        const bars = navToggle.querySelector('.hamburger-bars');
        const close = navToggle.querySelector('.hamburger-close');
        if (bars && close) {
          bars.style.display = 'block';
          close.style.display = 'none';
        }
      }
    });
  }

  // ── Active Nav Link on Scroll ──────────────────────────────
  function updateActiveLink() {
    var sections = document.querySelectorAll('section[id]');
    var navLinksAll = document.querySelectorAll('.navbar__link[href^="#"]');
    var offset = getNavbarHeight() + 32;
    var scrollY = window.scrollY + offset;

    var currentSection = '';
    sections.forEach(function (section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinksAll.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  }

  // ── Smooth Scroll for Anchor Links ─────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        // Use CSS scroll-margin-top for offset; plain scrollIntoView respects it
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── Initial call ───────────────────────────────────────────
  handleScroll();
})();
