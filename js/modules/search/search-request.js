var templateFunc = require('./template-func.js');
var searchSort = require('./search-sort.js');

function searchRequest(tags, clear) {
  var globalArr = [];
  var completeQueries = 0;
  var dfd = new $.Deferred;

  for (var i = 0; tags.length > i; i++) {

    //TODO ajax-search
    $.ajax({
      url: '/api/v1/search/',
      method: 'GET',
      data: {
        search: tags[i],
        as_phrase: true   //искать по фразе, рекомендуется использовать по умолчанию
      },
      success: function(json) {
        //json maping
        if (json.course_list.length || json.direction_list.length || json.document_list.length || json.news_list.length) {

          var
            courses = $(json.course_list).each(function() {
              this.type = "course";
              this.tag = json.search_string;
              return this;
            }),

            directions = $(json.direction_list).each(function() {
              this.type = "direction";
              this.tag = json.search_string;
              return this
            }),

            documents = $(json.document_list).each(function() {
              this.type = "document";
              this.tag = json.search_string;
              return this;
            }),

            news = $(json.news_list).each(function() {
              this.type = "new";
              this.tag = json.search_string;
              return this;
            });

          globalArr.push(courses);
          globalArr.push(directions);
          globalArr.push(documents);
          globalArr.push(news);

          completeQueries += 1;
          if (completeQueries == tags.length) {

            dfd.resolve(searchSort(globalArr));
          }
        } else {

          completeQueries += 1;

          if (completeQueries == tags.length) {
            if (!globalArr.length) {

              var errorElement = $('<p class="search-pagesearch-container__not-found"> По вашему запросу ничего не найдено </p>')

              dfd.reject('not-found', errorElement);

            }
          }

        }
      },
      error: function(json) {
        dfd.reject('error', $('<p class="search-pagesearch-container__error"> Ошибка ' + json.status + ' </p>'));
      },
      complete: function() {

      }
    });
  }

  return dfd.promise();
}

module.exports = searchRequest;
