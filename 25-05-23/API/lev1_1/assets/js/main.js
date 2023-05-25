
fetch("https://picsum.photos/v2/list")
.then((res) => res.json())
.then((data) => console.log(data))
.catch((err) => console.log(`Fehler: ${err}`));