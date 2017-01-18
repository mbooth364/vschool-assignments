var fruit = ["banana", "apple", "orange", "watermelon"]; 
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


vegetables.pop();
fruit.splice(0, 1);

fruit.indexOf("orange");

fruit.push(fruit.indexOf("orange"));

vegetables.push(vegetables.length);
console.log(vegetables);

var food = fruit.concat(vegetables);
console.log(food);

food.splice(4, 2);
console.log(food);

food.reverse();
console.log(food.toString());

