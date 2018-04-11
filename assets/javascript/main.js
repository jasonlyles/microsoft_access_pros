$(document).ready(function() {

  $(window).scroll(function() {
    if ($('.navbar').offset().top > 50) {
      $('.fixed-top').addClass('top-nav-collapse');
      $('.navbar-toggler').addClass('white-navbar-toggler');
      $('.navbar-toggler-ico').addClass('white-navbar-toggler-ico');
    } else {
      $('.fixed-top').removeClass('top-nav-collapse');
      $('.navbar-toggler').removeClass('white-navbar-toggler');
      $('.navbar-toggler-ico').removeClass('white-navbar-toggler-ico');
    }
  });

  $(function() {
    $('.page-scroll a').bind('click', function(e) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      e.preventDefault();
    })
  })

  $('#navbarNavDropdown').on('show.bs.collapse', function(e) {
    $('.navbar-nav li').addClass('navbar-expand-background');
  })

  $('#navbarNavDropdown').on('hide.bs.collapse', function(e) {
    $('.navbar-nav li').removeClass('navbar-expand-background');
  })
});