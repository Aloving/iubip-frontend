var templateHbs = require('../../templates/documents-item.hbs');

function templateParent(thisItem, child) {
  var description = thisItem.description;
  var fileUrl = thisItem.file;
  var title = thisItem.title;
  var format = thisItem.file.split('.').pop();
  var url = thisItem.url;

    var templateItem = $(
      templateHbs({
        description: description,
        fileUrl: fileUrl,
        title: title,
        format: format,
        url: url
      })
    )

    return templateItem;

}

module.exports = templateParent;
