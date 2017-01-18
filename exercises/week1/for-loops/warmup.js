//Write a program that accepts a string as input. Write a loop to print out each letter of that string individually.

//function fruit(string){
//    for(var i = 0; i < string.length; i++){
//    console.log(string[i]);
//    }
//}
//    fruit('apple');

//Write a function that accepts a string and a single character as inputs. Write a loop that iterates over the string, and prints the index of the first occurrence of the specified character. If the character is not found, tell that to the user.

function findIndex(str, letter){
    // Loop through "str" looking for "letter"
    for(var i = 0; i < str.length; i++){  
        // If the current letter in the str is the same as the letter we're looking for
        if(letter === str[i]){
            // If we reach this point, it means that it found the letter we're lookin
            // for and therefore we are safe to finish running this function
            return i;
        }
    }
    // If this next code runs, it means that our "if" statement never evaluated to
    // true, and therefore we 1) didn't find the letter were looking for, and 2) we
    // never killed the function with the "return" statement.
    return "Didn't find " + letter + " in the word " + str;
}

// The function doesn't have a console.log anywhere, it just returns a value.
// Therefore we still need to console.log whatever it is that the function returns
// in order to see it in our console.
console.log(findIndex('apple','l'));

//console.log(str[0]);
//console.log(str[1]);
//console.log(str[2]);
//console.log(str[3]);
//console.log(str[4]);


//Write a function that accepts an array of numbers as a parameter. Quit the function when the number 42 is found. Let the user know if 42 is not found.
var array = [1,2,3,4,42,51];

function newArray(){
    for(var i = 0; i <= array.length; i++){
        if(array[i] === 42){
            return 'you found it';
            break;
        } else{
            return 'number 42 was not found';
        }
    }
}
newArray();

//find out if 42 is there
//if it is therestop the function
// if not there tell the user it is not found



//
////Write a function that accepts 10 numbers in an array and then prints out the smallest number out of the ten.
//
var array = [2,3,4,1,5,6,7,8,9,10];

function lowestNumber(){
    for(var i = 0; i < array.length; i++){
        console.log(Math.min(array[i]));
    }
}
lowestNumber();





//
////Create a for loop that iterates through 101 numbers (from 0 - 100). If the current iteration is an Odd number, print "Odd" to the console, otherwise print "Even".
//
//for(var i = 0; i < 101; i++){
//    if((i % 2 === 0) && (i != 0)){
//        console.log('even');
//    } else if(i % 2 != 0){
//        console.log('odd');
//    } else{
//        console.log('zero');
//    }
//}


/*
Write a for loop that prints 0 to 99 in the terminal, one line at a time
*/

//for(var i = 0; i < 100; i++){
//    console.log(i);
//}



/*
Write a for loop that prints 0 to 1000 ... ""
*/

//for (var i = 0; i < 1001; i++){
//    console.log(i);
//}




/*
Write a for loop that prints 5 to 105 ...""
*/
//for(var i = 5; i < 106; i++){
//    console.log(i);
//}






//var alphabet = "abcdefghijklmnopqrstuvwxyz";
///*
//Write a for loop that prints each letter of the alphabet to the console, one line at a time
//*/
//for(var i = 0; i < alphabet.length; i++){
//    console.log(alphabet[i]);
//}






//var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
///*
//Write a for loop that prints the square of each number in the nums array, one line at a time.
//*/
//
//for(var i = 0; i < nums.length; i++){
//    var square = Math.sqrt(nums[i]);
//    console.log(square);
//}




