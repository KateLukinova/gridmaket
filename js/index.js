$( document ).ready(function() {

    $("#menu-icon").click(function () {
        $('.home__center').addClass('nav-show');
    });

    $("#page-menu-icon").click(function () {
        $('.nav-page').addClass('opened');
    });

    $(".menu-close-home").click(function () {
        $('.home__center').removeClass('nav-show');
    });

    $("#menu-close-page").click(function () {
        $('.nav-page').removeClass('opened');
    });

    $(".nav ul li a").click(function () {
        $('.home__center').removeClass('nav-show');
        $('.nav-page').removeClass('opened');
    });

    AOS.init({disable: 'mobile'});

    $('.int').select2();

    $('.slider1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 600,
        arrows: false,
        speed: 0,
        cssEase: 'linear'
    });

    function slickPause1() {
        $('.slider1').slick('slickPause');
    }

    slickPause1();

    $('.slider1').mouseover(function() {
        $('.slider1').slick('slickPlay')
    });
    $('.slider1').mouseout(function() {
        slickPause1();
    });

    //slider2

    $('.slider2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 600,
        arrows: false,
        speed: 0,
        cssEase: 'linear'
    });

    function slickPause2() {
        $('.slider2').slick('slickPause');
    }

    slickPause2();

    $('.slider2').mouseover(function() {
        $('.slider2').slick('slickPlay')
    });
    $('.slider2').mouseout(function() {
        slickPause2();
    });

    //slider3

    $('.slider3').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 600,
        arrows: false,
        speed: 0,
        cssEase: 'linear'
    });

    function slickPause3() {
        $('.slider3').slick('slickPause');
    }

    slickPause3();

    $('.slider3').mouseover(function() {
        $('.slider3').slick('slickPlay')
    });
    $('.slider3').mouseout(function() {
        slickPause3();
    });

    //slider4

    $('.slider4').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 600,
        arrows: false,
        speed: 0,
        cssEase: 'linear'
    });

    function slickPause4() {
        $('.slider4').slick('slickPause');
    }

    slickPause4();

    $('.slider4').mouseover(function() {
        $('.slider4').slick('slickPlay')
    });
    $('.slider4').mouseout(function() {
        slickPause4();
    });

    //slider5

    $('.slider5').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 600,
        arrows: false,
        speed: 0,
        cssEase: 'linear'
    });

    function slickPause5() {
        $('.slider5').slick('slickPause');
    }

    slickPause5();

    $('.slider5').mouseover(function() {
        $('.slider5').slick('slickPlay')
    });
    $('.slider5').mouseout(function() {
        slickPause5();
    });

    //slider6

    $('.slider6').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 600,
        arrows: false,
        speed: 0,
        cssEase: 'linear'
    });

    function slickPause6() {
        $('.slider6').slick('slickPause');
    }

    slickPause6();

    $('.slider6').mouseover(function() {
        $('.slider6').slick('slickPlay')
    });
    $('.slider6').mouseout(function() {
        slickPause6();
    });


    $('.list label').click(function() {
        var value = $('input[name="select-radio"]:checked').val();
        $('#filter-checked').text(value);
    });


})

