var User = require('../models/user');

exports.postUsers = function(req, res){
	var user = new User({
		username: req.body.username,
		password: req.body.password,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		userRole: req.body.userRole,
		approvedSeller: req.body.approvedSeller
	});
	user.save(function(err){
		if(err)
			res.send(err);
		else{
			res.json({message: "New User Added"});
		}
	});
};

exports.getUsers = function(req,res){	
	User.find(function(err,users){
		if(err)
			res.send(err);
		res.json(users);
	});
};