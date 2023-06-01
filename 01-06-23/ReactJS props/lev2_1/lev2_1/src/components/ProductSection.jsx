import SingleProduct from "./SingleProduct";
import "./ProductSection.css"

const ProductSection = () => {

let productsArray = [
    {
        preis: "30$",
        name: "cocooil",
        source: "https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg"
    },
    {
        preis: "60$",
        name: "Polaroid",
        source: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
        preis: "20$",
        name: "Maui Moisture",
        source: "https://static.wixstatic.com/media/25ebdc_11569a061f824bc99cda2e6b1ac6348b~mv2.jpg/v1/fill/w_740,h_493,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/25ebdc_11569a061f824bc99cda2e6b1ac6348b~mv2.jpg"
    }
]

    return (  
        <section>
            <h1>SUPERSHOP</h1>
            <figure>
                {productsArray.map((product, index) => {return <SingleProduct singleProduct={product} key={index} />})}
            </figure>
        </section>
    );
}
 
export default ProductSection;