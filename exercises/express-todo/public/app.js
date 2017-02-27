var app = angular.module("MyApp", []);

app.controller("MainController", ["$scope", "$http", "todoService", function ($scope, $http, todoService) {

    $scope.todoList = []



    todoService.getTodo().then(function (response) {
        console.log(response.data);
        $scope.todoList = response.data;
    })

    $scope.addTodo = function (x) {
        todoService.addTodo(x).then(function (response) {
            console.log(response.data);
            $scope.todoList.push(response.data)
        })
    }

    $scope.updateList = function (x, index) {
        todoService.updateList(x, index);
        $scope.todoList[index] = todoService.serviceTodoList[index]
    }

    $scope.deleteItem = function (id, index) {
        $scope.todoList.splice(index, 1);
        todoService.deleteItem(id, index);
    }
}])