var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema ({
	productID:{type:String},
	userID:{type:String},
	name:{type:String},
	status:{type:Number}
});

module.exports = mongoose.model('Product', ProductSchema);