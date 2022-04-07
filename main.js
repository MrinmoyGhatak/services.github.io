// navbar function

$(document).ready(function () {
    $('.menu .fa-bars').click(function () {
        $(this).toggleClass('far fa-times');
        $('nav').toggleClass('nav-toggle');
    });


    // links function

    $('.share-icon .fa-share').click(function () {
        $('.share-icon ul').toggle();
    });


    // scroll-to-top function

    $(window).scroll(function () {
        $('.color-panel, .share-icon ul').hide();

        if ($(window).scrollTop() >= 200) {
            $('.scroll-icon').show();
        } else {
            $('.scroll-icon').hide();
        }
    });



    // theme-toggler function

    $('.theme-toggler').click(function () {
        $('.color-panel').toggle();
    });


    $('.color-panel ul li').click(function () {
        var color = $(this).css('background');
        $('.color').css('background', color);
    });
});