webpackHotUpdate(0,{

/***/ 6:
/***/ function(module, exports) {

	'use strict';
	
	var service = function service() {
		var pictures = document.querySelectorAll('.service__picture');
		var menuItems = document.querySelectorAll('.service__menu-item');
		var descriptions = document.querySelectorAll('.servise__menu-desc');
		var arrowIcons = document.querySelectorAll('.service__arrow-icon');
	
		for (var i = 1; i < pictures.length; i++) {
			pictures.style.opacity = 0;
		}
	
		var switcher = {
			currentIndex: 0,
			change: function change(newIndex) {
				pictures[this.currentIndex].style.zIndex = 10;
				pictures[newIndex].style.opacity = 1;
				pictures[this.currentIndex].style.opacity = 0;
				pictures[this.currentIndex].style.zIndex = '';
				this.currentIndex = newIndex;
			}
		};
	};
	
	module.exports = service;

/***/ }

})
//# sourceMappingURL=0.5752c9061a59e01d195b.hot-update.js.map