var express = require('express'),
	mongoose = require('mongoose');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/app');
app.set('view engine', 'ejs');

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
app.get('*', function(request, response) {
  response.render('pages/index');
});
app.listen(app.get('port'), function() {
  console.log('Our app is running on port', app.get('port'));
});


