var ProductAsset = require('../models/productAsset');


exports.getAssets = function(req,res){	
	ProductAsset.find(function(err,asset){
		if(err)
			res.send(err);
		res.json(asset);
	});
};
exports.postAssets = function(req, res){
	var productAsset = new ProductAsset({
		productID: req.body.productID,
		url: req.body.url
	});
	productAsset.save(function(err){
		if(err)
			res.send(err);
		else{
			res.json({message: "New ProductAsset Added"});
		}
	});
};