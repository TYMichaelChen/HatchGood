angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'home/home.html',
			controller: 'homeController'
		})		
		.when('/how', {
			templateUrl: 'home/howItWorks.html',
			controller: 'howItWorksController'
		})
		.when('/sell', {
			templateUrl: 'home/sell.html',
			controller: 'sellController'
		})
		.when('/contact', {
			templateUrl: 'home/contact.html',
			controller: 'contactController'
		})



		.when('/products/:id', {
			templateUrl: 'products/products.html',
			controller: 'productController'
		})
		.when('/products', {
			templateUrl: 'products/productsList.html',
			controller: 'productListController'
		})



		.when('/designer/:id', {
			templateUrl: 'designer/designer.html',
			controller: 'designerController'
		})


		.when('/suggest', {
			templateUrl: 'suggest/suggest.html',
			controller: 'suggestController'
		})
		.when('/suggest/info', {
			templateUrl: 'suggest/suggestInfo.html',
			controller: 'suggestInfoController'
		})
		.otherwise ({ redirectTo:'/'});

	$locationProvider.html5Mode(true);

}]);