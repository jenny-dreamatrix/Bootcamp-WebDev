
const myFunction = () => {
    const changeColorElements = document.getElementsByClassName("example");
    // console.log(changeColorElements);
    // console.log(changeColorElements[1]);
    
    for(let i = 0; i < changeColorElements.length; i++){
        console.log(changeColorElements[i]);
        // changeColorElements[i].style.backgroundColor = "black";
        // changeColorElements[i].style.color = "white";
        changeColorElements[i].classList.toggle("black");
    }
}