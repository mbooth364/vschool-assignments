var isPenguinsTurn;

function Team(name, population) {
    this.name = name;
    this.population = population;
    this.isAlive = function () {
        return this.population > 0;
    }
}
var penguins = new Team("Penguins", "1000000");
var communists = new Team("Communists", "1000000");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function sendNukes(party, onHit, onMiss) {
    var didNukeHit = getRandomInt(0, 1);
    if (didNukeHit === 0) {
        onHit(party);
    } else {
        onMiss(party)
    }
}

function coinFlip() {
    if (getRandomInt(0, 1)) {
        isPenguinsTurn = true;
        sendNukes(penguins, onHit, onMiss);
    } else {
        isPenguinsTurn = false
        sendNuke(communists, onHit, onMiss);
    }
}


function onHit(whoGotNuked) {
    whoGotNuked.population = whoGotNuked.population - getRandomInt(10000, 100000);
    console.log(whoGotNuked.name + " got nuked and has " + whoGotNuked.population + " population left ")
    isPenguinsTurn = !isPenguinsTurn;
}

function onMiss(party) {
    isPenguinsTurn = !isPenguinsTurn;
    console.log(party.name + " were lucky to not get hit")
}

while (penguins.isAlive() && communists.isAlive()) {
    if (isPenguinsTurn) {
        sendNukes(communists, onHit, onMiss);
    } else {
        sendNukes(penguins, onHit, onMiss)
    }
}

console.log("game over");