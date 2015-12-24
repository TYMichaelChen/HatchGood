var SuggestedProduct = require('../models/suggestedProduct');


exports.getSuggestedProducts = function(req,res){	
	SuggestedProduct.find(function(err,products){
		if(err)
			res.send(err);
		res.json(products);
	});
};

exports.postSuggestedProducts = function(req, res){
	var product = new SuggestedProduct({
		userID: req.body.userID,
		name: req.body.name,
		thumbnail: req.body.thumbnail,
		date: req.body.date,
		vote: 0
	});
	product.save(function(err){
		if(err)
			res.send(err);
		else{
			res.json({message: "New SuggestedProduct Added"});
		}
	});
};