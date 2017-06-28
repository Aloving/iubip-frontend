//require modules
var toolTipes = require('./modules/tooltips.js');
var templateBlock = require('./modules/catalog/template-block.js');
var API = require('./modules/api.js');
var checkFooterIsVisible = require('./modules/ajax/checkfooter-is-visible.js');

$(document).ready(function() {

  var counter = $('.js-common-counter'); // 'common counter'
  var directionItem = $('.js-direction-item');
  var urlForLazy = '/api/v1/education/course/'; //url for lazy
  var itemsPerPage = 8; //items per page (lazy)
  var activeId = ($('.js-active-direction').data('id') !== -1) ? $('.js-active-direction').data('id') : null;
  var ajaxContainer = $('.js-education-list');
  var directionBlock = $('.js-direction-block');
  var filterItem = $('.js-education-filter');
  var hiddenList = $('.js-education-hidden-list');
  var directionAll = $('.js-direction-all');

  hiddenList.html('');

  //directions counter
  $.ajax({
    url: '/api/v1/education/course/',
    data: {
      only: 'name'
    },
    method: 'GET',
    success: function(json) {
      counter.text(json.length);
    }
  });

  function toggleSpin() {
    $('.js-spiner').fadeToggle(200);
  }

  //started items

  var qAvailable = true;
  var page = 1;

  function getCourseList() {
    if (qAvailable && page != 'done' && checkFooterIsVisible()) {
      qAvailable = false;
      toggleSpin();

      API.education.course.getList({
        page: page,
        page_size: itemsPerPage,
        kind: null,
        specialization__direction: activeId
      }).then(function(response) {
        var items = templateBlock(response.results);
        if (response.next) {
          page = response.next.match(/page=(\d+)/)[1];
        } else {
          page = 'done';
        }

        $.when(ajaxContainer.append(items)).then(function() {
          toggleSpin();
        });
        qAvailable = true;
      })
    }
  }

  getCourseList();

  $(window).on('scroll', getCourseList);

  filterItem.on('click', function(evt) {
    evt.preventDefault();

    var that = $(this);
    var directionId;
    var activeDirection = $('.js-active-direction');
    var page = 1;
    var kind = (that.data('filter') == -1) ? null : that.data('filter');

    if (!that.hasClass('js-active-filter')) {

      $(window).off('scroll');

      directionId = (activeDirection.data('id') == -1) ? null : activeDirection.data('id');

      // getJson({
      //     url: urlForLazy,
      //     tempateFunc: templateBlock,
      //     perPage: itemsPerPage,
      //     container: ajaxContainer,
      //     data: {
      //       page: 1,
      //       page_size: itemsPerPage,
      //       kind: kind,
      //       specialization__direction: directionId
      //     }
      //   })

      filterItem.removeClass('js-active-filter educations-filters__filter_active');

      that.addClass('js-active-filter educations-filters__filter_active');

    }

  });

});
