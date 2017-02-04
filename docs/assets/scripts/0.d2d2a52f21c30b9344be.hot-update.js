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
	
			var lastIndex = void 0;
			if (autoPlay.index) {
				lastIndex = autoPlay.index;
			} else {
				lastIndex = index === 0 ? length - 1 : index - 1;
			}
			labels[lastIndex].classList.remove('slider__nav-item_selected');
			labels[index].classList.add('slider__nav-item_selected');
		};
	
		var count = function count(index, pause) {
			var progressLine = document.createElement('div');
			progressLine.classList.add('slider__progress-line');
			progressLine.style.transition = 'width ' + pause + 'ms linear';
			labelLines[index].appendChild(progressLine);
	
			progressLine.style.width = '100%';
			setTimeout(function () {
				labelLines[index].removeChild(progressLine);
			}, pause);
		};
	
		var autoPlay = {
			interval: null,
			index: null,
			pause: 4000,
			delay: 500,
			play: function play(startIndex) {
				var _this = this;
	
				var i = startIndex;
				this.index = i;
				this.interval = setInterval(function () {
					scrollToByIndex(i);
					count(i, _this.pause);
					i++;
					_this.index = i;
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
//# sourceMappingURL=0.d2d2a52f21c30b9344be.hot-update.js.map