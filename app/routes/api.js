var express = require('express'),
	passport = require('passport'),
	portfolioController = require('../routes/portfolio'),
	productController = require('../routes/product'),
	productAssetsController = require('../routes/productAsset'),
	productCommentsController = require('../routes/productComment'),
	productDescriptionController = require('../routes/productDescription'),
	productTagController = require('../routes/productTag'),
	productUpdateController = require('../routes/productUpdate'),
	purchaseController = require('../routes/purchase'),
	suggestedController = require('../routes/suggestedProduct'),
	userController = require('../routes/user'),
	path = require('path');

module.exports = function(app){
	//===================== Server Routes =====================
	var router = express.Router();

	router.route('/portfolio')
		.get(portfolioController.getPortfolio)
		.post(portfolioController.postPortfolio);

	router.route('/products')
		.get(productController.getProducts)
		.post(productController.postProducts);

	router.route('/assets')
		.get(productAssetsController.getAssets)
		.post(productAssetsController.postAssets);

	router.route('/comments')
		.get(productCommentsController.getComments)
		.post(productCommentsController.postComments);

	router.route('/descriptions')
		.get(productDescriptionController.getDescriptions)
		.post(productDescriptionController.postDescriptions);

	router.route('/tags')
		.get(productTagController.getTags)
		.post(productTagController.postTags);

	router.route('/updates')
		.get(productUpdateController.getUpdates)
		.post(productUpdateController.postUpdates);

	router.route('/purchases')
		.get(purchaseController.getPurchases)
		.post(purchaseController.postPurchases);

	router.route('/suggested')
		.get(suggestedController.getSuggestedProducts)
		.post(suggestedController.postSuggestedProducts);

	router.route('/users')
		.get(userController.getUsers)
		.post(userController.postUsers);

	app.use('/api/v1',router); // configure our routes
}