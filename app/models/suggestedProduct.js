var mongoose = require('mongoose');

var SuggestedProductSchema = new mongoose.Schema ({
	userID:{type: String},
	title:{type: String},
	date:{type:Date},
	vote:{type:Number}
});

module.exports = mongoose.model('SuggestedProduct', SuggestedProductSchema);