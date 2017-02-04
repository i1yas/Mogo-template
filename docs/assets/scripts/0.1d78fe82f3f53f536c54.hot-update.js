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
			console.log('click left');
			owl.trigger('prev.owl.carousel');
		});
	
		$('.quotes__arrow_right').click(function () {
			console.log('click right');
			owl.trigger('next.owl.carousel');
		});
	};
	
	module.exports = quotesSlider;

/***/ }

})
//# sourceMappingURL=0.1d78fe82f3f53f536c54.hot-update.js.map