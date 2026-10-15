(function () {
  'use strict';

  // ---------- Hamburger menu toggle ----------
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
      // Close menu when a link is clicked (mobile UX)
      navLinks.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          hamburger.classList.remove('active');
          navLinks.classList.remove('open');
        });
      });
    });
  }

  // ---------- Smooth scroll for internal anchor links ----------
  // CSS `scroll-behavior: smooth` handles the animation; this adds a
  // fixed-header offset so headings aren't hidden behind the navbar.
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const targetId = link.getAttribute('href').slice(1);
    if (!targetId) return;
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;
    e.preventDefault();
    const headerOffset = 70;
    const top = targetEl.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top: top, behavior: 'smooth' });
  });

  // ---------- Toast helper ----------
  function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(function () {
      toast.classList.remove('show');
    }, 3000);
  }

  // ---------- Contact form handling ----------
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      showToast('Thank you! Your message has been sent.');
      form.reset();
    });
  }

  // ---------- Fade-in on scroll (Intersection Observer) ----------
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: show everything immediately
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  // ---------- Navbar shadow on scroll ----------
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // ---------- Current year in footer ----------
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
})();
