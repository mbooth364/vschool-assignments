angular.module("routingApp")

.controller("HomeController", ["$scope", "$http", "NameService", function($scope, $http, NameService){
  $scope.userName = NameService.userName;
    $scope.changeName = function(name) {
        NameService.setName(name);
        $scope.userName = NameService.userName;
}])