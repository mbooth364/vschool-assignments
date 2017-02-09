//var paras = document.getElementsByClassName("cool");
//for(var i = 0; i < paras.length; i++){
//    paras[i].style.color = "blue";
//    }
    
//var paras = $("p.cool");
//paras.css()



var elements = $("p.cool"); 
elements.css("color", "green");
elements.css("backgroundColor", "blue");//dont use - use camelCase instead
console.log(elements.css("color"));


$("h1.cool").text("new text");//changes text <p></p> will show the <p></p>
$("h1.cool").html("<p>new text</p>");//changes innerHTML
$("h1.cool").append("<p>another new text</p>");//appends html
$("h1.cool").prepend("<p>first new text</p>");//appends html to beginning of list of children



var addTodoButton = $("#add-todo");//button
var inputBox = $("#new-todo");//input
var todoList = $("#todos");//output

function addItem(){
    var newTodoItem = inputBox.val();
    todoList.append(`<li> ${newTodoItem} </li>`);
    inputBox.val(""); //will remove the input in the box after clicking button
    inputBox.focus(); // will keep the focus on the box
    
}
addTodoButton.click(addItem);



addTodoButton.click(function(){
var newTodoItem = inputBox.val();
    todoList.append(`<li> ${newTodoItem} </li>`);
    inputBox.val(""); //will remove the input in the box after clicking button
    inputBox.focus(); // will keep the focus on the box
});



function enterKey(event){
    if (event.which === 13) {
        event.preventDefault();
        addItem();
    }
}

inputBox.keypress(enterKey);


