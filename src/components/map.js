import React, { Component } from 'react';
import './map.css';
import $script from 'scriptjs';
import { GMAP_KEY } from './gmap-key';

// initMap required by Google Maps
window.initMap = () => {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), { // eslint-disable-line no-undef
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({ // eslint-disable-line no-undef, no-unused-vars
    position: uluru,
    map: map
  });
};

const getGmapsUtils = `https://maps.googleapis.com/maps/api/js?key=${GMAP_KEY}&callback=initMap`;

export class Map extends Component {
  componentWillMount() {
    setTimeout(() => console.log("google exists within: ", window.hasOwnProperty('google')), 1000);
    
    $script.ready('google', () => console.log('Google is ready')); // Alerts when google object is attaced globally.
    $script(getGmapsUtils, 'google');
  }

  render() {
    return <div id="map"></div>;
  }
}
