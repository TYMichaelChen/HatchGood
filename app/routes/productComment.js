var ProductComment = require('../models/productComment');


exports.getComments = function(req,res){	
	ProductComment.find(function(err,comment){
		if(err)
			res.send(err);
		res.json(comment);
	});
};
exports.postComments = function(req, res){
	var comment = new ProductComment({
		productID: req.body.productID,
		userID: req.body.userID,
		comment: req.body.comment
	});
	comment.save(function(err){
		if(err)
			res.send(err);
		else{
			res.json({message: "New ProductComment Added"});
		}
	});
};