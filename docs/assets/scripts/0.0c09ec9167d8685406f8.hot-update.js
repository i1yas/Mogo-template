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
	
	var _search = __webpack_require__(13);
	
	var _search2 = _interopRequireDefault(_search);
	
	var _slider = __webpack_require__(9);
	
	var _slider2 = _interopRequireDefault(_slider);
	
	var _service = __webpack_require__(10);
	
	var _service2 = _interopRequireDefault(_service);
	
	__webpack_require__(11);
	
	var _quotesSlider = __webpack_require__(12);
	
	var _quotesSlider2 = _interopRequireDefault(_quotesSlider);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
		(0, _search2.default)();
		(0, _slider2.default)();
		(0, _service2.default)(_jquery2.default);
		(0, _quotesSlider2.default)(_jquery2.default, 'widthImage');
	});

/***/ },

/***/ 13:
/***/ function(module, exports) {

	'use strict';
	
	var search = function search() {
		var lens = document.querySelector('.header__icon-item_lens');
	
		var searchInput = document.querySelector('.header__search');
		var searchModifer = 'header__search_enabled';
	
		lens.addEventListener('click', function () {
			console.log('click');
			searchInput.classList.add(searchModifer);
		});
	};
	
	module.exports = search;

/***/ }

})
//# sourceMappingURL=0.0c09ec9167d8685406f8.hot-update.js.map