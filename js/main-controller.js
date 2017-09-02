angular.module('myGame')
.controller('main-controller',function($scope, mainService,$state ){
$scope.goToPlay = mainService.goToPlay
});