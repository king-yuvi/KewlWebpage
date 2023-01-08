var countdownDate = new Date("Feb 14, 2023 00:00:00").getTime();
var process = setInterval(function(){
    var now = new Date().getTime();
    var progress = countdownDate - now;
    
    var days = Math.floor(progress / (1000 * 60 * 60 * 24));
    var hours = Math.floor((progress % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((progress % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;

    if (progress<0){
    clearInterval(process);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    }
}, 1000);