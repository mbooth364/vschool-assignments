var submit = $("#submit-new-score");
var nameInput = $("#name");
var checkbox = $("#check");
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addNewScore() {
    if (checkbox[0].checked) {
        if (getRandomInt(1, 3) === 1) {
            message = "nice try";
        } else if (getRandomInt(1, 3) === 2) {
          message = "You lose";
        } else {
            message = "nope";
        }
    } else {
        alert("R U scared to trash talk?");
    };
    var game = $("#game").val();
    var name = $("#name").val();
    var date = $("#date").val();
    var score = $("#score").val();
    var time = $("#time").val();
    $("#high-score-table").append(`
        <tr>
            <td>${name}</td>
            <td>${game}</td>
            <td>${date}</td>
            <td>${score}</td>
            <td>${time}</td>
            <td>${message}</td>
        </tr>
    `);
}

submit.click(addNewScore);

 





