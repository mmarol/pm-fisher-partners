import $ from "jquery";
import jQueryBridget from "jquery-bridget";
import Isotope from "isotope-layout";
jQueryBridget("isotope", Isotope, $);
import "stupid-table-plugin";
import "lazysizes";
import Glide from "@glidejs/glide";

// import "./navigation";
import { openMenu, closeMenu, lightenMenu, darkenMenu } from "./navigation";
import { setupMasonry } from "./masonry";
import { filterProjects } from "./filterProjects";
import { toggleSecondaryContent } from "./expandCard";
import "./sort";
import "./delightInteractions";

$(document).on("ready", function () {
	// initialize menu
	closeMenu();

	// initalize navigation color
	if ($("#content").hasClass("inverted")) {
		lightenMenu();
	}

	// home page initialize slider
	if ($("body").hasClass("home")) {
		new Glide(".glide").mount();
	}

	// home page highlights masonry
	let highlightGrid = ".highlights";
	let highlightItem = ".highlight";
	let highlightSizer = ".highlight--small";
	let highlightSpacer = ".highlight__spacer";
	if (highlightItem) {
		// apply masonry
		setupMasonry(highlightGrid, highlightItem, highlightSizer, highlightSpacer);
	}

	// work page project filtering
	let filters = ".project-filters";
	let projects = ".featured-project";

	if (filters) {
		filterProjects(filters, projects);
	}

	// work page project index sorting
	if ($("#projects-table")) {
		let table = $("#projects-table").stupidtable();
	}

	// team page partners masonry
	let partnersContainer = ".partners__grid";
	let partner = ".partner";
	let partnerSizer = ".partner";
	let partnerSpacer = ".partners__spacer";
	let partnerMasonry;
	if (highlightItem) {
		// apply masonry
		partnerMasonry = setupMasonry(
			partnersContainer,
			partner,
			partnerSizer,
			partnerSpacer
		);
	}

	// team page partners toggle content
	let personPrimary = $(".partner__primary");
	let personSecondary = $(".partner__secondary");
	if (personPrimary) {
		toggleSecondaryContent(personPrimary, personSecondary, partnerMasonry);
	}
});

$(document).on("keyup", function (e) {
	if (e.key == "Escape") {
		closeMenu();
	}
});

$(window).on("load", function () {
	// closeMenu();
});

// home page navigation inversion
if ($("#content").hasClass("inverted")) {
	$(window).on("scroll", function () {
		const heroHeight = $(".home-carousel").height();
		if ($(window).scrollTop() > heroHeight) {
			darkenMenu();
		} else {
			lightenMenu();
		}
	});
}
