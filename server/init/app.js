const express = require('express');
const cors = require('cors');
const { corsOptions } = require('./config');

const app = express();
app.use(cors(corsOptions));

module.exports = app;