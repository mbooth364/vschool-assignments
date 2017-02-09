var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];  

for(var i = 0; i < names.length; i++){
    attemptCall(names[i], dontCall, call, sendText);
}
function attemptCall(name, dontCall, call, sendText){
   var name = name.toLowerCase();
    //if there is more than 1 a in the name
    if (name.lastIndexOf("a") !== name.indexOf("a")) {
        sendText(name);
    } else if (name.length % 2 !== 0){
        dontCall(name);
    } else {
        call(name);
    }
}

function sendText(name) {
    console.log(`you sent a text to ${name}`);
}

function dontCall(name){
    console.log(`you did not call ${name}`);
}

function call(name) {
    console.log(`you called ${name}`);
}


attemptCall(names, dontCall, call, sendText);
//attemptCall("anna", dontCall, call, sendText);
//attemptCall("bob", dontCall, call, sendText);
//attemptCall("jimm", dontCall, call, sendText);


//========================================================


//box.addEventListener("click", changeColor)
//function changeColor(){
//    box.style.backgroundColor = "red"
//}