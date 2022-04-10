window.addEventListener('load', function() {
    var data = location.href.split("?")[1];
    var text = data.split("=")[1];
    document.getElementById("available_racks").innerHTML = decodeURIComponent(text);
})

var timeleft = 900;
var downloadTimer = setInterval(function(){
if(timeleft <= 0){
    clearInterval(downloadTimer);
}
document.getElementById("progressBar").value = 900 - timeleft;
timeleft -= 1;
}, 1000);