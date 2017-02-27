angular.module("MyApp")

.service("bountyService", ["$http", function ($http) {
    
    this.getBountyHunter = function() {
        return $http.get("/bounty-hunter");
    }
    
    this.addBountyHunter = function(x) {
        return $http.post("/bounty-hunter", x);
    }
    
    this.deleteBountyHunter = function(id, index) {
       return $http.delete(`/bounty-hunter/${id}`);
    }
    
    this.updateBountyHunter = function(x, index) {
        return $http.put(`/bounty-hunter/${x.id}`, x)
        .then(function(response) {
            return response.data;
        })
    }
    
    
    
   
    
    
}])