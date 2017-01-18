function sum(num1, num2){
    console.log(num1 + num2);
}
sum(5, 10);

//Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

function largestNumber(num1, num2, num3){
    console.log(Math.max(num1, num2, num3));
}
largestNumber(5, 6, 7);

//Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

function evenOdd(num){
    if(num %2 === 0){
        console.log("even");
    } else{
        console.log("odd");
    }
}
evenOdd();

//Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.

function str(string){
    if(string < string.length){
        console.log(string + string);
    } else{
        console.log(string.slice(0,7));
    }
}
str("hello how are you");

//Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.

function fib(n){
    
}

