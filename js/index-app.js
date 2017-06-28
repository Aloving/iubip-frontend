//require modules
var feedbackSlider = require('./modules/feedback-slider.js');
var recSlider = require('./modules/index/rec-slider.js');
var toolTipes = require('./modules/tooltips.js');
var textSlider = require('./modules/index/text-slider.js');

$(document).ready(function() {

  //index variables
  var jsWays = $('.js-ways');

  //init modules
  recSlider();  //recomindation programms (slider)

  textSlider(); //text slider (after recomendation)

  feedbackSlider(); //init feedback slider at index page

  (function() { //event for banner button at index page
    $('.js-scroll-btn').click(function() {

      $('html, body')
        .animate({
          scrollTop: $('#footer-application')
            .offset().top
        }, 500);

    });
  })();

  jsWays.on('click', function(evt) {  //toggle second list of directions

    evt.preventDefault();
    $('.our-ways__second-list').slideToggle(0);

  });

  $('.js-title-link').each(function() {
    toolTipes($(this));
  });

  if ($('.light-slide').length > 4) {

    $('.light-carousel').owlCarousel({
      items: 4,
      loop: true,
      nav: true,
      smartSpeed: 600,
      margin: 15,
      dots: true,
      dotsEach: true,
      navText: ['<i class="owl-nav-prev owl-arrow"> <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#light-arrow"></use></svg> </i>', '<i class="owl-nav-next owl-arrow"> <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#light-arrow"> </use></svg> </i>']
    });

    $('.light-carousel .owl-nav').wrap('<div class="owl-nav-wrap">');

    setTimeout(function() {
      $('.light-carousel .owl-dots').wrap('<div class="owl-carousel-navigation">')
      var nav = $('.light-carousel .owl-nav').clone(true);
      $('.light-carousel .owl-nav').remove();
      $('.light-carousel .owl-carousel-navigation').append(nav);
      $('.light-carousel .owl-carousel-navigation').wrap('<div class="owl-nav-wrap">')
    }, 0);

  } else {

    $('.light-carousel').owlCarousel({
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      freeDrag: false,
      items: 4,
      loop: false,
      dots: false,
      nav: false,
    });

  }

  $('.owl-loaded').addClass('owl-carousel'); //fix owl-carousel bug


});
