angular.module("routingApp")

.controller("homeController", ["$scope", "$http", "ponyService", function ($scope, $http, ponyService) {

    $scope.ponyList = []
    
   ponyService.getPonies().then(function(response) {
       $scope.ponyList = response.data;
   })
   
   $scope.updatePony = function(pony, index) {
       ponyService.updatePony(pony, index).then(function(updatedPony) {
           $scope.ponyList[index] = updatedPony;
       })
   }
   
   
   $scope.deletePonyButton = function(pony, index) {
       ponyService.deletePonyButton(pony, index).then(function(response) {
           $scope.ponyList.splice(index, 1)
       })
   }

   
    
}])