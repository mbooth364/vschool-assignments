var app = angular.module("MyApp", []);

app.controller("MainController", function($scope){
    $scope.people = [];
    $scope.addPerson = function() {
        $scope.newPerson=$scope.person;
        $scope.people.push($scope.newPerson);
        $scope.person = {};
        
        $scope.person = [
            {
                firstName:"",
                lastName:"",
                email:"",
                birthPlace:"",
                phone:"",
                food:"",
                message:"",
            }
        ]
    }
})