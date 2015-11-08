//===================== modules =====================
var express = require('express'),
  	mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');
var app = express();

//===================== Config =====================
var db = require('./config/db');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(__dirname + '/public'));

//===================== Routes =====================

var routes = require('./app/routes/api.js')(app); // configure our routes

//===================== Start ======================
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log('Our app is running on port', app.get('port'));
});
exports = module.exports = app;


