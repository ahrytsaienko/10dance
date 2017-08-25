$(document).ready(function () {
    $('.sl').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2500,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        responsive: [
            {
                breakpoint: 767,
                settings: 'slick'
    },
            {
                breakpoint: 481,
                settings: 'unslick'
      },

      ]
    });
});

// SLICK CONTACTS

$(document).ready(function () {
    $('.slick_contacts').slick({
        autoplay: true,
        dots: true
    });
});




// ANIMATION

$('.js--info').waypoint(function (direction) {
    $('.js--info').addClass('animated bounceInDown');
}, {
    offset: '50%'
});
