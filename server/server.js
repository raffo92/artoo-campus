const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override'); //Trasforma i "Verbi" non supportati in get/post/ect 
const cookieParser = require('cookie-parser'); //Parsa i cookie
const path = require('path');// prese 2 stringhe mette: / per linx ||  \  per windows
const development = (process.env.NODE_ENV === 'production') ? false : true;
const settings = require('./settings');
const expressValidator= require ('express-validator')

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(settings.mongoUrl, (err) => {
  if (err) throw new Error(err);
  console.info('Connection to the database was successfull.');
});

// setup server
const app = express();

// inject livereload snippet
if (development) app.use(require('connect-livereload')({port: 8081}));

// setup logger
const loggerMode = (development) ? 'dev' : 'combined';
app.use(logger(loggerMode));

// setup body parser for accepting only parser accepts only UTF-8 encoding content
app.use(bodyParser.urlencoded({extended: false}));

// setup the body parser to accept json and populate req.body
app.use(bodyParser.json());

//Validator
app.use(expressValidator());

// use HTTP verbs such as PUT or DELETE where the client doesn't support others
app.use(methodOverride());

// parse the cookie header and populate req.cookies
app.use(cookieParser());

// serve static files
app.use('/public', express.static(path.join(__dirname, '..', 'public')));
app.use('/node_modules', express.static(path.join(__dirname, '..', 'node_modules')));
app.use('/', express.static(path.join(__dirname, '..', 'client')));

// call sayHello here

// play with response

// URL and params

// middlewares: create a timeRequest middleware and an ip filter middleware
//SPOSTATO IN CARTELLA MIDDLEWARES -> TIMEREQUEST
// app.use(function(req,res,next){
//   console.log('Middleware runs');
//   next();
// })
// app.use(require('./exercises/middlewares/mean'));

// routers + controllers

// define here your API
// app.use('/api/items', require("./exercises/middlewares/mean"),require("./exercises/items").router);
app.use('/api/items', require("./exercises/items").router);
app.use('/api/users', require("./exercises/users").router);

// app.use('/api/items', require('./exercises/items').router);

// handle not-found resources
app.get('/:url(api|node_modules|public)/*', (req, res) => {
  res.status(404).send('Resource not found');
});

// serve the main client file
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

// define server
const server = require('http').createServer(app);
const port = 8080//3000;

// start server
server.listen(port, () => {
  console.info(`Cheerio!\nAn awesome node.js server is listening on ${port} in ${process.env.NODE_ENV} mode.\nAmazing things are about to happen! =)`);
});