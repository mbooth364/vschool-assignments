angular.module("routingApp")

.service("ponyService", ["$http", function ($http) {

    var self = this;
    
    this.getPonies = function () {
        return $http.get("http://api.vschool.io/mikeBooth/pony");
    }

    this.addPony = function(pony) {
        return $http.post("http://api.vschool.io/mikeBooth/pony", pony)
    }
    
    this.updatePony = function(pony, index) {
        return $http.put(`http://api.vschool.io/mikeBooth/pony/${pony._id}`, pony)
        .then(function(response) { 
            return response.data
        })
    }
    
    this.deletePonyButton = function(id, index) {
       return $http.delete(`http://api.vschool.io/mikeBooth/pony/${id}`)
    }



}])