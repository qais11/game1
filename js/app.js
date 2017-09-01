angular.module('myGame', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('welcome', {
            url:'/',
            templateUrl: "../views/welcome.html",
            controller:"main-controller"
          })
          .state('game', {
            url:'/game',
            templateUrl: "../views/game.html",
            controller:"main-controller"
          })
          $urlRouterProvider
.otherwise('/');

});
