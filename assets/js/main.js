// TODO
// recode for es6
// сделать колбек функцию для слика в методе toggle

//MAP
$(function () {

    function initMap() {
        var arr_maps, location, mapObject, mapCanvas, mapOption, map, marker;

        arr_maps = ['map', 'map2'];

        for (i = 0; i <= arr_maps.length; i++) {

            mapObject = getMapProperties(arr_maps[i]);

            location = new google.maps.LatLng(mapObject.cordinates[0], mapObject.cordinates[1]);
            mapCanvas = document.getElementById(arr_maps[i]);
            mapOption = {
                center: location,
                zoom: mapObject.mapZoom[i],
                panControl: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map(mapCanvas, mapOption);

            marker = new google.maps.Marker({
                position: location,
                map: map,
                icon: mapObject.markerImage
            });
        }
    }

    function getMapProperties(mapName) {

        return {
            cordinates: mapName === 'map' ? [50.4133761, 30.6176347] : [50.434663, 30.62238],
            markerImage: 'marker-32.png',
            mapZoom: [16, 16]
        };
    }

    google.maps.event.addDomListener(window, 'load', initMap);
});

// NEWS
// Slick block for news page.
// Временная дока: В слике создать клас с суффиксом -slick, с именем первого класа кнопки
// "Читать дальше"
$(document).ready(function () {
    var slickClassName;

    $('.news__hidden').hide();
    $('.more-news-btn').click(function () {
        slickClassName = "." + this.classList[0] + '-slick';
        $(this).prev().slideToggle('slow');
        $(slickClassName).slick({
            autoplay: $(slickClassName).is(':visible'),
            dots: $(slickClassName).is(':visible'),
        });
    });

    // function cbSlick(fslickClassName) {
    //     $(fslickClassName).slick({
    //         autoplay: $(fslickClassName).is(':visible'),
    //         dots: $(fslickClassName).is(':visible'),
    //     });
    // }
});

// Slick block for news page.
// $(document).ready(function () {
//     $('.post').hide();
//     $('.cls').click(function () {
//         $(this).prev().slideToggle('slow');
//         $('.slick_news').slick({
//             autoplay: true,
//             dots: true
//         });
//     });
// });



//NEWS. Отборы по категориям, тегам.
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