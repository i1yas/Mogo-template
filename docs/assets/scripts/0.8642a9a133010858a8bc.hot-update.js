webpackHotUpdate(0,{

/***/ 13:
/***/ function(module, exports) {

	'use strict';
	
	var search = function search() {
		var lens = document.querySelector('.header__icon-item_lens');
	
		var searchInput = document.querySelector('.header__search');
		var searchModifer = 'header__search_enabled';
	
		lens.addEventListener('click', function () {
			console.log('click');
			searchInput.classList.add(searchModifer);
		});
		document.addEventListener('click', function () {
			searchInput.classList.remove(searchModifer);
		});
	};
	
	module.exports = search;

/***/ }

})
//# sourceMappingURL=0.8642a9a133010858a8bc.hot-update.js.map