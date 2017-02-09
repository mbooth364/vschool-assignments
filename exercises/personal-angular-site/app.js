angular.module("routingApp", ["ngRoute"])

.config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl:"home/home.html",
        controller:"HomeController"
    })
    .when("/recipes", {
        templateUrl:"recipes/recipes.html",
        controller:"RecipesController"
    })
    .when("/about", {
        templateUrl:"about/about.html",
        controller:"AboutController"
    })
    .otherwise({
        redirectTo:"/home"
    });
}])

