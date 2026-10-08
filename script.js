(function(){
  const doc = document;
  const toast = doc.getElementById('toast');
  const form = doc.getElementById('contactForm');
  const yearSpan = doc.getElementById('currentYear');
  const navToggle = doc.querySelector('.nav__toggle');
  const navList = doc.querySelector('.nav__list');

  // Utility
  function showToast(message, type='success'){
    toast.textContent = message;
    toast.style.background = type==='error'? getComputedStyle(doc.documentElement).getPropertyValue('--color-error') : getComputedStyle(doc.documentElement).getPropertyValue('--color-success');
    toast.classList.add('show');
    setTimeout(()=>{ toast.classList.remove('show'); }, 3000);
  }

  // Smooth scroll for CTA and nav links
  function initSmoothScroll(){
    doc.addEventListener('click', e=>{
      const link = e.target.closest('a[href^="#"]');
      if(!link) return;
      const targetId = link.getAttribute('href').slice(1);
      const targetEl = doc.getElementById(targetId);
      if(targetEl){
        e.preventDefault();
        targetEl.scrollIntoView({behavior:'smooth'});
      }
    });
  }

  // Form validation & submission simulation
  function validateEmail(email){
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  function handleFormSubmit(e){
    e.preventDefault();
    let valid = true;
    const name = form.elements['name'];
    const email = form.elements['email'];
    const message = form.elements['message'];
    [name,email,message].forEach(inp=>{
      inp.classList.remove('invalid');
      if(!inp.value.trim()){
        inp.classList.add('invalid');
        valid = false;
      }
    });
    if(email && !validateEmail(email.value)){
      email.classList.add('invalid');
      valid = false;
    }
    if(!valid){
      showToast('Please fix the highlighted fields.', 'error');
      return;
    }
    // Simulate POST /contact
    const payload = {
      name: name.value.trim(),
      email: email.value.trim(),
      message: message.value.trim()
    };
    console.log('POST /contact', payload);
    showToast('Message sent! Thank you.');
    form.reset();
  }

  // Mobile nav toggle
  function initNavToggle(){
    if(!navToggle) return;
    navToggle.addEventListener('click',()=>{
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navList.style.display = expanded ? 'none' : 'flex';
    });
  }

  // IntersectionObserver for menu cards
  function initScrollReveal(){
    const cards = doc.querySelectorAll('.menu__card');
    const observer = new IntersectionObserver((entries,obs)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.setAttribute('data-visible','');
          obs.unobserve(entry.target);
        }
      });
    },{threshold:0.2});
    cards.forEach(card=>observer.observe(card));
  }

  // Set current year
  function setCurrentYear(){
    if(yearSpan){
      yearSpan.textContent = new Date().getFullYear();
    }
  }

  function init(){
    initSmoothScroll();
    initNavToggle();
    initScrollReveal();
    setCurrentYear();
    if(form){
      form.addEventListener('submit', handleFormSubmit);
    }
  }

  // DOM ready
  if(doc.readyState === 'loading'){
    doc.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();