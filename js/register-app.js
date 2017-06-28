$(document).ready(function() {

  $('.js-reg-file').on('change', function() {

    var that = $(this);

    if (that.get(0).files.length == 1) {

      $('.js-file-span')
        .text(that.get(0).files[0].name)
        .addClass('register__file-span_checked');

      $('.js-file-label').css('border', '1px solid #f2f2f2');
      $('.js-file-label').find('label').hide();

    } else {

      $('.js-file-span')
        .text('Прикрепить чек на оплату')
        .removeClass('register__file-span_checked');
      $('.js-file-label').css('border', '1px solid #e81248');
    }

  });

  $('#registration').validate();

  $('.js-reg-input').each(function() {
    $(this).rules('add', {
      messages: {
        required: "Это обязательное поле"
      }
    });
  })

  $('.js-reg-repassword').rules('add', {
    equalTo: ".js-reg-password",
    messages: {
      equalTo: "Пароли не совпадают"
    }
  });

  $('#registration').on('submit', function() {

    if (!$('#registration').valid()) {

      if (!$('.js-reg-file').get(0).files.length) {

        $('.js-file-label').css('border', '1px solid #e81248');

      }

    }

  });

});