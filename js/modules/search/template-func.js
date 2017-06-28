var formatText = require('./format-text.js');
var formatName = require('./format-name.js');
var hbsTemplate = require('../../templates/search-item.hbs');

var itemCounter = 1;
var elementsArray = [];

function templateFunc(array, clear) {
  var container = $('.search-pagesearch-container');
  var dfd = new $.Deferred;


  if (clear) {
    elementsArray = [];
    itemCounter = 1;
  }

  $.fn.searchTemplate = function(haveDesc) {

      var element;
      var tag = (this)[0].tag;
      var name = formatName( $(this)[0].name || $(this)[0].title, tag);
      var type = $(this)[0].type;
      var url = $(this)[0].url;
      var description = $(this)[0].short_description || $(this)[0].description || $(this)[0].full_description;

      if( description ){
        description = formatText( description, tag );
      }

      element = hbsTemplate({
          tag: tag,
          name: name,
          type: type,
          url: url,
          itemCounter: itemCounter++,
          desc: description
        })

     elementsArray.push(element);
  }

  $(array).each(function() {
    var that = $(this);

    for (var i = 0; i < that.length; i++) {
      if (that[i].short_description || that[i].description) {
        $(that[i]).searchTemplate(true);
      } else {
        $(that[i]).searchTemplate(false);
      }

    }

  });

  container.append(elementsArray);
  return dfd.promise();
}

module.exports = templateFunc;
