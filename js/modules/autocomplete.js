function autocomplete() {

  var progAutocomplite = $('.js-autocomplite');
  var completeArray = [];

  progAutocomplite.on('blur', function() {
    $obj = $(this);

    if (!$obj.val().replace(/\s+/g, '')) {
      $obj.removeAttr('data-id');
      $obj.removeAttr('data-value');
    }

  });

  // set data from server
  // ajax-course
  $.ajax({
    url: '/api/v1/education/course/',
    type: 'GET',
    data: {
      only: 'name'
    },

    success: function(json) {
      var myData = json,
        responseArray = $.map(myData, function(item) {
          return {
            value: item.name,
            data: item.id
          }
        });

      progAutocomplite.autocomplete({
        lookup: responseArray,
        triggerSelectOnValidInput: 'truetruetrue',
        onSearchStart: function() {
          $obj = $(this);
          $obj.addClass('autocomplete-start');
          $obj.css({
            'border-radius': '24px 24px 0px 0px' //ускорение отрисовки
          });
          setTimeout(function() {

            if (!$('.autocmplete-wrapper').length) {
              $('.autocomplete-suggestion').wrapAll('<div class="autocmplete-wrapper">');
            }

          }, 100);
        },
        onSearchComplete: function() {
          $obj = $(this);
          if (!$('.autocomplete-suggestions').is(':visible')) {
            $obj.css({
              'border-radius': '24px' //ускорение отрисовки
            });
          }
        },
        onSelect: function(suggestion) {
          $obj = $(this);
          $obj.css({
            'border-radius': '24px' //ускорение отрисовки
          });
          $obj.attr('data-value', suggestion.value);
          $obj.attr('data-id', suggestion.data);
        }
      });

    }
  });

}

module.exports = autocomplete;
