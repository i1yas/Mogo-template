webpackHotUpdate(0,{

/***/ 6:
/***/ function(module, exports) {

	'use strict';
	
	var service = function service() {
		var pictures = document.querySelectorAll('.service__picture');
		var menuItems = document.querySelectorAll('.service__menu-item');
		var descriptions = document.querySelectorAll('.service__menu-desc');
		var arrowIcons = document.querySelectorAll('.service__arrow-icon');
	
		var modifiers = {
			descOpen: 'service__menu-desc_open',
			arrowUp: 'service__arrow-icon_up'
		};
	
		for (var i = 1; i < pictures.length; i++) {
			pictures[i].style.opacity = 0;
			descriptions[i].style.transform = 'translateY(-100%) scaleY(0)';
		}
	
		descriptions[0].classList.add(modifiers.descOpen);
		arrowIcons[0].classList.add(modifiers.arrowUp);
	
		var switcher = {
			currentIndex: 0,
			change: function change(newIndex) {
				var _this = this;
	
				if (this.currentIndex === newIndex) {
					return;
				}
				pictures[this.currentIndex].style.zIndex = 10;
				pictures[newIndex].style.opacity = 1;
				pictures[this.currentIndex].style.opacity = 0;
				pictures[this.currentIndex].style.zIndex = '';
	
				descriptions[this.currentIndex].style.transform = 'translateY(-100%) scaleY(0)';
				setTimeout(function () {
					descriptions[_this.currentIndex].classList.remove(modifiers.descOpen);
	
					descriptions[newIndex].classList.add(modifiers.descOpen);
					descriptions[newIndex].style.transform = 'translateY(0) scaleY(1)';
				}, 110);
	
				arrowIcons[this.currentIndex].classList.remove(modifiers.arrowUp);
				arrowIcons[newIndex].classList.add(modifiers.arrowUp);
	
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
//# sourceMappingURL=0.3570f9bc46cece97d60b.hot-update.js.map