import { Element, Link } from "react-scroll";

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
          <Link
            to="join"
            spy={true}
            smooth={true}
            duration={600}
            className="hero-cta"
          >
            Join Our Community!
          </Link>
        </div>
        <div className="hero-image">
          <img
            src="../src/assets/holding-hands.webp"
            alt="People holding hands, symbolizing community and empathy for people with Lupus"
          />
        </div>
      </section>
    </Element>
  );
};

export default Hero;
