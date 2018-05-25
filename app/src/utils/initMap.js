import $script from 'scriptjs';


/**
 * getGmapApi() Fetches and loads GMap JS API into window object
 * @param {string} GMAP_KEY Google Map's API key
 * @param {callback} callback Any call back. If left empty, the callback logs 'Google is ready'
 * @returns {void} 
 */
export function getGmapApi (GMAP_KEY, callback = () => console.log('Google is ready')) {
  $script.ready('google', callback); 
  $script(`https://maps.googleapis.com/maps/api/js?key=${GMAP_KEY}`, 'google');
}

/** 
 * Manual implementation of creating a map object with GMap's API 
 * @returns {void}
 */
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
  window.initMap();
}

/**
 * Configurations to render Google Map's route
 * @returns {void}
 */
export function renderRoute () {
  if (!window.hasOwnProperty('google')) throw Error('No Google Api Detected... :(')
  let directionsDisplay = new google.maps.DirectionsRenderer(); // eslint-disable-line no-undef
}