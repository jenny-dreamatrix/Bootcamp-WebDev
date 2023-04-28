const output = document.querySelector(".output");

function greaterThan(){
    event.preventDefault();
    let age = Number(document.querySelector("#input").value);
    console.log(age);

    if (age >= 18) {
        console.log("true");
        output.innerHTML = "Ja, Du kannst Shisha rauchen";
    } else {
        console.log("false");
        output.innerHTML = "Du darfst noch nicht Shisha rauchen";
    }
}
