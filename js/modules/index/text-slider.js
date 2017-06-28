function textSlider() {

  $('.text-slider').owlCarousel({
    items: 1,
    center: true,
    mouseDrag: false,
    autoplay: false,
    nav: true,
    loop: true,
    smartSpeed: 700,
    navText: ['<i class="owl-nav-prev"> <svg><use xlink:href="#left-arrow" > </svg> </i>', '<i class="owl-nav-next"> <svg><use xlink:href="#right-arrow" > </svg> </i>']
  });

}

module.exports = textSlider;