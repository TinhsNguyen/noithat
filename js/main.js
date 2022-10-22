$(document).ready(function() {
    $(".btn-navbar").click(function() {
        $(this).toggleClass("fa-times fa-bars");
        $(".nav-bar-content .menu").toggleClass("active");
    });
    $(".btn-search").click(function() {
        $(".form-search").toggleClass("active");
    });
    $(".interior .menu-tab ul li.tab").click(function() {
        $(this).toggleClass('active').siblings().removeClass('active');
    });
    $('.slider-banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: $('.btn_prev-banner'),
        nextArrow: $('.btn_next-banner'),
        autoplay: true,
        autoplaySpeed: 6000,
    });
    $('.sl').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: $('.btn_prev-ntk'),
        nextArrow: $('.btn_next-ntk'),
        swipeToSlide: true,
        // autoplay: true,
        // autoplaySpeed: 4000
    });
    $('.new-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        prevArrow: $('.btn_prev-1'),
        nextArrow: $('.btn_next-1'),
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 550,
            settings: {
                slidesToShow: 2,
            }
        }]
    });
    $('.sl-suan').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        prevArrow: $('.btn_prev-duan'),
        nextArrow: $('.btn_next-duan'),
        swipeToSlide: true,
        responsive: [{
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                }
            }]
            // autoplay: true,
            // autoplaySpeed: 6000,
    });
    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();
        if (scrollPos > 100) {
            $(".scroll-top").addClass("sc-show");
        } else {
            $(".scroll-top").removeClass("sc-show");

        }
    });
    $('.menu-tab .tab').click(function(event) {
        event.preventDefault();
        index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $('.tab-content').hide();
        $('.tab-content').eq(index).show();
    });

    $(".scroll-top").click(function() {
        $('body,html').animate({ scrollTop: 0 }, 500)
    });
});