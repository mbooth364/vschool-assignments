// RESTful API architecture

// GET /todos -> Get all todos (array of todo items)
// GET /todos/23427364 -> Get a single todo item
// POST /todos -> Create a new todo item
// PUT /todos/:id -> Update a todo item with the id of ":id"
// DELETE /todos/:id -> Delete a todo item with the id of ":id"



var sally = {
    firstName: "Sally",
    lastName: "Raphael",
    isAdmin: false
};

function sayFirstName(user) {
    console.log(`My name is ${user.firstname}`);
}

sayFirstName(sally);

function sayFirstName2(name) {
    console.log(`My name is ${name}`);
}
sayFirstName2(sally.firstName);


function makeUserAdmin(user) {
    user.isAdmin = true;
}

function isAdmin(user) {
    return user.isAdmin;
}

isAdmin(sally);