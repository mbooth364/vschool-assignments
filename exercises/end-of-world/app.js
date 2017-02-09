


var timer = document.getElementById("timer");
var countDown = 2;
timer.textContent = countDown+1;
var intervalId;
function updateTime() {
    timer.textContent = countDown;
    countDown--;
    if(countDown < 0) {
        clearInterval(intervalId);
        document.body.style.background = url("http");
        timer.style,color = "white";
        var audio = new Audio('url');
        audio.play();
        
    }
}

intervalId = setInterval(updateTime, 1000);


//Jquery way

var timer = $("timer");
var countDown = 2;
timer.text(countDown + 1);
var intervalId;

function updateTime() {
    timer.textContent = countDown;
    countDown--;
    if(countDown < 0) {
        clearInterval(intervalId);
        $("body").css("background", url("http");)
        timer.css("color",  "white");
        var audio = new Audio('url');
        audio.play();
        
    }
}
intervalId = setInterval(updateTime, 1000);