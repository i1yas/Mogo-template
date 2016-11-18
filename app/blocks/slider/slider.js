const slider = () => {
	const itemsParent = document.querySelector('.slider__items');
	const labels = document.querySelectorAll('.slider__nav-item');
	const labelLines = document.querySelectorAll('.slider__line');
	const length = labels.length;
	const progressLines = [];


	const scrollToByIndex = (index, lastIndex) => {
		if (lastIndex !== null) {
			progressLines[lastIndex].style.opacity = 0;
			progressLines[lastIndex].style.width = 0;
			labels[lastIndex].classList.remove('slider__nav-item_selected');
		}
		const elementWidth = Number(getComputedStyle(itemsParent).width.slice(0, -2));
		itemsParent.scrollLeft = elementWidth * index;
		labels[index].classList.add('slider__nav-item_selected');
	};

	const count = (index, pause) => {
		progressLines[index].style.opacity = 1;
		progressLines[index].style.width = '100%';
		return setTimeout(() => {
			progressLines[index].style.opacity = 0;
			progressLines[index].style.width = 0;
		}, pause);
	};

	const autoPlay = {
		interval: null,
		countTimeout: null,
		index: null,
		pause: 4000,
		delay: 500,
		play(startIndex) {
			let i = startIndex;

			const next = () => {
				scrollToByIndex(i, this.index);
				this.countTimeout = count(i, this.pause);
				this.index = i;
				i++;
				if (i === length) {
					i = 0;
				}
			};
			next();
			this.interval = setInterval(() => {
				next();
			}, this.pause);
		},
		stop() {
			clearInterval(this.interval);
			clearTimeout(this.countTimeout);
		}
	};

	for (let i = 0; i < length; i++) {
		const progressLine = document.createElement('div');
		progressLine.classList.add('slider__progress-line');
		progressLine.style.transition = `width ${0.9 * autoPlay.pause}ms linear`;
		progressLine.style.opacity = 0;
		progressLines.push(progressLine);
		labelLines[i].appendChild(progressLine);
	}

	autoPlay.play(0);

	for (let i = 0; i < length; i++) {
		labels[i].addEventListener('click', event => {
			autoPlay.stop();
			autoPlay.play(i);
			event.preventDefault();
		});
	}
};

module.exports = slider;
