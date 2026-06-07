const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll("#nav-menu a");

// Toggle mobile menu
menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

// Header background change on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if(window.scrollY > 50){
        // Using CSS variables dynamically could be done here, 
        // but sticking to standard styles based on your roots
        header.style.background = "var(--overlay-dark)";
    }else{
        header.style.background = "var(--overlay-light)";
    }
});

// Intersection Observer for performance-friendly scroll reveals
const reveals = document.querySelectorAll(".reveal");

const observerOptions = {
    threshold: 0.15, // Trigger when 15% of the element is visible
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("active");
            // Optional: observer.unobserve(entry.target); if you only want it to animate once
        }
    });
}, observerOptions);

reveals.forEach(section => {
    revealObserver.observe(section);
});

// Image Modal Logic
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".close-modal");

document.querySelectorAll(".gallery-img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImage.src = img.src;
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if(e.target === modal){
        modal.style.display = "none";
    }
});