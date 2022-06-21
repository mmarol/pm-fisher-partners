import $ from "jquery";

export { openMenu, closeMenu, lightenMenu, darkenMenu };

let menuOpen = $("#header__hamburger--open");
let menuClose = $("#header__hamburger--close");
let menu = $(".header__secondary");
let menuBar = $(".header__primary");

function openMenu() {
	menuOpen.attr("aria-expanded", "true");
	menu.addClass("show");
}

function closeMenu() {
	menuOpen.attr("aria-expanded", "false");
	menu.removeClass("show");
}

function lightenMenu() {
	menuBar.addClass("inverted");
}

function darkenMenu() {
	menuBar.removeClass("inverted");
}

menuOpen.on("click", function () {
	openMenu();
});

menuClose.on("click", function () {
	closeMenu();
});
