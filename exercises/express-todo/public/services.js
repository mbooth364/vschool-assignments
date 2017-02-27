angular.module("MyApp")

.service("todoService", ["$http", function($http) {   
    
    var self = this;
    
    this.getTodo = function() {
        return $http.get("/express-todo");
    }
    this.getTodo().then(function(response) {
        self.serviceTodoList = response.data;
    })
    
    this.addTodo = function(x) {
        return $http.post("/express-todo", x)
    }
    
    this.editTodo = function(editedTodo, index) {
        return $http.put("/express-todo" + editedTodo.id, {completed: !editTodo.completed})
    }
    
    this.updateList = function(x, index) {
        return $http.put(`/express-todo/${x.id}`, x)
        .then(function(response) {
            self.serviceTodoList[index] = response.data;
        })
    }
    
    this.deleteItem = function(id, index) {
        $http.delete(`/express-todo/${id}`).then(function() {
        })
    }   
}])