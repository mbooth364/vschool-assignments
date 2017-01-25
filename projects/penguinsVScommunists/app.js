//create a constructor function for commies and penguins with 1m population

var penguins = new Object();
penguins.population = 1,000,000;

var communists = new Object();
communists.population = 1,000,000;


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
}

//choose who attacks first using math.random

function attackFirst() {
    firstAttacker = getRandomInt(1, 2);
    if (firstAttacker === 1) {
        //penguins attack first
        console.log("the penguins attack first");
    } else {
        //commies attack first
        console.log("the commies attack first");
    }
}
attackFirst();

var nukeHit = getRandomInt(10000, 100000);

//Create a function called sendNuke(party, onHit, onMiss) where:
  //the first parameter party is the Javascript object of the party that will be attacked
  //the second parameter onHit is a callback function that will be called if the attack is successful
  //the third parameter onMiss is a callback function that will be called if the attack is unsuccessful
  //the onHit and onMiss functions each take one parameter of type party (just forwarding the party you already passed into sendNuke)


hitOrMiss = getRandomInt(1, 2);



function sendNuke(party, callback, callback) {
    hitOrMiss = getRandomInt(1, 2);
    if (hitOrMiss === 1){
       return onHit;
    } else {
        return onMiss;
    }
}
sendNuke(penguins, onHit, onMiss);



function onHit(){
    if (getRandomInt === 1) {
        console.log("the nuke hits you lose " + nukeHit() + " population");
    }
}
onHit();



function onMiss(){
    if (getRandomInt === 2) {
        console.log("the nuke missed");
    }
}
onMiss();