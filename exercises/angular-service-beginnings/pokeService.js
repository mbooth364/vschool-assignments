angular.module("pokemonApp")

.service("pokeService", ["$http", function($http){
    
    this.addPokemon = function(pokemonName, favoritePokemon) {  
        favoritePokemon.push(pokemonName);
        return favoritePokemon;
    }
    
    this.removePokemon = function(pokemonName, favoritePokemon) {
        var i = favoritePokemon.indexOf(pokemonName);
        favoritePokemon.splice([i], 1);
        return favoritePokemon;
        
    }
    
    
}])