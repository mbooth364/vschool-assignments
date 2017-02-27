var app = angular.module("MyApp", []);



app.controller("MainController", ["$scope", "$http", "bountyService", function ($scope, $http, bountyService) {

    $scope.test = "test"
    $scope.bountyList = []

    bountyService.getBountyHunter().then(function (response) {
        $scope.bountyList = response.data;
    })

    $scope.addBountyHunter = function (x) {
        bountyService.addBountyHunter(x).then(function (response) {
            $scope.bountyList.push(response.data)
        })
    }
    $scope.deleteBountyHunter = function (id, index) {
        bountyService.deleteBountyHunter(id, index).then(function (response) {
            $scope.bountyList.splice(index, 1);
        })
    }

    $scope.updateBountyHunter = function (x, index) {
        bountyService.updateBountyHunter(x, index).then(function (updatedObject) {
            $scope.bountyList[index] = updatedObject;
        })


    }


}]);