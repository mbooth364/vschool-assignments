var readline = require("readline-sync");

 

var dictionary = {
    
    print: function(){
        console.log("the word is " + dictionary.word, + "and the definition is " + dictionary.definition);
    }
};

function addWord(word, definition) {
    dictionary[word] = definition;
}

function findWord(word) {
    if (dictionary[word] === undefined){
        console.log("that is not in the dictionary");
    } else {
        return dictionary[word];
    }
    
    return dictionary[word];
}

var newWord = readline.question("what word would you like me to add to the dictionary? ");
var newDefinition = readline.question("what is the definition? ");

addWord(newWord, newDefinition);

dictionary.print()
