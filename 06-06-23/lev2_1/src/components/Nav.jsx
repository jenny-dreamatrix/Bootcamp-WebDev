import { NavLink } from "react-router-dom";
import './Nav.css'

const Nav = () => {
    return ( 
        <nav>
            <NavLink to='/speisekarte'>Speisekarte</NavLink>
            <NavLink to='/kontakt'>Kontakt</NavLink>
            <NavLink to='/oeffnungszeiten'>Öffnungszeiten</NavLink>
            <NavLink to='/galerie'>Galerie</NavLink>
        </nav>
     );
}
 
export default Nav;