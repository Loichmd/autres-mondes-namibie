// Nav scroll state
const nav=document.getElementById('nav');
if(nav)addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>40),{passive:true});

// Mobile menu
const burger=document.getElementById('burger');
const mm=document.getElementById('mobileMenu');
if(burger&&mm){
  burger.addEventListener('click',()=>document.body.classList.toggle('menu-open'));
  mm.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('menu-open')));
}

// Reveal on scroll
const io=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
},{threshold:.12,rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

/* ============================================================
   FORMULAIRE → BREVO (appel direct, démo)
   ⚠️ La clé est visible côté client (code source public).
      OK pour une démo avec une clé temporaire — pense à la révoquer après.
   👉 COLLE TA CLÉ ET L'ID DE TA LISTE CI-DESSOUS :
============================================================ */
const BREVO_API_KEY = 'xsmtpsib-1cf7ae7dd28b031530a75aa68780c354aadbacd359b011503d830a6cd2bbfbbb-XQW8JSqJmjdB4JXd';   // ex : xkeysib-xxxxxxxx...
const BREVO_LIST_ID = 0;                           // ex : 3  (l'ID numérique de ta liste Brevo)

const optinForm = document.getElementById('optinForm');
if(optinForm){
  const wrap = document.getElementById('optin');
  const btn = document.getElementById('optinBtn');
  optinForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    wrap.classList.remove('error');
    if(!optinForm.checkValidity()){ optinForm.reportValidity(); return; }
    const payload = {
      email: document.getElementById('of-email').value.trim().toLowerCase(),
      attributes: { FIRSTNAME: document.getElementById('of-name').value.trim() },
      updateEnabled: true
    };
    if(BREVO_LIST_ID) payload.listIds = [BREVO_LIST_ID];
    btn.disabled = true;
    const label = btn.childNodes[0];
    const prev = label.nodeValue;
    label.nodeValue = 'Envoi… ';
    try{
      const res = await fetch('https://api.brevo.com/v3/contacts', {
        method:'POST',
        headers:{ 'accept':'application/json', 'content-type':'application/json', 'api-key': BREVO_API_KEY },
        body: JSON.stringify(payload)
      });
      // 201 = créé, 204 = mis à jour, ou contact déjà présent → succès
      if(res.status===201 || res.status===204){ window.location.href='merci.html'; return; }
      const t = await res.text();
      if(res.status===400 && /duplicate|already|exist/i.test(t)){ window.location.href='merci.html'; return; }
      throw new Error(t);
    }catch(err){
      wrap.classList.add('error');
      btn.disabled = false;
      label.nodeValue = prev;
    }
  });
}

// FAQ accordion
document.querySelectorAll('.fitem').forEach(item=>{
  const q=item.querySelector('.fq');
  const a=item.querySelector('.fa');
  q.addEventListener('click',()=>{
    const open=item.classList.contains('open');
    document.querySelectorAll('.fitem').forEach(i=>{i.classList.remove('open');i.querySelector('.fa').style.maxHeight=null;});
    if(!open){item.classList.add('open');a.style.maxHeight=a.scrollHeight+'px';}
  });
});
