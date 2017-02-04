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
	
		var leftBtn = $('quotes__nav-btn_left');
		var rightBtn = $('.quotes__nav-btn_right');
		leftBtn.click(function () {
			owl.trigger('prev.owl.carousel');
			undefined.blur();
		});
	
		rightBtn.click(function () {
			owl.trigger('next.owl.carousel');
			undefined.blur();
		});
	};
	
	module.exports = quotesSlider;

/***/ }

})
//# sourceMappingURL=0.a6110c98a3bc8c86b07c.hot-update.js.map