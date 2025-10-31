import { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimesCircle, FaHeart, FaHome } from "react-icons/fa";
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
    <nav
      className="navbar"
      ref={navRef}
      role="navigation"
      aria-label="Main navigation"
    >
      <Link
        to="home"
        data-cy-link-id="nav-home"
        spy={true}
        smooth={true}
        offset={-80}
        duration={700}
        href="#hero"
        aria-label="Scroll to Home section"
        className="brand-logo"
      >
        <div className="logo-container nav-logo">
          <FaHeart size={20} aria-hidden="true" />
          <span className="navbar-brand">Lupus Together</span>
        </div>
        <div className="logo-container nav-home">
          <FaHome size={24} aria-hidden="true" />
          <span className="navbar-brand">Home</span>
        </div>
      </Link>

      <ul className={`navbar-links ${isMenuOpen ? "mobile-nav-active" : ""}`}>
        <li>
          <Link
            to="about"
            data-cy-link-id="nav-about"
            spy={true}
            smooth={true}
            offset={-90}
            duration={700}
            href="#about"
            aria-label="Scroll to About section"
            activeClass="active"
            onClick={handleLinkSelect}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="lupus"
            data-cy-link-id="nav-lupus"
            spy={true}
            smooth={true}
            offset={-90}
            duration={700}
            href="#lupus"
            aria-label="Scroll to Understanding Lupus section"
            activeClass="active"
            onClick={handleLinkSelect}
          >
            Understanding Lupus
          </Link>
        </li>
        <li>
          <Link
            to="stories"
            data-cy-link-id="nav-stories"
            spy={true}
            smooth={true}
            offset={-90}
            duration={700}
            href="#stories"
            aria-label="Scroll to Stories section"
            activeClass="active"
            onClick={handleLinkSelect}
          >
            Stories
          </Link>
        </li>
        <li>
          <Link
            to="members"
            data-cy-link-id="nav-members"
            spy={true}
            smooth={true}
            offset={-90}
            duration={700}
            href="#members"
            aria-label="Scroll to Meet the Team section"
            activeClass="active"
            onClick={handleLinkSelect}
          >
            Meet the Team
          </Link>
        </li>
        <li>
          <Link
            to="join"
            data-cy-link-id="nav-join"
            spy={true}
            smooth={true}
            offset={-90}
            duration={700}
            href="#join"
            aria-label="Scroll to Join Lupus Together section"
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
      <button
        className="navbar-toggle"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        onClick={handleNavToggle}
      >
        {isMenuOpen ? <FaTimesCircle size={24} /> : <FaBars size={24} />}
      </button>

      {isMenuOpen && (
        <div className="mobile-nav-overlay" onClick={handleNavToggle} />
      )}
    </nav>
  );
};

export default Navbar;
