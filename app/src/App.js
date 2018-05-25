import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { GMaps, MapComponent } from './components/map';
import { getGmapApi, setInitMap } from './utils/initMap';
import { GMAP_KEY } from './components/gmap-key';

// My Implementation
setInitMap();
// getGmapApi(GMAP_KEY); // eslint-disable-line no-undef
class AppComponent extends Component {

  componentDidMount() {
    if (window.hasOwnProperty('google')) {
      console.log('Google Api Loaded');
    } else {
      console.log('Google says no...', this.props);
      getGmapApi(
        GMAP_KEY, 
        () => this.props.dispatch( {type: "GMAP_API_LOADED"} )
      ); 
    }
  }

  componentDidUpdate() {
    console.log('App updated:', this.props)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        { 
          this.props.googleApiLoaded === true &&
          <MapComponent 
            isMarkerShown={true} 
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />} /> 
          }
      </div>
    );
  }
  
}

function mapStateToProps (store, ownProps) {
  return store;
}

export default connect(mapStateToProps)(AppComponent);
