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
	
		var scrollToByIndex = function scrollToByIndex(index) {
			var elementWidth = Number(getComputedStyle(itemsParent).width.slice(0, -2));
			itemsParent.scrollLeft = elementWidth * index;
	
			var lastIndex = void 0;
			if (autoPlay.index) {
				lastIndex = autoPlay.index - 1;
			} else {
				lastIndex = index === 0 ? length - 1 : index - 1;
			}
	
			console.log('remove ', lasIndex);
			progressLines[lastIndex].style.opacity = 0;
			labels[lastIndex].classList.remove('slider__nav-item_selected');
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
					scrollToByIndex(i);
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
				// let i = startIndex;
				// this.interval = setInterval(() => {
				// 	scrollToByIndex(i);
				// 	count(i, this.pause);
				// 	this.index = i;
				// 	i++;
				// 	if (i === length) {
				// 		i = 0;
				// 	}
				// }, this.pause);
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
				scrollToByIndex(_i);
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
//# sourceMappingURL=0.a2390c3a336513ee72b8.hot-update.js.map