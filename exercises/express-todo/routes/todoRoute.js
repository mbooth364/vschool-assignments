var express = require("express");
var todoRouter = express.Router();
var uuid = require("uuid");

var todoArray = [];

todoRouter.route("/")
    .get(function(req, res) {
    res.send(todoArray);
})
    .post(function(req, res) {
    var newTodo = req.body;
    newTodo.id = uuid.v4();
    todoArray.push(newTodo);
    res.send(newTodo)
});

todoRouter.route("/:todoId")
    .put(function(req, res) {
    var updateList = req.body;
    for(var i = 0; i < todoArray.length; i++) {
        if(todoArray[i].id === req.params.todoId) {
            for(var key in updateList) {
                if(updateList[key] != todoArray[i][key]) {
                    todoArray[i][key] = updateList[key];
                }
                console.log(key)
            }
            return res.send(todoArray[i]);
        }
    }
    res.send();
})
    .delete(function(req, res) {
    var deleteTodo = req.body;
    for(var i = 0; i < todoArray.length; i++) {
        if(todoArray[i].id === req.params.todoid) {
            todoArray.splice(i, 1);
            return res.send(todoArray[i]);
        }
    }
});





module.exports = todoRouter;