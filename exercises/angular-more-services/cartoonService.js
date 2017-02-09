angular.module("CartoonApp")

.service("cartoonService", ["$http", function($http) {
    
    var favoriteCartoon = [];
    
    this.addCartoon = function(newCartoon) {
        favoriteCartoon.push(newCartoon);
        return favoriteCartoon;
    }
}])