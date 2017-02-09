var readline = require("readline-sync");
var name = readline.question("what is your name?");

console.log(name.toUpperCase());
console.log(name.length);
var work = readline.question("hello " + name + " What do you do? ");

function lastHalf(work){
    var inHalf = Math.floor(work.length/2);
        if(work.length > 20){
            var ourNewWord = "";
            for(var i = inHalf; i < work.length; i++){
                ourNewWord = ourNewWord + work[i];
            }
            return (ourNewWord)
        }
}
 

//function work(str){
//    
//
//    var inHalf = Math.floor(str.length/2);
//
//    if (str.length > 20){
//
//        var ourNewWord = "";
//        for (var i = inHalf; i < str.length; i++){
//            ourNewWord = ourNewWord + str[i];
//        }  
//        return(ourNewWord); 
//    } else {
//        return("you're not very talkative");
//    }
//}
//
//console.log(work(lastHalfString));