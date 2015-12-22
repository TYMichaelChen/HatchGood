var mongoose = require('mongoose');

var SuggestedProductSchema = new mongoose.Schema ({
	productID:{type:String},
	userID:{type:String},
	comment:{type:String}
});

module.exports = mongoose.model('SuggestedProduct', SuggestedProductSchema);