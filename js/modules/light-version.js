var carouselTransform = require('./light-version/carousel-transform.js');
var initGrayMap = require('./map/init-gray-map.js');
var initMap = require('./map/init-map.js');
var addToMap = require('./map/add-to-map.js');

function lightVersion(size, color, returnBack, item) {

  var body = $('body');
  var header = ($('.header').length == 0) ? $('.common-header') : $('.header');
  var light15 = $('.js-light-15');
  var light25 = $('.js-light-25');
  var light35 = $('.js-light-35');
  var lightWhite = $('.js-light-white');
  var lightBlack = $('.js-light-black');
  var footerLogo = $('.js-footer-logo');
  var snIcons = $('.sn-icon');
  var portfolioCarousel = $('.portfolio-carousel');
  var teacherCarousel = $('.teacher-gallery');
  var contactMap = $('#map');
  var newCarousel = $('.new-detail-carousel');
  var aboutGallery = $('.about-gallery');
  var coordsArray = $('.js-contact-coord:first').text().split(', ');
  var contactsBlock = $('.js-contcts-block').clone();
  var lightLabel = $('.js-light-label');

  lightLabel.text('Обычная версия');

  if (contactMap.length && !returnBack) {

    setTimeout(function() {
      contactMap.html('');
      initGrayMap({
        lat: Number(coordsArray[0]),
        lng: Number(coordsArray[1])
      });
      addToMap(contactsBlock, 'gray');
    }, 100);

  }

  if (item == 'logo') {
    header
      .find('.js-logo-link')
      .find('svg')
      .remove();
    $('.js-logo-link')
      .append('<svg> <use xlink:href="#dark-logo"></svg>');

    footerLogo
      .find('svg')
      .remove()
    footerLogo
      .append('<svg class="footer__logo"> <use xlink:href="#dark-logo"></svg>');
  }

  if (returnBack) {

    $('body').removeClass('lightVersion light-white light-15 light-25 light-35');
    header
      .find('.js-logo-link')
      .find('svg')
      .remove();
    $('.js-logo-link')
      .append('<svg> <use xlink:href="#logo"></svg>');
    lightLabel.text('Версия для слабовидящих');
    localStorage.removeItem('lightVersion');

    footerLogo
      .find('svg')
      .remove();
    footerLogo
      .append('<svg class="footer__logo"> <use xlink:href="#logo"></svg>');

    carouselTransform(aboutGallery, true);
    carouselTransform(teacherCarousel, true);
    carouselTransform(newCarousel, true);
    carouselTransform(portfolioCarousel, true);

    if (contactMap.length) {
      contactMap.html('');
      initMap({
        lat: Number(coordsArray[0]),
        lng: Number(coordsArray[1])
      });
      addToMap(contactsBlock, 'color');
    }

  }

  if (color === 'white') {

    lightWhite.addClass('light-controls__font-link_active');

    setTimeout(function() {
      carouselTransform(portfolioCarousel);
    }, 0);

    setTimeout(function() {
      carouselTransform(aboutGallery);
    }, 0);

    setTimeout(function() {
      carouselTransform(teacherCarousel);
    }, 0);

    setTimeout(function() {
      carouselTransform(newCarousel);
    }, 0);


  } else if (color === 'black') {

  }

  switch (size) {
    case '1.5':
      body.addClass('light-15');
      light15.addClass('light-controls__font-link_active');
      break;

    case '2.5':
      body.addClass('light-25');
      light25.addClass('light-controls__font-link_active');
      break;

    case '3.5':
      body.addClass('light-35');
      light35.addClass('light-controls__font-link_active');
      break;
  }

}

module.exports = lightVersion;
