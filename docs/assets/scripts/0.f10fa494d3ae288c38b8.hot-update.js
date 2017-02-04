webpackHotUpdate(0,{

/***/ 14:
/***/ function(module, exports) {

	'use strict';
	
	var scroll = function scroll() {
		$(function () {
			$('a[href*="#"]:not([href="#"])').click(function () {
				debugger;
				if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
					if (target.length) {
						$('html, body').animate({
							scrollTop: target.offset().top
						}, 1000);
						return false;
					}
				}
			});
		});
	};
	
	module.exports = scroll;

/***/ }

})
//# sourceMappingURL=0.f10fa494d3ae288c38b8.hot-update.js.map