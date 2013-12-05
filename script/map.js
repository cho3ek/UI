    function initializeMap() {

    	var geocoder = new google.maps.Geocoder();
    	var LatLng = new google.maps.LatLng(40.420, -3.6833);

    	var mapOptions = {
    		zoom: 13,
    		center: LatLng
    	};

    	var map = new google.maps.Map(document.getElementById('map-canvas'),
    		mapOptions);

        // --------------- NEW MARKER ---------------

    	var marker1 = new google.maps.Marker({
    		map: map,
    		animation: google.maps.Animation.DROP,
    		position: new google.maps.LatLng(40.414449,-3.703716)
    	});

    	var contentString1 = '<h3>Yelmo Cinemas Ideal 3D</h3>'+'<p><a href="#"> Click here to see showtimes for this theater</a></p>';

    	var infowindow = new google.maps.InfoWindow({
    		content: contentString1,
    		maxWidth: 500
    	});

        google.maps.event.addListener(marker1, 'click', function() {
            infowindow.open(map,marker1);
        });

        // --------------- NEW MARKER ---------------

    	var marker2 = new google.maps.Marker({
    		map: map,
    		animation: google.maps.Animation.DROP,
    		position: new google.maps.LatLng(40.4193268,-3.7085891)
    	});

    	var contentString2 = '<h3>Palacio de la Prensa</h3>'+'<p><a href="#"> Click here to see showtimes for this theater</a></p>';

    	var infowindow2 = new google.maps.InfoWindow({
    		content: contentString2,
    		maxWidth: 500
    	});

        google.maps.event.addListener(marker2, 'click', function() {
            infowindow2.open(map,marker2);
        });

        // --------------- NEW MARKER ---------------

        var marker3 = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(40.4319572,-3.6972637)
        });

        var contentString3 = '<h3>Palacio de la Prensa</h3>'+'<p><a href="#"> Click here to see showtimes for this theater</a></p>';

        var infowindow3 = new google.maps.InfoWindow({
            content: contentString3,
            maxWidth: 500
        });

        google.maps.event.addListener(marker3, 'click', function() {
            infowindow3.open(map,marker3);
        });



    }


    google.maps.event.addDomListener(window, 'load', initializeMap);