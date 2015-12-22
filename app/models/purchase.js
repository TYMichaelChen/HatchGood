var mongoose = require('mongoose');

var PurchaseSchema = new mongoose.Schema ({
	productID:{type:String},
	userID:{type:String},
	amount:{type:Number},
	zipcode:{type:Number}
});

module.exports = mongoose.model('Purchase', PurchaseSchema);