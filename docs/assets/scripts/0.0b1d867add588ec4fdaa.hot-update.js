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
			console.log('click');
			owl.trigger('prev.owl.carousel');
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
//# sourceMappingURL=0.0b1d867add588ec4fdaa.hot-update.js.map