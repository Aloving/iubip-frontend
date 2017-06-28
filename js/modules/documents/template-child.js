var templateParent = require('./template-parent.js');

function templateChild(thisItem) {
  var item = templateParent(thisItem);

  item.removeClass('document-search-item_parent').addClass('document-search-item_child')

  return item;
}

module.exports = templateChild;