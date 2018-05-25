import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import { CustomMap } from './components/CustomMap/CustomMap';
import { ReactMap } from './components/ReactMap/ReactMap';
import { getGmapApi, setInitMap } from './utils/initMap';
import { GMAP_KEY } from './gmap-key';
class AppComponent extends Component {

  componentDidMount() {
    if (!window.hasOwnProperty('google')) {
      console.log('Google says no...', this.props);
      getGmapApi(
        GMAP_KEY, 
        () => this.props.dispatch( {type: "GMAP_API_LOADED"} )
      ); 
    }
  }

  componentDidUpdate() {
    console.log('App updated:', this.props)
    // setInitMap();
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
          // <CustomMap />
          <ReactMap 
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
