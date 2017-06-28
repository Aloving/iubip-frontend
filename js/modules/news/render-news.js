var templateShort = require('./short-template.js');
var templateHot = require('./hot-template.js');

function renderNews(array) {

var dfd = new $.Deferred;
var container = [];

  for (var i = 0; i < array.length; i++) {

    if ( array[i].some(function(item, index) {return item.is_important}) ){
      container.push(templateHot(array[i]));
    } else {
      container.push(templateShort(array[i]));
    }

  }

  dfd.resolve(container);
  return dfd.promise();

}

module.exports = renderNews;
