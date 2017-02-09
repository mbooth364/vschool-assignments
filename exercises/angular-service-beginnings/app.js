angular.module("pokemonApp", [])

.controller("MainController", ["$scope", "pokeService", function ($scope, pokeService) {

    $scope.favoritePokemon = [];
    
    $scope.addPokemon = function (pokemonName) {
        $scope.favoritePokemon = pokeService.addPokemon(pokemonName, $scope.favoritePokemon);
    }
    
    $scope.removePokemon = function (pokemonName) {
        $scope.favoritePokemon = pokeService.removePokemon(pokemonName, $scope.favoritePokemon)
    }
}]);