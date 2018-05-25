import React, { Component } from 'react';
import "./CustomMap.css";

export class CustomMap extends Component {
  componentDidMount() {
    console.info("google exists within: ", window.hasOwnProperty('google'));
  }

  render() {
    return <div id="map" />;
  }
}