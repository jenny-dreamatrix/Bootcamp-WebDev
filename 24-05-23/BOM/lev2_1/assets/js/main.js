const messageDiv = document.querySelector(".message");
const countOutput = document.querySelector("#count");

let count = 10;

const disappear = () => {
    if(count == 10){
        countOutput.innerHTML = `${count}`;
        count--;
    } else if(count > 0 && count < 10){
        countOutput.innerHTML = `0${count}`;
        count--;
    } else if (count == 0){
        countOutput.innerHTML = `${count}`;
        clearInterval(interval);
        messageDiv.style.opacity = "0";
    }
}

const interval = setInterval(disappear, 1000);