var templateChild = require('./template-child.js');
var templateParent = require('./template-parent.js');

function documentsRender(array) {

  var legalContainer = $('.js-legalDocuments');
  var informationsContainer = $('.js-informationDocuments');
  var listenerDocumentContainer = $('.js-documentsForListener');

  array.legalDocuments.forEach(function(item) {
    renderBlock( legalContainer, item );
  });

  array.informationDocuments.forEach(function(item) {
    renderBlock( informationsContainer, item );
  });

  array.documentsForListener.forEach(function(item) {
    renderBlock( listenerDocumentContainer, item );
  });



  function renderBlock( containerToAppend, iterateItem ){

    var container = $('<div class="documents-content-box__list">');
    var childList;

    if (iterateItem.length == 1) {

      container.append(templateParent(iterateItem[0]));
      containerToAppend.append(container);

    } else {

      childList = $('<div class="documents-content-box__child-list">');
      container.append(templateParent(iterateItem[0]));

      for (var i = 1; i < iterateItem.length; i++) {
        childList.append(templateChild(iterateItem[i]));
      }

      container.append(childList);
      containerToAppend.append(container);

    }

  }


  return true;

}


module.exports = documentsRender;
