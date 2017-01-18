var square = document.getElementById("box");

square.addEventListener("mouseover", function(){
    square.style.backgroundColor = "blue"
})

document.getElementById("square").addEventListener("mouseover", function(){
    document.getElementById("square").style.backgroundColor = "green";
})