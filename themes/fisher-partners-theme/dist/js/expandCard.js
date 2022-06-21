import $ from "jquery";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

export { toggleSecondaryContent };

function toggleSecondaryContent(
	primaryContent,
	secondaryContent,
	masonryObject
) {
	primaryContent.on("click", function () {
		$(this).toggleClass("show");
		$(this).siblings(secondaryContent).toggleClass("show");
		masonryObject.layout();
	});
}
