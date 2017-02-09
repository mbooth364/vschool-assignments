var app = angular.module("MyApp", [])
app.controller(`myController`, ["$scope", "$http", "httpService", function ($scope, $http, httpService) {
    httpService.getHitlist().then(function (response) {
        $scope.hitlist = response.data;
    });
}]);



//var app = angular.module("MyApp", []);
//app.controller("myController", function($scope, $http) {
//    $http.get("http://api.vschool.io:6543/hitlist.json")
//    .then(function(response){
//        console.log(response.data);
//        $scope.hitlist = response.data;
//        
//       
//        
//    });
//});