
function calculate(){
    let zahl = Number(document.querySelector("#zufallszahl").value);

    let differenz = zahl - 27;

    if (differenz > 27){
        console.log("multiply ", differenz*2);
    } 
}
