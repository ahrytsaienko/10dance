
//MAP
$(function () {

    function initMap() {
        var location = new google.maps.LatLng(50.4133761, 30.6176347);
        var location2 = new google.maps.LatLng(50.43443857295739, 30.622200965881348); 
        var mapCanvas = document.getElementById('map');
        var mapCanvas2 = document.getElementById('map2');
        var mapOptions = {
            center: location2,
            zoom: 14,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var map2 = new google.maps.Map(mapCanvas2, mapOptions);
        
        //add marker
        var markerImage = 'marker-32.png';
        
        var marker = new google.maps.Marker({
            position: location2,
            map: map,
            icon: markerImage
        }); 
        
         var marker = new google.maps.Marker({
            position: location2,
            map: map2,
            icon: markerImage
        });      
    }
    google.maps.event.addDomListener(window, 'load', initMap);
});

// NEWS
// Slick block for news page.
$(document).ready(function () {
    $('.post').hide();
    $('.cls').click(function () {
        $(this).prev().slideToggle('slow');
        $('.slick_news').slick({
            autoplay: true,
            dots: true
        });
    });
});

//
$(document).ready(function () {
    var newsBlock, index, searchClass;
    $('.hide_event').click(function () {
        newsBlock = $('.news');
        index = this.classList.length - 1;
        $('.news').hide();
        for (i = 0; i <= newsBlock.length; i++) {
            searchClass = this.classList[index];
            if ($(newsBlock[i]).hasClass(searchClass)) {
                $(newsBlock[i]).show();
            }
        }
    });
});