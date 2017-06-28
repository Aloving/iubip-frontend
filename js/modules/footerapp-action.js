var ajaxresults = require('./ajaxresults.js');

function footerappAjax(that) {
  var email = $('.js-app-email');
  var phone = $('.js-app-phone');
  var course = $('.js-autocomplite');
  var actionBtn = $(that);

  $.ajax({
    url: '/api/v1/proposal/',
    type: 'POST',
    data: {
      csrfmiddlewaretoken: $.cookie('csrftoken'),
      "email": email.val(),
      "phone_number": phone.val(),
      "course": (course.data('id') == undefined) ? null : course.data('id'),
    },
    success: function(json) {

      ajaxresults.successAjax();

      // очистка форм ввода
      email.val('');
      phone.val('');
      course.val('');
      course.removeAttr('data-id');
      course.removeAttr('data-value');

    },
    error: function(json) {
      switch (json.status) {
        case 403:
          ajaxresults.errorAjax403(json);
          break;
        case 409:
          ajaxresults.errorAjax409(json);
          break;
      }
    },
    complete: function() {
      actionBtn.removeAttr('disabled');
    }
  });

}

module.exports = footerappAjax;
