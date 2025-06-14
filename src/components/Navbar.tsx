import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimesCircle } from "react-icons/fa";
import "../styles/navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleNavToggle = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  console.log(isMenuOpen);

  const handleLinkSelect = (): void => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="home" spy={true} smooth={true} offset={-80} duration={500}>
        <div className="navbar-brand">Lupus Together</div>
      </Link>

      <ul className={`navbar-links ${isMenuOpen ? "mobile-nav-active" : ""}`}>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="active"
            onClick={handleLinkSelect}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="lupus"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="active"
            onClick={handleLinkSelect}
          >
            Understanding Lupus
          </Link>
        </li>
        <li>
          <Link
            to="stories"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="active"
            onClick={handleLinkSelect}
          >
            Stories
          </Link>
        </li>
        <li>
          <Link
            to="members"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="active"
            onClick={handleLinkSelect}
          >
            Meet the Team
          </Link>
        </li>
        <li>
          <Link
            to="join"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="active"
            onClick={handleLinkSelect}
          >
            Get Involved
          </Link>
        </li>
      </ul>

      <div className="navbar-phone-btn">
        <div className="default-text">Contact Us</div>
        <div className="hover-text">011-456-7890</div>
      </div>

      {/* Hamburger Menu - visible only on mobile */}
      <button className="navbar-toggle" onClick={handleNavToggle}>
        {isMenuOpen ? <FaTimesCircle size={24} /> : <FaBars size={24} />}
      </button>

      {isMenuOpen && (
        <div className="mobile-nav-overlay" onClick={handleNavToggle} />
      )}
    </nav>
  );
};

export default Navbar;
