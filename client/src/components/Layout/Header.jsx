import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const navRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const showNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNavbar = () => {
    setIsNavOpen(false);
  };

  return (
    <header>
      <h3>LOGO</h3>
      <nav ref={navRef} className={isNavOpen ? "responsive_nav" : ""}>
        <Link to="/" onClick={closeNavbar}>
          Home
        </Link>

        <Link to="/about" onClick={closeNavbar}>
          About me
        </Link>
        <Link to="/contact" onClick={closeNavbar}>
          Contact
        </Link>
        <Link to="/login" onClick={closeNavbar}>
          Login
        </Link>
        <Link to="/register" onClick={closeNavbar}>
          Register
        </Link>
        <Link to="/cart" onClick={closeNavbar}>
          Cart
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Header;
