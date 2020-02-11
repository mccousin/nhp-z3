$(document).ready(function () {

    //var rnd = Math.floor((Math.random() * 3));

    // Image Slider
    $('.z3-slick-slider').slick({
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        //initialSlide: rnd,
        autoplay: true,
        autoplaySpeed: 8000,
    })

    // search box desktop
    $('.search .lens    , .search span').on('click', function () {
        var small = $('.navbar-toggler').is(":visible");
        if (small == true) {
            var size = "250px";
        } else {
            var size = "95%";
        }
        if (!$('.search').hasClass('do-submit')) {
            $('.search').addClass('do-submit');
            $('.search').width('100%');
            $('.search .white').show().animate({
                width: size,
            });
            $('.search input').css('padding-right', '30px');
            $('.search input').focus();
            return false;
        } else {
            $('.search').removeClass('do-submit');
            $('.search').animate({
                width: '52px'
            }, 500);
            $('.search .white').animate({
                width: '0'
            }, 500, function() {
                $(this).hide();
            });
        }
    })

});

