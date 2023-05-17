
const btn = document.getElementsByTagName("button")[0];
const umwickeln = document.querySelector(".umwickeln");
console.log({btn});
let counter = 0;

const addElement = () => {
    let newBox = document.createElement("div");
    newBox.setAttribute("class", "rechteck");
    newBox.innerHTML = counter;
    umwickeln.appendChild(newBox);

    if(counter == 0 || counter % 10 == 0 ){
        newBox.classList.add("weiss");
    }
    counter++;
};

btn.addEventListener("click", addElement);


