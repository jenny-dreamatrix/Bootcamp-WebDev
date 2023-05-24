
const time = document.querySelector("#time");
let interval;
let timeCounter;

const startMinCountdown = () => {
    const minutesInput = Number(document.querySelector("#minutes").value);

    // in Millisekunden umrechnen
    timeCounter = minutesInput * 60 * 1000;

    interval = setInterval(countdown, 1000);
}

const countdown = () => {

    if(timeCounter >= 0){
    // mit Math.floor rundet man ab auf ganze Zahl -> wenn also z.b. die minutes unter 2 gehen, wird 1 dort stehen 
    let minutes = Math.floor(timeCounter / (1000 * 60));
    let seconds = Math.floor(timeCounter / 1000);
    console.log({seconds}, {minutes});

    let minuteTime = minutes;
    // verbleibende Sekunden sind die gesamte Sekundenanzahl minus die Minuten (in Sekunden umgerechnet)
    let secondsTime = seconds - minutes * 60;
    console.log({minuteTime}, {secondsTime});

    // mit jedem Durchlauf wird 1 Sekunde abgezogen
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