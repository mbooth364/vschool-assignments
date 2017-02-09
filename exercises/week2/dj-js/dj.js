var scroll = document.getElementById("scroll");
var square = document.getElementById("box");

square.addEventListener("mouseover", function(){
    square.style.backgroundColor = "blue"
})
square.addEventListener("mousedown", function(){
    square.style.backgroundColor = "red"
})
square.addEventListener("mouseup", function(){
    square.style.backgroundColor = "yellow"
})
square.addEventListener("dblclick", function(){
    square.style.backgroundColor = "green"
})
scroll.addEventListener("onscroll", function(){
    square.style.backgroundColor = "orange"
})
square.addEventListener("keydown", function(){
    square.style.backgroundColor = "pink"
})



