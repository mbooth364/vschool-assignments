function player1(name, game, date, score, time, message)  {
    this.name = name;
    this.game = game;
    this.date = date;
    this.score = score;
    this.time = time;
    this.message = message;
    
}

var newScore = document.getElementById("submit-new-score");
newScore.addEventListener("click" function() {
    var name = document.getElementById("name");
    var nameOutput = document.getElementById("form-name");
    nameOutput.textContent = name;
   
})
