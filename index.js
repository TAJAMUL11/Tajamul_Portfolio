let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
const dateYear = document.querySelector(".year");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

menuIcon.onclick = () => {
  /* for on and off of the menu icons*/
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
let currentYear = new Date().getFullYear();
dateYear.innerHTML = `2024-${currentYear}`;
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[ href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

window.addEventListener("scroll", () => {
  const offerBoxes = document.querySelectorAll(".Projects-box");

  offerBoxes.forEach((box) => {
    const rect = box.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Check if the box is within a certain distance from the viewport
    if (rect.top < viewportHeight * 1) {
      box.classList.add("show-projectBox");

      // After a delay, remove the 'show-offer' class to reset the animation
      setTimeout(() => {
        box.classList.remove("show-projectBox");
      }, 2000); // Adjust the delay as needed
    }
  });
});

/* ================================= Projects Filter ========================================== */
const filterBtns = document.querySelectorAll(".filter-btn");
const projectBoxes = document.querySelectorAll(".Projects-box");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"));

    // Add active class to clicked button
    btn.classList.add("active");

    // Get the filter value
    const filterValue = btn.getAttribute("data-filter");

    // Filter projects
    projectBoxes.forEach((box) => {
      const boxCategory = box.getAttribute("data-category");

      if (filterValue === "all" || boxCategory === filterValue) {
        // Show project
        setTimeout(() => {
          box.classList.remove("hidden");
        }, 0);
      } else {
        // Hide project
        box.classList.add("hidden");
      }
    });
  });
});

/* ================================= ScrollReveal JS file========================================== */
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading, .tech div ", { origin: "top" });
ScrollReveal().reveal(".home-img, .skills-container", { origin: "bottom" });
