(function () {
  // Smooth scroll for internal links (already native via CSS, but ensure offset for fixed header if added later)
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const targetId = link.getAttribute('href').slice(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      e.preventDefault();
      const top = targetEl.getBoundingClientRect().top + window.pageYOffset - 60; // offset for header
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });

  // Toast helper
  function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }

  // Contact form handling
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Simple validation – HTML5 already does it, just show toast
      showToast('Thank you! Your message has been sent.');
      form.reset();
    });
  }

  // Intersection Observer for fade‑in animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll('.section').forEach((sec) => observer.observe(sec));

  // Current year in footer
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
})();
