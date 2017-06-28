function loginModule(that, loginForm) {

  if (loginForm.valid()) {

    //TODO ajax-auth
    that.attr('disabled', 'disabled');
    $.ajax({
      url: '/auth/',
      method: 'get',
      data: {
        username: loginForm.find('[name="username"]').val(),
        password: loginForm.find('[name="password"]').val()
      },

      beforeSend: function() {
        $.fancybox.showLoading();
      },

      statusCode: {
        424: function() {
          alert("Отсутствуют обязательные параметры");
        },

        204: function() {
          that.removeAttr('disabled');
          $.fancybox.hideLoading();
          $('.username-login-form').after('<label id="username-error" class="error" for="username">Неверно введены e-mail или пароль</label>');
        },

        200: function(json) {
          var url = json.redirect_url;
          $(location).attr('href', url);
          console.log(url)
        }
      }

    });
  }

};

module.exports = loginModule;
