var ProductDescription = require('../models/productDescription');

exports.getDescriptions = function(req,res){	
	ProductDescription.find(function(err,desc){
		if(err)
			res.send(err);
		res.json(desc);
	});
};
exports.postDescriptions = function(req, res){
	var productDescription = new ProductDescription({
		productID: req.body.productID,
		tag: req.body.tag,
		minimum: req.body.minimum,
		dueDate: req.body.dueDate,
		description: req.body.description,
		material: req.body.material,
		shipping: req.body.shipping,
		source: req.body.source
	});
	productDescription.save(function(err){
		if(err)
			res.send(err);
		else{
			res.json({message: "New ProductDescription Added"});
		}
	});
};