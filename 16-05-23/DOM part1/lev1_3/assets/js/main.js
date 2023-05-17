// list elements
const myList = document.querySelector("#myList");
let firstElementChild = myList.firstElementChild;
let firstElementChildNextElementSibling = firstElementChild.nextElementSibling.innerHTML;
firstElementChild = firstElementChild.innerHTML;
let lastElementChild = myList.lastElementChild;
let lastElementChildPreviousElementSibling = lastElementChild.previousElementSibling.innerHTML;
lastElementChild = lastElementChild.innerHTML;
// buttons
// achtung bei dem index, es sind auch <br> elemente im html !!
const divUnten = document.querySelector(".unten");
const firstElementChildBtn = divUnten.children[0];
const lastElementChildBtn = divUnten.children[2];
const nextElementSiblingBtn = divUnten.children[4];
const previousElementSiblingBtn = divUnten.children[6];
// output
const output = document.querySelector("output");

// console.log({nextElementSiblingBtn}, {previousElementSiblingBtn});
// console.log({firstElementChild}, {lastElementChild}, {firstElementChildNextElementSibling}, {lastElementChildPreviousElementSibling});


const firstElementChildContent = () => {
    output.innerHTML = firstElementChild;
}
firstElementChildBtn.addEventListener("click", firstElementChildContent);

const lastElementChildContent = () => {
    output.innerHTML = lastElementChild;
}
lastElementChildBtn.addEventListener("click", lastElementChildContent);

const nextElementSiblingContent = () => {
    output.innerHTML = firstElementChildNextElementSibling;
}
nextElementSiblingBtn.addEventListener("click", nextElementSiblingContent);

const previousElementSiblingContent = () => {
    output.innerHTML = lastElementChildPreviousElementSibling;
}
previousElementSiblingBtn.addEventListener("click", previousElementSiblingContent);




// const showContent = (elm) => {
//     output.innerHTML = elm;
// }
// previousElementSiblingBtn.addEventListener("click", showContent(lastElementChildPreviousElementSibling));