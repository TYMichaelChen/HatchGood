angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'homeController'
		})
		.when('/product/:id', {
			templateUrl: 'views/product.html',
			controller: 'productController'
		})
		.when('/products', {
			templateUrl: 'views/productList.html',
			controller: 'productListController'
		})
		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'contactController'
		})
		.when('/designer/:id', {
			templateUrl: 'views/designer.html',
			controller: 'designerController'
		})
		.when('/how', {
			templateUrl: 'views/howItWorks.html',
			controller: 'howItWorksController'
		})
		.when('/sell', {
			templateUrl: 'views/sell.html',
			controller: 'sellController'
		})
		.when('/suggest', {
			templateUrl: 'views/suggest.html',
			controller: 'suggestController'
		})
		.when('/suggest/info', {
			templateUrl: 'views/suggestInfo.html',
			controller: 'suggestInfoController'
		})
		.otherwise ({ redirectTo:'/'});

	$locationProvider.html5Mode(true);

}]);