const body = document.querySelector("body");


function changeBackground(){
    
let red = Number(document.querySelector("#red").value);

if(red == 1){
    body.classList.remove("red2", "red3", "red4")
    body.classList.add("red1");
} else if(red == 2){
    body.classList.remove("red1", "red3", "red4");
    body.classList.add("red2");
} else if(red == 3){
    body.classList.remove("red1", "red2", "red4");
    body.classList.add("red3");
} else if(red == 4){
    body.classList.remove("red1", "red2", "red3");
    body.classList.add("red4");
} else {
    body.classList.remove("red1", "red2", "red3", "red4");
}


let green = Number(document.querySelector("#green").value);

if(green == 1){
    body.classList.remove("green2", "green3", "green4")
    body.classList.add("green1");
} else if(green == 2){
    body.classList.remove("green1", "green3", "green4");
    body.classList.add("green2");
} else if(green == 3){
    body.classList.remove("green1", "green2", "green4");
    body.classList.add("green3");
} else if(green == 4){
    body.classList.remove("green1", "green2", "green3");
    body.classList.add("green4");
} else {
    body.classList.remove("green1", "green2", "green3", "green4");
}


let blue = Number(document.querySelector("#blue").value);

if(blue == 1){
    body.classList.remove("blue2", "blue3", "blue4")
    body.classList.add("blue1");
} else if(blue == 2){
    body.classList.remove("blue1", "blue3", "blue4");
    body.classList.add("blue2");
} else if(blue == 3){
    body.classList.remove("blue1", "blue2", "blue4");
    body.classList.add("blue3");
} else if(blue == 4){
    body.classList.remove("blue1", "blue2", "blue3");
    body.classList.add("blue4");
} else {
    body.classList.remove("blue1", "blue2", "blue3", "blue4");
}
}