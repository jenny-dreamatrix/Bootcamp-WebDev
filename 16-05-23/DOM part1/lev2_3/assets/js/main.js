
const changeBtn = document.querySelector("#navChange");
const container = document.getElementsByTagName("ul");

const homeNav = document.getElementsByTagName("li")[0];
const newsNav = document.getElementsByTagName("li")[1];
const contactNav = document.getElementsByTagName("li")[2];

console.log({homeNav}, {newsNav}, {contactNav});

const change = () => {
    homeNav.style.backgroundColor = "#f6c89f";
    newsNav.style.backgroundColor = "#ffe7d1";
    contactNav.style.backgroundColor = "#4b8e8d";
    
    container.style.backgroundColor = "#4b8e8d";
    changeBtn.style.backgroundColor = "#396362";
}

changeBtn.addEventListener("click", change);