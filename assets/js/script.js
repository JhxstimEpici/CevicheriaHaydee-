document.addEventListener('DOMContentLoaded',function(){
  // year in footer
  const y = new Date().getFullYear();
  const el = document.getElementById('year'); if(el) el.textContent = y;

  // mobile nav toggle
  const btn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-navigation');
  if(btn && nav){
    btn.addEventListener('click', ()=>{
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      nav.style.display = expanded ? 'none' : 'block';
    });
    // ensure default hidden on small screens
    window.matchMedia('(max-width:640px)').matches && (nav.style.display='none');
  }

  // simple reservation form handler
  const form = document.getElementById('reservation-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const data = new FormData(form);
      // minimal validation
      if(!data.get('name')||!data.get('phone')){
        alert('Por favor completa nombre y teléfono.');
        return;
      }
      // simulate send
      alert('Reserva enviada. Gracias, te contactaremos pronto.');
      form.reset();
    });
  }

  // header scroll effect and scrollspy
  const header = document.querySelector('.site-header');
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('#primary-navigation a');

  const updateHeader = () => {
    header && header.classList.toggle('scrolled', window.scrollY > 20);
  };

  const updateActiveNav = () => {
    let current = sections[0]?.id;
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if(rect.top <= 120 && rect.bottom > 120){
        current = section.id;
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  };

  window.addEventListener('scroll', () => {
    updateHeader();
    updateActiveNav();
  }, { passive: true });
  updateHeader();
  updateActiveNav();

  // animate cards into view
  const animatedItems = document.querySelectorAll('.animate-on-scroll');
  if(animatedItems.length){
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });

    animatedItems.forEach(item => observer.observe(item));
  }
});
