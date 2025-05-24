const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Your Story. Your Strength. A Community That Understands</h1>
        <p>
          Join a safe space where people with Lupus connect, share stories, and
          thrive together.
        </p>
        <a href="#contact" className="hero-cta">
          Join Our Community!
        </a>
      </div>
      <div className="hero-image">
        <img
          src="../src/assets/holding-hands.webp"
          alt="People holding hands, symbolizing community and empathy for people with Lupus"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;
