import React, { Component } from 'react'; 
import logo from './logo.svg';
import './App.css';
import { CustomMap, MyMapComponent } from './components/map';
import { getGmapApi, setInitMap } from './utils/initMap';
import { GMAP_KEY } from './components/gmap-key';

// My Implementation
setInitMap();
getGmapApi(GMAP_KEY); // eslint-disable-line no-undef
class App extends Component {
  componentDidMount() {
    if (window.google) {
      console.log('google exists!');
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <CustomMap/>
        {/* <MyMapComponent isMarkerShown={true} /> */}
      </div>
    );
  }
}

export default App;
