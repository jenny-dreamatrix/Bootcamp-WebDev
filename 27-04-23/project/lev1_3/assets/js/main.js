// globale Variablen erstellen

let totalSum = 0;
let output = document.querySelector(".output");

// in den Funktionen die Variablen überschreiben

function add1(){
    totalSum = totalSum + 1;
    console.log(totalSum);
    output.innerHTML = totalSum;
}

function remove1(){
    totalSum = totalSum - 1;
    console.log(totalSum);
    output.innerHTML = totalSum;
}

function add10(){
    totalSum = totalSum + 10;
    console.log(totalSum);
    output.innerHTML = totalSum;
}

function remove10(){
    totalSum = totalSum - 10;
    console.log(totalSum);
    output.innerHTML = totalSum;
}

function add100(){
    totalSum = totalSum + 100;
    console.log(totalSum);
    output.innerHTML = totalSum;
}

function remove100(){
    totalSum = totalSum - 100;
    console.log(totalSum);
    output.innerHTML = totalSum;
}

function reset(){
    totalSum = 0;
    console.log(totalSum);
    output.innerHTML = totalSum;
}

function multiply2(){
    totalSum = totalSum * 2;
    console.log(totalSum);
    output.innerHTML = totalSum;
}