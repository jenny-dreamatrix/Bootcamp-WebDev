
fetch("https://picsum.photos/v2/list")
.then((res) => res.json())
.then((data) => {
    console.log(data);
    data.forEach(beitrag => {
        console.log(beitrag);

        const author = beitrag.author;
        const image = beitrag.download_url;

        // entweder so:
        // const wrapper = document.createElement("figure");

        // const imgOfBeitrag = document.createElement("img");
        // imgOfBeitrag.setAttribute("src", image);
        // wrapper.appendChild(imgOfBeitrag);

        // const authorOfBeitrag = document.createElement("figcaption");
        // authorOfBeitrag.textContent = author;
        // wrapper.appendChild(authorOfBeitrag);

        // document.querySelector("main").appendChild(wrapper);

        // oder so:
        const inhalt = `<figure><img src="${image}"><figcaption>${author}</figcaption></figure>`;
        document.querySelector("main").insertAdjacentHTML("beforeend", inhalt);
    });
})
.catch((err) => console.log(`Fehler: ${err}`));

