angular.module("YodaApp", [])
    .controller("MainController", ["$scope", "YodaService", function ($scope, YodaService ) {

      $scope.yodify = function(phrase) {
          YodaService.yodify(phrase).then(function(response) {
              $scope.results = response.data;
          })
      }
    
}]);