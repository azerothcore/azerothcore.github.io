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


  $('#commits').githubInfoWidget(
    { user: 'azerothcore', repo: 'azerothcore-wotlk', branch: 'master', last: 15, limitMessageTo: 60 });

	$('.chat_head').click(function(){
		$('.chat_body').slideToggle('slow');
	});
	
	$('.close').click(function(){
		$('.msg_box').hide();
	});

});
