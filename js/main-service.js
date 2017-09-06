angular.module('myGame')
.service('mainService', function($state){
    this.goToPlay = function(){
        $state.go('game')
    }
    this.testFunc = function(){
        var imgRock = document.createElement('img')
        var imgContainer = document.getElementsByClassName('img-container')
        imgRock.setAttribute('src', 'https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_640.png')
        
        console.log(imgRock)
        imgContainer.appendChild(imgRock);
    }
});
    