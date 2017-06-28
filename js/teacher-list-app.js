var ajaxLazy = require('./modules/ajax-lazy.js');
var templateBlock = require('./modules/teacher-list/teacher-template.js');

$(document).ready(function() {

  //TODO teacher-list api
  var filterURL = '/api/v1/education/worker/';
  var teachersPerPage = 12;
  var container = $('.js-teachers-list');

  ajaxLazy({
      url: filterURL,
      tempateFunc: templateBlock,
      perPage: teachersPerPage,
      container: container,
      data: {
        page: 1,
        list_as_string: true,
        page_size: teachersPerPage,
        direction: null
      }
    },
    null,
    1);

  $('.js-teacher-filter').click(function(e) {
    e.preventDefault();

    var that = $(this);
    var thatId = (that.data('id') < 0) ? null : that.data('id');

    $('.teacher-filter').removeClass('teacher-filter__item_active');
    that.addClass('teacher-filter__item_active');

    ajaxLazy({
        url: filterURL,
        tempateFunc: templateBlock,
        perPage: teachersPerPage,
        container: container,
        data: {
          page: 1,
          list_as_string: true,
          page_size: teachersPerPage,
          direction: thatId
        }
      });

  });



});
