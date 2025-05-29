import { Link } from "react-scroll";

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
      <button className="navbar-cta">Let's Connect</button>
    </nav>
  );
};

export default Navbar;
