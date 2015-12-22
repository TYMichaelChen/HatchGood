var mongoose = require('mongoose');

var ProductUpdateSchema = new mongoose.Schema ({
	productID:{type:String},
	userID:{type:String},
	update:{type:String}
});

module.exports = mongoose.model('ProductUpdate', ProductUpdateSchema);