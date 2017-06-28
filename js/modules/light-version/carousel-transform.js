function carouselTransform(carousel, returnBack) {

  if (returnBack) {

    carousel
      .find('.owl-nav-prev')
      .find('svg')
      .remove()
    carousel
      .find('.owl-nav-prev')
      .append('<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#left-arrow"> </use></svg>');

    carousel
      .find('.owl-nav-next')
      .find('svg')
      .remove()
    carousel
      .find('.owl-nav-next')
      .append('<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#right-arrow"> </use></svg>');

  } else {

    carousel
      .find('.owl-nav-prev')
      .find('svg')
      .remove()
    carousel
      .find('.owl-nav-prev')
      .append('<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#light-arrow"> </use></svg>');

    carousel
      .find('.owl-nav-next')
      .find('svg')
      .remove()
    carousel
      .find('.owl-nav-next')
      .append('<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#light-arrow"> </use></svg>');

  }

}

module.exports = carouselTransform;