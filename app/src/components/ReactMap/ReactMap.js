import React, { Component } from 'react'; // eslint-disable-line no-unused-vars

import { GoogleMap, Marker, withGoogleMap, DirectionsRenderer } from "react-google-maps";


export const ReactMap = withGoogleMap(props => ( // eslint-disable-line no-extra-parens
  <GoogleMap defaultZoom={8}
             defaultCenter={{ lat: -34.397, lng: 150.644 }} >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
));
