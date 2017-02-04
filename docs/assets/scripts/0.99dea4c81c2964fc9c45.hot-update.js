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
	
		$('.quotes__nav-btn_left').click(function () {
			owl.trigger('prev.owl.carousel');
		});
	
		$('.quotes__nav-btn_right').click(function () {
			owl.trigger('next.owl.carousel');
		});
	};
	
	module.exports = quotesSlider;

/***/ }

})
//# sourceMappingURL=0.99dea4c81c2964fc9c45.hot-update.js.map