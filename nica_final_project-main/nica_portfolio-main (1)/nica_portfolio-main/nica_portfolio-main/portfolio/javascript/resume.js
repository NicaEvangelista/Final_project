// === Burger Menu Toggle ===
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// === Animate on Scroll ===
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate, .fade-in');

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const triggerBottom = window.innerHeight * 0.85;

    if (rect.top < triggerBottom) {
      el.classList.add('visible');
    }
  });
}

// Trigger animations on scroll and page load
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
