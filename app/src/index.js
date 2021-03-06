import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { RootReducer } from './reducers/rootReducer';
import './index.css';
import App from './App'; // eslint-disable-line no-unused-vars

const INIT_STATE = { 
  store: 'Init',
  googleApiLoaded: false
};

const store = createStore(
  RootReducer, 
  INIT_STATE,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line no-underscore-dangle
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
