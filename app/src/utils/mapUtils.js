import $script from 'scriptjs';
import chicagoKingsman from '../data/chicago_kingsman.json';

/* eslint-disable no-unused-vars, no-undef, no-console, new-parens */

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
  window.initMap();
}

/**
 * Configurations to render Google Map's route
 * @return {void}
 */
export function initChicago () {
  if (window.hasOwnProperty('google')) {
    console.log('Setting Map to Chicago!');

    const directionsDisplay = new google.maps.DirectionsRenderer;
    const mapOptions = {
      zoom: 7,
      center: new google.maps.LatLng(41.850033, -87.6500523)
    };
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
    directionsDisplay.setMap(map);
    directionsDisplay.setDirections(chicagoKingsman);
  } else {
    throw Error('No Google Api Detected... :('); 
  }
}

export function sampleInitMap() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: 41.85, lng: -87.65}
  });
  directionsDisplay.setMap(map);


  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
      origin: "chicago, il",
      destination: "kingman, az",
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        console.log(response)
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
  calculateAndDisplayRoute(directionsService, directionsDisplay);
}