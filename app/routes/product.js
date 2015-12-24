var Product = require('../models/product');


exports.getProducts = function(req,res){	
	Product.find(function(err,products){
		if(err)
			res.send(err);
		res.json(products);
	});
};

exports.postProducts = function(req, res){
	var product = new Product({
		userID: req.body.userID,
		name: req.body.name,
		status: req.body.status
	});
	product.save(function(err){
		if(err)
			res.send(err);
		else{
			res.json({message: "New Product Added"});
		}
	});
};