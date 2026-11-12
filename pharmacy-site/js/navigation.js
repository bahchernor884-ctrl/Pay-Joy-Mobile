const menuToggle = document.querySelector(".menu-toggle");
const siteHeader = document.querySelector(".site-header");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteHeader && siteNav) {
    function closeMenu() {
        siteHeader.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
    }

    menuToggle.addEventListener("click", function () {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        siteHeader.classList.toggle("menu-open", !isOpen);
        menuToggle.setAttribute("aria-expanded", String(!isOpen));
    });

    siteNav.addEventListener("click", function (event) {
        if (event.target.closest("a")) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
            closeMenu();
            menuToggle.focus();
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 700) {
            closeMenu();
        }
    });
}
