import './Button.css'
import { Link } from "react-router-dom";

const Button = (props) => {

    return ( 
        <Link className='button' to={props.path}>Read more</Link>
     );
}

export default Button;