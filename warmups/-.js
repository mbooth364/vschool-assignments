var car = {
    brand: "Honda",
    model: "Civic",
    numberOfDoors: 4,
    automatic: true,
    color: "blue",
    miles: 0,
    driveOneMile: function(){
        miles++;
        return this.miles;
    } 
};

var blah = "model";

console.log(car.color);
console.log(car[blah]);
