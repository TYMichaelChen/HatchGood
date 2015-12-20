angular.module('productCtrl', [])


.controller('productController', function($scope,$uibModal,$log) {
	$scope.myInterval = 5000;
	$scope.noWrapSlides = false;
	$scope.tab=true;
  //carousel images
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
  //Gallery images
	$scope.gallery = [
    {thumb: '../assets/images/product/pendant/1.jpg', img: '../assets/images/product/pendant/1.jpg', description: 'Image 1'},
    {thumb: '../assets/images/product/pendant/2.jpg', img: '../assets/images/product/pendant/2.jpg', description: 'Image 2'},
    {thumb: '../assets/images/product/pendant/3.jpg', img: '../assets/images/product/pendant/3.jpg', description: 'Image 3'},
    {thumb: '../assets/images/product/pendant/4.jpg', img: '../assets/images/product/pendant/4.jpg', description: 'Image 4'},
    {thumb: '../assets/images/product/pendant/5.jpg', img: '../assets/images/product/pendant/5.jpg', description: 'Image 5'},
    {thumb: '../assets/images/product/pendant/6.jpg', img: '../assets/images/product/pendant/6.jpg', description: 'Image 6'},
  ];
  //accordion for description
  $scope.accordionStatus = {
    description:true,
    material:false,
    source:false,
    ship:false
  };
  //progress bar
  $scope.progress = {
    value:4,
    max:10,
  };
  $scope.progress.percent=($scope.progress.value-1.55)/$scope.progress.max*100;
  $scope.openHatchModal = function() {
    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'shared/modals/hatchModal.html',
      controller: 'hatchModalCtrl',      
      windowClass: 'hatchModalWindow',
    });
  };
  $scope.openDesignerModal = function(id) {

    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'shared/modals/designerModal.html',
      controller: 'designerModalCtrl',      
      windowClass: 'designerModalWindow',
      resolve:{
        data: function(){
          return id;
        }
      }
    });
  };

})
//hatch modal controller 
.controller('hatchModalCtrl', function ($scope, $uibModalInstance) {
  $scope.close = function () {
    $uibModalInstance.dismiss('cancel');
  };
  $scope.submit = function () {
    $uibModalInstance.dismiss('cancel');
  };
})
//designer modal controller 
.controller('designerModalCtrl', function ($scope, $uibModalInstance, $log, data) {
  $scope.designerName = data;
  $scope.close = function () {
    $uibModalInstance.dismiss('cancel');
  };
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
.config(['$provide', Decorate]);
  function Decorate($provide) {

  //Override ngGallery Directive's Template
  $provide.decorator('ngGalleryDirective', function($delegate) {
    var directive = $delegate[0];  
    directive.templateUrl = "products/partials/products/gallery.tpl.html";
    
    return $delegate;
  });

  //Override UI Bootstrap Carousel Directive's Template
  $provide.decorator('uibCarouselDirective', function($delegate) {
    var directive = $delegate[0];  
    directive.templateUrl = "products/partials/products/carousel.tpl.html";
    
    return $delegate;
  });
};