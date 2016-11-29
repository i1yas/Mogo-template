const search = () => {
	const lens = document.querySelector('.header__icon-item_lens');

	const searchInput = document.querySelector('.header__search');
	const searchModifer = 'header__search_enabled';

	lens.onclick = () => {
		searchInput.classList.add(searchModifer);
	};

	document.onclick = event => {
		for (let i = 0; i < event.path.length; i++) {
			if (event.path[i] === searchInput || event.path[i] === lens) {
				return;
			}
		}
		searchInput.classList.remove(searchModifer);
	};
};

module.exports = search;
