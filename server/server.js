/* eslint-disable node/no-unsupported-features, node/no-unpublished-require */
import express from 'express'; 
import bodyParser from 'body-parser';
import { gmapApi } from './gmapApi';
/* eslint-enable node/no-unsupported-features, node/no-unpublished-require */

var app = express();
const SERVER_PORT = 3010;


app.use(bodyParser.json())

app.use(((req,res,next)=> {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}))

// Log incoming requests
app.use((req,res,next) => {
  console.log('incoming: ',req.originalUrl);
  next();
})

app.use(gmapApi)

app.listen(SERVER_PORT, () => {
  console.log(`Node Proxy for Google API ready on port ${SERVER_PORT}!`); //eslint-disable-line no-console
});