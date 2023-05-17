const body = document.querySelector("body");
const output = document.querySelector("#demo");
let count = 0;

const changeBackground = (elm) => {
    body.style.backgroundColor = elm;
    count++;
    output.innerHTML = `Du hast die Farbe ${count} mal geändert.`;
}

const changeHandle = () => {
    const rotValue = document.querySelector("#rot").value;
    const grunValue = document.querySelector("#grun").value;
    const blauValue = document.querySelector("#blau").value;

    console.log({rotValue}, {grunValue}, {blauValue});

    output.innerHTML = `rgb(${rotValue}, ${grunValue}, ${blauValue})`;

    body.style.backgroundColor = `rgb(${rotValue}, ${grunValue}, ${blauValue})`;
}