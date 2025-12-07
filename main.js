// Current year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    if (mobileMenu.style.maxHeight) {
    mobileMenu.style.maxHeight = null;
    } else {
    mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px";
    }
});

// Close mobile menu on link click
document.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => {
    mobileMenu.style.maxHeight = null;
    });
});

// Scroll-to-top button
const scrollTopBtn = document.getElementById("scroll-top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
    scrollTopBtn.classList.remove("opacity-0", "pointer-events-none");
    } else {
    scrollTopBtn.classList.add("opacity-0", "pointer-events-none");
    }
});
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Fake form submit (frontend only)
const sendBtn = document.getElementById("send-btn");
const formStatus = document.getElementById("form-status");
sendBtn.addEventListener("click", () => {
    formStatus.textContent = "This is a demo form. Connect it with backend (EmailJS, Formspree, or Django) to make it work.";
});


// design-proejct


