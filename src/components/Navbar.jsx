import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/projects">Projects</NavLink>
            </ul>
        </div>
    )
}

export default Navbar;