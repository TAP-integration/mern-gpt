const bodyParser = require('body-parser');

//connect our config.env
require('dotenv').config({ path" ./config.env});
const express = require('express');
const cors = require('cors');
cons app = express();

app.use(cors{});
app.use(express{});
app.use(bodyParser.urlencoded({ extended: true});

const port  = process.env.PORT || 4242;

app.listen (port, () => console.log('server is running on port {$port}' ))
