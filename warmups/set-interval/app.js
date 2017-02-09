console.log("first line of program");




var num = 0;
function count() {
    console.log(num);
    num++;
    if (num === 5) {
        clearInterval(intervalId)
    }
}
var intervalId = setInterval(count, 1000);
console.log(intervalId);

console.log("im the eleventh line of program");

setTimeout(count, 2000);