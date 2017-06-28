$(document).ready(function() {

  $('.js-file-input').on('change', function() {

    var that = $(this);

    if (that.get(0).files.length == 1) {

      that.next('.js-file-span')
        .text(that.get(0).files[0].name)
        .addClass('register__file-span_checked');

      that.closest('.js-file-label').css('border', '1px solid #f2f2f2');
      that.closest('.js-file-label').find('label').hide();

    } else {

      that.next('.js-file-span')
        .text('Прикрепить чек на оплату')
        .removeClass('register__file-span_checked');

      that.closest('.js-file-label').css('border', '1px solid #e81248');
    }

  });

});
