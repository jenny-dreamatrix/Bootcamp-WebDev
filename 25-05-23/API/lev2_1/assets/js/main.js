
fetch("https://picsum.photos/v2/list")
.then((res) => res.json())
.then((data) => {
    console.log(data);
    data.forEach(beitrag => {
        console.log(beitrag);

        const author = beitrag.author;
        const image = beitrag.download_url;

        const wrapper = document.createElement("figure");

        const imgOfBeitrag = document.createElement("img");
        imgOfBeitrag.setAttribute("src", image);
        wrapper.appendChild(imgOfBeitrag);

        const authorOfBeitrag = document.createElement("figcaption");
        authorOfBeitrag.textContent = author;
        wrapper.appendChild(authorOfBeitrag);

        document.querySelector("main").appendChild(wrapper);


        // const inhalt = `<img src="${image}"><figcaption>${author}</figcaption>`;
        // wrapper.insertAdjacentHTML("afterbegin",inhalt);
        // document.querySelector(".test").insertAdjacentHTML("afterbegin", wrapper);
    });

})
.catch((err) => console.log(`Fehler: ${err}`));

