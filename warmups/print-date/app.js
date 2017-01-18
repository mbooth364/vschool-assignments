
//
//function getDay(){
//    var today = new Date();
//    var day = today.getDay();
//    var days = ["sunday", "monday", "tuesday", "wednesday"]
//    document.getElementById("day-of-week").textContent= "today is: " + days[day];
//    console.log("today is: " + days[day]);
//    var time = today.toLocaleTimeString();
//    document.getElementById("time-of-day").textContent = "the time is" + time;
//    console.log("the time is: " + time);
//}
//    getDay();
//    setInterval(getDay, 2000);




function getDay() {
    var today = new Date();
    var day = today.getDay();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    
    document.getElementById("day-of-week").textContent = "Today is: " + days[day];
//    console.log("Today is: " + days[day]);
    
    var time = today.toLocaleTimeString();
    document.getElementById("time-of-day").textContent = "The time is: " + time
//    console.log("The time is: " + time);
}