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
			pictures[i].style.opacity = 0;
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
	
		var _loop = function _loop(_i) {
			menuItems[_i].addEventListener('click', function () {
				switcher.change(_i);
			});
		};
	
		for (var _i = 0; _i < menuItems.length; _i++) {
			_loop(_i);
		}
	};
	
	module.exports = service;

/***/ }

})
//# sourceMappingURL=0.24254b48079c8d11527f.hot-update.js.map