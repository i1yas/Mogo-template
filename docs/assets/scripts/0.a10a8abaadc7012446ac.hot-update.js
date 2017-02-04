webpackHotUpdate(0,{

/***/ 5:
/***/ function(module, exports) {

	'use strict';
	
	var slider = function slider() {
		var itemsParent = document.querySelector('.slider__items');
		var length = itemsParent.childNodes.length;
	
		var scrollToByIndex = function scrollToByIndex(index) {
			debugger;
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
//# sourceMappingURL=0.a10a8abaadc7012446ac.hot-update.js.map