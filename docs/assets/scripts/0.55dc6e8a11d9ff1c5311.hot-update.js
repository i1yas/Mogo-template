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
			owl.trigger('prev.owl.carousel', function () {
				console.log('trig');
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
//# sourceMappingURL=0.55dc6e8a11d9ff1c5311.hot-update.js.map