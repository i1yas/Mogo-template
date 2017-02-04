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
	
		leftBtn.click(function () {
			owl.trigger('prev.owl.carousel');
			owl.on('changed.owl.carousel', function () {
				console.log('changed');
			});
			leftBtn.blur();
		});
	
		rightBtn.click(function () {
			owl.trigger('next.owl.carousel');
			rightBtn.blur();
		});
	};
	
	module.exports = quotesSlider;

/***/ }

})
//# sourceMappingURL=0.c93636c47661cba3fb92.hot-update.js.map