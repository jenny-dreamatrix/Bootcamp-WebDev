import './Button.css'
import { Link } from "react-router-dom";

const Button2 = () => {
    return ( 
        <Link className='button' to='/blog'>Go to articles</Link>
     );
}

export default Button2;