import { Link } from "react-router-dom";
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from "../hooks/useAuthContext";

//styles
import '../styles/NavBar.css'

//assets
import Logo from "../assets/logo.svg";

const NavBar = () => {

  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className="desktop-nav">
      <Link to="/">
        <img src={Logo} alt="Home page" className="brand" title="Home Page"/>
      </Link>
      <ul className="nav-links">
        {!user && (
      <>
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
        </>
        ) }

        {user && (
          <>
            <li>hello, <span className="userName">{user.displayName}</span></li>
            <li><img src={user.photoURL} alt="User Photo" className="userPhoto"/></li>

            <li><button className="logout" onClick={logout}>Log out</button></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
