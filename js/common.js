// js dependencies
var $ = require('jquery');
var owlCarousel = require('owl-carousel');
var autocomplete = require('jquery.autocomplete');
var cookie = require('jquery.cookie');
var chosen = require('chosen');
var fancybox = require('jquery.fancybox');
var tooltipster = require('tooltipster');
var validate = require('jquery.validate');
var moment = require('moment');

//require modules
var ajaxresults = require('./modules/ajaxresults.js'); //ajax results modals
var modals = require('./modules/modals.js'); //modals
var callbackAction = require('./modules/callback-action.js');
var footerappAjax = require('./modules/footerapp-action.js');
var autocomplete = require('./modules/autocomplete.js');
var loginModule = require('./modules/login-module.js');
var lightVersion = require('./modules/light-version.js');
var forgotpassAction = require('./modules/forgotpassaction.js');
var validations = require('./modules/validation-forms.js');

$(document).ready(function() {

  //common variables
  //callbacks variables
  var callbackBtn = $('.js-callback');
  var callbackInnerBtn = $('.js-callback-inner');
  var callbackForm = $('#callback-form');

  //footer-app variables
  var submitBtn = $('.js-submit-btn');
  var footerApp = $('#footer-application');

  //logins variables
  var login = $('.js-login');
  var loginForm = $('#login-form');
  var jsForgot = $('.js-forgot');
  var jsLk = $('.js-lk');
  var jsLoginBtn = $('.js-login-btn');
  var forgotBtn = $('.js-forgot-btn');

  //light version btn
  var lightVersionBtn = $('.js-light-version');

  //autocompleteBlock
  var autocompleteBlock = $('.autocomplete-suggestions');

  //phone mask
  var phoneMask = $('.js-phone-mask');

  //js fonts
  var js15 = $('.js-light-15');
  var js25 = $('.js-light-25');
  var js35 = $('.js-light-35');
  var lightFontControl = $('.js-font-light');

  //init modules
  autocomplete();
  validations();

  $('.owl-loaded').addClass('owl-carousel'); //fix owl-carousel bug

  //init events
  callbackBtn.on('click', function() { //call calback modal
    modals.callbackModal();
  });

  phoneMask.on('keyup keypress', function(e) {
    var letters=' 1234567890,.()- ';
  	return (letters.indexOf(String.fromCharCode(e.which))!=-1);
  });

  callbackInnerBtn.on('click', function(evt) { //callback modal action
    evt.preventDefault();

    var that = $(this);

    if (callbackForm.valid()) {
      that.attr('disabled', 'disabled');
      callbackAction(that);
    }

  });

  submitBtn.on('click', function(evt) { //footer app action
    evt.preventDefault();
    var that = $(this);

    if (footerApp.valid()) {
      that.attr('disabled', 'disabled');
      footerappAjax(that);
    }

  });

  login.on('click', function() { //call login modal
    modals.loginModal();
  });

  jsLk.on('click', function() { //redirect authorization user
    location.href = 'http://' + location.host + '/lk/profile/';
  });

  jsForgot.on('click', function() { //call forgot password modal
    modals.forgotModal();
  });

  jsLoginBtn.on('click', function(evt) { //authorization
    evt.preventDefault();

    var that = $(this);

    if (loginForm.valid()) {
      loginModule(that, loginForm);
    }

  });

  forgotBtn.on('click', function(evt) { //forgot form action
    evt.preventDefault();

    var that = $(this);

    if ($('#forgot-password').valid()) {
      forgotpassAction(that);
    }
  });

  //init of light version

  if (!!$.cookie('light-white')) {
    lightVersion(undefined, 'white');
  }

  if (!!$.cookie('light-version') && $('#map').length) {
    lightVersion(undefined, undefined, undefined, 'map')
  }

  lightVersionBtn.on('click', function(evt) {
    evt.preventDefault();

    if ($('.lightVersion').length) {

      $('.js-font-light').removeClass('light-controls__font-link_active');
      lightVersion(undefined, undefined, true);
      $.removeCookie('light-version', {
        path: '/'
      });
      $.removeCookie('light-15', {
        path: '/'
      });
      $.removeCookie('light-25', {
        path: '/'
      });
      $.removeCookie('light-35', {
        path: '/'
      });
      $.removeCookie('light-black', {
        path: '/'
      });
      $.removeCookie('light-white', {
        path: '/'
      });

    } else {

      $('body').addClass('lightVersion light-15 light-white');
      $.cookie('light-version', 'true', {
        path: '/'
      });
      $.cookie('light-15', 'true', {
        path: '/'
      });
      $.cookie('light-white', 'true', {
        path: '/'
      });
      lightVersion('1.5', 'white', undefined, 'logo');

    }

  });

  //light fonts change
  js15.on('click', function(evt) {
    evt.preventDefault();
    var font = '1.5';
    var that = $(this);

    if (!$.cookie('light-15')) {

      $.removeCookie('light-25', {
        path: '/'
      });
      $.removeCookie('light-35', {
        path: '/'
      });

      $.cookie('light-15', 'true', {
        path: '/'
      });

      lightFontControl.removeClass('light-controls__font-link_active');
      $('body').removeClass('light-15 light-25 light-35');
      lightVersion('1.5');

    }

  });

  js25.on('click', function(evt) {
    evt.preventDefault();

    var font = '2.5';
    var that = $(this);

    if (!$.cookie('light-25')) {

      $.removeCookie('light-15', {
        path: '/'
      });
      $.removeCookie('light-35', {
        path: '/'
      });

      $.cookie('light-25', 'true', {
        path: '/'
      });

      lightFontControl.removeClass('light-controls__font-link_active');

      $('body').removeClass('light-15 light-25 light-35');

      lightVersion('2.5');

    }

  });

  js35.on('click', function(evt) {
    evt.preventDefault();
    var font = '3.5';
    var that = $(this);

    if (!$.cookie('light-35')) {

      $.removeCookie('light-25', {
        path: '/'
      });
      $.removeCookie('light-15', {
        path: '/'
      });

      $.cookie('light-35', 'true', {
        path: '/'
      });

      lightFontControl.removeClass('light-controls__font-link_active');
      $('body').removeClass('light-15 light-25 light-35');
      lightVersion('3.5');

    }

  });

});
