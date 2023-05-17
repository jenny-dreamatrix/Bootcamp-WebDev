const submitBtn = document.querySelector("#enter");
const liste = document.getElementsByTagName("ul")[0];

const speichern = () => {
    const input = document.querySelector("#userinput").value;

    let newListElement = document.createElement("li");
    newListElement.innerHTML = input;
    liste.appendChild(newListElement);
}

submitBtn.addEventListener("click", speichern);