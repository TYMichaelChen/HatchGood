angular.module('productCtrl', []).controller('productController', function($scope) {
	$scope.myInterval = 5000;
	$scope.noWrapSlides = false;
	var slides = $scope.slides = [
		 {
	      image: '../assets/images/product/pendant/1.jpg'
	    },
	    {
	      image: '../assets/images/product/pendant/2.jpg'
	    },
	    {
	      image: '../assets/images/product/pendant/3.jpg'
	    },
	    {
	      image: '../assets/images/product/pendant/4.jpg'
	    }
	];

});
