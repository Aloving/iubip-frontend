function addToMap(contactsBlock, gray) {

  $('#map').append(contactsBlock);
  contactsBlock.fadeIn(800);

  if (gray === "gray") {
    $('.js-contact-image').addClass('contact__image_gray');
  } else if (gray === "color") {
    $('.js-contact-image').removeClass('contact__image_gray');
  }

}

module.exports = addToMap;