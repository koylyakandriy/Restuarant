;(function($){
	"use strict";
	$(window).load(function(){
		var map;
		var mapContainer = $("#map")[0];
		var mapCenter = {lat: 48.9216081, lng: 24.7123925};
		map = new google.maps.Map(mapContainer, {
			center: mapCenter,
			zoom: 4,
            disableDefaultUI: true
        });
        var marker = new google.maps.Marker({
			position: mapCenter,
			map: map
			// icon: "../img/Shape1.png"
		});

		google.maps.event.addDomListener(window, "resize", function(){
			var center = $map.getCenter();
			google.maps.event,trigger(map, "resize");
			map.setCenter(center);
		});
	});
})(jQuery);