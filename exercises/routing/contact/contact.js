angular.module("routingApp")

.controller("ContactController", ["$scope", "$http", "NameService", function($scope, $http, NameService) {
    $scope.name = "mike";
    $scope.userName = NameService.userName;
}])