import $script from 'scriptjs';

export function getGmapApi (GMAP_KEY, callback = () => console.log('Google is ready')) {
  $script.ready('google', callback); 
  $script(`https://maps.googleapis.com/maps/api/js?key=${GMAP_KEY}`, 'google');
}

export function setInitMap () {
  /* eslint-disable no-unused-vars, no-undef */
  // initMap required by Google Maps
  window.initMap = () => {
    // var directionsService = new google.maps.DirectionsService();
    // var directionsDisplay = new google.maps.DirectionsRenderer();
  
    var singapore = {lat: 1.352083, lng: 103.819836};
    var map = new google.maps.Map(document.getElementById('map'), { 
      zoom: 11,
      center: singapore
    });
    var marker = new google.maps.Marker({ 
      position: singapore,
      map: map
    });
  };
  /* eslint-enable no-unused-vars, no-undef */
}
