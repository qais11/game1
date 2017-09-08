angular.module('myGame')
.controller('main-controller',function($scope, mainService,$state ){
$scope.goToPlay = mainService.goToPlay;

$scope.imgSrc = '../assets/all.jpg';
$scope.randomVal = '../assets/all.jpg';
$scope.gameData = mainService.gameData;
$scope.getVal = mainService.getVal;
$scope.pickRandomVal = mainService.pickRandomVal;
$scope.count = mainService.count;
$scope.score = mainService.score;
$scope.timer = mainService.timer;
});