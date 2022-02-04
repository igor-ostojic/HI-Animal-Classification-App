import { Link } from "react-router-dom";
import { useLogout } from '../hooks/useLogout';

//styles
import '../styles/NavBar.css'

//assets
import Logo from "../assets/logo.svg";

const NavBar = () => {

  const { logout } = useLogout();

  return (
    <nav className="desktop-nav">
      <Link to="/">
        <img src={Logo} alt="Home page" className="brand" title="Home Page"/>
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
        <li>
          <button className="logout" onClick={logout}>Log out</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
