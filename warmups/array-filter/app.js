
Array.prototype.myFilter = function (callback) {  
  var array = this;
  var newArray = []
    for(var i = 0; i < array.length; i++) {
        if(callback(array[i])){
           newArray.push(array[i]);
           
           }
    }
    return newArray;
};

//myFilter is the function name, prototype is calling all the myFilter functions
//"this" refers to the myFilter functions














var ourArray = ["pan", "can", "apple"];

//filter all words less than 4 chracters long

ourNewArray = ourArray.myFilter(function(item) {
    return item.length < 4;
})
console.log(ourNewArray);



var numbers = [1, 2, 5, 48, 30, 58];

var newNumbers = numbers.myFilter(function(num) {
    return num < 5;
})
console.log(newNumbers);