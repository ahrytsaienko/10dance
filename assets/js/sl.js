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
                breakpoint: 482,
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





