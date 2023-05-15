const selectFarbe = document.querySelector("#farbeAuswahlen");
const button = document.querySelector("#button");
const main = document.querySelector("main");
let color ;

const selection = () => {
    event.preventDefault();
    color = selectFarbe.value;
    color = color.replace(" ", "");
    color = color.toLowerCase();
    console.log({color});
}

selectFarbe.addEventListener("change", selection);

const changeBG = () => {
    event.preventDefault();
    // console.log({color});
    main.style.backgroundColor = color;
}

button.addEventListener("click", changeBG);