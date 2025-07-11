import { Link } from "react-scroll";
import {
  FaFacebookF,
  FaInstagram,
  FaThreads,
  FaYoutube,
  FaXTwitter,
  FaHeart,
} from "react-icons/fa6";
import "../styles/footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={900}
            className="home-route"
          >
            <h2 className="footer-logo">
              <span>
                <FaHeart size={20} />
              </span>
              Lupus Together
            </h2>
          </Link>

          <p className="footer-tagline">Finding strength together.</p>
        </div>

        <nav className="footer-nav">
          <h3>Explore</h3>
          <ul className="footer-nav-list">
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-80}
                duration={900}
              >
                About
              </Link>
            </li>
            <li>
              <a href="/#">FAQ</a>
            </li>
            <li>
              <a href="/#">Lupus Library</a>
            </li>
            <li>
              <a href="/#">Private Forum</a>
            </li>
          </ul>
        </nav>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>011-456-7890</p>
          <p>
            <a href="mailto:info@lupustogether.org">info@lupustogether.org</a>
          </p>
        </div>

        <nav className="footer-social" aria-label="Social links">
          <h3>Follow</h3>
          <div className="footer-social-icons">
            <a href="/#" aria-label="Facebook" title="Facebook">
              <FaFacebookF />
            </a>
            <a href="/#" aria-label="X / Twitter" title="X / Twitter">
              <FaXTwitter />
            </a>
            <a href="/#" aria-label="Instagram" title="Instagram">
              <FaInstagram />
            </a>
            <a href="/#" aria-label="YouTube" title="YouTube">
              <FaYoutube />
            </a>
            <a href="/#" aria-label="Threads" title="Threads">
              <FaThreads />
            </a>
          </div>
        </nav>
      </div>
      <div className="footer-bottom">
        <p className="footer-legal">
          © {year} Lupus Together · <a href="/#">Privacy Policy</a> ·{" "}
          <a href="/#">Terms & Conditions</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
