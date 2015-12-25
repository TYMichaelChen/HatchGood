var Portfolio = require('../models/portfolio');


exports.getPortfolio = function(req,res){	
	Portfolio.find(function(err,portfolio){
		if(err)
			res.send(err);
		res.json(portfolio);
	});
};
exports.postPortfolio = function(req, res){
	var portfolio = new Portfolio({
		userID: req.body.userID,
		biography: req.body.biography,
		rating: req.body.rating,
		facebook: req.body.facebook,
		twitter: req.body.twitter,
		pinterest: req.body.pinterest,
		instagram: req.body.instagram,
		followers: req.body.followers
	});
	portfolio.save(function(err){
		if(err)
			res.send(err);
		else{
			res.json({message: "New Portfolio Added"});
		}
	});
};