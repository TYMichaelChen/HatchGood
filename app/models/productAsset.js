var mongoose = require('mongoose');

var ProductAssetSchema = new mongoose.Schema ({
	productID:{type:String},
	url:{type:String}
});

module.exports = mongoose.model('ProductAsset', ProductAssetSchema);