var ajaxresults = require('../ajaxresults.js');

function curriculumTable() {

  var $curriculumTable = $('#curriculum-table');
  var $sendForm = $('#send-form');

  $('.js-teacher-block').on('click', '.radio-teacher_error', function() {
    $(this)
      .closest('.js-teacher-block')
      .find('.radio-teacher')
      .removeClass('radio-teacher_error');

    $(this)
      .closest('.js-curriculum-item')
      .find('.js-teacher-error')
      .fadeToggle(300);

    setTimeout(function() {
      $(this)
        .closest('.js-curriculum-item')
        .removeClass('curriculum-table-item_error');
    }, 300);

  });

  $curriculumTable.on('submit', function(evt) {
    evt.preventDefault();

    var a = $curriculumTable
      .find('.js-curriculum-item')
      .filter(function() {
        if (!$(this).find('input:checked').length) {
          return $(this);
        }
      });

    if (a.length) {
      notValid()
    } else {

      $.fancybox($('.detail-form-modal'), {
        padding: [0, 0, 0, 0],
        wrapCSS: 'fancy-custom'
      });

    }

    function notValid() {

      a.each(function() {
        $(this).addClass('curriculum-table-item_error');

        $(this)
          .find('.radio-teacher')
          .addClass('radio-teacher_error')
      });

    }



    $('.js-send').off('click').on('click', function(evt) {

      evt.preventDefault();
      var that = $(this),
        form = $('.detail-form-modal');

      if ($sendForm.valid()) {
        sendForm();
        that.attr('disabled', 'disabled');
      } else {
        return false;
      }


      function sendForm() {
        var $thatEmail = form.find('[name="email"]').val(),
          $thatNumber = form.find('[name="phone_number"]').val(),
          curriculumSerialize;

        $curriculumTable.find('.js-curriculum-email').val($thatEmail);
        $curriculumTable.find('.js-curriculum-number').val($thatNumber);

        curriculumSerialize = $curriculumTable.serialize();

        $.ajax({
          url: location.href,
          method: 'POST',
          data: curriculumSerialize,
          beforeSend: function() {

            $.fancybox.showLoading();

          },
          success: function(json) {

            ajaxresults.successAjax();
            $('.js-curriculum-submit-btn').attr('disabled', 'disabled');

          },
          error: function(json) {
            switch (json.status) {
              case 400:
                ajaxresults.errorAjax400(json.responseJSON.messages.form.__all__[0], that);
                that.removeAttr('disabled');
                break;
              case 403:
                ajaxresults.errorAjax403(json);
                that.removeAttr('disabled');
                break;
              case 409:
                ajaxresults.errorAjax409(json);
                that.removeAttr('disabled');
                break;
            }
          }
        });

      }

    });

  });
}

module.exports = curriculumTable;
