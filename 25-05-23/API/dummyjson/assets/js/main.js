
fetch("https://dummyjson.com/products")
.then((res) => res.json())
.then((data) => {
    const products = data.products;
    console.log(products);

    products.forEach(product => {
        const name = product.title;
        const description = product.description;
        const category = product.category;
        const brand = product.brand;
        const price = product.price;
        const image = product.images[0];

        const htmlNewProduct = `<article><h2>${name}</h2><h3>${brand}</h3><p>${description}</p><h5>${price}</h5></article>`;

        document.querySelector("main").insertAdjacentHTML("beforeend", htmlNewProduct);

        

    });
    

})
.catch((err) => console.log(`Fehler: ${err}`));


// fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
// .then(res => res.json())
// .then(console.log);
            