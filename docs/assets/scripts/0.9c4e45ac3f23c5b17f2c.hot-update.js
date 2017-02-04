webpackHotUpdate(0,{

/***/ 13:
/***/ function(module, exports) {

	'use strict';
	
	var search = function search() {
		var lens = document.querySelector('.header__icon-item_lens');
	
		var searchInput = document.querySelector('.header__search');
		var searchModifer = 'header__search_enabled';
	
		lens.onclick = function () {
			console.log('click');
			document.onclick = null;
			searchInput.classList.add(searchModifer);
		};
		setTimeout(function () {
			document.onclick = function () {
				console.log('remove');
				searchInput.classList.remove(searchModifer);
			};
		}, 300);
	};
	
	module.exports = search;

/***/ }

})
//# sourceMappingURL=0.9c4e45ac3f23c5b17f2c.hot-update.js.map