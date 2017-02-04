webpackHotUpdate(0,{

/***/ 5:
/***/ function(module, exports) {

	'use strict';
	
	var slider = function slider() {
		var itemsParent = document.querySelector('.slider__items');
		var labels = document.querySelectorAll('.slider__nav-item');
		var labelLines = document.querySelectorAll('.slider__line');
		var length = labels.length;
	
		var scrollToByIndex = function scrollToByIndex(index) {
			var elementWidth = Number(getComputedStyle(itemsParent).width.slice(0, -2));
			itemsParent.scrollLeft = elementWidth * index;
		};
	
		var count = function count(index) {
			debugger;
			var progressLine = document.createElement('div');
			progressLine.classList.add('slider__progress-line');
			labelLines[index].appendChild(progressLine);
	
			var i = 0;
			var interval = setInterval(function () {
				progressLine.style.width = i * 10 + '%';
				i++;
			}, 100);
			setTimeout(function () {
				clearTimeout(interval);
			}, 1000);
	
			labelLines[index].removeChild(progressLine);
		};
	
		var autoPlay = {
			interval: null,
			pause: 1000,
			play: function play(startIndex) {
				var i = startIndex;
				this.interval = setInterval(function () {
					scrollToByIndex(i);
					count(i);
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
				scrollToByIndex(i);
				event.preventDefault();
				autoPlay.stop();
				autoPlay.play(i);
			});
		};
	
		for (var i = 0; i < length; i++) {
			_loop(i);
		}
	};
	
	module.exports = slider;

/***/ }

})
//# sourceMappingURL=0.3b7d25812eb767eee6a3.hot-update.js.map