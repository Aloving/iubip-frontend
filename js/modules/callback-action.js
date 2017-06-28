var ajaxresults = require('./ajaxresults.js');

function callbackAction(that) {

  var callbackName = $('.js-callback-name');
  var actionBtn = $(that);
  var callbackPhone = $('.js-callback-phone');

  //TODO ajax-callback

  $.ajax({
    url: '/api/v1/callback/',
    type: 'POST',
    data: {
      csrfmiddlewaretoken: $.cookie('csrftoken'),
      name: callbackName.val(),
      phone_number: callbackPhone.val()
    },

    success: function(json) {
      ajaxresults.successAjax();
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

module.exports = callbackAction;
