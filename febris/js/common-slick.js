/**
 * Created by mac on 29.04.2017.
 */

(function ($) {
    $(document).ready(function() {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            arrows: false,
            centerMode: false,
            autoplay: true
        });

    });
})(jQuery);

