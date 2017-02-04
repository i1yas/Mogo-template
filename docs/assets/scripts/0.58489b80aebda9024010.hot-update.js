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
			searchInput.classList.add(searchModifer);
			document.onclick = function () {
				return;
			};
		};
		document.onclick = function () {
			console.log('remove');
			searchInput.classList.remove(searchModifer);
		};
	};
	
	module.exports = search;

/***/ }

})
//# sourceMappingURL=0.58489b80aebda9024010.hot-update.js.map