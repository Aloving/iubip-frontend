var initGrayMap = require('./modules/map/init-gray-map.js');
var initMap = require('./modules/map/init-map.js');
var addToMap = require('./modules/map/add-to-map.js');

$(document).ready(function() {
  function mapIniter() {

    var coordsArray = document.getElementsByClassName('js-contact-coord')[0].innerText.split(', ');
    var contactsBlock = $('.js-contcts-block').clone();
    $('.js-contcts-block').remove();
    var latCoords = {
      lat: Number(coordsArray[0]),
      lng: Number(coordsArray[1])
    }

    if ($.cookie('lightVersion')) {
      
      initGrayMap(latCoords);
      addToMap(contactsBlock);

    } else {

      initMap(latCoords);
      addToMap(contactsBlock);

    }

  }

  mapIniter();
});
