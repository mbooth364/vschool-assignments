var readline = require("readline-sync");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var player = {
    name: "mike",
    inventory: [],
    hp: 100,
}

var enemy = {
    hp: 100,
}

function printInventory() {
    console.log("You have: " + player.inventory);

}

function attackPower() {
    return getRandomInt(1, 50);
}

function playerAttack() {
    while (player.hp > 0) {
        playerAttack();
    }
}

function enemyAttack() {
    while (enemy.hp > 0) {
        enemyAttack();
    }
}

function playerHealth() {
    player.hp = player.hp - attackPower();
    return player.hp;
}

function newPlayerHealth() {
    return
}

function enemyHealth() {
    enemy.hp = enemy.hp - attackPower();
    return enemy.hp;
}

function determineType() {
    var enemyTypes = ["goomba", "bobomb", "cheep cheep"];
    var rand = getRandomInt(0, 2);
    var currentEnemy = enemyTypes[rand];
    return currentEnemy;
}

function determinePrize() {
    var prize = ["heart", "coin", "xp"];
    var rand = getRandomInt(0, 2);
    var newPrize = prize[rand];
    player.inventory.push(newPrize);
    return newPrize;
}

var greeting = readline.keyIn("Hello mortal, get ready to die!! Press any key to begin");

while (!name) {
    var name = readline.question("What is your name?");
    player.name = name;
    //    if (name === "mike") {
    //        player.hp = 1000;
    //    }
}
toWalk();
var walking = getRandomInt(0, 3);

function toWalk() {
    var action = readline.keyIn("press w to walk");
    if (action === "w") {
        var walking = getRandomInt(0, 3);
        while (walking === 0) {
            var action = readline.keyIn("you are lucky press w to continue walking");
            walking = getRandomInt(0, 3)
        }
        if (walking > 0) {
            attacked();
        }
    }
}

function attacked() {
    var runOrfight = readline.keyIn("You are getting attacked by a " + determineType() + " will you run or fight?  Press r to run or f to fight")
    if (runOrfight === "r") {
        running = getRandomInt(1, 2);
        if (running === 1) {
            console.log(gettingAttacked());
        } else {
            var escaped = readline.keyIn("Lucky you, you escaped press w to walk again");
            toWalk();
        }
    } else if (runOrfight === "f") {
        attack();
    }
}

//function newHp() {
//    player.hp = player.hp + 50;
//}

function attack() {
    console.log("You attack, the enemy has " + enemyHealth() + " You have " + playerHealth() +
        " left ");
    if (player.hp <= 0) {
        console.log("too bad you died, try again");
    } else if (enemy.hp <= 0) {
        var youWin = console.log("You win a: " + determinePrize() + "  you have " + player.hp + " HP left.");
        var printInventory = readline.question("type \"print\" to see your inventory ");
        if (printInventory === "print") {
            console.log("Hello " + name + " You have a: " + player.inventory + " and " + player.hp + " HP left.");
        }
        toWalk();
    }
    while (player.hp > 0) {
        attack();
    }
}


function gettingAttacked() {
    console.log("He caught you the enemy attacks, you have " + playerHealth() + " left");
    console.log(" you attack back the enemy has " + enemyHealth() + " left");
    if (player.hp <= 0) {
        console.log("too bad you died, try again");
    } else if (enemy.hp <= 0) {
        var youWin = console.log("You win a: " + determinePrize() + " you have: " + player.hp + " HP left ");
        var printInventory = readline.question("type \"print\" to see your inventory ");
    }
    if (printInventory === "print") {
        console.log("Hello " + name + " You have a: " + player.inventory + " and " + player.hp + " HP left.");
    }
    if (player.hp > 0) {
        toWalk();
    } else if (enemy.hp <= 0) {
        var action = readline.keyIn("press w to walk");
        toWalk();
    }
}
if (player.hp > 0 && enemyHealth < 0) {
    var printInventory = readline.question("type \"print\" to see your inventory ");
    if (printInventory === "print") {
        console.log("Hello " + name + " You have a: " + player.inventory + " and " + player.hp + " HP left.");
        var action = readline.keyIn("press w to walk");
        toWalk();
    }
    while (player.hp > 0) {
        toWalk();
    }
}