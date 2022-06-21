import $ from "jquery";

export { filterProjects };

function filterProjects(filterClass, projectClass) {
	$(filterClass).on("click", "button", function () {
		var filterValue = $(this).attr("data-filter");
		// $grid.isotope({ filter: filterValue });
		// console.log($(filterValue));
		$(projectClass).removeClass("active");
		$(filterValue).addClass("active");
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
	});
}
