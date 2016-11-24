const quotesSlider = $ => {
	const owl = $('.quotes__slider-container');
	owl.owlCarousel({
		dots: false,
		items: 1
	});

	const leftBtn = $('.quotes__nav-btn_left');
	const rightBtn = $('.quotes__nav-btn_right');
	leftBtn.click(() => {
		console.log('click');
		owl.trigger('prev.owl.carousel');
		leftBtn.blur();
	});

	rightBtn.click(() => {
		console.log('click');
		owl.trigger('next.owl.carousel');
		rightBtn.blur();
	});
};

module.exports = quotesSlider;
