angular.module("clickerApp")

.service("clickerService", ["$http", function ($http) {

    var redCount = [];

    this.addRed = function (count) {
        redCount.push(count++);
        $sccope.newRed = redCount;
        if (count === 0) {
            $scope.newRed = 100;
        }
    };

    var blueCount = [];

    this.addBlue = function (count) {
        blueCount.push(count++);
        $scope.newBlue = blueCount;
        if (count === 0) {
            $scope.newBlue = 100;
        }
    }
}])