/* eslint-disable node/no-unsupported-features, node/no-unpublished-require */
  import { Router } from 'express';
  require('dotenv').config(); // Loads GMAP_KEY
  // import axios from 'axios';
/* eslint-enable node/no-unsupported-features, node/no-unpublished-require */

var googleMapsClient = require('@google/maps').createClient({
  key: process.env.GMAP_KEY
});

export const gmapApi = new Router; // eslint-disable-line node/no-unsupported-features

gmapApi.get('/', (req, res) => {
  googleMapsClient.geocode(
    { address: '1600 Amphitheatre Parkway, Mountain View, CA' }, 
    function(err, apiRes) {
      (!err) && console.log(res.json.results); //eslint-disable-line no-console
      res.status(200).json(apiRes.json);
    }
  );
})

// gmapApi.get('/places', (req,res) => {
//   googleMapsClient.directions()
// })