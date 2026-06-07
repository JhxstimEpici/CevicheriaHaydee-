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
});
