webpackHotUpdate(0,{

/***/ 12:
/***/ function(module, exports) {

	'use strict';
	
	var quotesSlider = function quotesSlider($) {
		var owl = $('.quotes__slider-container');
		owl.owlCarousel({
			dots: false,
			items: 1
		});
	
		$('.quotes__arrow_left').click(function () {
			owl.trigger('prev.owl.carousel');
		});
	
		$('quotes__arrow_right').click(function () {
			owl.trigger('next.owl.carousel');
		});
	};
	
	module.exports = quotesSlider;

/***/ }

})
//# sourceMappingURL=0.76c8f4560ab2ad562a90.hot-update.js.map