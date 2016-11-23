const service = () => {
	const pictures = document.querySelectorAll('.service__picture');
	const menuItems = document.querySelectorAll('.service__menu-item');
	const descriptions = document.querySelectorAll('.service__menu-desc');
	const arrowIcons = document.querySelectorAll('.service__arrow-icon');

	const modifiers = {
		descOpen: 'service__menu-desc_open',
		arrowUp: 'service__arrow-icon_up'
	};

	for (let i = 1; i < pictures.length; i++) {
		pictures[i].style.opacity = 0;
	}

	descriptions[0].classList.add(modifiers.descOpen);
	arrowIcons[0].classList.add(modifiers.arrowUp);

	const switcher = {
		currentIndex: 0,
		change(newIndex) {
			if (this.currentIndex === newIndex) {
				return;
			}
			pictures[this.currentIndex].style.zIndex = 10;
			pictures[newIndex].style.opacity = 1;
			pictures[this.currentIndex].style.opacity = 0;
			pictures[this.currentIndex].style.zIndex = '';

			descriptions[this.currentIndex].classList.remove(modifiers.descOpen);
			descriptions[newIndex].classList.add(modifiers.descOpen);

			arrowIcons[this.currentIndex].classList.remove(modifiers.arrowUp);
			arrowIcons[newIndex].classList.add(modifiers.arrowUp);

			this.currentIndex = newIndex;
		}
	};

	for (let i = 0; i < menuItems.length; i++) {
		menuItems[i].addEventListener('click', () => {
			switcher.change(i);
		});
	}
};

module.exports = service;
