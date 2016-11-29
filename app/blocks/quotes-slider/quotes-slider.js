const quotesSlider = ($, isWidthImage) => {
	const owl = $('.quotes-slider');
	const images = $('.quotes-slider__images');
	owl.owlCarousel({
		dots: false,
		items: 1
	});

	const leftBtn = $('.quotes-slider__prev');
	const rightBtn = $('.quotes-slider__next');


	let changed = null;

	owl.on('changed.owl.carousel', () => {
		changed = true;
	});

	const changeImage = direction => {
		const length = images.children().length;
		if (direction === 'next') {
			images.css('transform', `translateX(${100 / length}%)`);
		}else if (direction === 'prev') {
			images.css('transform', `translateX(-${100 / length}%)`);
		}
	};

	leftBtn.click(() => {
		owl.trigger('prev.owl.carousel');
		leftBtn.blur();
		if (isWidthImage && changed) {
			changed = false;
			changeImage('prev');
		}
	});


	rightBtn.click(() => {
		owl.trigger('next.owl.carousel');
		rightBtn.blur();
		if (isWidthImage && changed) {
			changed = false;
			changeImage('next');
		}
	});
};

module.exports = quotesSlider;
