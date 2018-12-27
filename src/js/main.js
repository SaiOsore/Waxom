$(document).ready(function(){

	//Slick Slider
    $('.slider-main__slides').slick({
    	dots: true,
        dotsClass: 'slick-dots slider-dots',
    	arrows: true,
        nextArrow: '.slider-main__next',
        prevArrow: '.slider-main__prev',
    });
    $('.recent-post-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: true,
        nextArrow: '.recent-post-slider__next',
        prevArrow: '.recent-post-slider__prev',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 427,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
	});

  //menu
  $('.hamburger').on('click', function() {
     $('.nav').slideToggle('fast', function() {
          if( $(this).css('display') === "none") {
              $(this).removeAttr('style');
          }
          $('.hamburger').toggleClass('is-active');
          $('body').toggleClass('fixed');
     });
  });

  //tabs
  $('.latest-prs__list').click(function() {
      var tabName = $(this).attr('show-tab');
      $(this).addClass('latest-prs__list--active').siblings().removeClass('latest-prs__list--active');
      $('.tabs-content .' + tabName).addClass('active').siblings().removeClass('active');
  });

  //count on scroll
  var show = true,
      counters = $('.counters');
  
  $(window).on("scroll load resize", function(){

    if (!show) return false; 

    var w_top = $(window).scrollTop(),
        e_top = $(counters).offset().top,
        e_height = $(counters).outerHeight(),
        w_height = $(window).height(),
        d_height = $(document).height();

        if (w_top + 500 >= e_top || w_height + w_top == d_height || 
            e_height + e_top < w_height) {

        //counter
        $('.counters__count').each(function() {
          $(this).prop('Counter', 0).animate( {
            Counter: $(this).text() }, 
            {
            duration: 2000,
            easing: 'swing',
            step: function(now) {
              $(this).text(Math.ceil(now));
            }
          });
        });
        show = false;
        }
  });

    //scroll to elements
    var $section = $('html, body');
    $('a[href*="#"]').click(function() {
    $section.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1400);
    return false;
    });

    //load-more
  $(function () {
    var windowWidth = $(window).width();
    if(windowWidth < 2600) {
      $(".latest-pr").slice(3, 22).hide();
        if ($(".latest-pr:hidden").length != 0) {
        $(".latest-pr__btn-link").show();
    }   
    $(".latest-pr__btn-link").on('click', function (e) {
      e.preventDefault();
      $(".latest-pr:hidden").slice(0, 4).slideDown();
      if ($(".latest-pr:hidden").length == 0) {
          $(".latest-pr__btn-link").fadeOut('slow');
      }
    });
    }
    if(windowWidth < 768){  
      $(".latest-pr").slice(2, 22).hide();
        if ($(".latest-pr:hidden").length != 0) {
        $(".latest-pr__btn-link").show();
    }   
    $(".latest-pr__btn-link").on('click', function (e) {
      e.preventDefault();
      $(".latest-pr:hidden").slice(0, 4).slideDown();
      if ($(".latest-pr:hidden").length == 0) {
          $(".latest-pr__btn-link").fadeOut('slow');
      }
    });
  }

    }

  );
});
