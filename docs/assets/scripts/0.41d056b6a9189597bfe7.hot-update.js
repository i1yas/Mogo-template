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
				labels[i].classList.remove('slider__nav-item_selected');
			}
			labels[index].classList.add('slider__nav-item_selected');
		};
	
		var count = function count(index, pause) {
			debugger;
			var progressLine = document.createElement('div');
			progressLine.classList.add('slider__progress-line');
			progressLine.style.transition = 'width ' + pause + 'ms linear';
			labelLines[index].appendChild(progressLine);
	
			progressLine.style.width = '100%';
			setTimeout(function () {
				labelLines[index].removeChild(progressLine);
			}, 2 * pause);
		};
	
		var autoPlay = {
			interval: null,
			pause: 4000,
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
				}, this.pause);
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
				autoPlay.stop();
				autoPlay.play(i);
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
//# sourceMappingURL=0.41d056b6a9189597bfe7.hot-update.js.map