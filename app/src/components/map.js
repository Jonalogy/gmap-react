import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import './map.css';
// import $script from 'scriptjs';
import { GoogleMap, Marker, withGoogleMap } from "react-google-maps";
// import { GMAP_KEY } from './gmap-key';
export class CustomMap extends Component {
  componentDidMount() {
    setTimeout(() => console.log("google exists within: ", window.hasOwnProperty('google')), 1000);
    
    // Alerts when google object is attaced globally.
    // $script.ready('google', () => console.log('Google is ready')); 
    // $script(`https://maps.googleapis.com/maps/api/js?key=${GMAP_KEY}&callback=initMap`, 'google');
  }

  render() {
    return <div id="map"></div>;
  }
}

export const MapComponent = withGoogleMap(props => ( // eslint-disable-line no-extra-parens
  <GoogleMap defaultZoom={8}
             defaultCenter={{ lat: -34.397, lng: 150.644 }} >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
));

export const GMaps = ( // eslint-disable-line no-extra-parens
  <MapComponent 
    isMarkerShown={true} 
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />} />
);
