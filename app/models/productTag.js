var mongoose = require('mongoose');

var productTagSchema = new mongoose.Schema ({
	productID:{type:String},
	tag:{type:String}
});

module.exports = mongoose.model('ProductTag', productTagSchema);