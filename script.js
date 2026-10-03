(function () {
  'use strict';

  // ── Smooth Scroll Polyfill ──
  function smoothScrollTo(targetY) {
    var startY = window.pageYOffset;
    var diff = targetY - startY;
    var duration = 600;
    var startTime = null;

    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var elapsed = timestamp - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var eased = easeInOutCubic(progress);
      window.scrollTo(0, startY + diff * eased);
      if (elapsed < duration) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  // Intercept anchor links for smooth scrolling
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (!link) return;
    var id = link.getAttribute('href').slice(1);
    if (!id) return;
    var target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    var offset = target.getBoundingClientRect().top + window.pageYOffset - 80;
    smoothScrollTo(offset);
    // Close mobile nav if open
    var nav = document.querySelector('.mobile-nav');
    if (nav) nav.classList.remove('open');
    var toggle = document.querySelector('.nav-toggle');
    if (toggle) toggle.classList.remove('active');
  });

  // ── Mobile Navigation Toggle ──
  var navToggle = document.querySelector('.nav-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('active');
      mobileNav.classList.toggle('open');
    });
  }

  // ── Contact Form ──
  var form = document.getElementById('contact-form');
  if (form) {
    var nameInput = form.querySelector('[name="name"]');
    var emailInput = form.querySelector('[name="email"]');
    var messageInput = form.querySelector('[name="message"]');
    var submitBtn = form.querySelector('button[type="submit"]');

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showToast(message, type) {
      var toast = document.createElement('div');
      toast.className = 'toast toast-' + type;
      toast.textContent = message;
      document.body.appendChild(toast);
      requestAnimationFrame(function () {
        toast.classList.add('show');
      });
      setTimeout(function () {
        toast.classList.remove('show');
        setTimeout(function () {
          if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, 300);
      }, 4000);
    }

    function setFieldError(field, message) {
      var errorEl = field.parentElement.querySelector('.field-error');
      if (!errorEl) {
        errorEl = document.createElement('span');
        errorEl.className = 'field-error';
        field.parentElement.appendChild(errorEl);
      }
      errorEl.textContent = message;
      field.classList.add('invalid');
    }

    function clearFieldError(field) {
      var errorEl = field.parentElement.querySelector('.field-error');
      if (errorEl) errorEl.textContent = '';
      field.classList.remove('invalid');
    }

    // Live validation on input
    [nameInput, emailInput, messageInput].forEach(function (field) {
      if (!field) return;
      field.addEventListener('input', function () {
        clearFieldError(field);
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;

      if (!nameInput.value.trim()) {
        setFieldError(nameInput, 'Name is required');
        valid = false;
      }
      if (!emailInput.value.trim()) {
        setFieldError(emailInput, 'Email is required');
        valid = false;
      } else if (!validateEmail(emailInput.value.trim())) {
        setFieldError(emailInput, 'Please enter a valid email');
        valid = false;
      }
      if (!messageInput.value.trim()) {
        setFieldError(messageInput, 'Message is required');
        valid = false;
      }

      if (!valid) return;

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      var formData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageInput.value.trim()
      };

      fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(function (response) {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.json();
        })
        .then(function () {
          showToast('Thank you! Your message has been sent.', 'success');
          form.reset();
        })
        .catch(function () {
          showToast('Sorry, something went wrong. Please try again.', 'error');
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message';
        });
    });
  }

  // ── Intersection Observer for Scroll Reveal ──
  var revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all immediately
    revealElements.forEach(function (el) {
      el.classList.add('revealed');
    });
  }

  // ── Current Year Injection ──
  var yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();