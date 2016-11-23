import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import jqueryMouseWheel from 'jquery-mousewheel';
import customSlider from 'malihu-custom-scrollbar-plugin';
const slider = require('../blocks/slider/slider');
const service = require('../blocks/service/service');

$(() => {
	svg4everybody();
	slider();
	service($);
});
