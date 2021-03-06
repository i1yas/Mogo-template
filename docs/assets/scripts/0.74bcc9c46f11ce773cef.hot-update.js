webpackHotUpdate(0,{

/***/ 6:
/***/ function(module, exports) {

	'use strict';
	
	var service = function service() {
		var pictures = document.querySelectorAll('.service__picture');
		var menuItems = document.querySelectorAll('.service__menu-item');
		var descriptions = document.querySelectorAll('.service__menu-desc');
		var arrowIcons = document.querySelectorAll('.service__arrow-icon');
	
		for (var i = 1; i < pictures.length; i++) {
			pictures[i].style.opacity = 0;
		}
	
		var switcher = {
			currentIndex: 0,
			change: function change(newIndex) {
				if (this.currentIndex === newIndex) return;
				pictures[this.currentIndex].style.zIndex = 10;
				pictures[newIndex].style.opacity = 1;
				pictures[this.currentIndex].style.opacity = 0;
				pictures[this.currentIndex].style.zIndex = '';
				this.currentIndex = newIndex;
	
				debugger;
				descriptions[this.currentIndex].classList.remove('service__menu-desc_open');
				descriptions[newIndex].classList.add('service__menu-desc_open');
	
				arrowIcons[this.currentIndex].classList.remove('service__arrow-icons_up');
				arrowIcons[newIndex].classList.add('service__arrow-icons_up');
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
//# sourceMappingURL=0.74bcc9c46f11ce773cef.hot-update.js.map