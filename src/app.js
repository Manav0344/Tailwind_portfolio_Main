// ================= MENU =================
const sideMenu = document.getElementById("sideMenu");

window.openMenu = function () {
  if (sideMenu) sideMenu.style.right = "0";
};

window.closeMenu = function () {
  if (sideMenu) sideMenu.style.right = "-260px";
};


// ================= DARK MODE =================
const darkToggle = document.getElementById("darkToggle");
const themeIcon = document.getElementById("themeIcon");

if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      if (themeIcon) {
        themeIcon.classList.remove("bi-moon-fill");
        themeIcon.classList.add("bi-brightness-low-fill");
      }
    } else {
      localStorage.setItem("theme", "light");
      if (themeIcon) {
        themeIcon.classList.remove("bi-brightness-low-fill");
        themeIcon.classList.add("bi-moon-fill");
      }
    }
  });
}

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
  if (themeIcon) {
    themeIcon.classList.remove("bi-moon-fill");
    themeIcon.classList.add("bi-brightness-low-fill");
  }
}


// ================= PROJECT DROPDOWN =================
const toggleBtn = document.getElementById("toggleBtn");
const extraProjects = document.querySelectorAll(".extra-project");

let isOpen = false;

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    isOpen = !isOpen;

    extraProjects.forEach((el, index) => {
      if (isOpen) {
        el.classList.remove("hidden");

        // stagger animation (one by one effect 🔥)
        setTimeout(() => {
          el.classList.remove("opacity-0", "scale-90");
          el.classList.add("opacity-100", "scale-100");
        }, index * 100);

      } else {
        el.classList.add("opacity-0", "scale-90");

        setTimeout(() => {
          el.classList.add("hidden");
        }, 300);
      }
    });

    toggleBtn.innerText = isOpen ? "Show Less" : "Read More";
  });
}