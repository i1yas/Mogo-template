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
	
		var count = function count(index, pause) {
			var progressLine = document.createElement('div');
			progressLine.classList.add('slider__progress-line');
			labelLines[index].appendChild(progressLine);
			var animationPeriod = 5;
			var part = animationPeriod / pause;
	
			var i = 0;
			var interval = setInterval(function () {
				progressLine.style.width = i * part * 100 + '%';
				i++;
			}, animationPeriod);
			setTimeout(function () {
				clearTimeout(interval);
				labelLines[index].removeChild(progressLine);
			}, pause);
		};
	
		var autoPlay = {
			interval: null,
			pause: 3000,
			delay: 500,
			play: function play(startIndex) {
				var _this = this;
	
				var i = startIndex;
				this.interval = setInterval(function () {
					scrollToByIndex(i);
					count(i, _this.pause);
					i++;
					if (i === length) {
						i = 0;
					}
				}, this.pause + this.delay);
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
//# sourceMappingURL=0.d5013619573fe6a6d15a.hot-update.js.map