

var newGoombas = document.getElementById("submit-new-caught");
newGoombas.addEventListener("click", function () {
    var submitBox = document.getElementById("new-goombas-caught").value;
    var goombasCost = submitBox * 7;
    var goombasCaught = document.getElementById("new-goombas-caught").value;
    var outputCaught = document.getElementById("total-goombas-caught");
    var outputCost = document.getElementById("goombas-cost");
    outputCost.textContent = goombasCost;
    outputCaught.textContent = goombasCaught;
})


var newBobs = document.getElementById("submit-new-caught");
newBobs.addEventListener("click", function () {
    var submitBox = document.getElementById("new-bobs-caught").value;
    var bobsCost = submitBox * 7;
    var bobsCaught = document.getElementById("new-bobs-caught").value;
    var outputCaught = document.getElementById("total-bobs-caught");
    var outputCost = document.getElementById("bobs-cost");
    outputCaught.textContent = bobsCaught;
    outputCost.textContent = bobsCost;
})

var newCheeps = document.getElementById("submit-new-caught");
newCheeps.addEventListener("click", function () {
    var submitBox = document.getElementById("new-cheeps-caught").value;
    var cheepsCost = submitBox * 11;
    var cheepsCaught = document.getElementById("new-cheeps-caught").value;
    var outputCaught = document.getElementById("total-cheeps-caught");
    var outputCost = document.getElementById("cheeps-cost");
    outputCaught.textContent = cheepsCaught;
    outputCost.textContent = cheepsCost;
})



var totalCost = document.getElementById("submit-new-caught");
totalCost.addEventListener("click", function () {
    var goombasCaught = document.getElementById('new-goombas-caught').value;
    var bobsCaught = document.getElementById("new-bobs-caught").value;
    var cheepsCaught = document.getElementById("new-cheeps-caught").value;
    var total = (goombasCaught * 7) + (bobsCaught * 7) + (cheepsCaught * 11);
    var output = document.getElementById("total-coins");
    output.textContent = total;
});