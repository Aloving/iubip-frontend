var moment = require('moment');
moment.locale('ru');

var hbsTemplate = require('../../templates/hot_new.hbs')

function templateHot(thisItem) {
  
  var date = moment(thisItem[0].date_published).format('LL');
  var image = (thisItem[0].images) ? thisItem[0].images.image557 : '/static/img/hot-new-placeholder.jpeg';
  var desc = thisItem[0].short_description;
  var title = thisItem[0].title;
  var url = thisItem[0].url;

  var hotNew = hbsTemplate({
    date: date,
    image: image,
    desc: desc,
    title: title,
    url: url
  });

  return hotNew;

}


module.exports = templateHot;
