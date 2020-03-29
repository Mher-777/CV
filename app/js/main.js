$(function () {
    const $slider = $('.header__slider');

    if ($slider.length) {
        let currentSlide;
        let slidesCount;
        const sliderCounter = document.createElement('div');

        const updateSliderCounter = function (slick, currentIndex) {
            currentSlide = slick.slickCurrentSlide() + 1;
            slidesCount = slick.slideCount;
            $('.header__pagination-counter').html("<strong>" + "0" + currentSlide + "</strong>" + "<sup>" + " " + "/" + "0" + slidesCount + "</sup>")
            
        };

        $slider.on('init', function (event, slick) {
            $slider.append(sliderCounter);
            updateSliderCounter(slick);
        });

        $slider.on('afterChange', function (event, slick, currentSlide) {
            updateSliderCounter(slick, currentSlide);
        });

        $slider.slick({
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            rows: 0,   
            prevArrow: '<button type="button" class="header__pagination-arrow header__pagination-arrow--left"></button>',
            nextArrow: '<button type="button" class="header__pagination-arrow header__pagination-arrow--right"></button>',
            autoplay: true,
            pauseOnHover: false,
            autoplaySpeed: 2500,
        });
    }
    function get_name_browser() {
        let ua = navigator.userAgent;
        if (ua.search(/Chrome/) > 0) return 'Google Chrome';
        if (ua.search(/Firefox/) > 0) return 'Firefox';
        if (ua.search(/Opera/) > 0) return 'Opera';
        if (ua.search(/Safari/) > 0) return 'Safari';
        if (ua.search(/Trident/) > 0) return 'Internet Explorer';
        return 'Не определен';
    }
    let browser = get_name_browser();
   
    $('.header__hamburger').fancybox({
        transitionEffect: "rotate",
    })

    $('.blog__item').slice(0, 4).show();
    $('.blog__bottom-button').on('click', function (e) {
        e.preventDefault();
        $('.blog__item:hidden').slice(0, 2).slideDown();
    });

    let offsetTop = $(".skills").offset().top;
    $(window).scroll(function () {
        let height = $(window).height();
        if ($(window).scrollTop() + height > offsetTop) {
            $(".skills__bar").each(function () {
                $(this).find(".skills__bar-content").animate({
                        width: $(this).attr("data-percentage")
                    }, 2000);
            });
        }
    });

    
})