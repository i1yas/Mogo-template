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
			console.log('click');
			owl.trigger('prev.owl.carousel');
		});
	
		$('quotes__arrow_right').click(function () {
			console.log('click');
			owl.trigger('next.owl.carousel');
		});
	};
	
	module.exports = quotesSlider;

/***/ }

})
//# sourceMappingURL=0.8de36bf7ca4de4135f46.hot-update.js.map