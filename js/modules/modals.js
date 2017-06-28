var modals = {
  
  callbackModal: function() {

    $.fancybox($('.callback-modal'), {
      padding: [0, 0, 0, 0],
      wrapCSS: 'fancy-custom',
    });

  },
  forgotModal: function() {

    $.fancybox($('.forgot-modal'), {
      padding: [0, 0, 0, 0],
      wrapCSS: 'fancy-custom'
    });

  },

  loginModal: function() {

    $.fancybox($('.login-modal'), {
      padding: [0, 0, 0, 0],
      wrapCSS: 'fancy-custom'
    });

  }

}

module.exports = modals;
