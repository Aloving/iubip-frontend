var documentsRender = require('./modules/documents/documents-render.js');
var formatName = require('./modules/search/format-name.js');
var sortArray = require('./modules/documents/documents-sort.js');

$(document).ready(function() {

  var container = $('.js-document-container');
  var filterElements;
  var documentContainer;
  var searchInput = $('.js-document-search');

  $.ajax({
    url: '/api/v1/document/',
    method: 'GET',

    success: function(json) {
      documentsRender( sortArray(json) );
    },

    error: function() {
      container.append('<div class="page-block-header page-block-header_error"><p>Ошибка</p></div>');
    }

  });

  $('.js-document-search').one('focus', function() {
    filterElements = $('.js-document-item');
    documentContainer = container.clone();
  })

  $('.documents-search-form').on('submit', function(evt) {

    evt.preventDefault();

    var filteredArray;
    var containerList = $('<div class="documents-content-box__list">');
    var tag = $('.js-document-search').val().toLowerCase();
    var tagString = tag.replace(/[^\wА-я]/g, '');

    if (!tagString.length) {
      container.html('');
      container.append(documentContainer);
      return true;
    }

    filteredArray = filterElements.filter(function() {
      if ($(this).find('.js-document-title').text().toLowerCase().indexOf(tag) !== -1) {
        var that = $(this);
        var thatText = that.find('.js-document-title').text(),
          formatText = formatName(thatText, tag);

        that.find('.js-document-title').html(formatText);
        that.removeClass('document-search-item_child');

        return that;
      }
    });

    container.html('');
    containerList.append(filteredArray);

    if (filteredArray.length < 1) {
      container.append($('<div class="page-block-header page-block-header_error"><p>Ничего не найдено</p></div>'))
    } else {
      container.append(containerList);
    }

  });

});
