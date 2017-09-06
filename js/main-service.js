angular.module('myGame')
.service('mainService', function($state){
    this.goToPlay = function(){
        $state.go('game');
    };
    var gameData = {
        rock: '../assets/r.jpg',
        paper:'../assets/p.jpg',
        scissors:'../assets/s.jpg'
    };
    this.getVal = function(str) {
        if(!str) {
            return
        }
        this.imgSrc = gameData[str]
    };
});
    