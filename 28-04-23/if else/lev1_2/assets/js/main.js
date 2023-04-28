const output = document.querySelector(".output");

function weather(){
    let wetterQualität = Number(document.querySelector("#wetter").value);

    if (wetterQualität >= 8){
        output.innerHTML = "Das Wetter ist super.";
    } else if (wetterQualität == 6 || wetterQualität == 7) {
        output.innerHTML = "Das Wetter ist gut.";
    } else if (wetterQualität >= 3 && wetterQualität <= 5) {
        output.innerHTML = "Das Wetter ist okay.";
    } else if (wetterQualität <= 2) {
        output.innerHTML = "Das Wetter ist schlecht.";
    }

}
