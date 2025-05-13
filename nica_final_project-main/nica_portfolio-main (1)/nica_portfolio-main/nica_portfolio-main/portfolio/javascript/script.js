const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-links");

const navMenu = document.getElementById("nav-links");

const navLink = document.querySelectorAll(".nav-links a");

function linkAction() {
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(".nav-links a[href*='" + sectionId + "']");

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      if (sectionsClass) sectionsClass.classList.add("active-link");
      current.classList.add("animate");
    } else {
      if (sectionsClass) sectionsClass.classList.remove("active-link");
      current.classList.remove("animate");
    }
  });
};

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
});

// General page reveals
sr.reveal(".hero-text, .about-image, .skills-section h4, .skills-left", {});
sr.reveal(".hero-content, .about-text, .skills-right", { delay: 400 });
sr.reveal(".service-card", { interval: 200 });
sr.reveal(".projects-card", { interval: 200 });
sr.reveal(".contact-form", { interval: 200 });
sr.reveal(".footer-content", { interval: 200 });

// Blog page specific reveals
sr.reveal('.blog-title', { origin: 'top', distance: '40px', duration: 1000, delay: 100 });
sr.reveal('.blog-date', { origin: 'top', distance: '30px', duration: 800, delay: 200 });
sr.reveal('.blog-content h2', { origin: 'left', distance: '40px', duration: 1000, interval: 200 });
sr.reveal('.blog-content p', { origin: 'right', distance: '30px', duration: 900, interval: 150 });
sr.reveal('.blog-image', { origin: 'bottom', distance: '20px', duration: 900, interval: 150 });
sr.reveal('.blog-conclusion', { origin: 'bottom', distance: '30px', duration: 1000, delay: 400 });
sr.reveal('.button-wrapper', { origin: 'bottom', distance: '30px', duration: 1000, delay: 500 });
