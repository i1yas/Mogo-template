webpackHotUpdate(0,{

/***/ 5:
/***/ function(module, exports) {

	'use strict';
	
	var slider = function slider() {
		var itemsParent = document.querySelector('.slider__items');
		var length = itemsParent.childNodes.length;
		var labels = document.querySelector('.slider__nav-item');
	
		var scrollToByIndex = function scrollToByIndex(index) {
			var elementWidth = Number(getComputedStyle(itemsParent).width.slice(0, -2));
			itemsParent.scrollLeft = elementWidth * index;
		};
	
		var _loop = function _loop(i) {
			labels.addEventListener('click', function () {
				scrollToByIndex(i);
				preventDefault();
			});
		};
	
		for (var i = 0; i < length; i++) {
			_loop(i);
		}
	};
	
	module.exports = slider;

/***/ }

})
//# sourceMappingURL=0.ad351874703348d35fb7.hot-update.js.map