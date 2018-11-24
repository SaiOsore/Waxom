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
	});
});