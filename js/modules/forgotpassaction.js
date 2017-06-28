var ajaxresults = require('./ajaxresults.js')

function forgotpassAction(that) {
  that.attr('disabled', 'disabled');

  $.ajax({
    url: '/recovery-password/',
    method: 'post',
    data: {
      email: $('#forgot-password [name="email"]').val(),
    },

    success: function(json) {
      ajaxresults.successAjax();
      that.removeAttr('disabled');
    },

    error: function(json) {
      switch (json.status) {
        case 400:
          ajaxresults.errorAjax400(json.responseJSON.messages.form.__all__[0], that);
          break;
        case 403:
          ajaxresults.errorAjax403(json);
          break;
        case 409:
          ajaxresults.errorAjax409(json);
          break;
      }
    }

  });
};

module.exports = forgotpassAction;