webpackHotUpdate(0,{

/***/ 13:
/***/ function(module, exports) {

	'use strict';
	
	var quotesSlider = function quotesSlider($, isWidthImage) {
		var owl = $('.quotes-slider');
		var images = $('.quotes-slider-image');
		owl.owlCarousel({
			dots: false,
			items: 1
		});
	
		var leftBtn = $('.quotes-slider__prev');
		var rightBtn = $('.quotes-slider__next');
	
		var changed = null;
	
		owl.on('changed.owl.carousel', function () {
			changed = true;
		});
	
		var changeImage = function changeImage(direction) {
			debugger;
			var length = images.children().length;
			if (direction === 'next') {
				images.css('transform', 'translateX(' + 100 / length + '%)');
			} else if (direction === 'prev') {
				images.css('transform', 'translateX(-' + 100 / length + '%)');
			}
		};
	
		leftBtn.click(function () {
			owl.trigger('prev.owl.carousel');
			leftBtn.blur();
			if (isWidthImage && changed) {
				changed = false;
				changeImage('prev');
			}
		});
	
		rightBtn.click(function () {
			owl.trigger('next.owl.carousel');
			rightBtn.blur();
			if (isWidthImage && changed) {
				changed = false;
				changeImage('next');
			}
		});
	};
	
	module.exports = quotesSlider;

/***/ }

})
//# sourceMappingURL=0.381ee14b61f98b4edc6a.hot-update.js.map