
const time = document.querySelector("#time");
let interval;
let timeDifference;

const startMinCountdown = () => {
    const minutesInput = Number(document.querySelector("#minutes").value);

    let millisecondsInput = minutesInput * 60 * 1000;
    console.log({minutesInput}, {millisecondsInput});

    let timeNowMilliseconds = new Date().getTime();
    let timeCounter = new Date(timeNowMilliseconds-millisecondsInput).getTime();
    timeDifference = timeNowMilliseconds - timeCounter;

    console.log({timeNowMilliseconds}, {timeCounter}, {timeDifference});


    interval = setInterval(countdown, 1000);
}

const countdown = () => {

    if(timeDifference >= 0){
    let minutes = Math.floor(timeDifference / (1000 * 60));
    let seconds = Math.floor(timeDifference / 1000);
    console.log({seconds}, {minutes});

    let minuteTime = minutes;
    let secondsTime = seconds - minutes * 60;
    console.log({minuteTime}, {secondsTime});

    timeDifference -= 1000;

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