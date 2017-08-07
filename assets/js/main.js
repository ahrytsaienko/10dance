//MAP
$(function () {

    function initMap() {
        var arr_maps, location, mapObject, mapCanvas, mapOption, map, marker;

        arr_maps = ['map', 'map2'];

        for (i = 0; i <= arr_maps.length; i++) {
            mapObject = getMapProperties(arr_maps[i]);

            location = new google.maps.LatLng(mapObject['cordinates'][0], mapObject['cordinates'][1]);
            mapCanvas = document.getElementById(arr_maps[i]);
            mapOption = {
                center: location,
                zoom: 14,
                panControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map(mapCanvas, mapOption);

            marker = new google.maps.Marker({
                position: location,
                map: map,
                icon: mapObject['markerImage']
            });
        }
    }

    function getMapProperties(mapName) {

        return {
            cordinates: mapName === 'map' ? [50.4133761, 30.6176347] : [50.4371499, 30.6157884],
            markerImage: 'marker-32.png',
        }
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