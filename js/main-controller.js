angular.module('myGame')
.controller('main-controller',function($scope, mainService ){
$scope.test = mainService.test
});