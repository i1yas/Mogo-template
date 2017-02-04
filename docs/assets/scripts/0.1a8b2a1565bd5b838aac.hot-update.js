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
	
		$('.quotes__nav-btn-left').click(function () {
			owl.trigger('prev.owl.carousel');
		});
	
		$('.quotes__nav-btn-right').click(function () {
			owl.trigger('next.owl.carousel');
		});
	};
	
	module.exports = quotesSlider;

/***/ }

})
//# sourceMappingURL=0.1a8b2a1565bd5b838aac.hot-update.js.map