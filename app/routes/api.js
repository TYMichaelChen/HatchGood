var express = require('express'),
	passport = require('passport'),
	userController = require('../routes/user'),
	productController = require('../routes/product'),
	suggestedController = require('../routes/suggestedProduct'),
	path = require('path');

module.exports = function(app){
	//===================== Server Routes =====================
	var router = express.Router();

	router.route('/users')
		.get(userController.getUsers)
		.post(userController.postUsers);

	router.route('/products')
		.get(productController.getProducts)
		.post(productController.postProducts);

	router.route('/suggested')
		.get(suggestedController.getSuggestedProducts)
		.post(suggestedController.postSuggestedProducts);

	app.use('/api/v1',router); // configure our routes
}