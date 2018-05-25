import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import './map.css';
import { GoogleMap, Marker, withGoogleMap } from "react-google-maps";
export class CustomMap extends Component {
  componentDidMount() {
    setTimeout(() => console.log("google exists within: ", window.hasOwnProperty('google')), 1000); 
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
