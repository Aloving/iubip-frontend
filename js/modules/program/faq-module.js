var faqModule = {

  faqEvent: function() {

    function reInit() {

      var $faqItem = $('.js-faq-item-header');

      $faqItem.on('click', function() {

        $('.js-faq-item-header').removeClass('faq-item__header_active');
        $(this).addClass('faq-item__header_active').off('click').on('click', function() {

          $(this).removeClass('faq-item__header_active');
          reInit();

        });

      });
    }

    reInit()

  },

  faqSort: function() {

    var $detailFaq = $('.detail-faq'),
      $firstList = $('.js-faq-first-list'),
      $secondList = $('.js-faq-second-list'),
      $faqArray = $('.faq-item');

    for (var i = 0; i < $faqArray.length; i++) {
      if (i % 2) {
        $secondList.append($faqArray[i]);
      } else {
        $firstList.append($faqArray[i]);
      }
    }

    $detailFaq.show();

  }

}

module.exports = faqModule;