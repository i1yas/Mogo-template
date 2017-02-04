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
	
	var _scroll = __webpack_require__(14);
	
	var _scroll2 = _interopRequireDefault(_scroll);
	
	var _search = __webpack_require__(9);
	
	var _search2 = _interopRequireDefault(_search);
	
	var _slider = __webpack_require__(10);
	
	var _slider2 = _interopRequireDefault(_slider);
	
	var _service = __webpack_require__(11);
	
	var _service2 = _interopRequireDefault(_service);
	
	__webpack_require__(12);
	
	var _quotesSlider = __webpack_require__(13);
	
	var _quotesSlider2 = _interopRequireDefault(_quotesSlider);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
		(0, _scroll2.default)(_jquery2.default);
		(0, _search2.default)();
		(0, _slider2.default)();
		(0, _service2.default)(_jquery2.default);
		(0, _quotesSlider2.default)(_jquery2.default, 'widthImage');
	});

/***/ },

/***/ 14:
/***/ function(module, exports) {

	'use strict';
	
	var scroll = function scroll($) {
		$(function () {
			$('a[href*="#"]:not([href="#"])').click(function () {
				if (location.pathname.replace(/^\//, '') === undefined.pathname.replace(/^\//, '') && location.hostname === undefined.hostname) {
					var target = $(undefined.hash);
					target = target.length ? target : $('[name=' + undefined.hash.slice(1) + ']');
					if (target.length) {
						$('html, body').animate({
							scrollTop: target.offset().top
						}, 1000);
						return false;
					}
				}
			});
		});
	};
	
	module.exports = scroll;

/***/ }

})
//# sourceMappingURL=0.69c264861a403feb8383.hot-update.js.map