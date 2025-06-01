import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link
        to="home"
        spy={true}
        smooth={true}
        // offset={-80}
        duration={500}
        activeClass="active"
      >
        <div className="navbar-brand">Lupus Together</div>
      </Link>

      <ul className="navbar-links">
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="active"
          >
            About
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
          >
            Meet the Team
          </Link>
        </li>
      </ul>
      <div className="navbar-phone-btn">
        <div className="default-text">Contact Us</div>
        <div className="hover-text">011-456-7890</div>
      </div>

      {/* Hamburger Menu - visible only on mobile */}
      <div className="navbar-toggle">
        <FaBars size={24} />
      </div>
    </nav>
  );
};

export default Navbar;
