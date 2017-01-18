//The first function will take this array, and print it to the console. Make sure to add spaces in-between each word so it looks nice on the console
var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];
function printLyrics(){
    var lyricsString = ""
    for(var i = 0; i <= lyrics.length; i++){
        lyricsString += lyrics[i] + " ";
    }
    console.log(lyricsString);
}
printLyrics();

function printLyrics(){
    var lyricsString = ""
    for(var i = 0; i <= lyrics.length; i++){
        lyricsString += lyrics[i] + " "; 
    } 
    console.log(lyricsString);
}
printLyrics();




//The second function will do the same thing, but print the song backwards (starting with the word "pretty": "pretty so I'm myself kiss Gotta", etc.).
var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];
function backwards(lyrics){
    console.log(lyrics.reverse().join());
}
backwards(lyrics);

   

//The third function will print every other word to the console, i.e. "this that cold Pfeiffer", etc.
var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];
function everyOther(lyrics){
    var everyOtherWord ="";
    for(var i = 0 ; i < lyrics.length; i += 2){
        everyOtherWord += lyrics[i] + " ";
    }
    console.log(everyOtherWord);
}
everyOther(lyrics);

//Create a fourth function that reverses every two words. So the end result would look like this: "hit This ice that Michelle cold" ...

var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];
function flipLyrics(lyrics){
    var final = "";
    for(var i = 1; i <= lyrics.length; i += 2){
        if(i < lyrics.length){
        final += lyrics[i] + " ";
        final += lyrics[i - 1] + " ";
            if(lyrics.length % 2 === 0){
                continue;
            }
    } else if (i === lyrics.length){
        final += lyrics[i - 1];
    }
    }
        console.log(final);
}
flipLyrics(lyrics);

             