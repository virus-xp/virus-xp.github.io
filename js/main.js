// Sticky Navbar on Scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("shadow", "bg-dark");
  } else {
    navbar.classList.remove("shadow");
  }
});

// Smooth Scroll to Sections from Navbar Links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").substring(1); // remove #
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      e.preventDefault();
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Back to Top Button Show/Hide
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

// Back to Top Button Scroll to Top
if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// const counters = document.querySelectorAll(".counter");

// counters.forEach((counter) => {
//   const updateCount = () => {
//     const target = +counter.getAttribute("data-target");
//     const count = +counter.innerText;
//     const increment = target / 200;

//     if (count < target) {
//       counter.innerText = Math.ceil(count + increment);
//       setTimeout(updateCount, 20);
//     } else {
//       counter.innerText = target;
//     }
//   };
//   updateCount();
// });
