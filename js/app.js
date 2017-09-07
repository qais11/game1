angular.module('myGame', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('welcome', {
            url:'/',
            templateUrl: "../views/welcome.html",
          })
          .state('game', {
            url:'/game',
            templateUrl: "../views/game.html",
          })
          $urlRouterProvider
.otherwise('/');

});
