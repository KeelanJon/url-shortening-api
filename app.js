
// Caching the DOM

const burgerButton = document.getElementById("myBurgerIcon");
const mobileMenu = document.getElementById("myMobileMenu");

burgerButton.addEventListener("click", function(){
    mobileMenu.classList.toggle("mobile-menu-open");
});