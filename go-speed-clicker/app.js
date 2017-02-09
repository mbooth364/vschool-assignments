//var submit = $("#clickMe");
//
//function checkClicks(){
//    var
//}



var count = 0;
var button = $("#clickMe");
var display = $("#textbox");

button.onclick = function(){
    count++;
    display.text = count;
}
onclick();