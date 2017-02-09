angular.module("routingApp")

.service("personalService", ["$http", function($http) {
    
    this.recipe = {};
    
    this.getRecipe = function() {
        
        var config = {
            headers: {
                'X-Mashape-Key': "02f33077062f0e975cc12db2b9b4e9ff" 
            }
        };
        
        return $http.get("http://food2fork.com/api/search", config)
        .then(function(response) {
            this.recipe = response.data;
        })
    }
    
}])