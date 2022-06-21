// sorry to whoever has to deal with this file, I tried to port over someone else's file and had to rebuild it, but struggled

import $ from "jquery";
import interact from "interactjs";

let container = $(".delights");
let itemWidth = 280;
let itemHeight = 280;
let maxWidth = container.width() - itemWidth;
let maxHeight = container.height() - itemHeight;
let delights = $(".delight__item");
let detailClose = $(".delight__close");
let randX;
let randY;

randomizeOrder(delights);
randomizePosition(delights);
hideDetails(detailClose);

$(window).on("click", function () {
	maxWidth = container.width() - itemWidth;
	maxHeight = container.height() - itemHeight;
});

function showDetails(item) {
	$(item).addClass("expand").siblings().addClass("hide");
}

function hideDetails(item) {
	item.on("click", function () {
		delights.removeClass("expand").removeClass("hide");
		randomizePosition(delights);
	});
}

function randomizeOrder(selector) {
	// if the item exists
	if (selector) {
		// find the parent
		selector.parent().each(function () {
			// for each parent
			$(this)
				// find the children
				.children(selector)
				// get a random sort order
				.sort(function () {
					return Math.random() - 0.5;
				})
				// remove the children from the parent
				.detach()
				// append the children with the new order
				.appendTo(this);
		});
	}

	return this;
}

function randomizePosition(selector) {
	selector.each(function () {
		randX = Math.random() * maxWidth + 1;
		randY = Math.random() * maxHeight + 1;
		$(this).css({
			left: "calc(" + (randX / container.width()) * 100 + "%)",
			top: "calc(" + (randY / container.height()) * 100 + "%)",
			transform: "translate(" + 0 + "px, " + 0 + "px)",
		});
		$(this).attr("data-x", 0);
		$(this).attr("data-y", 0);
	});
}

interact(".delight__item")
	.draggable({
		inertia: true,
		// keep the element within the area of it's parent
		modifiers: [
			interact.modifiers.restrictRect({
				restriction: "parent",
				endOnly: true,
			}),
		],

		listeners: {
			// call this function on every dragmove event
			move: dragMoveListener,

			// call this function on every dragend event
			end(event) {
				console.log("dragged");
				hideDetails(detailClose);
			},
		},
	})
	.on("tap", function (event) {
		showDetails(event.currentTarget);
		event.currentTarget.style.transform = "left(" + 0 + "px)";
		event.currentTarget.style.transform = "top(" + 0 + "px)";
		event.currentTarget.style.transform = "translate(" + 0 + "px, " + 0 + "px)";
		event.preventDefault();
	});

function dragMoveListener(event) {
	var target = event.target;
	// keep the dragged position in the data-x/data-y attributes
	var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
	var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

	// translate the element
	target.style.transform = "translate(" + x + "px, " + y + "px)";
	target.style.transform = "left(" + 0 + "px)";
	target.style.transform = "top(" + 0 + "px)";

	// update the posiion attributes
	target.setAttribute("data-x", x);
	target.setAttribute("data-y", y);
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener;
// }
