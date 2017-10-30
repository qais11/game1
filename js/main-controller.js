angular.module('myGame')
.controller('main-controller',function($scope, mainService,$state ){
$scope.goToPlay = mainService.goToPlay;

$scope.imgSrc = '../assets/all.jpg';
$scope.randomVal = '../assets/all.jpg';
$scope.gameData = mainService.gameData;
$scope.getVal = mainService.getVal;
$scope.pickRandomVal = mainService.pickRandomVal;
$scope.score = mainService.score;
$scope.timer = 0;
// $scope.count = mainService.count;
let intervalId = null
$scope.count = function(num){
    intervalId = setInterval(function(){
        $scope.$apply();
        $scope.timer = $scope.timer + 1;
        console.log($scope.timer)
    }, 1000)

}
});