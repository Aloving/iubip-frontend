$(document).ready(function() {

  if ($('.short-new').length > 4) {

    $('.new-detail-carousel').owlCarousel({
      items: 4,
      loop: true,
      nav: true,
      smartSpeed: 600,
      margin: 15,
      dots: true,
      navText: ['<i class="owl-nav-prev"> <svg><use xlink:href="#left-arrow" > </svg> </i>', '<i class="owl-nav-next"> <svg><use xlink:href="#right-arrow" > </svg></i>']
    });

    $('.new-detail-carousel .owl-nav').wrap('<div class="owl-nav-wrap">');

    setTimeout(function() {
      $('.new-detail-carousel .owl-dots').wrap('<div class="owl-carousel-navigation">')
      var nav = $('.new-detail-carousel .owl-nav').clone(true);
      $('.new-detail-carousel .owl-nav').remove();
      $('.new-detail-carousel .owl-carousel-navigation').append(nav);
      $('.new-detail-carousel .owl-carousel-navigation').wrap('<div class="owl-nav-wrap">')
    }, 0);

  }

  if ($('.information-carousel__preview-block').length > 4) {

    $('.information-previews-carousel').owlCarousel({
      items: 4,
      loop: true,
      nav: true,
      margin: 15,
      navText: ['<i class="owl-nav-prev"> <svg><use xlink:href="#left-arrow" > </svg> </i>', '<i class="owl-nav-next"> <svg><use xlink:href="#right-arrow" > </svg></i>'],
      onInitialize: function() {
        $('.information-previews-carousel').hide();
      },
      onInitialized: function() {
        $('.information-previews-carousel').fadeIn(500);
      }
    });

    $('.owl-loaded').addClass('owl-carousel'); //fix owl-carousel bug

  } else {
    $('.information-previews-carousel').fadeIn(500);
  }


  $('.information-previews-carousel').on('click', '.js-preview-link', function(evt) {
    evt.preventDefault();

    var that = $(this),
      thatLink = that.attr('href');

    $('.js-main-carousel-image').attr('src', thatLink);

  });

  (function(w, doc) {
    if (!w.__utlWdgt) {
      w.__utlWdgt = true;
      var d = doc,
        s = d.createElement('script'),
        g = 'getElementsByTagName';
      s.type = 'text/javascript';
      s.charset = 'UTF-8';
      s.async = true;
      s.src = ('https:' == w.location.protocol ? 'https' : 'http') + '://w.uptolike.com/widgets/v1/uptolike.js';
      var h = d[g]('body')[0];
      h.appendChild(s);
    }
  })(window, document);

});