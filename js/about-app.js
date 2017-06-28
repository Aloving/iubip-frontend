$(document).ready(function() {
  
  //init fancy
  $('[rel="about-gallery"]').fancybox({
    padding: [0, 0, 0, 0],
    wrapCSS: 'fancy-custom fancy-gallery'
  });

  //init owl-carousel
  if ($('.about-gallery__slide').length > 4) {

    $('.about-gallery').owlCarousel({
      items: 4,
      loop: true,
      nav: true,
      smartSpeed: 600,
      margin: 15,
      dots: true,
      dotsEach: true,
      navText: ['<i class="owl-nav-prev owl-arrow"> <svg><use xlink:href="#left-arrow" > </svg> </i>', '<i class="owl-nav-next owl-arrow"> <svg><use xlink:href="#right-arrow" > </svg></i>']
    });

    $('.about-gallery .owl-nav').wrap('<div class="owl-nav-wrap">');

    setTimeout(function() {
      $('.about-gallery .owl-dots').wrap('<div class="owl-carousel-navigation">')
      var nav = $('.about-gallery .owl-nav').clone(true);
      $('.about-gallery .owl-nav').remove();
      $('.about-gallery .owl-carousel-navigation').append(nav);
      $('.about-gallery .owl-carousel-navigation').wrap('<div class="owl-nav-wrap">')
    }, 0);

  }

  //reinit fancybox with owl-carousel
  $('.about-gallery').on('click', '.owl-arrow', function(evt) {
    evt.preventDefault();

    $('[rel="about-gallery"]').fancybox({
      padding: [0, 0, 0, 0],
      wrapCSS: 'fancy-custom fancy-gallery'
    });

  });

  $('.owl-loaded').addClass('owl-carousel'); //fix owl-carousel bug

});
