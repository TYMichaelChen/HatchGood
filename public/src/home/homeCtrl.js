angular.module('homeCtrl', [])
.controller('homeController', function($scope,$uibModal) {
	$scope.openSignupModal = function(id) {
		var modalInstance = $uibModal.open({
			animation: true,
			templateUrl: 'shared/modals/signupModal.html',
			controller: 'signupModalCtrl',      
			windowClass: 'signupModalWindow',
			resolve:{
				data: function(){
					return id;
				}
			}
		});
	};
	$scope.openLoginModal = function(id) {
		var modalInstance = $uibModal.open({
			animation: true,
			templateUrl: 'shared/modals/loginModal.html',
			controller: 'loginModalCtrl',      
			windowClass: 'signupModalWindow',
			resolve:{
				data: function(){
					return id;
				}
			}
		});		
	};
	$scope.openPasswordModal = function(id, $scope) {
		var modalInstance = $uibModal.open({
			animation: true,
			templateUrl: 'shared/modals/forgotPasswordModal.html',
			controller: 'forgotPasswordCtrl',      
			windowClass: 'signupModalWindow',
			resolve:{
				data: function(){
					return id;
				}
			}
		});
	};
})
//designer modal controller 
.controller('signupModalCtrl', function ($scope, $uibModalInstance, $log, data) {
  $scope.designerName = data;
  $scope.close = function () {
    $uibModalInstance.dismiss('cancel');
  };
})
//designer modal controller 
.controller('loginModalCtrl', function ($scope, $uibModalInstance, $log, data) {
	$scope.designerName = data;
  $scope.close = function () {
    $uibModalInstance.dismiss('cancel');
  };
})
//designer modal controller 
.controller('forgotPasswordCtrl', function ($scope, $uibModalInstance, $log, data) {
  $scope.designerName = data;
  $scope.close = function () {
    $uibModalInstance.dismiss('cancel');
  };
})