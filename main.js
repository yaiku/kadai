/* globals $ */
$(function () {
  $('.hamburger').on('click', function () {
    $(this).next().slideToggle();
  });
});

$(function () {
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
  });
});


// accodion
$('.q').on('click', function(){
    $(this).next().slideToggle();
    $(this).toggleClass("minus-btn");
});

//   fadein
$(function () {
  $(window).scroll(function () {
    $(".fadein-before").each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 150) {
        $(this).addClass("fadein-after");
      }
    });
  });
});
