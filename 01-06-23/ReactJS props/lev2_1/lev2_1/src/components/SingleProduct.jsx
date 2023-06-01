import "./SingleProduct.css"

const SingleProduct = (props) => {
    return ( 
        <article>
            <img src={props.singleProduct.source} alt={props.singleProduct.name} />
            <p>{props.singleProduct.name}</p>
            <p>{props.singleProduct.preis}</p>
            <button>BUY NOW</button>
        </article>
     );
}
 
export default SingleProduct;