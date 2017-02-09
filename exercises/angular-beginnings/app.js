var app = angular.module("MyApp", []);

app.controller("MainController", function($scope) {
    $scope.person = {
        firstName: "Mike", 
        lastName: "Booth",
        age: 38,
    };  
    
    $scope.newPerson = {
        firstName: "sarah",
        lastname: "payne",
        age: 34,
    };
    
    
});

