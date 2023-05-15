const button = document.querySelector("#clickMe");
let anzahl = 0;

button.addEventListener("click", () => {
    anzahl++;
    button.innerHTML = `Click me: ${anzahl}`;
})