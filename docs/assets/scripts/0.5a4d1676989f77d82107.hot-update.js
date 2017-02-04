webpackHotUpdate(0,{

/***/ 5:
/***/ function(module, exports) {

	'use strict';
	
	//not commited yet
	//нужно исправить переход по кликам (таймаут отрабатывает и на старом элементе анимация продолжается)
	
	
	var slider = function slider() {
		var itemsParent = document.querySelector('.slider__items');
		var labels = document.querySelectorAll('.slider__nav-item');
		var labelLines = document.querySelectorAll('.slider__line');
		var length = labels.length;
	
		var scrollToByIndex = function scrollToByIndex(index, lastIndex) {
			var elementWidth = Number(getComputedStyle(itemsParent).width.slice(0, -2));
			itemsParent.scrollLeft = elementWidth * index;
			if (lastIndex) {
				console.log('remove ', lastIndex);
				progressLines[lastIndex].style.opacity = 0;
				progressLines[lastIndex].style.width = 0;
				labels[lastIndex].classList.remove('slider__nav-item_selected');
			}
			labels[index].classList.add('slider__nav-item_selected');
		};
	
		var count = function count(index, pause) {
			progressLines[index].style.opacity = 1;
			progressLines[index].style.width = '100%';
			setTimeout(function () {
				progressLines[index].style.opacity = 0;
				progressLines[index].style.width = 0;
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
	
				var next = function next() {
					scrollToByIndex(i, _this.index);
					count(i, _this.pause);
					_this.index = i;
					i++;
					if (i === length) {
						i = 0;
					}
				};
				next();
				this.interval = setInterval(function () {
					next();
				}, this.pause);
			},
			stop: function stop() {
				clearInterval(this.interval);
			}
		};
	
		var progressLines = [];
		for (var i = 0; i < length; i++) {
			var progressLine = document.createElement('div');
			progressLine.classList.add('slider__progress-line');
			progressLine.style.transition = 'width ' + autoPlay.pause + 'ms linear';
			progressLine.style.opacity = 0;
			progressLines.push(progressLine);
			labelLines[i].appendChild(progressLine);
		}
	
		autoPlay.play(0);
	
		var _loop = function _loop(_i) {
			labels[_i].addEventListener('click', function (event) {
				autoPlay.stop();
				autoPlay.play(_i);
				event.preventDefault();
			});
		};
	
		for (var _i = 0; _i < length; _i++) {
			_loop(_i);
		}
	};
	
	module.exports = slider;

/***/ }

})
//# sourceMappingURL=0.5a4d1676989f77d82107.hot-update.js.map