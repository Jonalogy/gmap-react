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
  $script(`https://maps.googleapis.com/maps/api/js?key=${GMAP_KEY}&libraries=geometry`, 'google');
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
  var directionsDisplay = new google.maps.DirectionsRenderer({
    polylineOptions: { // not working yet
      strokeColor: '#000000',
      strokeOpacity: 1,
      strokeWeight: 3
    }
  });
  const pathDecoder = google.maps.geometry.encoding.decodePath;

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: 41.85, lng: -87.65}
  });
  directionsDisplay.setMap(map);


  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
      origin: "raffles place singapore",
      destination: "buona vista singapore",
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        console.log('directions service response')
        console.log(JSON.stringify(response))
        // directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });

    const data = {
      origin: 'raffles place',
      destination: 'buona vista'
    }

    fetch('http://localhost:3010/directions', {
      body: JSON.stringify(data), // must match 'Content-Type' header
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'content-type': 'application/json'
      },
    }).then(response => 
      response.json()
    ).then(json => {
      console.log('custom response')      
      const directions = json.response.json

      const newRoutes = directions.routes.map(route => {
        return {
        ...route,
        bounds: {
          south: route.bounds.southwest.lat,
          west: route.bounds.southwest.lng,
          north: route.bounds.northeast.lat,
          east: route.bounds.northeast.lng
        },
        // TODO: FIND A WAY TO DRAW THE BLUE LINE
        overview_path: pathDecoder(route.overview_polyline.points)
      }})
      
      const newDirections = {
        ...directions,
        routes: newRoutes,
        request: json.request
      }

      console.log(newDirections)

      directionsDisplay.setDirections(newDirections);      
    })
  }
  
  calculateAndDisplayRoute(directionsService, directionsDisplay);
}