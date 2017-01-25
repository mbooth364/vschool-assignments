//function fixTeen(n){
//    return sumOfNumbers();
//}
//
//function sumOfNumbers(a, b, c){
//    if (sumOfNumbers < 13 && sumOfNumbers > 19){
//        n.push(sumOfNumbers());
//    }
//    
//   return  a + b + c;
//}
//console.log(fixTeen(sumOfNumbers(1, 2, 3)));
//console.log(fixTeen(sumOfNumbers(2, 13, 1)));
//console.log(fixTeen(sumOfNumbers(2, 15, 14)));




//write the noteensum function
    //take 3 values and send to helper function
    //which will turn 13,14,17,18, and 19 into 0 and leave everything else alone

function noTeenSum(a, b, c, callBack) {
    return callBack(a) + callBack(b) + callBack(c);
}

//helper function
    //use conditional which will decide if we should turn 13,14,17,18, and 19 into 0 or leave it alone

function fixTeen(n) {
    n = Number(n)
    if (n >= 13 && n <=19 && n !== 15 & n !== 16) {
        n = 0;
    }
    return n;
};

console.log(noTeenSum(1, 2, 3, fixTeen));
console.log(noTeenSum(2, 13, 1, fixTeen));
console.log(noTeenSum(2, 15, 14, fixTeen));