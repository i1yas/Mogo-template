webpackHotUpdate(0,{

/***/ 5:
/***/ function(module, exports) {

	'use strict';
	
	var slider = function slider() {
		var itemsParent = document.querySelector('.slider__items');
		var length = itemsParent.childNodes.length;
	
		var scrollToByIndex = function scrollToByIndex(index) {
			var elementWidth = Number(getComputedStyle(itemsParent).width.slice(0, -2));
			itemsParent.scrollLeft = elementWidth * index;
		};
	
		itemsParent.addEventListener('click', function () {
			scrollToByIndex(3);
		});
	};
	
	module.exports = slider;

/***/ }

})
//# sourceMappingURL=0.9179ac9fbdfe499df263.hot-update.js.map