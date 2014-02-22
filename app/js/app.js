var worldCupApp = angular.module('worldCupApp',['ngRoute', 'ngAnimate', 'worldCupControllers']);

worldCupApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/teams', {
        templateUrl: 'partials/teams.html',
        controller: 'TeamsCtrl'
      }).
      when('/teams/:teamId', {
        templateUrl: 'partials/team-detail.html',
        controller: 'TeamDetailCtrl'
      }).
      otherwise({
        redirectTo: '/teams'
      });
  }]);