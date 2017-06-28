$(document).ready(function() {
  
  if ($('.teacher').length > 3) {
    $('.teacher-gallery').owlCarousel({
      items: 3,
      loop: true,
      nav: true,
      smartSpeed: 600,
      margin: 15,
      dots: true,
      navText: ['<i class="owl-nav-prev"> <svg><use xlink:href="#left-arrow" > </svg> </i>', '<i class="owl-nav-next"> <svg><use xlink:href="#right-arrow" > </svg></i>']
    });

    $('.teacher-gallery .owl-nav').wrap('<div class="owl-nav-wrap">');

    setTimeout(function() {
      $('.teacher-gallery .owl-dots').wrap('<div class="owl-carousel-navigation">')
      var nav = $('.teacher-gallery .owl-nav').clone(true);
      $('.teacher-gallery .owl-nav').remove();
      $('.teacher-gallery .owl-carousel-navigation').append(nav);
      $('.teacher-gallery .owl-carousel-navigation').wrap('<div class="owl-nav-wrap">')
    }, 0);

  }

  $('.owl-loaded').addClass('owl-carousel');

});
