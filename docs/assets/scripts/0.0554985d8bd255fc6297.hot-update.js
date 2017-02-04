webpackHotUpdate(0,{

/***/ 10:
/***/ function(module, exports) {

	'use strict';
	
	var service = function service($) {
		var pictures = document.querySelectorAll('.service__picture');
		var menuItems = document.querySelectorAll('.service__menu-item');
		var descriptions = document.querySelectorAll('.service__menu-desc');
		var arrowIcons = document.querySelectorAll('.service__arrow-icon');
	
		for (var i = 0; i < arrowIcons.length; i++) {
			if (!arrowIcons.classList) {
				arrowIcons.classList = arrowIcons.className.split(' ');
				arrowIcons.classList.add = function (newClass) {
					undefined.push(newClass);
					arrowIcons.className = undefined.join(' ');
				};
				arrowIcons.classList.remove = function (removedClass) {
					var index = undefined.indexOf(removedClass);
					undefined.splice(index, 1);
					arrowIcons.className = undefined.join(' ');
				};
			}
		}
	
		var modifiers = {
			descOpen: 'service__menu-desc_open',
			arrowUp: 'service__arrow-icon_up'
		};
	
		for (var _i = 1; _i < pictures.length; _i++) {
			pictures[_i].style.opacity = 0;
			descriptions[_i].style.transform = 'translateY(-50%) scaleY(0)';
		}
	
		descriptions[0].classList.add(modifiers.descOpen);
		arrowIcons[0].classList.add(modifiers.arrowUp);
		$(window).on('load', function () {
			$('.service__menu-desc').mCustomScrollbar({
				theme: 'dark-3',
				mouseWheel: {
					preventDefault: true,
					enable: true
				}
			});
		});
	
		var switcher = {
			currentIndex: 0,
			animationDelay: 200,
			change: function change(newIndex) {
				var _this = this;
	
				if (this.currentIndex === newIndex) {
					return;
				}
				pictures[this.currentIndex].style.zIndex = 10;
				pictures[newIndex].style.opacity = 1;
				pictures[this.currentIndex].style.opacity = 0;
				pictures[this.currentIndex].style.zIndex = '';
	
				descriptions[this.currentIndex].style.zIndex = -10;
				descriptions[this.currentIndex].style.transform = 'translateY(-50%) scaleY(0)';
				setTimeout(function () {
					descriptions[_this.currentIndex].classList.remove(modifiers.descOpen);
					descriptions[_this.currentIndex].style.zIndex = '';
	
					descriptions[newIndex].classList.add(modifiers.descOpen);
					descriptions[newIndex].style.transform = 'translateY(0) scaleY(1)';
	
					setTimeout(function () {
						arrowIcons[_this.currentIndex].classList.remove(modifiers.arrowUp);
						arrowIcons[newIndex].classList.add(modifiers.arrowUp);
	
						_this.currentIndex = newIndex;
					}, _this.animationDelay + 10);
				}, this.animationDelay + 10);
			}
		};
	
		var _loop = function _loop(_i2) {
			menuItems[_i2].addEventListener('click', function () {
				switcher.change(_i2);
			});
		};
	
		for (var _i2 = 0; _i2 < menuItems.length; _i2++) {
			_loop(_i2);
		}
	};
	
	module.exports = service;

/***/ }

})
//# sourceMappingURL=0.0554985d8bd255fc6297.hot-update.js.map