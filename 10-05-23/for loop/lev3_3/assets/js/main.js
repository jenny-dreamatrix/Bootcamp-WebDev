// lev 3_3

const output = document.querySelector(".output");

const loopMe = () => {
    let number = Number(document.querySelector("#number").value);
    console.log(number);

    let arrayO = [];

    if (number === 0){
        output.innerHTML = "ERROR";
        
    } else if (number % 2 === 0 ){
        for (let i = 1; i <= number; i++){
            arrayO.push(`o`);
        }
        umformung(arrayO);

    } else {
        for (let i = 1; i <= number; i++){
            if (i % 2 === 0){
                arrayO.push(`0`);
            } else {
                arrayO.push(`o`);
            }
        }
        umformung(arrayO);
    }
}

const umformung = (arrayO) => {
    console.log(arrayO);
    arrayO = arrayO.toString();
    console.log(arrayO);

    arrayO = arrayO.replaceAll(",", "");
    console.log(arrayO);

    output.innerHTML = `l${arrayO}p`;
}