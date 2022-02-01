import { Link } from "react-router-dom";

//styles
import '../styles/NavBar.css'

//assets
import Logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <nav className="desktop-nav">
      <Link to="/">
        <img src={Logo} alt="Home page" className="brand" />
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/login" className="login">
            Log In
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
