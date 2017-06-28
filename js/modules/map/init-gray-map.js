function initGrayMap(latCoords) {

  var map = new google.maps.Map(document.getElementById('map'), {
    center: latCoords,
    scrollwheel: false,
    zoom: 17,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP
    },
    styles: [{
      stylers: [{
        saturation: -100
      }]
    }]
  });

  var marker = new google.maps.Marker({
    map: map,
    position: latCoords,
    title: 'ИУбиП'
  });

}

module.exports = initGrayMap;