var app = angular.module("CartoonApp", [])

app.controller("CartoonController", ["$scope", "cartoonService", function($scope, cartoonService){
    
    $scope.addCartoon = function(newCartoon) {
        $scope.favoriteCartoon = cartoonService.addCartoon(newCartoon)
        $scope.newCartoon = {};
    }
}])