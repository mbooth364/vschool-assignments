var readline = require("readline-sync");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var player = {
    inventory: [],
    hp: 100,
}

var enemy = {
    hp: 100,
}

function printInventory() {
    console.log(player.inventory);

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
    return enemyTypes[rand];
}

function determinePrize() {
    var prize = ["heart", "coin", "xp"];
    var rand = getRandomInt(0, 2);
    return prize[rand];
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

function toWalk() {
    var action = readline.keyIn("press w to walk");
    if (action === "w") {
        var walking = getRandomInt(0, 3);
        while (walking === 0) {
            var action = readline.keyIn("you are lucky press w to continue walking");
            walking = getRandomInt(0, 3)
        }
        if (walking === 2 || walking === 3) {
            console.log("oh no you got attacked, it is a " + determineType() + " the enemy attacks  you have " + playerHealth() + " left, you attack back the enemy has " + enemyHealth() + " left");
            if (player.hp <= 0) {
                console.log("too bad you died, try again");
            } else if (enemy.hp <= 0) {
                console.log("You win");
            }
        }
    }
}
var walking = getRandomInt(0, 3);
while (player.hp > 0) {
 toWalk();  

}



// if (action === "p") {
//        printInventory();
//    } 
//function walk() {
//    var walking = getRandomInt(0, 2);
//    console.log("you are walking");
//}

//var playerRun = getRandomInt(1, 2);
//var playerAttack = getRandomInt(1, 10);
//var enemyAttack = getRandomInt(1, 10);