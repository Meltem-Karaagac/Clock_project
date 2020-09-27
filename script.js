
document.querySelector("#trigger").addEventListener("load", digitalClock())

setInterval(digitalClock, 1000)
function digitalClock() {

    const digitalHours = document.querySelector(".hours");
    const digitalMinutes = document.querySelector(".minutes");
    const digitalSeconds = document.querySelector(".seconds");
    const am_pm = document.querySelector(".am_pm")

    let currentTime = new Date()



    digitalHours.innerHTML = currentTime.getHours();
    let hr = digitalHours.innerHTML
    digitalMinutes.innerHTML = currentTime.getMinutes();
    let min = digitalMinutes.innerHTML
    digitalSeconds.innerHTML = currentTime.getSeconds();
    let sec = digitalSeconds.innerHTML

    am_pm.innerHTML = "AM";

    if (parseInt(hr) > 12) {
        hr = (parseInt(hr) - 12)
        am_pm.innerHTML = "PM"
    }

    if (hr == 0) {
        hr = 12
        am_pm.innerHTML = "AM";
    }





    digitalHours.innerHTML = hr < 10 ? "0" + hr : hr;
    digitalMinutes.innerHTML = min < 10 ? "0" + min : min;
    digitalSeconds.innerHTML = sec < 10 ? "0" + sec : sec;
}


