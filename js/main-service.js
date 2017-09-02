angular.module('myGame')
.service('mainService', function($state){
    this.goToPlay = function(){
        $state.go('game')
    }
});
    