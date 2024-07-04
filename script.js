const menuActive = document.querySelector(".main__banner-rightMenu");
const burger = document.querySelector(".header__right-menu-list");
const menuClose = document.querySelector(".menu-close");

function toggleMenu() {
	menuActive.classList.toggle("hidden");
}

burger.addEventListener("click", toggleMenu);
menuClose.addEventListener("click", toggleMenu);
