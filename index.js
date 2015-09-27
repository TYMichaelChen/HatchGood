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
app.get('/product', function(request, response) {
  response.render('pages/productList');
});
app.listen(app.get('port'), function() {
  console.log('Our app is running on port', app.get('port'));
});


