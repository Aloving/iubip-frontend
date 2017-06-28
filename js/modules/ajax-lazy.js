function toggleSpin() {
  $('.js-spiner').fadeToggle(200);
}

/*
  settings: {
    url: '/api/',
    templateFunc: ( function for template ), //work with jquery promises
    container: container for append items,
      data: {
      page: 1,                 **@type = number,
      as_blocks: true,      `  **@type = true //optional for news-list, sort as blocks`
      list_as_string: true,    **@type = boolean //optional for teacher list
      page_size:  12,          **@type = boolean,
      direction || specialization__direction,  **@type = number // optional for each catalog

    }
  }
*/

function getJson(settings, next) {

  var visibleFooter = $(window).scrollTop() + (innerHeight * 2) - $('.callback-form').offset().top;
  var itemsPerPage = settings.perPage;
  var templateBlock = settings.tempateFunc;
  var url = settings.url;
  var next = (next) ? ('/api' + next.split('/api')[1]) : undefined;
  var ajaxContainer = $(settings.container);
  var data = settings.data;

  if (next) {
    $(window).on('scroll', function() {

      visibleFooter = $(window).scrollTop() + (innerHeight * 2) - $('.callback-form').offset().top;

      if (visibleFooter > 0) {
        $(window).off('scroll');

        $.ajax({
          url: next,
          beforeSend: function() {
            toggleSpin();
          },
          success: function(json) {

            if (json.next) {
              $(window).off('scroll');

              $.when(templateBlock(json.results))
                .done(function(items) {

                  ajaxContainer.append(items);
                  toggleSpin();
                  getJson(settings, json.next)

                });
            } else {

              $.when(templateBlock(json.results))
                .done(function(items) {
                  ajaxContainer.append(items);
                  toggleSpin();
                });

            }
          },

          error: function(err) {
            console.log(err)
          }

        });
      }
    });

  } else {

    ajaxContainer.html('');

    $.ajax({

      url: url,
      data: data,

      beforeSend: function() {
        toggleSpin();
      },

      success: function(json) {

        if (json.next) {

          $.when(templateBlock(json.results))
            .done(function(items) {

              ajaxContainer.append(items);
              getJson(settings, json.next);
              toggleSpin();

            });

        } else {

          $.when(templateBlock(json.results))
            .done(function(items) {

              ajaxContainer.append(items);
              toggleSpin();

            });

        }

      },

      error: function(err) {
        console.log(err);
        //TODO error
      }

    });

  }

}


module.exports = getJson;
