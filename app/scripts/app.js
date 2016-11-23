import svg4everybody from 'svg4everybody';
import $ from 'jquery';
const slider = require('../blocks/slider/slider');
const service = require('../blocks/service/service');

$(() => {
	svg4everybody();
	slider();
	service();
});
