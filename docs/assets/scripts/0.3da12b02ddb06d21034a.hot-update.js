webpackHotUpdate(0,{

/***/ 13:
/***/ function(module, exports) {

	'use strict';
	
	var search = function search() {
		var lens = document.querySelector('.header__icon-item_lens');
	
		var searchInput = document.querySelector('.header__search');
		var searchModifer = 'header__search_enabled';
	
		var areaClick = function areaClick(place) {
			if (place === 'icon') return;
			searchInput.classList.remove(searchModifer);
		};
	
		lens.onclick = function () {
			console.log('event');
			searchInput.classList.add(searchModifer);
			document.onclick = function (event) {
				return;
			};
		};
		document.onclick = function (event) {
			console.log('event');
			searchInput.classList.remove(searchModifer);
		};
	};
	
	module.exports = search;

/***/ }

})
//# sourceMappingURL=0.3da12b02ddb06d21034a.hot-update.js.map