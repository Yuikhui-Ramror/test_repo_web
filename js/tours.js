/* ============================================================
   Trust Rides — Tours & Travels page behaviour
   Mobile navigation, header shadow and scroll reveals.
   ============================================================ */

(function () {
    "use strict";

    /* ---------- Mobile navigation ---------- */
    var toggle = document.getElementById("nav-toggle");
    var nav = document.getElementById("site-nav");

    if (toggle && nav) {
        toggle.addEventListener("click", function () {
            var open = nav.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", open ? "true" : "false");
            toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
        });

        nav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                nav.classList.remove("is-open");
                toggle.setAttribute("aria-expanded", "false");
                toggle.setAttribute("aria-label", "Open navigation");
            });
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && nav.classList.contains("is-open")) {
                nav.classList.remove("is-open");
                toggle.setAttribute("aria-expanded", "false");
                toggle.focus();
            }
        });
    }

    /* ---------- Header shadow on scroll ---------- */
    var header = document.querySelector(".site-header");
    if (header) {
        var updateHeader = function () {
            header.classList.toggle("is-scrolled", window.scrollY > 8);
        };
        updateHeader();
        window.addEventListener("scroll", updateHeader, { passive: true });
    }

    /* ---------- Scroll reveals (progressive enhancement) ---------- */
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var revealItems = document.querySelectorAll(".reveal");

    if (reduceMotion || !("IntersectionObserver" in window)) {
        revealItems.forEach(function (el) {
            el.classList.add("is-visible");
        });
    } else {
        // Only hide content once this script is running, so a failed
        // script load can never leave the page blank.
        document.documentElement.classList.add("js");

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

        revealItems.forEach(function (el) {
            observer.observe(el);
        });
    }
})();
