//assets
import Logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <nav className="desktop-nav">
      <a href="#">
        <img src={Logo} alt="Home page" className="brand" />
      </a>
      <ul className="nav-links">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Sign Up</a>
        </li>
        <li>
          <a href="#" className="login">
            Log In
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
