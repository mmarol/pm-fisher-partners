import $ from "jquery";
import "slick-carousel/slick/slick";

function setupSliders() {
	const sliders = $(".project__carousel");
	sliders.each(function (index) {
		$(this).slick({
			infinite: true,
			variableWidth: false,
			adaptiveHeight: false,
			dots: true,
			prevArrow: $("#project__arrow--left--" + (index + 1)),
			nextArrow: $("#project__arrow--right--" + (index + 1)),
		});
	});

	$(".research__carousel").slick({
		infinite: true,
		adaptiveHeight: true,
		dots: true,
		prevArrow: $("#research__arrow--left"),
		nextArrow: $("#research__arrow--right"),
		infinite: true,
		slidesToShow: 4,
		centerMode: true,
		variableWidth: true,
		// autoplay: true,
		autoplaySpeed: 2000,
	});
}

function setupTabs() {
	// get all tab buttons
	let tabButtons = $(".project__deliverable-button");
	// get all tab content
	let tabContent = $(".project__deliverable-content");
	// on clicking a button
	tabButtons.on("click", function () {
		// make record of the button
		let tabButton = $(this);
		// get the data attribute
		let tabButtonData = $(this).attr("data-for-tab");
		// for each tab content
		tabContent.each(function (index) {
			// make record of the content item
			let tabContent = $(this);
			// get the data attribute
			let tabContentData = $(this).attr("data-tab");
			// if the content data attribute matches the tab attribute
			if (tabContentData == tabButtonData) {
				// add active class to the button
				tabButton.addClass("project__deliverable-button--active");
				// remove active class to the button
				tabButton.siblings().removeClass("project__deliverable-button--active");
				// add active class to the content item
				tabContent.addClass("project__deliverable-content--active");
				// remove active class to the content item
				tabContent
					.siblings()
					.removeClass("project__deliverable-content--active");
				$(".project__carousel--" + tabContentData).slick("refresh");
			}
		});
	});
}

// when the DOM loads
$(window).on("load", function () {
	// run the tab setup function
	setupTabs();
	setupSliders();
	// if the url has a hash
	if (window.location.hash) {
		// scroll to the top of the page
		setTimeout(function () {
			window.scrollTo(0, 0);
		}, 1);
		// get the hash value
		let hash = window.location.hash.replace("#", "");
		// get the related button
		let buttonToActivate = $(
			".project__deliverable-button[data-hash-target='" + hash + "']"
		);
		// trigger a click on the button
		buttonToActivate.trigger("click");
	}
});
