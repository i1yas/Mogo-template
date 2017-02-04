webpackHotUpdate(0,{

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
	
		console.log('done');
	};
	
	module.exports = slider;

/***/ }

})
//# sourceMappingURL=0.d6b000fef850d03d2668.hot-update.js.map