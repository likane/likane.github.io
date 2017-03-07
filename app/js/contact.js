

function initMap() {
        var LA = {lat: 34.0522, lng: -118.2437};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: LA
        });
        var marker = new google.maps.Marker({
          position: LA,
          map: map
        });
      }