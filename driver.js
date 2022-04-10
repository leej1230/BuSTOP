const current_min = document.getElementById('wm');
const current_sec = document.getElementById('ws');

const currentMinute = document.getElementById('new_min');
const currentSecond = document.getElementById('new_sec');

const setCurrentValue_min = (val) => {
    currentMinute.innerText = val;
}

const setCurrentValue_sec = (val) => {
    currentSecond.innerText = val;
}

const rangeOnChange_min = (e) =>{
    setCurrentValue_min(e.target.value);
    input_min = e.target.value;
}
const rangeOnChange_sec = (e) =>{
    setCurrentValue_sec(e.target.value);
    input_sec = e.target.value;
}

window.addEventListener('load', function() {
    current_min.addEventListener('input', rangeOnChange_min);
    current_sec.addEventListener('input', rangeOnChange_sec);
    setCurrentValue(current_min.value);
    setCurrentValue(current_sec.value);
})

window.addEventListener('load', function() {
    document.getElementById("nextbutton").onclick = function(){
        var text = document.getElementById("bikeracks").value;
        location.href = "driver_result.html?data="+encodeURIComponent(text);
    }
})
