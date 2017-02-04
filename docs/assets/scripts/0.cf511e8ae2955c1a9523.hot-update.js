webpackHotUpdate(0,{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(5);
	
	__webpack_require__(6);
	
	var _slider = __webpack_require__(9);
	
	var _slider2 = _interopRequireDefault(_slider);
	
	var _service = __webpack_require__(10);
	
	var _service2 = _interopRequireDefault(_service);
	
	__webpack_require__(11);
	
	var _quotesSlider = __webpack_require__(13);
	
	var _quotesSlider2 = _interopRequireDefault(_quotesSlider);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import quotesSlider from '../blocks/quotes/quotes';
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
		(0, _slider2.default)();
		(0, _service2.default)(_jquery2.default);
		(0, _quotesSlider2.default)(_jquery2.default);
	});

/***/ },

/***/ 13:
/***/ function(module, exports) {

	'use strict';
	
	var quotesSlider = function quotesSlider($) {
		var owl = $('.quotes-slider');
		owl.owlCarousel({
			dots: false,
			items: 1
		});
	
		var leftBtn = $('.quotes__nav-btn_left');
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
//# sourceMappingURL=0.cf511e8ae2955c1a9523.hot-update.js.map