var Purchase = require('../models/purchase');


exports.getPurchases = function(req,res){	
	Purchase.find(function(err,purchases){
		if(err)
			res.send(err);
		res.json(purchases);
	});
};

exports.postPurchases = function(req, res){
	var purchase = new Purchase({
		userID: req.body.userID,
		productID: req.body.productID,
		amount: req.body.amount,
		zipcode: req.body.zipcode
	});
	purchase.save(function(err){
		if(err)
			res.send(err);
		else{
			res.json({message: "New Purchase Added"});
		}
	});
};