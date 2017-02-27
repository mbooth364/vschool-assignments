angular.module("routingApp")

.controller("submitController", ["$scope", "$location", "ponyService", function ($scope, $location, ponyService) {

    $scope.addPony = function (pony) {
        $scope.ponyList = ponyService.addPony(pony)
        $location.path("/home")
    }

//    function validateForm(pony) {
//        if(pony.length !== 3) {
//            alert("pony name must have at least 3 characters")
//        } else if(pony !== a-z) {
//            alert("pony name can not contain numbers")
//        }
//        return true;
//    }


}])