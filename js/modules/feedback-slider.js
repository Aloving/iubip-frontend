function feedbackSlider() {

  if ($('.feedback-slider__slide').length > 3) {
    $('.feedback-slider').owlCarousel({
      items: 3,
      center: true,
      loop: true,
      nav: true,
      smartSpeed: 600,
      margin: 44,
      dots: true,
      dotsEach: true,
      navText: ['<i class="owl-nav-prev"> <svg><use xlink:href="#left-arrow" > </svg> </i>', '<i class="owl-nav-next"> <svg><use xlink:href="#right-arrow" > </svg></i>']
    });

    $('.feedback-slider .owl-nav').wrap('<div class="owl-nav-wrap">');

    setTimeout(function() {
      $('.feedback-slider .owl-dots').wrap('<div class="owl-carousel-navigation">')
      var nav = $('.feedback-slider .owl-nav').clone(true);
      $('.feedback-slider .owl-nav').remove();
      $('.feedback-slider .owl-carousel-navigation').append(nav);
      $('.feedback-slider .owl-carousel-navigation').wrap('<div class="owl-nav-wrap">')
    }, 0);

  } else {
    $('.feedback-slider').owlCarousel({
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      freeDrag: false,
      items: 3,
      loadedClass: 'not-carousel',
      loop: false,
      dots: false,
      nav: false,
      margin: 44,
    });
  }

}

module.exports = feedbackSlider;