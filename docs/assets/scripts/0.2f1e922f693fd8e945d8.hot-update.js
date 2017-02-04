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
			console.log('click');
			owl.trigger('prev.owl.carousel', function () {
				console.log('trig');
			});
			leftBtn.blur();
		});
	
		rightBtn.click(function () {
			console.log('click');
			owl.trigger('next.owl.carousel');
			rightBtn.blur();
		});
	};
	
	module.exports = quotesSlider;

/***/ }

})
//# sourceMappingURL=0.2f1e922f693fd8e945d8.hot-update.js.map