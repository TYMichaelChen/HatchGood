angular.module('productCtrl', [])


.controller('productController', function($scope,$log) {
	$scope.myInterval = 5000;
	$scope.noWrapSlides = false;
	$scope.tab=true;
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
	$scope.gallery = [
        {thumb: '../assets/images/product/pendant/1.jpg', img: '../assets/images/product/pendant/1.jpg', description: 'Image 1'},
        {thumb: '../assets/images/product/pendant/2.jpg', img: '../assets/images/product/pendant/2.jpg', description: 'Image 2'},
	    {thumb: '../assets/images/product/pendant/3.jpg', img: '../assets/images/product/pendant/3.jpg', description: 'Image 3'},
        {thumb: '../assets/images/product/pendant/4.jpg', img: '../assets/images/product/pendant/4.jpg', description: 'Image 4'},
        {thumb: '../assets/images/product/hedge.jpg', img: '../assets/images/product/pendant/hedge.jpg', description: 'Image 5'},
        {thumb: '../assets/images/product/kinema.jpg', img: '../assets/images/product/pendant/kinema.jpg', description: 'Image 6'},
    ];

    $scope.accordionStatus = {
    	description:true,
    	material:false,
    	source:false,
    	ship:false
    };
    $scope.progress = {
        value:4,
        max:10,
    };
    $scope.progress.percent=($scope.progress.value-1.55)/$scope.progress.max*100;
})
//sidebar scroll function
.directive("sidebar", function ($window,$log) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            var anchor = angular.element(document.querySelector('#affix-stop')).prop('offsetTop')-200;
             if (this.pageYOffset >= anchor) {
                 scope.scrolledChange = true;
             } else {
                 scope.scrolledChange = false;
             }
            scope.$apply();
        });
    };
})
//Override UI Bootstrap Carousel Directive's Template
.config(['$provide', Decorate]);
function Decorate($provide) {
$provide.decorator('uibCarouselDirective', function($delegate) {
  var directive = $delegate[0];  
  directive.templateUrl = "products/partials/products/carousel.tpl.html";
  
  return $delegate;
});
}
  