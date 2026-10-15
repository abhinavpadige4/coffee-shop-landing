(function () {
  // Mobile Navigation Toggle
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
  });

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        // close mobile menu after click
        if (!navMenu.classList.contains('hidden')) navMenu.classList.add('hidden');
      }
    });
  });

  // Testimonial Carousel
  const carousel = document.querySelector('[data-carousel]');
  if (carousel) {
    const track = carousel.querySelector('[data-track]');
    const items = Array.from(track.children);
    const prevBtn = carousel.querySelector('[data-prev]');
    const nextBtn = carousel.querySelector('[data-next]');
    const dotsContainer = carousel.querySelector('[data-dots]');
    const dots = Array.from(dotsContainer.children);
    let index = 0;
    const update = () => {
      const width = carousel.offsetWidth;
      track.style.transform = `translateX(-${index * width}px)`;
      dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    };
    const next = () => { index = (index + 1) % items.length; update(); };
    const prev = () => { index = (index - 1 + items.length) % items.length; update(); };
    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => { index = i; update(); });
    });
    let auto = setInterval(next, 5000);
    carousel.addEventListener('mouseenter', () => clearInterval(auto));
    carousel.addEventListener('mouseleave', () => { auto = setInterval(next, 5000); });
    window.addEventListener('resize', update);
    update();
  }

  // Contact Form Validation
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      let valid = true;
      const fields = ['name', 'email', 'subject', 'message'];
      fields.forEach(id => {
        const input = document.getElementById(id);
        const errorEl = input.parentElement.querySelector('.error');
        if (!input.value.trim()) {
          errorEl.textContent = 'This field is required.';
          errorEl.classList.remove('hidden');
          valid = false;
        } else {
          errorEl.textContent = '';
          errorEl.classList.add('hidden');
        }
        if (id === 'email' && input.value) {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(input.value)) {
            errorEl.textContent = 'Enter a valid email.';
            errorEl.classList.remove('hidden');
            valid = false;
          }
        }
      });
      if (valid) {
        // Simulate successful submission
        alert('Thank you! Your message has been sent.');
        form.reset();
      }
    });
  }

  // Scroll Reveal using IntersectionObserver
  const revealElements = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealElements.forEach(el => observer.observe(el));

  // Simple fade-in animation via Tailwind utilities (added via CSS)
  const style = document.createElement('style');
  style.textContent = `
    .animate-fade-in { opacity: 0; transform: translateY(20px); animation: fadeIn 0.6s forwards; }
    @keyframes fadeIn { to { opacity: 1; transform: translateY(0); } }
  `;
  document.head.appendChild(style);
})();
