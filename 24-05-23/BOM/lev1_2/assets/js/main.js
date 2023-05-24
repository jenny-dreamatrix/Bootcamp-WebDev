
const button = document.querySelector("#btn");
const zeit = document.querySelector(".zeit");

let count = 100;

const counter = () => {
    let interval = setInterval(() => {
        if(count <= 100 && count >= 0){
            zeit.innerHTML = `${count}%`;
            count--;
        } else {
            clearInterval(interval)
        }
        }, 100);
}
