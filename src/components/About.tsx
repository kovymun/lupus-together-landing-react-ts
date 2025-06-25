import { Element } from "react-scroll";
import { FaQuoteLeft } from "react-icons/fa";
import "../styles/about.css";

import hands from "../assets/safe-hands.webp";
import community from "../assets/community.webp";

const About = () => {
  return (
    <Element name="about">
      <section className="about-section" aria-label="About Lupus Together">
        <div className="section-wrapper">
          <div className="section-header">
            <h2 className="section-title">About Lupus Together</h2>
            <p className="about-subtitle" id="about-subtitle">
              You're not alone. We're in this together
            </p>
          </div>

          <div className="about-content">
            <div className="text-image-row">
              <img
                src={hands}
                alt="Supportive hands symbolizing care and connection"
                className="float-image img-one"
                loading="lazy"
              />
              <p>
                Lupus Together is a safe and welcoming space for people living
                with lupus, their families, and their friends. Whether you are
                newly diagnosed, living with lupus for years, or caring for
                someone who is, this is where connection begins.
              </p>
            </div>

            <div className="text-image-row reverse-row">
              <img
                src={community}
                alt="Group of friends providing support"
                className="float-image img-two"
                loading="lazy"
              />
              <p>
                We started in 2012 in Cape Town South Africa. A small group of
                friends came together, each with someone close to them affected
                by lupus. What began as a few honest conversations quickly grew
                into something more. A place where people could be seen, heard,
                and supported without judgment.
              </p>
            </div>

            <p className="mission-statement">
              Lupus Together was created so no one has to face this condition in
              silence.
            </p>

            <h3 className="about-subheading">
              What you'll find in our community
            </h3>

            <ul
              className="about-list"
              aria-label="Lupus Together Community Services"
            >
              <li>
                <span role="img" aria-label="Flower Icon">
                  🌼
                </span>{" "}
                Circle Chats - weekly check-ins guided by lived experience
              </li>
              <li>
                <span role="img" aria-label="Handshake Icon">
                  🤝
                </span>{" "}
                Buddy Bench - match with someone who understands
              </li>
              <li>
                <span role="img" aria-label="Books Icon">
                  📚
                </span>{" "}
                Lupus Library - helpful stories and bite-sized support guides
              </li>
              <li>
                <span role="img" aria-label="Microphone Icon">
                  🎙️
                </span>{" "}
                Lupus Talks - real conversations from people walking this path
              </li>
              <li>
                <span role="img" aria-label="Speech Bubble Icon">
                  💬
                </span>{" "}
                Private Forum - a safe space to share, ask, and connect
              </li>
            </ul>

            <blockquote
              className="about-quote"
              aria-label="Community Testimonial Quote"
            >
              <FaQuoteLeft
                style={{
                  marginRight: "8px",
                  color: "var(--primary-color)",
                }}
              />
              For once, I did not have to explain everything. They just
              understood
              <span className="community-author">- Community Member</span>
            </blockquote>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
