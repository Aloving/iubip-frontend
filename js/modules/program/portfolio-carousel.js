function portfolioCarousel() {
  var portfolioCarousel = $('.portfolio-carousel'),
    portfolioItems = $('.portfolio-carousel__slide');

  if (portfolioItems.length > 4) {
    portfolioCarousel.owlCarousel({
      items: 4,
      loop: true,
      nav: true,
      smartSpeed: 600,
      margin: 85,
      navText: ['<i class="owl-nav-prev"> <svg><use xlink:href="#left-arrow" > </svg> </i>', '<i class="owl-nav-next"> <svg><use xlink:href="#right-arrow" > </svg></i>']
    });
  } else {
    portfolioCarousel.owlCarousel({
      items: 4,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      freeDrag: false,
      loop: false,
      dots: false,
      nav: false,
      margin: 85,
      navText: ['', '']
    });
  }
}

module.exports = portfolioCarousel;