import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'jquery-mousewheel';
import 'malihu-custom-scrollbar-plugin';
import scroll from '../blocks/header/scroll';
import search from '../blocks/header/search';
import slider from '../blocks/slider/slider';
import service from '../blocks/service/service';
import 'owl.carousel';
import quotesSlider from '../blocks/quotes-slider/quotes-slider.js';

$(() => {
	svg4everybody();
	scroll($);
	search();
	slider();
	service($);
	quotesSlider($, 'widthImage');
});
