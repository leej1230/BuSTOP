const current_min = document.getElementById('wm');
const current_sec = document.getElementById('ws');

const currentMinute = document.getElementById('new_min');
const currentSecond = document.getElementById('new_sec');

// 現在の値を埋め込む関数
const setCurrentValue_min = (val) => {
    currentMinute.innerText = val;
}

const setCurrentValue_sec = (val) => {
    currentSecond.innerText = val;
}

// inputイベント時に値をセットする関数
const rangeOnChange_min = (e) =>{
    setCurrentValue_min(e.target.value);
    input_min = e.target.value;
}
const rangeOnChange_sec = (e) =>{
    setCurrentValue_sec(e.target.value);
    input_sec = e.target.value;
}

window.addEventListener('load', function() {
    // 変更に合わせてイベントを発火する
    current_min.addEventListener('input', rangeOnChange_min);
    current_sec.addEventListener('input', rangeOnChange_sec);
    // ページ読み込み時の値をセット
    setCurrentValue(current_min.value);
    setCurrentValue(current_sec.value);
})

window.addEventListener('load', function() {
    document.getElementById("nextbutton").onclick = function(){
        var text = document.getElementById("bikeracks").value;
        location.href = "driver_result.html?data="+encodeURIComponent(text);
    }
})

window.addEventListener('load', function() {
    document.getElementById("wm").onclick = function(){
        var text = document.getElementById("bikeracks").value;
        location.href = "driver_result.html?data="+encodeURIComponent(text);
    }
})