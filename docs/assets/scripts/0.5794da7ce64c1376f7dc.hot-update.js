webpackHotUpdate(0,{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var slider = __webpack_require__(5);
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
		slider();
	});

/***/ },

/***/ 5:
/***/ function(module, exports) {

	'use strict';
	
	var slider = function slider() {
		var itemsParent = document.querySelector('.slider__items');
		var length = itemsParent.childNodes.length;
	
		var scrollToByIndex = function scrollToByIndex(index) {
			var elementWidth = Number(getComputedStyle(itemsParent).width.slice(0, -2));
			itemsParent.scrollLeft = elementWidth * index + 'px';
		};
	
		itemsParent.addEventListener('click', function () {
			scrollToByIndex(3);
		});
	};
	
	module.exports = slider;

/***/ }

})
//# sourceMappingURL=0.5794da7ce64c1376f7dc.hot-update.js.map