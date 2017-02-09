angular.module("routingApp", ["ngRoute"])

.config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when("/home", {
        templateUrl:"home/home.html",
        controller:"HomeController"
    })
    .when("/contact", {
        templateUrl:"contact/contact.html",
        controller:"ContactController"
    })
    .when("/about", {
        templateUrl:"about/about.html",
        controller:"AboutController"
    })
    .otherwise({
        redirectTo:"/home"
    });
}]);





//angular.module("routingApp", ["ngRoute"])
//
//.config(["$routeProvider", function($routeProvider) {
//    
//    $routeProvider
//    .when("/home", {
//        templateUrl:"home/home.html",
//        controller: "HomeController"
//    })
//    .when("/about", {
//        templateUrl:"about/about.html",
//        controller:"AboutController"
//    })
//    .when("/contact", {
//        templateUrl:"contact/contact.html",
//        controller:"ContactController"
//    })
//    .otherwise({
//        redirectTo: "/home"
//    });
//}])
//
//
