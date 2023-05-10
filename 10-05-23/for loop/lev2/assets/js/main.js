
// lev 2_1

const imageArray = () => {
    let returnArray = [];

    for (let i = 1; i <= 100; i++){

        if (i < 10){
            returnArray.push(`image_00${i}.jpg`);
        } else if (i >= 10 && i < 100){
            returnArray.push(`image_0${i}.jpg`);
        } else {
            returnArray.push(`image_${i}.jpg`);
        }
    }
    console.log(returnArray);
}

imageArray();


// lev 2_2

const output = document.querySelector(".output");

const loopMe = () => {
    let number = Number(document.querySelector("#number").value);
    console.log(number);

    let arrayO = [];

    for (let i = 0; i < number; i++){
        arrayO.push(`o`);
    }
    console.log(arrayO);

    arrayO = arrayO.toString();
    console.log(arrayO);

    arrayO = arrayO.replaceAll(",", "");
    console.log(arrayO);

    output.innerHTML = `l${arrayO}p`;
}
