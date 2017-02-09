angular.module("promisesAapp", [])
.controller("MainController", ["$scope", "StarWarsService", function ($scope, StarWarsService) {
    StarWarsService.getCharacterInfo().then(function(person) {
        $scope.person = person;
    })
}])
    