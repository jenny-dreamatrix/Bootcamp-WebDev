
const time = document.querySelector("#time");
let interval;
let secondsTotal;

const startMinCountdown = () => {
    const minutesInput = Number(document.querySelector("#minutes").value);

    // Minutenangabe in Sekunden umrechnen
    secondsTotal = minutesInput * 60;

    interval = setInterval(countdown, 1000);
}

const countdown = () => {
    if(secondsTotal >= 0){
    // mit Math.floor rundet man ab auf ganze Zahl -> wenn also z.b. die minutes unter 2 gehen, wird 1 dort stehen
    // z.b. 120 Sekunden / 60 = 2 Minuten   aber: 119 Sekunden / 60 = 1,98 -> wird abgerundet auf 1 Minute (verbleibend)
    let minutesLeft = Math.floor(secondsTotal / 60);
    // restliche Sekunden sind die gesamte Sekundenanzahl minus die Minuten (in Sekunden umgerechnet)
    // let secondsLeft = secondsTotal - minutesLeft * 60;

    // oder man bestimmt den Rest (restliche Sekunden, wenn man secondsTotal durch 60 teilt, um in Minuten umzurechnen):
    let secondsLeft = secondsTotal % 60;

    // console.log({secondsLeft}, {minutesLeft});

    // pro Durchlauf wird 1 Sekunde abgezogen
    secondsTotal -= 1;

    // 0 hinzufügen, wenn Minute oder Sekunde kleiner als 10 ist, andernfalls keine Änderung
    minutesLeft = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
    secondsLeft = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;

    time.innerHTML = `${minutesLeft}:${secondsLeft}`;
    
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