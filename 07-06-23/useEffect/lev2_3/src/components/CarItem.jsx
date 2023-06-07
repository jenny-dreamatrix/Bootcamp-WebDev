import { Link } from "react-router-dom";
import './CarItem.css'

const CarItem = (props) => {
    return ( 
        <article>
            <h2>{props.car["CarMake"]}</h2>
            <Link to={`/${props.car["id"]}`}>Read more</Link>
        </article>
     );
}

export default CarItem;