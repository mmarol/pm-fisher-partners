import $ from "jquery";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

export { setupMasonry };

function setupMasonry(container, item, sizer, spacer) {
	if ($(container).length) {
		var newMasonry = new Masonry(container, {
			itemSelector: item,
			columnWidth: sizer,
			gutter: spacer,
			percentPosition: true,
			transitionDuration: 0,
			initLayout: true,
		});

		imagesLoaded(container).on("progress", function () {
			newMasonry.layout();
		});
	}

	return newMasonry;
}
