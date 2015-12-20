var express = require('express'),
	passport = require('passport'),
	userController = require('../routes/user'),
	path = require('path');

module.exports = function(app){
	//===================== Server Routes =====================
	var router = express.Router();

	router.route('/users')
		.get(userController.getUsers)
		.post(userController.postUsers);

	app.use('/api/v1',router); // configure our routes
}