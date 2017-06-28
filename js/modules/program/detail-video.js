function videoDetail() {

  if ($('.js-detail-video').length) {

    $('.js-image-detail').remove();

    setVideo();

  }

  function setVideo() {

    var video = $('.js-detail-video');
    var src = video.find('iframe').attr('src').split('/watch?v=');
    var youLink = src[0] + '/embed/' + src[1];
    var youIframe = $('<iframe width="536" height="399" src="' + youLink + '" frameborder="0" allowfullscreen></iframe>');

    $('.js-detail-video iframe').remove();

    video.append(youIframe);

  }

}

module.exports = videoDetail;
