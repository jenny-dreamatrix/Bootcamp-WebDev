const selectInput = document.querySelector("#my-select");
const output = document.querySelector(".output");

selectInput.addEventListener("change", () => {
    let value = selectInput.value;
    output.innerHTML = `Sie haben ausgewählt ${value}`;
})