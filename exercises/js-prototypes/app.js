//old way
//function Person(name, age){
//    this.name = name;
//    this.age = age;
//    this.speak = function() {
//        console.log(`My name is ${this.name} and I'm ${this.age} years old.`)
//    }
//}
//
//var sarah = new Person("sarah", 38);
//console.log(sarah);
//sarah.speak();



//prototype way
function Person(name, age){
    this.name = name;
    this.age = age;
   
    }

Person.prototype.speak = function() {
        console.log(`My name is ${this.name} and I'm ${this.age} years old.`)
}

var sarah = new Person("sarah", 38);
console.log(sarah);
sarah.speak();


var myArray = [true, false, true, 1, 2, 3, 4, 5];

myArray.filter(function(thing, index, array) {
    console.log(`thing: ${thing}`);
    console.log(`index: ${index}`);
    console.log(`array: ${array}`);
    return thing > 3;
}):

console.log(filtered);