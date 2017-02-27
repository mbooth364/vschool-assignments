angular.module("routingApp", ["ngRoute"])

.config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl:"homeRoute/home.html",
        controller:"homeController"
    })
    .when("/submit", {
         templateUrl:"submitRoute/submit.html",
         controller:"submitController"
    })
    .otherwise({
        redirectTo:"/home"
    });
}]);

