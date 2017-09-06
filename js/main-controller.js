angular.module('myGame')
.controller('main-controller',function($scope, mainService,$state ){
$scope.goToPlay = mainService.goToPlay;

$scope.imgSrc = '../assets/all.jpg';

$scope.getVal = mainService.getVal;

});