const revealElements = document.querySelectorAll(
  ".hero-copy, .hero-card, .info-strip article, .section-heading, .gallery-card, .menu-card, .location-card, .map-placeholder, .contact-panel"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.14,
  }
);

revealElements.forEach((element) => {
  observer.observe(element);
});
