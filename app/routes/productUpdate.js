var ProductUpdate = require('../models/productUpdate');


exports.getUpdates = function(req,res){	
	ProductUpdate.find(function(err,updates){
		if(err)
			res.send(err);
		res.json(updates);
	});
};

exports.postUpdates = function(req, res){
	var productUpdate = new ProductUpdate({
		userID: req.body.userID,
		productID: req.body.productID,
		update: req.body.update
	});
	productUpdate.save(function(err){
		if(err)
			res.send(err);
		else{
			res.json({message: "New ProductUpdate Added"});
		}
	});
};