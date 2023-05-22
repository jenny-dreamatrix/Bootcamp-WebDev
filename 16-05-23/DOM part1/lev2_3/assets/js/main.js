
const changeBtn = document.querySelector(".active");
const container = document.getElementsByTagName("ul")[0];
const homeNav = document.getElementsByTagName("li")[0];
const newsNav = document.getElementsByTagName("li")[1];
const contactNav = document.getElementsByTagName("li")[2];

// console.log({changeBtn}, {container});
// console.log({homeNav}, {newsNav}, {contactNav});

const change = () => {
    homeNav.style.backgroundColor = "#f6c89f";
    newsNav.style.backgroundColor = "#ffe7d1";
    contactNav.style.backgroundColor = "#4b8e8d";
    container.style.backgroundColor = "#333";
    changeBtn.style.backgroundColor = "#396362";
}

changeBtn.addEventListener("click", change);