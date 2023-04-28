const output = document.querySelector(".output");
const body = document.querySelector("body");

function checkAirQuality(){
    let luftqualität = Number(document.querySelector("#luftqualität").value);
    console.log(luftqualität);

    if (luftqualität <= 50){
        output.innerHTML = "<h2>Level of health concern: Good</h2>" + "<h2>Level of health effect: Little or no risk</h2>";
        body.classList.add("green");
        body.classList.remove("red", "yellow");
    } else if (luftqualität > 50 && luftqualität <= 100){
        output.innerHTML = "<h2>Level of health concern: Moderate</h2>" + "<h2>Level of health effect: Acceptable quality</h2>";
        body.classList.add("yellow");
        body.classList.remove("red", "green");
    } else {
        output.innerHTML = "<h2>Level of health concern: Unhealthy for sensitive groups</h2>" + "<h2>Level of health effect: Generable publics not likely affected</h2>";
        body.classList.add("red");
        body.classList.remove("green", "yellow");
    }
}