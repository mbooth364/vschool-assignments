var readline = require("readline-sync");

var greeting = readline.keyIn("Hello mortal, get ready to die!! Press any key to begin");

var name = readline.question("What is your name?")


var toWalk = readline.keyIn("hello " + name + " type w to walk ");
var walking = ("w");
//create a function that will generate a random # between 0-2
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//append that number to either continue walking or being attacked


var walk = getRandomInt(0, 3);


if (walk === 0 || walk === 1) {
    readline.keyIn("lucky you press w to walk again");
}


// when attacked generate a function of 3 random attackers


var enemyNumber = getRandomInt(1, 3);
if (enemyNumber === 1) {
    console.log("oh no you are being attacked, its a goomba")
} else if (enemyNumber === 2) {
    console.log("oh no you are being attacked it's a BobOmb!!");
} else {
    console.log("oh no you are being attacked the worst of the 3, it's a CheepCheep!!")
}

var enemyHealth = 50;
var userHealth = 50;
var newPlayerHealth = userHealth - enemyAttack;
var newComputerHealth = enemyHealth - playerAttack;
var health = function () {

}

var computerHealth = function () {

}


var decision = readline.keyIn("will you attack or run?  Press a for attack, or r for run");
var playerAttack = getRandomInt(1, 10);
var enemyAttack = getRandomInt(1, 10);
var playerRun = getRandomInt(1, 2);
var prize = ["heart"];

var attackOrRun = getRandomInt(0, 1)
if (decision === "a") {

    //    for(var i = 0; i < userHealth; i++)
    console.log("you attacked with a power of " + playerAttack + " the enemy has " + newComputerHealth + " health left and attacks you");
    console.log("the enemy attacked back with a power of " + enemyAttack + " you have " + newPlayerHealth + " health left");
    //        if(playerAttack > enemyAttack){
    //            console.log("Congratulations you win!! You get a  " + prize + " to put in your inventory");
    //        } else{
    //            console.log("You lose try again");
    //        }
} else if (decision === "r") {
    if (playerRun === 1) {
        readline.keyIn("congratulations you escaped press w to walk again")
    }
    if (playerRun === 0) {
        console.log("He caught you and attacks with a power of  " + enemyAttack);
    }
} else {
    console.log("please choose a or r");
}

//
////function getRandomInt(min, max) {
////    return Math.floor(Math.random() * (max - min + 1)) + min;
//}