angular.module('myGame')
.service('mainService', function($state){
    this.gameData = {
        rock:'../assets/r.jpg',
        paper:'../assets/p.jpg',
        scissors:'../assets/s.jpg'
    };
    this.score = 0;

    this.goToPlay = function(){
        $state.go('game');
    };
    this.getVal = function(key) {
        if(!key) {
            return
        }
        this.imgSrc = this.gameData[key]
    };
    
    this.pickRandomVal = function(obj) {
        var keys = Object.keys(obj)
        var key = obj[keys[ keys.length * Math.random() << 0]]
        this.randomVal = key
    };
    
});
