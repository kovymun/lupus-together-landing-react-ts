import { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimesCircle, FaHeart } from "react-icons/fa";
import "../styles/navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLElement | null>(null);
  const isScrolledRef = useRef(false);

  const handleNavToggle = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkSelect = (): void => {
    setIsMenuOpen(false);
  };

  // Using useRef to avoid re-renders on scroll. More performant than useState for tracking scroll-based UI changes.
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;

      if (navRef.current && scrolled !== isScrolledRef.current) {
        isScrolledRef.current = scrolled;

        if (scrolled) {
          navRef.current.classList.add("navbar-scrolled");
        } else {
          navRef.current.classList.remove("navbar-scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-80}
        duration={700}
        className="brand-logo"
      >
        <FaHeart size={20} />
        <span className="navbar-brand">Lupus Together</span>
      </Link>

      <ul className={`navbar-links ${isMenuOpen ? "mobile-nav-active" : ""}`}>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-90}
            duration={700}
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
            offset={-90}
            duration={700}
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
            offset={-90}
            duration={700}
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
            offset={-90}
            duration={700}
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
            offset={-90}
            duration={700}
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
