angular.module("MyApp")

.service("todoService", ["$http", function ($http) {

    this.addTodo = function (todo) {
        return $http.post("http://api.vschool.io/mikebooth/todo", todo)
    
    }

    this.getTodo = function () {
    return $http.get("http://api.vschool.io/mikebooth/todo");
    }
    
    this.editTodo = function(editedTodo, index){
        return $http.put("http://api.vschool.io/mikebooth/todo/" + editedTodo._id, {completed: !editedTodo.completed})
    }
    
    this.updateList = function(todo, index) {
        return $http.put(`http://api.vschool.io/mikebooth/todo/${todo._id}`, todo)
            .then(function(response) {
            this.serviceTodoList[index] = response.data;
        })
    }
    
    this.deleteItem = function(id, index) {
       $http.delete(`http://api.vschool.io/mikebooth/todo/${id}`).then(function() {
       })
    }
}])