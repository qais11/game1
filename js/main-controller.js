angular.module('myGame')
.controller('main-controller',function($scope, mainService,$state ){
$scope.goToPlay = mainService.goToPlay
// $scope.testFunc = mainService.testFunc
$scope.rock = 'hi'
var gameData = {
    rock: 'https://cdn.pixabay.com/photo/2013/07/13/09/51/rock-paper-scissors-156171_1280.png'
} 
$scope.imgSrc = 'https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_1280.png'

$scope.getVal = function(str) {
    if(!str) {
        return
    }
    $scope.imgSrc = gameData[str]
}
});