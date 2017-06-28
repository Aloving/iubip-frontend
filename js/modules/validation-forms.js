function initValidations() {
  var footerApp = $('#footer-application');
  var loginForm = $('#login-form');
  var callbackForm = $('#callback-form');
  var sendForm = $('#send-form');
  var forgotPassword = $('#forgot-password');

  $.validator.addMethod('fnType', function(value, element) {
    return value.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
  }, 'Введите верный телефон');


  //detail form
  sendForm.validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      phone_number: {
        required: true,
        fnType: true
      }
    },
    messages: {
      email: {
        required: "Введите email",
        email: "Введите верный email"
      },
      phone_number: {
        required: "Введите номер телефона",
        fnType: "Введите верный номер телефона"
      }
    }
  });

  //forgot password form
  forgotPassword.validate({
    rules: {
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      email: {
        required: "Введите email",
        email: "Введите верный email"
      }
    }
  });

  //callback form
  callbackForm.validate({

    rules: {
      name: {
        required: true
      },
      phone: {
        required: true,
        fnType: true
      }
    },

    messages: {
      name: {
        required: "Заполните это поле",
      },
      phone: {
        required: "Введите номер телефона",
        fnType: "Введите верный номер телефона"
      }
    }

  });

  //login form
  loginForm.validate({

    rules: {
      username: {
        required: true,
        email: true
      },
      password: {
        required: true
      }
    },

    messages: {
      username: {
        required: "Введите email",
        email: "Введите верный email"
      },
      password: {
        required: "Введите пароль"
      }
    }

  });

  //footer form with autocomplite
  footerApp.validate({

    rules: {
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        fnType: true
      }
    },

    messages: {
      email: {
        required: "Введите email",
        email: "Введите верный email"
      },
      phone: {
        required: "Введите номер телефона",
        fnType: "Введите верный номер телефона"
      }
    }

  });

}

module.exports = initValidations;