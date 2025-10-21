// Intersection Observer for scroll animations
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Add animation classes to elements
document.addEventListener("DOMContentLoaded", () => {
  // Hero section animations
  const heroContent = document.querySelector(".hero-content");
  heroContent.classList.add("fade-in");

  const socialLinks = document.querySelector(".social-links");
  socialLinks.classList.add("scale-in");

  // Animate sections on scroll
  const animatedElements = document.querySelectorAll(
    ".section-title, .about-content, .project-card, .contact-form"
  );
  animatedElements.forEach((element) => {
    element.classList.add("animate-on-scroll");
    observer.observe(element);
  });

  // Add hover animations
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.classList.add("hover-lift", "hover-glow");
  });
});

// Typing animation for hero section
const typingAnimation = () => {
  const text = "Frontend Developer";
  const element = document.querySelector(".hero-content h2");
  let index = 0;

  const type = () => {
    if (index < text.length) {
      element.textContent = text.slice(0, index + 1);
      index++;
      setTimeout(type, 100);
    }
  };

  type();
};
