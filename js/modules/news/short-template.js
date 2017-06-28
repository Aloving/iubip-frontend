var moment = require('moment');
moment.locale('ru');

var hbsTemplate = require('../../templates/short_new.hbs')

function templateShort(array) {
  var array = array;
  var shortBlock = $('<div class="news-block new-short-block"> </div>');

  for (var i = 0; i < array.length; i++) {
    shortBlock.append(templateIt(array[i]));
  }

  function templateIt(item) {
    var date = moment(item.date_published).format('LL');
    var image = (item.images) ? item.images.image265 : '/static/img/short-new-placeholder.jpg';
    var title = item.title;
    var url = item.url;

    var shortNew = hbsTemplate({
      date: date,
      image: image,
      title: title,
      url: url
    });

    return shortNew;

  }

  return shortBlock;

}


module.exports = templateShort;
