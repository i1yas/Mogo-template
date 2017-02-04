webpackHotUpdate(0,{

/***/ 13:
/***/ function(module, exports) {

	'use strict';
	
	var quotesSlider = function quotesSlider($, isWithImage) {
		var owl = $('.quotes-slider');
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
	
		leftBtn.click(function () {
			owl.trigger('prev.owl.carousel');
			leftBtn.blur();
			if (changed) {
				changed = false;
				console.log('left');
			}
		});
	
		rightBtn.click(function () {
			owl.trigger('next.owl.carousel');
			rightBtn.blur();
			if (changed) {
				changed = false;
				console.log('right');
			}
		});
	};
	
	module.exports = quotesSlider;

/***/ }

})
//# sourceMappingURL=0.83c74f2503217fad1690.hot-update.js.map