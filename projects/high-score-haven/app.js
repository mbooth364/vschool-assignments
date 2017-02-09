var submit = $("#submit-new-score");
var nameInput = $("#name");


function addNewScore() {
    var game = $("#game").val();
    var name = $("#name").val();
    var date = $("#date").val();
    var score = $("#score").val();
    var time = $("#time").val();
    var message = $("#message").val();
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

