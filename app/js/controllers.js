var worldCupControllers = angular.module('worldCupControllers',[]);

worldCupControllers.controller('TeamsCtrl',['$scope','$http',function($scope, $http) {
  $http.get('teams/teams.json').success(function(data) {
      $scope.teams = data;
  });
}]);

worldCupControllers.controller('TeamDetailCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  var teams=[];

  $http.get('teams/teams.json').success(function(data) {
      teams = data;

      $scope.team = teams.filter(function(team){
        return team.id == $routeParams.teamId;
      })[0];
  });

}]);
