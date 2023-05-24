
const button = document.querySelector("#btn");
const zeit = document.querySelector(".zeit");

let interval;
let count = 100;

const counter = () => {
    interval = setInterval(counterNew, 100);
}

const counterNew = () => {
    if(count <= 100 && count >= 0){
        zeit.innerHTML = `${count}%`;
        count--;
    } else {
        clearInterval(interval);
    }
}