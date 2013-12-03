    function initializeMap() {

    	var geocoder = new google.maps.Geocoder();
    	var LatLng = new google.maps.LatLng(40.420, -3.6833);

    	var mapOptions = {
    		zoom: 13,
    		center: LatLng
    	};

    	var map = new google.maps.Map(document.getElementById('map-canvas'),
    		mapOptions);

    	var marker1 = new google.maps.Marker({
    		map: map,
    		animation: google.maps.Animation.DROP,
    		position: new google.maps.LatLng(40.414449,-3.703716)
    	});

    	var contentString1 = '<h3>Theater 1</h3>'+'<p>Information for the specifict theater will go here...</p>';

    	var infowindow = new google.maps.InfoWindow({
    		content: contentString1,
    		maxWidth: 500
    	});


    	var marker2 = new google.maps.Marker({
    		map: map,
    		animation: google.maps.Animation.DROP,
    		position: new google.maps.LatLng(40.4117703,-3.6992544)
    	});

    	var contentString2 = '<h3>Theater 2</h3>'+'<p>Information for the specifict theater will go here...</p>';

    	var infowindow2 = new google.maps.InfoWindow({
    		content: contentString2,
    		maxWidth: 500
    	});

    	google.maps.event.addListener(marker1, 'mouseover', function() {
    		infowindow.open(map,marker1);
    	});

    	google.maps.event.addListener(marker1, 'mouseout', function() {
    		infowindow.close(map,marker1);
    	});    	

    	    google.maps.event.addListener(marker2, 'click', function() {
    		infowindow2.open(map,marker2);
    	});

    }


    google.maps.event.addDomListener(window, 'load', initializeMap);