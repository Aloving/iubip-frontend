//require modules
var templateFunc = require('./modules/search/template-func.js');
var searchRequest = require('./modules/search/search-request.js');

$(document).ready(function() {

  var searchTagGl = [];
  var searchArray;

  var searchInput = $('.search-form'); //search input in search page
  var searcLabel = $('.js-search-label');

  if (searcLabel.val().length > 1) {
    ajaxSearch();
  }

  $(window).bind('popstate', function() {
    var splitUrl = location.search.split('search=');
    var url = '?search=' + $('.js-search-label').val();

    if (splitUrl[0].length) {
      var backUrl;

      searcLabel.val(decodeURIComponent(splitUrl.slice(1)));
      $('.search-tag').text(decodeURIComponent(splitUrl.slice(1)));

      backUrl = '?search=' + searcLabel.val();

      document.title = searcLabel.val();

      $('.search-pagesearch-container').html('');
      searchTagGl = [];

      ajaxSearch(true);

    } else {

      document.title = 'Поиск';
      searcLabel.val('');
      $('.search-pagesearch-container').html('');
      $('.search-tag').text('...');
      $('.search-pagesearch-container').prepend('<p class="search-pagesearch-container__not-found search-request-error">Введите поисковый запрос</p>');
      searcLabel.attr('placeholder', 'Введите поисковый запрос');

    }

  });


  searchInput.on('submit', function(evt) {
    evt.preventDefault();
    var splitUrl = location.search.split('search='),
      requestString = searcLabel.val().replace(/[^\wА-я]/g, '');

    if (requestString.length <= 0) {
      searcLabel.attr('placeholder', 'Введите корректный поисковый запрос');
      if (!$('.search-request-error').length) {

        $('.search-pagesearch-container').html('');
        $('.search-tag').text('...');
        window.history.pushState(null, null, '/poisk/');
        $('.search-pagesearch-container').prepend('<p class="search-pagesearch-container__not-found search-request-error">Введите корректный поисковый запрос</p>')

      }
    } else {
      if (!splitUrl[0].length) {

        var url = '?search=' + $('.js-search-label').val();

        if (url !== decodeURIComponent(window.location.search)) {

          window.history.pushState(null, null, encodeURI(url));
          document.title = searcLabel.val();
          $('.search-tag').text(searcLabel.val());
          ajaxSearch(true);

        }

      } else {
        var url = '?search=' + $('.js-search-label').val();
        if (url !== decodeURIComponent(window.location.search)) {

          window.history.pushState(null, null, encodeURI(url));
          document.title = searcLabel.val();
          $('.search-tag').text(searcLabel.val());
          $('.search-pagesearch-container').html('');
          searchTagGl = [];
          ajaxSearch(true);

        }
      }

    }

  });



  function ajaxSearch( clear ) {

    $.when(searchChainStart())
      .then(function(result) {
        return searchRequest(result)
      })
      .then(function(result) {

        if (!clear) {
          return templateFunc(result);
        } else {
          return templateFunc(result, true);
        }

      })
      .catch(function(err, withH) {

        var searchContainer = $('.search-pagesearch-container');
        if (err === 'not-found' || err === 'error') {
          searchContainer.append(withH);
        }

      });

  }

  function searchChainStart() {

    var dfd = new $.Deferred,
      container = $('.search-pagesearch-container'),
      searchTag =
      searcLabel
      .val()
      .replace(/[^A-zА-я_ 0-9]/g, '')
      .replace(/\s{2}/, '');

    if (searchTag.split(' ').length > 1) {

      searchTagGl = searchTag.split(' ');
      searchTagGl.unshift(searchTag);
      dfd.resolve(searchTagGl);

    } else {

      searchTagGl.push(searchTag);
      dfd.resolve(searchTagGl);

    }

    return dfd.promise();
  }

});
