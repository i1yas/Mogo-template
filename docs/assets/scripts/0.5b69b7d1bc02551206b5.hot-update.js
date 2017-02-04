webpackHotUpdate(0,{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	var _jqueryMousewheel = __webpack_require__(5);
	
	var _jqueryMousewheel2 = _interopRequireDefault(_jqueryMousewheel);
	
	var _malihuCustomScrollbarPlugin = __webpack_require__(6);
	
	var _malihuCustomScrollbarPlugin2 = _interopRequireDefault(_malihuCustomScrollbarPlugin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var slider = __webpack_require__(9);
	var service = __webpack_require__(10);
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
		slider();
		service(_jquery2.default);
	});

/***/ },

/***/ 10:
/***/ function(module, exports) {

	'use strict';
	
	var service = function service($) {
		var pictures = document.querySelectorAll('.service__picture');
		var menuItems = document.querySelectorAll('.service__menu-item');
		var descriptions = document.querySelectorAll('.service__menu-desc');
		var arrowIcons = document.querySelectorAll('.service__arrow-icon');
	
		var _loop = function _loop(i) {
			if (!arrowIcons[i].classList) {
				arrowIcons.split = [].split;
				arrowIcons[i].classList = arrowIcons[i].className.split(' ');
				arrowIcons[i].classList.add = function (newClass) {
					undefined.push(newClass);
					arrowIcons[i].className = undefined.join(' ');
				};
				arrowIcons[i].classList.remove = function (removedClass) {
					var index = undefined.indexOf(removedClass);
					undefined.splice(index, 1);
					arrowIcons[i].className = undefined.join(' ');
				};
			}
		};
	
		for (var i = 0; i < arrowIcons.length; i++) {
			_loop(i);
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
	
		var _loop2 = function _loop2(_i2) {
			menuItems[_i2].addEventListener('click', function () {
				switcher.change(_i2);
			});
		};
	
		for (var _i2 = 0; _i2 < menuItems.length; _i2++) {
			_loop2(_i2);
		}
	};
	
	module.exports = service;

/***/ }

})
//# sourceMappingURL=0.5b69b7d1bc02551206b5.hot-update.js.map