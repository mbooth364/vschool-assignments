




function  noDupes(string){
    //lowercase letters
    string = string.toLowerCase();
    //create an empty string for unique letters
    //create an empty string for duplicates
    var unique = "";
    var misfits = "";
    //loop through each letter in the lowercase string
    for(var i = 0; i < string.length; i++){
    //check if current letter is already in the unique letters string
    if(unique.indexOf(string[i]) >= 0){
        //put it in the misfits string
        misfits += string[i];
    } else{
        //put it into uniques
        unique += string[i];
    }
    
    }
 console.log('no duplicates:' + unique);
    console.log('extras:' + misfits);
}
noDupes("bookkeeper larry");
    
    
    
   