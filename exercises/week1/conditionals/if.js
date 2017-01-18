function myFunction(num1, num2){
    if(num1 < num2){
    console.log(num1);
    } else if(num1 > num2){
        console.log(num2)
    } else{
        console.log('numbers are equal');
    }
}
myFunction(1,2);



var aSmile = true;
var bSmile = false;

function smilingMonkeys(){
    if(aSmile === true && bSmile === true || aSmile === false && bSmile === false){
        console.log('you are in trouble');
} else {
    console.log('you are ok');
}
    smilingMonkeys();




var date = new Date();
var hour = date.getHours();

   if(hour < 10 ){
        console.log('good morning');
    } else if(hour >= 10 && hour <= 15){
        console.log('good afternoon');
    } else{
        console.log('good evening');
    }









