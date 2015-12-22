var mongoose = require('mongoose');

var PortfolioSchema = new mongoose.Schema ({
	userID:{type:String},
	biography:{type:String},
	rating:{type:Number},
	facebook:{type:String},
	twitter:{type:String},
	pinterest:{type:String},
	instagram:{type:String},
	followers:{type:Number}
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);