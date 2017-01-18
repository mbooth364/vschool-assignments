//empty array for all the enemies
var enemies = [];

//create a constructor to generate enemy objects
//type randomly chosen "ancient dragon""prowler""mighty grunt"
//hit points- depends on enemy type
//defense- hitpoints * 3

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Enemy() {
    this.type = determineType(); //run a function that chooses a type and returns
    this.hitPoints = determineHitPoints(this.hitPoints); // run another function that uses type and generates hit points
    this.defense = this.hitPoints * 3;
}

function determineType() {
    var enemyTypes = ["ancient dragon", "prowler", "mighty grunt"];
    var rand = getRandomInt(0, 2);
    return enemyTypes[rand];
}

function determineHitPoints(type) {
    if (type === "ancient Dragon") {
        return getRandomInt(80, 100);
    } else if (type === "prowler") {
        return getRandomInt(60, 79);
    } else {
        return getRandomInt(20, 49);
    }
}

function makeEnemies(num){
    for (var i = 0; i < 100; i++) {
        var newEnemy = new Enemy();
        enemies.push(newEnemy);
    }
}
makeEnemies(10);
console.log(enemies);