
const button = document.querySelector("#btn");
const zeit = document.querySelector(".zeit");

let interval;
let count = 100;

const intervalGo = () => {
    interval = setInterval(counter, 100);
}

const counter = () => {
    if(count <= 100 && count >= 0){
        zeit.innerHTML = `${count}%`;
        count--;
    } else {
        clearInterval(interval);
    }
}