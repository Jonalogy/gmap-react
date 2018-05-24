/* eslint-disable node/no-unsupported-features */
import express from 'express'; 
import bodyParser from 'body-parser';
/* eslint-enable node/no-unsupported-features */
let app = express();

const SERVER_PORT = 3010;

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

app.get('/', (req, res) => res.send('all good!') )

app.listen(SERVER_PORT, () => {
  console.log(`Node Proxy for Google API ready on port ${SERVER_PORT}!`); //eslint-disable-line no-console
});