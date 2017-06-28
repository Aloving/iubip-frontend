function searchSort(array) {

  var thatArray =
              $.merge(array[0], array[1]);
  thatArray = $.merge(thatArray, array[2]);
  thatArray = $.merge(thatArray, array[3]);

  thatArray.sort(function(a, b) {

    if (a.name === b.name) {
      return true;
    } else {
      return false;
    }

  });

  return thatArray;


}

module.exports = searchSort;
