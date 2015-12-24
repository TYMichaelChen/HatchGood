var mongoose = require('mongoose');

var SuggestedProductSchema = new mongoose.Schema ({
	userID:{type: String},
	name:{type: String},
	thumbnail:{type:String},
	date:{type:Date},
	vote:{type:Number}
});

module.exports = mongoose.model('SuggestedProduct', SuggestedProductSchema);