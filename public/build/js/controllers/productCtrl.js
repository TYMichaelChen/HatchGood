angular.module('productCtrl', []).controller('productController', function($scope) {
	$scope.myInterval = 5000;
	$scope.noWrapSlides = false;
	var slides = $scope.slides = [
		 {
	      image: '../images/product/pendant/1.jpg'
	    },
	    {
	      image: '../images/product/pendant/2.jpg'
	    },
	    {
	      image: '../images/product/pendant/3.jpg'
	    },
	    {
	      image: '../images/product/pendant/4.jpg'
	    }
	];

});
