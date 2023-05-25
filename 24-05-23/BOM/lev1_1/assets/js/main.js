// timeout

console.log("Start: Warten für 3 Sekunden..");

const timeoutFunktion = () => {
    console.log("Erledigt. Du hast 3 Sekunden verschwendet.");
}

setTimeout(timeoutFunktion, 3000);

// counter interval

let count = 10;

const counter = () => {
    if(count > 0){
        console.log(count);
    } else if(count == 0){
        console.log("Endlich Feierabend!");
    } else if (count == -1){
        clearInterval(interval);
    }
    count--;
}

let interval = setInterval(counter, 1000);