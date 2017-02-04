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
	
			for (var i = 0; i < labels.length; i++) {
				labels[i].classList.remove('.slider__nav-item_selected');
			}
			labels[index].classList.add('.slider__nav-item_selected');
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
	
			return interval;
		};
	
		var autoPlay = {
			interval: null,
			countInterval: null,
			pause: 4000,
			delay: 500,
			play: function play(startIndex) {
				var _this = this;
	
				var i = startIndex;
				this.interval = setInterval(function () {
					scrollToByIndex(i);
					_this.countInterval = count(i, _this.pause);
					i++;
					if (i === length) {
						i = 0;
					}
				}, this.pause + this.delay);
			},
			stop: function stop() {
				clearInterval(this.interval);
				clearInterval(this.countInterval);
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
//# sourceMappingURL=0.5d89308c7efa0f01cd3e.hot-update.js.map