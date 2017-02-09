//find the frequency of all the letters in a given phrase and print to console


var phrase = 'slimy smelly solution'; 


//console.log(person.age);
//console.log(person["age"]); //these 2 do the same thing

//function that takes a string and outputs the number of occurances of each letter
function letterCount(str) {
   //object for keeping track of letter count(object)
    var count = {};
    
// loop through thte string to get access to each letter
    for(var i = 0; i < str.length; i++){
        var letter = str[i];
        //if that object already has the letter, 
        if(count[letter] !== undefined) {  
          //increment by 1
            count[letter]++;
        }
        //else 
        else {
            //create a new property and set it to 1
            count[letter] = 1;
        }
    }
// print out the letter and the number of times letter was found 
    console.log(count);
}
letterCount(phrase);



