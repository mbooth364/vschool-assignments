angular.module("promisesApp", [])

.controller("MainController", ["$scope", "$http", function ($scope, $http) {
    var person = {}
    $http.get("http://swapi.co/api/people/1")
        .then(function (response) {
            person = response.data;
            return $http.get(response.data.homeworld);
        }).then(function (response) {
            person.homeworld = response.data.name;
            return $http.get(response.data.residents[1]);
        }).then(function (response) {
            person.friend = response.data.name;
            $scope.person = person;
        });
}])