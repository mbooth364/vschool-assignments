var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];  

for(var i = 0; i < names.length; i++){
    attemptCall(names[i])
}
function attemptCall(name){
    if (name.length % 2 === 1){
        dontCall(name)
    }
}

function dontCall(name){
    if (name.length & 2 === 1)
    console.log(" you did not call " + name);
}

function call(){}
function text(){}


//========================================================


//box.addEventListener("click", changeColor)
//function changeColor(){
//    box.style.backgroundColor = "red"
//}