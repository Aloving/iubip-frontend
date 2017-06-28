module.exports = function(){
  var visibleFooter = $(window).scrollTop() + (innerHeight * 2) -  $('.callback-form').offset().top;

  return visibleFooter > 0;

}