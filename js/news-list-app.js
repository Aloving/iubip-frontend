var renderNews = require('./modules/news/render-news.js');
var getJson = require('./modules/ajax-lazy.js');

$(document).ready(function() {

  var container = $('.js-news-list');

  getJson({
    url:  '/api/v1/news/',
    tempateFunc: renderNews,
    container: container,
    data:{
      page: 1,
      as_blocks: true,
      page_size: 4
    }
  });


});
