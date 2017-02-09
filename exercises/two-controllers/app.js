angular.module("MyApp", [])

.controller("FirstController", ["$scope", function($scope) {
    $scope.name = "jack";
}])

.controller("SecondController", ["$scope", function($scope) {
    $scope.name = "jill";
}])