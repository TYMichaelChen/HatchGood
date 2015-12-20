var mongoose = require('mongoose');
var mongoUri = process.env.MONGOLAB_URI || 	process.env.MONGOHQ_URL ||   	'mongodb://localhost:27017/HatchGood';
mongoose.connect(mongoUri);
mongoose.connection.on("open", function(){
  console.log("Connected to database");
});