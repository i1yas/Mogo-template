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
			console.log('click');
			scrollToByIndex(3);
		});
	};
	
	module.exports = slider;

/***/ }

})
//# sourceMappingURL=0.9eb4bc5387983161eccb.hot-update.js.map