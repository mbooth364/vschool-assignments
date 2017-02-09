.service("StarWarsService", ["$http", function ($http) {
    
    var person = {}
    
    this.getCharacterInfo = function( {
        $http.get("http://swapi.co/api/people/1")
        .then(function (response) {
            person = response.data;
            return $http.get(response.data.homeworld);
        }).then(function (response) {
            person.homeworld = response.data.name;
            return $http.get(response.data.residents[1]);
        }).then(function (response) {
            person.friend = response.data.name;
            return person;
        });
        
    })
}])