//===================== modules =====================
var express = require('express'),
  	mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');
var app = express();

//===================== Config =====================

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(__dirname + '/public'));

//===================== Routes =====================

var routes = require('./app/routes/api.js'); // configure our routes
app.get('/', function(req,res){
  res.sendFile(path.join(__dirname,'../public/dist','index.html'));
});

//===================== Start ======================
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log('Our app is running on port', app.get('port'));
});

app.get('/', function(request, response) {
  response.render('pages/index');
});
app.get('/product/:name', function(request, response) {
  response.render('pages/product');
});
app.get('/products', function(request, response) {
  response.render('pages/productList');
});
app.get('/designer/:name', function(request, response) {
  response.render('pages/designer');
});

app.get('/sell', function(request, response) {
  response.render('pages/sell');
});

app.get('/suggest', function(request, response) {
  response.render('pages/suggest');
});
app.get('/suggest/info', function(request, response) {
  response.render('pages/suggestInfo');
});
app.get('/contact', function(request, response) {
  response.render('pages/contact');
});
app.get('/team', function(request, response) {
  response.render('pages/team');
});
app.get('/how', function(request, response) {
  response.render('pages/howItWorks');
});
app.get('*', function(request, response) {
  response.render('pages/index');
});

