// "use strict";
      
// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: {
//       lat: -34.397,
//       lng: 150.644
//     },
//     zoom: 8,
//     gestureHandling: 'greedy'
//   });
// }


// This example creates a simple polygon representing the Bermuda Triangle.
      // When the user clicks on the polygon an info window opens, showing
      // information about the polygon's coordinates.

      var map;
      var infoWindow;
      
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 6,
          center: {lat: 36.033514, lng: -5.462623},
          gestureHandling: 'greedy'
      
        });
      
        // Define the LatLng coordinates for the polygon.
        var coord_antzuid = [
          {lat: 37.633467, lng: -6.750804},
          {lat: 35.508762, lng: -6.372377},
          {lat: 34.996116, lng: -5.182650},
          {lat: 35.607929, lng: -5.206366},
          {lat: 37.633463, lng: -5.297167}
        ];
      
        // Construct the polygon.
        var region = new google.maps.Polygon({
          paths: coord_antzuid,
          strokeColor: '#36688F',
          strokeOpacity: 0.8,
          strokeWeight: 3,
          fillColor: '#36688F',
          fillOpacity: 0.35
        });
        region.setMap(map);
      
        // Add a listener for the click event.
        region.addListener('click', showArrays);
        
        google.maps.event.addListener(region,"mouseover",function(){
         this.setOptions({fillColor: "#CC6633", strokeColor: "#CC6633"});
        }); 
        
        google.maps.event.addListener(region,"mouseout",function(){
          this.setOptions({fillColor: "#36688F", strokeColor: "#36688F"});
        });
      
        infoWindow = new google.maps.InfoWindow;
      }
      
      /** @this {google.maps.Polygon} */
      function showArrays(event) {
        // Since this polygon has only one path, we can call getPath() to return the
        // MVCArray of LatLngs.
        var vertices = this.getPath();
      
        var contentString = '<h3>Spain!!</h3><p>We can adjust the box and boundaries lol dont worry</p><p>We can also make more</p>'
      
        // Replace the info windows content and position.
        infoWindow.setContent(contentString);
        infoWindow.setPosition(event.latLng);
      
        infoWindow.open(map);
      }