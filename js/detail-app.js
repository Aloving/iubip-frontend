//require modules
var feedbackSlider = require('./modules/feedback-slider.js');
var detailVideo = require('./modules/program/detail-video.js');
var portfolioCarousel = require('./modules/program/portfolio-carousel.js');
var curriculumTable = require('./modules/program/curriculum-table.js');
var faqModule = require('./modules/program/faq-module.js');

$(document).ready(function() {
  //init modules
  detailVideo();  //TODO detail video from backend

  portfolioCarousel();  //init portfolio carousel

  curriculumTable();  //actions of curriculum table

  faqModule.faqSort();  //faq sort

  faqModule.faqEvent();

  feedbackSlider(); //program detail feedback slider

  $('.portfolio-gallery').fancybox({
    padding: [0, 0, 0, 0],
    wrapCSS: 'fancy-custom fancy-gallery'
  });

  $('.owl-loaded').addClass('owl-carousel'); //fix owl-carousel bug

  function declOfNum(number, titles) { //Склонения с числительными
    cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }

  $('.js-totat-hours-label').text(' ' + declOfNum($('.js-totat-hours').text(), ['час', 'часа', 'часов']));
  $('.js-curriculum-hours-label').text(' ' + declOfNum($('.js-curriculum-duration').text(), ['час', 'часа', 'часов']));

  $('.js-curriculum-item-hours').each(function() {
    that = $(this);
    that.next().text(' ' + declOfNum(that.text(), ['час', 'часа', 'часов']));
  });

  //FIXME
  if( $('.js-radio-teacher').length == $('.js-curriculum-item').length ){
   $('.js-curi-wrapper').css('width','1010px');
   $('.curriculum-table-item__teachers-block').css('width', 'auto');
 }

});
