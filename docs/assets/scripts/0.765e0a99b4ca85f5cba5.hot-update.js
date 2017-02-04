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
	
		// leftBtn.click(() => {
		// 	owl.trigger('prev.owl.carousel');
		// 	leftBtn.blur();
		// });
	
		owl.on('changed.owl.carousel', function () {
			leftBtn.click(function () {
				owl.trigger('prev.owl.carousel');
				leftBtn.blur();
				console.log('change');
			});
		});
	
		rightBtn.click(function () {
			owl.trigger('next.owl.carousel');
			rightBtn.blur();
		});
	};
	
	module.exports = quotesSlider;

/***/ }

})
//# sourceMappingURL=0.765e0a99b4ca85f5cba5.hot-update.js.map