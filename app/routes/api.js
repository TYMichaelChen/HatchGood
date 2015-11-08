var express = require('express'),
	passport = require('passport'),
	User = require('../models/user'),
	path = require('path');

module.exports = function(app){
	//===================== Server Routes =====================
	app.get('/api/users', function(req,res){
		User.find(function(err,users){
			if(err) res.send(err);
			res.json(users);
		})
	});

	app.get('*',function(req,res){
		res.sendfile('./public/dist/views/index.html');
	})

}