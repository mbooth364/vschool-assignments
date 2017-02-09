var app = angular.module("MyApp", []);

app.controller("MainController", ["$scope", "$http", "todoService", function ($scope, $http, todoService) {

    $scope.todoList = []

    $scope.addTodo = function (todo) {
        todoService.addTodo(todo).then(function (response) {
            $scope.todoList.push(response.data)
        })
    }


    todoService.getTodo().then(function (response) {
        $scope.todoList = response.data;
    })

    $scope.toggleComplete = function (todo, index) {
        todoService.editTodo().then(function () {})
    }


    $scope.updateList = function (todo, index) {
        todoService.updateList(todo, index);
        $scope.todoList[index] = todoService.serviceTodoList[index]
        }
    
    $scope.deleteItem = function(id, index){
        $scope.todoList.splice(index, 1);
        todoService.deleteItem(id, index);
    }
    
    
    
        //
        //
        //    $scope.addToDo = function (newToDo) {
        //        $http.post("http://api.vschool.io/mikebooth/todo", newToDo).then(function (response) {
        //            $scope.todoList.push(response.data);
        //            $scope.newTodo = {};
        //        })
        //    };
        //
        //
        //
        //    $scope.deleteItem = function (id, index) {
        //        $http.delete(`http://api.vschool.io/mikebooth/todo/${id}`).then(function () {
        //            $scope.todoList.splice(index, 1);
        //        });
        //
        //    }
}]);