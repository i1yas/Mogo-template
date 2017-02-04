webpackHotUpdate(0,{

/***/ 5:
/***/ function(module, exports) {

	'use strict';
	
	var slider = function slider() {
		var itemsParent = document.querySelector('.slider__items');
		var labels = document.querySelectorAll('.slider__nav-item');
		var labelLines = document.querySelectorAll('.slider__line');
		var length = labels.length;
		var progressLines = [];
	
		var scrollToByIndex = function scrollToByIndex(index, lastIndex) {
			if (lastIndex !== null) {
				progressLines[lastIndex].style.opacity = 0;
				progressLines[lastIndex].style.width = 0;
				labels[lastIndex].classList.remove('slider__nav-item_selected');
			}
			var elementWidth = Number(getComputedStyle(itemsParent).width.slice(0, -2));
			itemsParent.scrollLeft = elementWidth * index;
			labels[index].classList.add('slider__nav-item_selected');
		};
	
		var count = function count(index, pause) {
			progressLines[index].style.opacity = 1;
			progressLines[index].style.width = '100%';
			return setTimeout(function () {
				progressLines[index].style.opacity = 0;
				progressLines[index].style.width = 0;
			}, pause);
		};
	
		var autoPlay = {
			interval: null,
			countTimeout: null,
			index: null,
			pause: 4000,
			delay: 500,
			play: function play(startIndex) {
				var _this = this;
	
				var i = startIndex;
	
				var next = function next() {
					scrollToByIndex(i, _this.index);
					_this.countTimeout = count(i, _this.pause);
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
				clearTimeout(this.countTimeout);
			}
		};
	
		for (var i = 0; i < length; i++) {
			var progressLine = document.createElement('div');
			progressLine.classList.add('slider__progress-line');
			progressLine.style.transition = 'width ' + 0.9 * autoPlay.pause + 'ms linear';
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
	
		var stepScroll = function stepScroll() {
			console.log('step');
			var step = Number(getComputedStyle(itemsParent).width.slice(0, -2));
			var diff = [];
			for (var _i2 = 0; _i2 < length; _i2++) {
				diff.push(Math.abs(_i2 * step - itemsParent.scrollLeft));
			}
			var index = diff.indexOf(Math.min.apply(Math, diff));
			autoPlay.stop();
			setTimeout(function () {
				autoPlay.play(index);
			}, 200);
		};
	
		var followScroll = function followScroll() {
			var lastValue = itemsParent.scrollLeft;
			var interval = setInterval(function () {
				console.log(lastValue);
				if (lastValue === itemsParent.scrollLeft) {
					clearInterval(interval);
					console.log('done');
				}
				lastValue = itemsParent.scrollLeft;
			}, 0);
		};
	
		itemsParent.addEventListener('touchstart', function (event) {
			autoPlay.stop();
		});
		itemsParent.addEventListener('touchend', function (event) {
			followScroll();
		});
	};
	
	module.exports = slider;

/***/ }

})
//# sourceMappingURL=0.95d65bcbcce5c171b360.hot-update.js.map