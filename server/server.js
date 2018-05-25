/* eslint-disable node/no-unsupported-features, node/no-unpublished-require */
import express from 'express'; 
import bodyParser from 'body-parser';
import axios from 'axios';
require('dotenv').config(); // Loads GMAP_KEY
/* eslint-enable node/no-unsupported-features, node/no-unpublished-require */

/**
 * Server Configs
 */
var app = express();
const SERVER_PORT = 3010;

var googleMapsClient = require('@google/maps').createClient({
  key: process.env.GMAP_KEY
});





app.use(bodyParser.json())

app.use(((req,res,next)=> {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}))

app.use( (req,res,next)=>{
  console.log('IN: ',req.originalUrl);
  next();
})

app.get('/', (req, res) => {
  googleMapsClient.geocode(
    { address: '1600 Amphitheatre Parkway, Mountain View, CA' }, 
    function(err, apiRes) {
      (!err) && console.log(res.json.results); //eslint-disable-line no-console
      res.status(200).json(apiRes.json);
    }
  );
})

app.get('/places', (req, res) => {
  
})

app.listen(SERVER_PORT, () => {
  console.log(`Node Proxy for Google API ready on port ${SERVER_PORT}!`); //eslint-disable-line no-console
});