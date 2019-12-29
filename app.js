
const express = require('express');
const path = require('path');
require('dotenv').config();


const app = express();
// view engine setup
require('./starter/initViews')(app);

// body parser and request parsers
require('./starter/initDecorators')(app);

// static file initializers
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'documentation')));

// Route initializing middleware functions
require('./starter/initRoutes')(app);

// static file handling
app.use('/documentation', (req, res, next)=>{
  res.sendFile(path.join(__dirname, 'documentation/index.html'));
})

app.use('*', (req, res, next)=>{
  res.sendFile(path.join(__dirname, 'public/index.html'));
})

// Exception handlers go here
require('./starter/errorHandlers')(app)

module.exports = app;
