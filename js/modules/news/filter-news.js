function filterNews(array) {

  var array = array;
  var rightArray = array.sort(function(a, b) {
      return Date.parse(b.date_published) - Date.parse(a.date_published);
    });
  var filteredArray = [];
  var arrayForShortIte = null;

  for (var i = 0; i < rightArray.length; i++) {

    if (rightArray[i].is_important) {
      filteredArray.push([rightArray[i]]);
    } else {

      if (arrayForShortIte == null || arrayForShortIte.length == 4) {
        filteredArray.push(arrayForShortIte = [rightArray[i]]);
      } else {
        arrayForShortIte.push(rightArray[i]);
      }

    }

  }

  return filteredArray;

}

module.exports = filterNews;
