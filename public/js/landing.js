document.addEventListener("DOMContentLoaded", function () {
  // 1. Setup Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add visible class to general reveal elements
        if (entry.target.classList.contains("scroll-reveal")) {
          entry.target.classList.add("visible");
        }
        // Add trigger class to the grid to fire the CSS staggered animations
        if (entry.target.id === "listingGrid") {
          entry.target.classList.add("scrolled");
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe standard elements
  document
    .querySelectorAll(".scroll-reveal")
    .forEach((el) => observer.observe(el));

  // Observe the grid container specifically for the staggered CSS animation
  const grid = document.getElementById("listingGrid");
  if (grid) observer.observe(grid);

  // 2. Subtle Parallax on Hero Image
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    const heroImg = document.getElementById("heroImage");
    // Only run parallax if near top of page for performance
    if (heroImg && scrolled < window.innerHeight) {
      heroImg.style.transform = `translateY(${scrolled * 0.3}px) scale(1.02)`;
    }
  });
});

// 3. Heart Wishlist Toggle Function
function toggleWishlist(btn) {
  const icon = btn.querySelector("i");
  btn.classList.toggle("active");

  // Toggle between regular (outline) and solid heart
  if (icon.classList.contains("fa-regular")) {
    icon.classList.replace("fa-regular", "fa-solid");
  } else {
    icon.classList.replace("fa-solid", "fa-regular");
  }
}
