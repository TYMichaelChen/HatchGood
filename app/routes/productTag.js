var ProductTag = require('../models/productTag');

exports.getTags = function(req,res){	
	ProductTag.find(function(err,tags){
		if(err)
			res.send(err);
		res.json(tags);
	});
};
exports.postTags = function(req, res){
	var productTag = new ProductTag({
		productID: req.body.productID,
		tag: req.body.tag
	});
	productTag.save(function(err){
		if(err)
			res.send(err);
		else{
			res.json({message: "New ProductTag Added"});
		}
	});
};