import { Link } from "react-router-dom";
import './Nav.css'

const Nav = () => {
    return ( 
        <nav>
            <h2>My Life</h2>
            <div>
            <Link className="nav-link" to='/'>Home</Link>
            <Link className="nav-link" to='/blog'>Blog</Link>
            </div>
        </nav>
     );
}
 
export default Nav;