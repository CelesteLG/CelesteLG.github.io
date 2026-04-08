// ===============================
// MENU MOBILE
// ===============================

const menuBtn = document.querySelector("#menuBtn");
const navLinks = document.querySelector("#navLinks");

// Abre y cierra el menú en móvil
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}


// ===============================
// SCROLL ANIMATION
// ===============================

const elements = document.querySelectorAll(".reveal");

// Muestra elementos cuando entran en pantalla
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      el.classList.add("show");
    }
  });
};

// Ejecuta una vez al cargar (con pequeño delay)
setTimeout(revealOnScroll, 1000);

// Ejecuta en scroll
window.addEventListener("scroll", revealOnScroll);


// ===============================
// PROJECT SORT BY DATE
// ===============================

const projectsContainer = document.querySelector(".projects-grid");

// Ordena los proyectos del más reciente al más antiguo
if (projectsContainer) {
  const projects = Array.from(projectsContainer.children);

  projects.sort((a, b) => {
    const dateA = new Date(a.dataset.date);
    const dateB = new Date(b.dataset.date);
    return dateB - dateA;
  });

  projects.forEach(project => projectsContainer.appendChild(project));
}




const year = document.querySelector("#year");

// Inserta automáticamente el año actual
if (year) {
  year.textContent = new Date().getFullYear();
}


// ===============================
// PROJECT MODAL
// ===============================

// Imágenes asociadas a cada proyecto
const projectImages = {
  "Hotel Management System": [
    "assets/hotel1.png",
    "assets/hotel2.png",
    "assets/hotel3.png",
    "assets/hotel4.png",
    "assets/hotel5.png"
  ],
  "Website for a Transportation Company": [
    "assets/transporte1.jpeg"
  ]
};

// Referencias del modal
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalImages = document.getElementById("modalImages");
const closeBtn = document.querySelector(".close");

// Abre el modal al hacer clic en un proyecto
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h3").textContent;
    modalTitle.textContent = title;

    // Limpia imágenes previas
    modalImages.innerHTML = "";

    // Inserta imágenes del proyecto
    if (projectImages[title]) {
      projectImages[title].forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        modalImages.appendChild(img);
      });
    }

    modal.style.display = "block";
  });
});

// Cierra el modal con el botón
if (closeBtn) {
  closeBtn.onclick = () => {
    modal.style.display = "none";
  };
}

// Cierra el modal al hacer click fuera del contenido
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});





// Scroll suave al hacer clic en links internos
document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (!targetSection) return;

    // Ajuste por navbar fija
    const offset = 80;
    const elementPosition = targetSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});