function sortArray(json) {
  var legalDocumentsFor;
  var informationDocumentsFor;
  var documentsForListenerFor;
  var legalDocuments = [];
  var informationDocuments = [];
  var documentsForListener = [];

  var testIterate = [];

  var json = json.sort(function(a, b) {
    return a.sort - b.sort;
  });

  legalDocumentsFor = json.filter(function(item, i) {
    return item.kind == 1;
  });

  informationDocumentsFor = json.filter(function(item, i) {
    return item.kind == 2;
  });

  documentsForListenerFor = json.filter(function(item, i) {
    return item.kind == 3;
  });



  //iterate legal
  legalDocumentsFor.forEach(function(item, i) {

    if (!item.parent) {
      legalDocuments.push([item]);
    }

  });

  legalDocumentsFor.forEach(function(item, i) {

    if (item.parent) {

      for (var i = 0; i < legalDocuments.length; i++) {

        if (legalDocuments[i][0].id == item.parent) {
          legalDocuments[i].push(item);
        }

      }

    }

  });



  //iterate information
  informationDocumentsFor.forEach(function(item, i) {

    if (!item.parent) {
      informationDocuments.push([item]);
    }

  });

  informationDocumentsFor.forEach(function(item, i) {

    if (item.parent) {

      for (var i = 0; i < informationDocuments.length; i++) {

        if (informationDocuments[i][0].id == item.parent) {
          informationDocuments[i].push(item);
        }

      }

    }

  });



  //iterate for listener
  documentsForListenerFor.forEach(function(item, i) {

    if (!item.parent) {
      documentsForListener.push([item]);
    }

  });

  documentsForListenerFor.forEach(function(item, i) {

    if (item.parent) {

      for (var i = 0; i < documentsForListener.length; i++) {

        if (documentsForListener[i][0].id == item.parent) {
          documentsForListener[i].push(item);
        }

      }

    }

  });

  return {
    legalDocuments: legalDocuments,
    informationDocuments: informationDocuments,
    documentsForListener: documentsForListener
  };

}

module.exports = sortArray;
