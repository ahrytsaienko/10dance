$(document).ready(function(){
  $('.sl').slick({
      autoplay: true,
      arrows: false,
      autoplaySpeed: 2500,
      dots: true,
      slidesToShow: 2,
      infinite: true,
      responsive: [
                {
      breakpoint: 767,
      settings: 'slick'        
    },
      {
      breakpoint: 480,
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
    })
})




// GALLERY
