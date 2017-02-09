var app = angular.module("MyApp", []);

app.controller("MainController", function ($scope) {
    $scope.name = "mike"; //property, object, value



//    $scope.array = [1, 2, 3, 4];
//
//    $scope.person = {
//        name: "mike",
//        age: 38,
//    };
//
//    $scope.transactions = [
//            {
//                description: "smiths grocery",
//                amount: "$50.50",
//        },
//            {
//                description: "car wash",
//                amount: "$10.50",
//        },
//            {
//                description: "Mc Donalds",
//                amount: "$5.50",
//        },
//    ],
        
$scope.addSandwich = function(){
    
        $scope.sandwiches.push($scope.newSandwich);
        $scope.newSandwich = {};
    }
        $scope.sandwiches = [
            {
                name: "club",
                description: "its a club sandwich",
                ingredients: ["turkey", "bacon", "mayo", "cheese"]
        },
            {
                name: "club",
                description: "its a club sandwich",
                ingredients: ["turkey", "bacon", "mayo", "cheese"]
        },
            {
                name: "club",
                description: "its a club sandwich",
                ingredients: ["turkey", "bacon", "mayo", "cheese"]
        },
    ]

});