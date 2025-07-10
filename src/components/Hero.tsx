import { Element, Link } from "react-scroll";
import holdingHands from "../assets/holding-hands.webp";

const Hero = () => {
  return (
    <Element name="home">
      {" "}
      <section className="hero" id="hero">
        <div className="hero-content">
          <h1>Your Story. Your Strength. A Community That Understands</h1>
          <p>
            Join a safe space where people with Lupus connect, share stories,
            and thrive together.
          </p>
          <div>
            {" "}
            <Link
              to="join"
              spy={true}
              smooth={true}
              offset={-80}
              duration={900}
              className="site-btn"
            >
              Join Our Community!
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img
            src={holdingHands}
            alt="People holding hands, symbolizing community and empathy for people with Lupus"
            loading="lazy"
          />
        </div>
      </section>
    </Element>
  );
};

export default Hero;
