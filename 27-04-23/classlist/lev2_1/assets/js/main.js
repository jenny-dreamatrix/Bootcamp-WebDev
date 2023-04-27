function changeHeadline(){
    const headline = document.querySelector("h1");
    headline.classList.add("changed");
}

function resetHeadline(){
    const headline = document.querySelector("h1");
    headline.classList.remove("changed");
}