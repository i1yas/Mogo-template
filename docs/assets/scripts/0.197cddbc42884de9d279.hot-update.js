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
	
		$('.quotes__btn-left').click(function () {
			owl.trigger('prev.owl.carousel');
		});
	
		$('.quotes__btn-right').click(function () {
			owl.trigger('next.owl.carousel');
		});
	};
	
	module.exports = quotesSlider;

/***/ }

})
//# sourceMappingURL=0.197cddbc42884de9d279.hot-update.js.map