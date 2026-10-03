import { menuItems } from './menu-data.js';

// ── Mobile Navigation Toggle ──────────────────────────────────────────────
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu--open');
    navToggle.classList.toggle('nav-toggle--active');
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
  });
}

// ── Smooth Scroll for Anchor Links ────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile nav if open
      if (navMenu) navMenu.classList.remove('nav-menu--open');
      if (navToggle) {
        navToggle.classList.remove('nav-toggle--active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });
});

// ── Menu Rendering ────────────────────────────────────────────────────────
const menuGrid = document.querySelector('.menu-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

function renderMenu(items) {
  if (!menuGrid) return;
  menuGrid.innerHTML = items.map(item => `
    <article class="menu-item" data-category="${item.category}">
      <div class="menu-item__icon">
        ${getCategoryIcon(item.category)}
      </div>
      <div class="menu-item__content">
        <h3 class="menu-item__name">${item.name}</h3>
        <p class="menu-item__description">${item.description}</p>
        <span class="menu-item__price">${item.price}</span>
      </div>
    </article>
  `).join('');
}

function getCategoryIcon(category) {
  const icons = {
    espresso: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 8h1a4 4 0 010 8h-1M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z"/><path d="M6 1v3M10 1v3M14 1v3"/></svg>',
    brewed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v6m0 0a4 4 0 014 4v6a4 4 0 01-4 4 4 4 0 01-4-4v-6a4 4 0 014-4z"/><path d="M8 14h8"/></svg>',
    specialty: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4-6.3-4.6L5.7 21.4 8 14 2 9.4h7.6L12 2z"/></svg>',
    tea: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><path d="M6 2v2M10 2v2M14 2v2"/></svg>',
    pastries: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/><path d="M8 12h8M12 8v8"/></svg>'
  };
  return icons[category] || icons.espresso;
}

// Initial render
renderMenu(menuItems);

// ── Menu Category Filtering ───────────────────────────────────────────────
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.category;

    // Update active state
    filterButtons.forEach(b => b.classList.remove('filter-btn--active'));
    btn.classList.add('filter-btn--active');

    // Filter items
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
      if (category === 'all' || item.dataset.category === category) {
        item.style.display = '';
        item.classList.add('menu-item--visible');
      } else {
        item.style.display = 'none';
        item.classList.remove('menu-item--visible');
      }
    });
  });
});

// ── Contact Form Validation & Submission ──────────────────────────────────
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  const formFields = contactForm.querySelectorAll('input, textarea');
  const formStatus = document.querySelector('.form-status');

  // Real-time validation
  formFields.forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('form-field--error')) {
        validateField(field);
      }
    });
  });

  function validateField(field) {
    const value = field.value.trim();
    let isValid = true;

    if (field.required && !value) {
      isValid = false;
    }

    if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
      }
    }

    if (field.tagName === 'TEXTAREA' && value && value.length < 10) {
      isValid = false;
    }

    if (isValid) {
      field.classList.remove('form-field--error');
      field.classList.add('form-field--valid');
    } else {
      field.classList.add('form-field--error');
      field.classList.remove('form-field--valid');
    }

    return isValid;
  }

  // Form submission
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    let allValid = true;
    formFields.forEach(field => {
      if (!validateField(field)) {
        allValid = false;
      }
    });

    if (!allValid) return;

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    try {
      const formData = new FormData(contactForm);
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        contactForm.reset();
        formFields.forEach(f => {
          f.classList.remove('form-field--valid', 'form-field--error');
        });
        if (formStatus) {
          formStatus.textContent = 'Thank you! Your message has been sent successfully.';
          formStatus.className = 'form-status form-status--success';
        }
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      if (formStatus) {
        formStatus.textContent = 'Something went wrong. Please try again later.';
        formStatus.className = 'form-status form-status--error';
      }
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}

// ── Intersection Observer for Scroll Animations ───────────────────────────
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal--visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all elements with .reveal class
const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach(el => observer.observe(el));

// ── Header Scroll Effect ──────────────────────────────────────────────────
const header = document.querySelector('.site-header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (header) {
    if (currentScroll > 50) {
      header.classList.add('site-header--scrolled');
    } else {
      header.classList.remove('site-header--scrolled');
    }
  }

  lastScroll = currentScroll;
}, { passive: true });

// ── Active Nav Link Highlighting ──────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.remove('nav-link--active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('nav-link--active');
        }
      });
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => sectionObserver.observe(section));
