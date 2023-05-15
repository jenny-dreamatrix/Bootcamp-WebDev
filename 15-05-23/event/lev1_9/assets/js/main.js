
const selectInputFarbe = document.querySelector("#farbeAuswahlen");
const button = document.querySelector("#button");
let index ;

const changeColor = () => {
    event.preventDefault();
    index = selectInputFarbe.selectedIndex;
    console.log({index});
    console.log(selectInputFarbe[index].value);
}

selectInputFarbe.addEventListener("change", changeColor);

// console.log(index);

const removeOption = () => {
    event.preventDefault();
    // console.log({index});
    selectInputFarbe[index].remove();
};

button.addEventListener("click", removeOption);