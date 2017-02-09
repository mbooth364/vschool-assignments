var app = angular.module("MyApp", [])


app.controller("MainController", function ($scope) {
    $scope.uglies = [];
    if(localStorage.uglies) {
        $scope.uglies = angular.fromJson(localStorage.uglies);
    }
    $scope.addNewUgly = function () {
        $scope.uglies.push($scope.uglyThing);
        $scope.uglyThing = {};
        
     localStorage.setItem("uglies", JSON.stringify($scope.uglies));

        
    
    }
    $scope.delete = function(deleted) {
        $scope.uglies.splice(deleted, 1)
       localStorage.setItem("uglies", JSON.stringify($scope.uglies)); 
    }
});