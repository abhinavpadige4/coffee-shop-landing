document.addEventListener('DOMContentLoaded', () => {
  smoothScroll();
  document.querySelector('.contact__form').addEventListener('submit', handleFormSubmit);
  initYear();
});

function smoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  const submitButton = form.querySelector('.contact__button');
  const statusMessage = form.querySelector('.contact__status-message');

  submitButton.disabled = true;
  statusMessage.textContent = '';
  statusMessage.classList.remove('success', 'error');

  fetch('https://formspree.io/f/{FORM_ID}', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      statusMessage.textContent = 'Thank you! Your message has been sent.';
      statusMessage.classList.add('success');
      form.reset();
    } else {
      throw new Error('Network response was not ok.');
    }
  })
  .catch(error => {
    statusMessage.textContent = 'Oops! There was a problem sending your message. Please try again later.';
    statusMessage.classList.add('error');
  })
  .finally(() => {
    submitButton.disabled = false;
  });
}

function initYear() {
  const yearElement = document.querySelector('.footer__year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}