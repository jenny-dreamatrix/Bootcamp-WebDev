
const time = document.querySelector("#time");
let interval;
let timeCounter;

const startMinCountdown = () => {
    const minutesInput = Number(document.querySelector("#minutes").value);

    timeCounter = minutesInput * 60 * 1000;

    interval = setInterval(countdown, 1000);
}

const countdown = () => {

    if(timeCounter >= 0){
    let minutes = Math.floor(timeCounter / (1000 * 60));
    let seconds = Math.floor(timeCounter / 1000);
    console.log({seconds}, {minutes});

    let minuteTime = minutes;
    let secondsTime = seconds - minutes * 60;
    console.log({minuteTime}, {secondsTime});

    timeCounter -= 1000;

    time.innerHTML = `${minuteTime}:${secondsTime}`;
    } else {
        clearInterval(interval);
    }
}

const pauseMinCountdown = () => {
    clearInterval(interval);
}

const restartMinCountdown = () => {
    interval = setInterval(countdown, 1000);
}