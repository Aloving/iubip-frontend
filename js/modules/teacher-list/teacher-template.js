var templateHbs = require('../../templates/teacher.hbs');

function templateBlock(array) {

  var dfd = new $.Deferred;
  var container = [];

  array.forEach(function(item, i) {

    var image = (item.images.image365) ? item.images.image160 : '/static/img/teacher-160.png';
    var FIO = item.user.last_name + ' ' + item.user.first_name + ' ' + item.user.father_name;
    var degrees = item.degrees;
    var positions = item.positions;
    var url = item.url;

    var templateItem = $(
      templateHbs({
        image: image,
        FIO: FIO,
        degrees: degrees,
        positions: positions,
        url: url
      }));

    container.push(templateItem);

  });

  dfd.resolve(container);

  return dfd.promise();

}

module.exports = templateBlock;
