$(function(){

    $('.main-banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,
        prevArrow: '.left',
        nextArrow: '.right',
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });






        // service slider 
    $('.service-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,
        prevArrow: '.service-prev',
        nextArrow: '.service-next',
        infinite: true,
        speed: 500,
        vertical: true,
        // fade: true,
        // cssEase: 'linear'
        rows : 0,
        centerMode: true,
        centerPadding: "0px",
      });






        // service slider 
    $('.testi-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,
        prevArrow: '.testi-prev',
        nextArrow: '.testi-next',
        infinite: true,
        // speed: 500,
        vertical: true,
        // fade: true,
        // cssEase: 'linear'
        rows : 0,
        centerMode: true,
        centerPadding: "0px",
        asNavFor : '.testi-text-slider'
      });




        // service slider 
    $('.testi-text-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        infinite: true,
        vertical: true,
        rows : 0,
        centerMode: true,
        centerPadding: "0px",
        asNavFor : '.testi-slider'
      });










      // counter 
      
    })
    
    $(function(){
      $('.main-counter').counterUp({
        delay: 10,
        time: 2000
      });

    })