document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    const currentYear = document.getElementById('currentYear');

    navToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !message) {
            formMessage.textContent = 'Please fill out all fields.';
            formMessage.style.color = 'red';
            return;
        }

        if (!emailPattern.test(email)) {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.style.color = 'red';
            return;
        }

        formMessage.textContent = 'Message sent successfully!';
        formMessage.style.color = 'green';
        contactForm.reset();
    });

    currentYear.textContent = new Date().getFullYear();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});