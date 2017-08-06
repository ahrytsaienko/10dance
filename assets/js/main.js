//<!---- SCRIPTS ---->

//$(document).ready(function(){
//  $('.sl').slick({
// 	autoplay: true
//  });
//});

//MAP
$(function () {

    function initMap() {

        var location = new google.maps.LatLng(50.0875726, 14.4189987);

        var mapCanvas = document.getElementById('map');
        var mapCanvas2 = document.getElementById('map2');
        var mapOptions = {
            center: location,
            zoom: 16,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var map2 = new google.maps.Map(mapCanvas2, mapOptions);

    }

    google.maps.event.addDomListener(window, 'load', initMap);

});

// NEWS

$(document).ready(function () {
    $('.post').hide();
    $('.cls').click(function () {
        $(this).prev().slideToggle("slow");
    })
});



$(document).ready(function () {
    $('.hide_event').click(function () {
        var newsBlock = $('.news');
        var index = this.classList.length - 1;
        $('.news').hide();
        for (i = 0; i <= newsBlock.length; i++) {
            var searchClass = this.classList[index];
            if ($(newsBlock[i]).hasClass(searchClass)) {
                $(newsBlock[i]).show();
            }
        }
    });
});