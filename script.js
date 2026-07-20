
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");

    menuBtn.textContent =
        nav.classList.contains("open") ? "✕" : "☰";
});
