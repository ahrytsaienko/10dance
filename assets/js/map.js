(function ($) {
    var map,
    pointPin = {lat: 50.4320456, lng: 30.5167456};
   
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 50.432, lng: 30.516},
            zoom: 15,
            disableDefaultUI: false,
            scrollwheel: false
        });
        var image = {
            url: './img/pin.png'
        };
//        var marker = new google.maps.Marker({
//            position: pointPin,
//            map: map,
//            icon: image
//        });
    }
        initMap();
})(jQuery);