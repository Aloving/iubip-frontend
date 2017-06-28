function recSlider() {

  var slide = $('.rec-slide');

  if (slide.length > 4) {
    $('.recommendations-slider').owlCarousel({
      loop: true,
      items: 4,
      dots: true,
      nav: true,
      mouseDrag: false,
      navText: ['<i class="carousel-prev-btn"> <svg><use xlink:href="#left-arrow" > </svg> </i>', '<i class="carousel-next-btn"> <svg><use xlink:href="#right-arrow"> </svg> </i>'],

    });

    setTimeout(function() {

      $('.recommendations-slider .owl-dots').wrap('<div class="owl-carousel-navigation">')
      var nav = $('.recommendations-slider .owl-nav').clone(true);
      $('.recommendations-slider .owl-nav').remove();
      $('.recommendations-slider .owl-carousel-navigation').append(nav);
      $('.recommendations-slider .owl-carousel-navigation').wrap('<div class="owl-nav-wrap">')

    }, 0);

  } else {
    $('.recommendations-slider').owlCarousel({
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

}

module.exports = recSlider;
