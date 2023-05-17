
const changeBtn = document.querySelector("#navChange");
const homeBtn = document.querySelector("#navHome");

console.log({changeBtn}, {homeBtn});

const change = () => {
    homeBtn.style.backgroundColor = "red";
    homeBtn.style.height = "30px";
    homeBtn.innerHTML = "emoH";
}

changeBtn.addEventListener("click", change);