import { Element, Link } from "react-scroll";
import holdingHands from "../assets/holding-hands.webp";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <Element name="home">
      {" "}
      <section className="hero" id="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Your Story. Your Strength. A Community That Understands
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Join a safe space where people with Lupus connect, share stories,
            and thrive together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
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
          </motion.div>
        </motion.div>
        <div className="hero-image">
          <img
            src={holdingHands}
            alt="People holding hands, symbolizing community and empathy for people with Lupus"
          />
        </div>
      </section>
    </Element>
  );
};

export default Hero;
