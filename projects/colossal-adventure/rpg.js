var readline = require("readline-sync");

var greeting = readline.question("Hello mortal, get ready to die!!");

var name = readline.question("What is your name?")

console.log(greeting);
var toWalk = readline.keyIn("hello " + name + " type w to walk ");
//create a function that will generate a random # between 0-2
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//append that number to either continue walking or being attacked


var walk = getRandomInt(0, 2);
//    while(walk === 0 || walk === 1){
//        readline.keyIn("lucky you type w to walk again");
//    }while(walk ===2){
//        readline.question("oh no you are being attacked");
//    }




if (walk === 0 || walk === 1) {
    console.log("Lucky you, type w to walk again");
} else {
    readline.question("Oh no you are being attacked");
}


// when attacked generate a function of 3 random attackers


var enemyNumber = getRandomInt(1, 3);
if (enemyNumber === 1) {
    console.log("its a goomba")
} else if (enemyNumber === 2) {
    console.log("it's a BobOmb!!");
} else {
    console.log("the worst of the 3, it's a CheepCheep!!")
}



// choose whether to attack or run
var decision = readline.question("will you attack or run?  Press a for attack, or r for run");

//if attack generate a random number between 1 - 10
var attackOrRun = getRandomInt(0,1)
if (decision === "a") {
    
} else if (decision === "r") {
    
    if (attackOrRun === 1) {
        console.log("You escaped, live to fight another day!")
    }
} else {
    console.log("please choose a or r");
}

//
////function getRandomInt(min, max) {
////    return Math.floor(Math.random() * (max - min + 1)) + min;
//}