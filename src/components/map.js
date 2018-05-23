import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import './map.css';
import $script from 'scriptjs';
import { GMAP_KEY } from './gmap-key';

/* eslint-disable no-unused-vars, no-undef */
// initMap required by Google Maps
window.initMap = () => {
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer();

  var singapore = {lat: 1.2977598, lng: 103.7451929};
  var map = new google.maps.Map(document.getElementById('map'), { 
    zoom: 10,
    center: singapore
  });
  var marker = new google.maps.Marker({ 
    position: singapore,
    map: map
  });
};
/* eslint-enable no-unused-vars, no-undef */


const getGmapsUtils = `https://maps.googleapis.com/maps/api/js?key=${GMAP_KEY}&callback=initMap`;

export class Map extends Component {
  componentWillMount() {
    setTimeout(() => console.log("google exists within: ", window.hasOwnProperty('google')), 1000);
    
    // Alerts when google object is attaced globally.
    $script.ready('google', () => console.log('Google is ready')); 
    $script(getGmapsUtils, 'google');
  }

  render() {
    return <div id="map"></div>;
  }
}
