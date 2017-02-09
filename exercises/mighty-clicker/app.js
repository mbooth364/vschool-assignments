angular.module("clickerApp", [])

.controller("MainController", ["$scope", "clickerService", function($scope, clickerService) {
    
    $scope.addRed = function(count) {
        $scope.newRed = clickerService.addRed(count);
    }
    
    $scope.addBlue = function(count) {
        $scope.newBlue = clickerService.addBlue(count);
    }
}])