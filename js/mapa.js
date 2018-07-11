 function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: {lat: 4, lng: -72}
        });

        // Create an array of alphabetical characters used to label the markers.
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

      
        var infoWindowContenido1 = {
          content: '<button id="pueblo1" onclick="button_pueblo1()">Abejorral, Antioquia</button>'
        }


       var infoWindow1 = new google.maps.InfoWindow(infoWindowContenido1);

        google.maps.event.addListener(markers[0],'click',function(e){

          infoWindow1.open(map,markers[0]);

        });

          var infoWindowContenido2 = {
          content: '<button id="pueblo2" onclick="button_pueblo2()">San Andrés de Cuerquía, Antioquia</button>'
        }

        var infoWindow2 = new google.maps.InfoWindow(infoWindowContenido2);

        google.maps.event.addListener(markers[1],'click',function(e){

          infoWindow2.open(map,markers[1]);

        });

        var infoWindowContenido3 = {
          content: '<button id="pueblo3" onclick="button_pueblo3()">SantaCruz, Nariño</button>'
        }

        var infoWindow3 = new google.maps.InfoWindow(infoWindowContenido3);

        google.maps.event.addListener(markers[2],'click',function(e){

          infoWindow3.open(map,markers[2]);

        });

        var infoWindowContenido4 = {
          content: '<button id="pueblo4" onclick="button_pueblo4()">San Juanito, Meta</button>'
        }

        var infoWindow4 = new google.maps.InfoWindow(infoWindowContenido4);

        google.maps.event.addListener(markers[3],'click',function(e){

          infoWindow4.open(map,markers[3]);

        });


        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }
      
      var locations = [
        {lat: 5.75, lng: -75.4167}, //Abejorral, Antioquia
        {lat: 6.917, lng: -75.667}, //San Andrés de Cuerquía, Antioquia
        {lat: 1.22162, lng: -77.6761}, //SantaCruz, Nariño
        {lat: 4.45796, lng: -73.6766} //San Juanito, Meta
      ]

        
