import { useRef, useState } from "react";

//assets
import Logo from "../assets/logo.svg";

const MobileNav = () => {
  const mobileMenu = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#8a69d2"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  );

  const mobileMenuClose = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#8a69d2"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
    </svg>
  );

  const [openMenu, setOpenMenu] = useState(true);
  const slideMenu = useRef();

  const HandleOpenMenu = () => {
    slideMenu.current.classList.toggle("show-menu");

    setOpenMenu(!openMenu);
  };

  return (
    <nav className="mobile-nav">
      <a href="#">
        <img src={Logo} alt="Home page" className="brand" />
      </a>
      <button className="mobile-menu" onClick={HandleOpenMenu}>
        {openMenu ? mobileMenu : mobileMenuClose}
      </button>
      <div className="slide-in-menu" ref={slideMenu}>
        <ul className="mobile-nav-links">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
          <li>
            <a href="#" className="login-mobile">
              Log In
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
