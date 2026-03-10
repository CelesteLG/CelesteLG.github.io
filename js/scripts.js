// ===============================
// MENU MOBILE
// ===============================

const menuBtn = document.querySelector("#menuBtn");
const navLinks = document.querySelector("#navLinks");

if(menuBtn){
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}


// ===============================
// SCROLL ANIMATION
// ===============================

const elements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {

    const elementTop = el.getBoundingClientRect().top;

    if(elementTop < triggerBottom){
      el.classList.add("show");
    }

  });

};

setTimeout(() => {
  revealOnScroll();
}, 1000);

window.addEventListener("scroll", revealOnScroll);


// ===============================
// PROJECT SORT BY DATE
// ===============================

const projectsContainer = document.querySelector(".projects-grid");

if(projectsContainer){

  const projects = Array.from(projectsContainer.children);

  projects.sort((a,b)=>{

    const dateA = new Date(a.dataset.date);
    const dateB = new Date(b.dataset.date);

    return dateB - dateA;

  });

  projects.forEach(project => projectsContainer.appendChild(project));

}


// ===============================
// FOOTER YEAR AUTO
// ===============================

const year = document.querySelector("#year");

if(year){
  year.textContent = new Date().getFullYear();
}