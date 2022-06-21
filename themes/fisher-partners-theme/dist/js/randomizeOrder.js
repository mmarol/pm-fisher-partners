import $ from "jquery";

let projects = $(".project-grid__item");
randomize(projects);

function randomize(selector) {
	if (selector) {
		selector.parent().each(function () {
			$(this)
				.children(selector)
				.sort(function () {
					return Math.random() - 0.5;
				})
				.detach()
				.appendTo(this);
		});
	}

	return this;
}
