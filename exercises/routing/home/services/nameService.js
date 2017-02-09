angular.module("routingApp")

.service("NameService", ["$http", function($http) {
    
    this.userName = "mike";
    this.setName = function(name) {
        this.userName = name;
    }
    }
    
]);