var name = "jill";
function sayName(){
    console.log(name);
}
sayName(name); //will log Jill


var name = "jill";
function sayName(){
    var name = "jack"
    console.log(name);
}
sayName(name); //will log jack

var name = "jack"; //global
function sayName(){
    var name = "jill"; //local
}
sayName();
console.log(name); //will log jack

function stringCreator(first,second){
    return first + second;
};
var ourString = stringCreator("first", "second");

console.log(ourString);

