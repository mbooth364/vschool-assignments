var readline = require("readline-sync");

var name = readline.question("what is your name? ");
name = name.toUpperCase();
console.log(name.toUpperCase());
console.log(name.length);

var age = readline.question("Hi " + name + " my name is computer\n " + "what is your age?");

console.log(name + " is " + age + " years old.");


//var response = readline.question("what do you do? ");
//var inhalf = Math.floor(response.length/2)
//console.log(inHalf);
//if(response.length > 20){
//   inHalf = response/2; }
//for(var i = inHalf; i < str.length)   
//    console.log("the answer you gave me is " + response + " characters long\n" +  " this was the last half: " + inHalf);

var longString = readline.question("type letters: ");
var startFromN = readline.question("your string has " +  (longString.length) + "characters where would you like me to start from: " + "0 to" + (longString.length));




//function fromN(str,n){
//    
//    var ourNewWord = "";
//    
//    for(var i = n; i < str.length; i++){
//        ourNewWord = ourNewWord + str[i];
//    }
//    return(ourNewWord);
//}
//console.log(fromN(longString, startFromN));

















 
