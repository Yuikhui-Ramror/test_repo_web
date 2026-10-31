/* ============================================================
   Trust Rides — landing page behaviour
   The landing page needs no JS to be usable: its entrance
   animation is pure CSS. This file only adds the header shadow.
   ============================================================ */

(function () {
    "use strict";

    var header = document.querySelector(".site-header");
    if (!header) return;

    var updateHeader = function () {
        header.classList.toggle("is-scrolled", window.scrollY > 8);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
})();
