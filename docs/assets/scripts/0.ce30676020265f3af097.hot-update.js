webpackHotUpdate(0,{

/***/ 5:
/***/ function(module, exports) {

	'use strict';
	
	var slider = function slider() {
		var itemsParent = document.querySelector('.slider__items');
		var labels = document.querySelectorAll('.slider__nav-item');
		var length = labels.length;
	
		var scrollToByIndex = function scrollToByIndex(index) {
			var elementWidth = Number(getComputedStyle(itemsParent).width.slice(0, -2));
			itemsParent.scrollLeft = elementWidth * index;
		};
	
		var autoPlay = {
			interval: null,
			pause: 1000,
			play: function play(startIndex) {
				var i = startIndex;
				this.interval = setInterval(function () {
					scrollToByIndex(i);
					i++;
					if (i === length) {
						i = 0;
					}
				}, this.pause);
			},
			stop: function stop() {
				clearInterval(this.interval);
			}
		};
	
		autoPlay.play(0);
	
		var _loop = function _loop(i) {
			labels[i].addEventListener('click', function (event) {
				console.log(i, 'click');
				scrollToByIndex(i);
				event.preventDefault();
			});
		};
	
		for (var i = 0; i < length; i++) {
			_loop(i);
		}
	};
	
	module.exports = slider;

/***/ }

})
//# sourceMappingURL=0.ce30676020265f3af097.hot-update.js.map