var tooltipster = require('../tooltips.js');
var templateHbs = require('../../templates/catalog-item.hbs');

function templateBlock(array) {
  var container = [];

  array.forEach(function(item, i) {

    var image = (item.image) ? item.catalog_image : '/static/img/image-program-placeholder.jpg';
    var desc = item.short_description.replace(/<\/?[^>]+>/g, '').slice(0, 99);
    var title = item.name;
    var trancTitle = (item.name.length > 35) ? item.name.slice(0, 34) + '...' : undefined;
    var url = item.url;

    var templateItem = $( templateHbs({
      url: url,
      image: image,
      trancTitle: trancTitle,
      title: title,
      desc: desc
    }) );

    if (trancTitle) {
      tooltipster( templateItem.find('.js-title-link') );
    }

    container.push(templateItem);

  });

  return container;
}

module.exports = templateBlock;
