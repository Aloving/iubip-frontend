var ajaxresults = {

  successAjax: function() {
    $.fancybox('<div class="modal ajax-modal"> <div class="ajax-modal__header">  <div class="modal__container"> Ваша заявка отправлена </div> </div> </div>', {
      padding: [0, 0, 0, 0],
      wrapCSS: 'fancy-custom'
    });
  },

  errorAjax403: function(json) {
    $.fancybox('<div class="modal ajax-modal"> <div class="ajax-modal__header">  <div class="modal__container"> Ошибка, попробуйте отправить заявку позже </div> </div> </div>', {
      padding: [0, 0, 0, 0],
      wrapCSS: 'fancy-custom'
    });
  },

  errorAjax409: function(json) {
    $.fancybox('<div class="modal ajax-modal"> <div class="ajax-modal__header">  <div class="modal__container"> ' + json.responseJSON.reason.__all__[0] + ' </div> </div> </div>', {
      padding: [0, 0, 0, 0],
      wrapCSS: 'fancy-custom'
    });
  },

  errorAjax400: function(json) {
    $.fancybox('<div class="modal ajax-modal"> <div class="ajax-modal__header">  <div class="modal__container">' + json + '</div> </div> </div>', {
      padding: [0, 0, 0, 0],
      wrapCSS: 'fancy-custom',
    });
  }

}

module.exports = ajaxresults;