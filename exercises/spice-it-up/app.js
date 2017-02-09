

var submit = $("#submit-new-caught");//submit button
var goombasInput = $("#new-goombas-caught");//input
var goombasCaught = $("#total-goombas-caught");//output
var newGoombasCost = $("#goombas-cost");

function addGoombas(){
    var newCaught = goombasInput.val();
    var newCost = newCaught * 7;
    goombasCaught.append(`${newCaught}`);
    newGoombasCost.append(`${newCost}`);
    
}
submit.click(addGoombas);

var submit = $("#submit-new-caught");//submit button
var bobsInput = $("#new-bobs-caught");//input
var bobsCaught = $("#total-bobs-caught");//output
var bobsCost = submit * 7;
var newbobsCost = $("#bobs-cost");
function addBobs(){
    var newCaught = bobsInput.val();
    var newCost = newCaught * 7;
    bobsCaught.append(`${newCaught}`);
    newbobsCost.append(`${newCost}`);
    
}
submit.click(addBobs);

var submit = $("#submit-new-caught");//submit button
var cheepsInput = $("#new-cheeps-caught");//input
var cheepsCaught = $("#total-cheeps-caught");//output
var newcheepsCost = $("#cheeps-cost");
function addCheeps(){
    var newCaught = cheepsInput.val();
    var newCost = newCaught * 11;
    cheepsCaught.append(`${newCaught}`);
    newcheepsCost.append(`${newCost}`);
    var audio = new Audio("http://themushroomkingdom.net/sounds/wav/smw/smw_coin.wav");
    audio.play();
}
submit.click(addCheeps);


function totalCost() {
    var submit = $("#submit-new-caught");
    var cheepsCaught = $("#total-cheeps-caught");
    var bobsCaught = $("#total-bobs-caught");
    var goombasCaught = $("#total-goombas-caught");
    var total = cheepsCaught.val();
    total.append(`${totalCoins}`);
}
submit.click(totalCost);

$("#submit-night").click(function(){$('#marioLogo').css('color', 'yellow')})
$("#submit-night").click(function(){$('.jumbotron').css('backgroundColor', 'black')})
$("#submit-night").click(function(){$('#submit-night').css('backgroundColor', 'white')})
$("#submit-night").click(function(){$('#submit-night').css('color', 'black')})
$("#submit-night").click(function(){$('.enemyImage').css('border', '5px solid yellow')})
$("#submit-night").click(function(){$('.links').css('color', 'yellow')})
$("#submit-night").click(function(){$('.submit-night').text('Night Time')})



//var newBobs = $("#submit-new-caught");
//newBobs.addEventListener("click", function () {
//    var submitBox = $("#new-bobs-caught").value;
//    var bobsCost = submitBox * 7;
//    var bobsCaught = $("#new-bobs-caught").value;
//    var outputCaught = $("#total-bobs-caught");
//    var outputCost = $("#bobs-cost");
//    outputCaught.textContent = bobsCaught;
//    outputCost.textContent = bobsCost;
//})
//var newCheeps = $("#submit-new-caught");
//newCheeps.addEventListener("click", function () {
//    var submitBox = $("#new-cheeps-caught").value;
//    var cheepsCost = submitBox * 11;
//    var cheepsCaught = $("#new-cheeps-caught").value;
//    var outputCaught = $("#total-cheeps-caught");
//    var outputCost = $("#cheeps-cost");   
////    outputCaught.textContent = cheepsCaught;
////    outputCost.textContent = cheepsCost;
//})
//var totalCost = $("#submit-new-caught");
//totalCost.addEventListener("click", function () {
//    var goombasCaught = $('#new-goombas-caught').value;
//    var bobsCaught = $("#new-bobs-caught").value;
//    var cheepsCaught = $("#new-cheeps-caught").value;
//    var total = (goombasCaught * 7) + (bobsCaught * 7) + (cheepsCaught * 11);
//    var output = $("#total-coins");
//    output.textContent = total;
//});