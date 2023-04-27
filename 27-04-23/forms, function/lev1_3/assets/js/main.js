
function differenzAlter(){
    const differenz = document.querySelector(".differenz");

    let alter1 = Number(document.querySelector("#alter1").value);
    let alter2 = Number(document.querySelector("#alter2").value);

    differenz.innerHTML = Math.abs(alter1-alter2);

}