
function submitValue(){
    const output = document.querySelector(".output");

    let number = Number(document.querySelector(".num").value);

    output.innerHTML = number*2;
    
}