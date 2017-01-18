//crate an empty array to hold data
//uppercase the alphabet
//loop through the people array and push to new array
//loop throught the alphabet and push to new array




    

    
//    Using a for loop within a for loop create an array 
    
    var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
    var alphabet = "abcdefghijklmnopqrstuvwxyz"; 
    
    function forception(people, alphabet){
        //create empty array to hold final stuff
        var final = [];
        //uppercase the alphabet
        var alphabet = alphabet.toUpperCase();
        //loop through the people array
        for(var i = 0; i < people.length; i++){
          //inside that loop push current person to the empty array
            final.push(people[i] + ":");
            //loop through the alphabet
            for(var j = 0; j < alphabet.length; j++){
             final.push(alphabet[j]);   
            }
        }
        return final;
    }  
    console.log(forception(people, alphabet));
        
    
    