$(function() {
    // Modals for 'Our works'
    $('.fancy').fancybox();

    // Copywrite year

    var today = new Date();
    $('.footer__copywrite-year').text(today.getFullYear());

    // Main slider in section Work

    function worksSlider() {
        if ($(window).innerWidth() < 767 && !($('.work__slider.slick-initialized').length)) {
            $('.work__slider').slick({
                arrows: false,
                dots: true,
                responsive: [
                    {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        centerMode: true,
                        variableWidth: true
                    }
                    }
                ]
            });
        }
    }

    worksSlider();
    $(window).resize(worksSlider);

    // Scroll to top
    $(window).scroll(function() {
        if ($(window).scrollTop() > 500) {
          $('.scroll-up').fadeIn(300);
        } else {
          $('.scroll-up').fadeOut(300);
        }
    });
    
    $('.scroll-up').on('click', function() {
        $('html, body').animate({scrollTop:0}, '300');
    });

    // Keep-in-touch appearance

    $(window).scroll(function() {
        if ($(window).scrollTop() > 500) {
          $('.keep-in-touch').fadeIn(300);
        } else {
          $('.keep-in-touch').fadeOut(300);
        }
    });

    // Mobile menu

    $('body').on('click', '.mobile-menu__btn', function() {
        $('.mobile-menu').addClass('mobile-menu--active');
        $('body').addClass('mobile-menu--open');
    });

    $('body').on('click', '.mobile-menu__close', function() {
        $('.mobile-menu').removeClass('mobile-menu--active');
        $('body').removeClass('mobile-menu--open');
    });

    $('body').on('click', '.mobile-menu__link--anchor', function(e){
        $('.mobile-menu').removeClass('mobile-menu--active');
        $('body').removeClass('mobile-menu--open');
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 500);
        e.preventDefault();
        return false;
    });

});