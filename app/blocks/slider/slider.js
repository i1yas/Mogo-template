const slider = () => {
	const itemsParent = document.querySelector('.slider__items');
	const labels = document.querySelectorAll('.slider__nav-item');
	const length = labels.length;


	const scrollToByIndex = index => {
		const elementWidth = Number(getComputedStyle(itemsParent).width.slice(0, -2));
		itemsParent.scrollLeft = elementWidth * index;
	};


	const autoPlay = {
		interval: null,
		pause: 1000,
		play(startIndex) {
			let i = startIndex;
			this.interval = setInterval(() => {
				scrollToByIndex(i);
				i++;
				if (i === length) {
					i = 0;
				}
			}, this.pause);
		},
		stop() {
			clearInterval(this.interval);
		}
	};

	autoPlay.play(0);

	for (let i = 0; i < length; i++) {
		labels[i].addEventListener('click', event => {
			console.log(i, 'click');
			scrollToByIndex(i);
			event.preventDefault();
		});
	}
};

module.exports = slider;
