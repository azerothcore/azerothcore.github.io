/*jslint browser: true, devel: true, white: true, sloppy: true*/
/*global $ */


// Onload handler
$(function() {

  // Sticky navbar
  var threshold = 50;
  if( $(window).scrollTop() > threshold ) {
    $('#main-navbar').addClass('navbar-position-scroll');
  } else {
    $('#main-navbar').addClass('navbar-position-top');
  }
  document.onscroll = function() {
    if( $(window).scrollTop() > threshold ) {
      $('#main-navbar').addClass('navbar-position-scroll');
      $('#main-navbar').removeClass('navbar-position-top');
    } else {
      $('#main-navbar').addClass('navbar-position-top');
      $('#main-navbar').removeClass('navbar-position-scroll');
    }
  };


});
