const express = require('express');
const path = require('path');
const compression = require('compression');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 9001;

app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./vehicleRoutes'); 
routes(app);

app.listen(port);

console.log(`server started at http://localhost:${port}/vehicles`)
