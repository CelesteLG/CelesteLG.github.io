/* ========================= js/scripts.js ========================= */

// Menu toggle
document.addEventListener('DOMContentLoaded',function(){
  const menuBtn = document.getElementById('menuBtn');
  const mainNav = document.getElementById('mainNav');
  if(menuBtn){
    menuBtn.addEventListener('click',()=>{
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!expanded));
      if(mainNav) mainNav.style.display = expanded ? 'none' : 'flex';
    });
  }

  // Simple modal demo for project images
  const modal = document.getElementById('modal');
  const closeModal = document.getElementById('closeModal');
  if(closeModal){
    closeModal.addEventListener('click',()=>{ modal.classList.add('hidden'); modal.setAttribute('aria-hidden','true'); });
  }
  // clickable project screenshots to open a larger preview
  document.querySelectorAll('.project-screenshot img').forEach(img=>{
    img.addEventListener('click',()=>{
      const body = document.getElementById('modalBody');
      if(body){ body.innerHTML = '<img src="'+img.src+'" style="max-width:100%;display:block">'; }
      if(modal){ modal.classList.remove('hidden'); modal.setAttribute('aria-hidden','false'); }
    });
  });
});
