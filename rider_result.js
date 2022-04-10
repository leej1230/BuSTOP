// Set the date we're counting down to

// goalTime = Bus stop time
var goalTime = new Date().getTime();
// 50000 is temporary number for test
var countDownDate = new Date(goalTime + 50000).getTime();

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("time_measure").innerHTML = minutes + "m " + seconds + "s ";

    if (distance < 0) {
    clearInterval(x);
    document.getElementById("time_measure").innerHTML = "EXPIRED";
    }
}, 1000);