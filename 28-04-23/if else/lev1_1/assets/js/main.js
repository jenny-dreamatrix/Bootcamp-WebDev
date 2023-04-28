const output = document.querySelector(".output");

function adult(){
    let age = Number(document.querySelector("#age").value);
    console.log(age);

    if (age >= 18) {
        console.log("true");
        output.innerHTML = "volljährig";
    } else {
        console.log("false");
        output.innerHTML = "minderjährig";
    }
}