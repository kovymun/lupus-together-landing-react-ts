import { Element } from "react-scroll";
import "../styles/about.css";

const About = () => {
  return (
    <Element name="about">
      <section className="about-section">
        <div className="section-wrapper">
          <div className="section-header">
            <h2 className="section-title">About Lupus Together</h2>
            <p
              className="about-subtitle"
              style={{ color: "red", textAlign: "center" }}
            >
              You're not alone. We're in this together
            </p>
          </div>

          <div className="about-content" style={{ border: "1px solid red" }}>
            <div className="text-image-row">
              <img
                src="https://images.unsplash.com/photo-1583160247711-2191776b4b91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHB1cHBpZXN8ZW58MHx8MHx8fDA%3D"
                alt="Supportive hands symbolizing care and connection"
                className="float-image"
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
                src="https://images.unsplash.com/photo-1583160247711-2191776b4b91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHB1cHBpZXN8ZW58MHx8MHx8fDA%3D"
                alt="Group of friends providing support"
                className="float-image"
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

            <p>
              Lupus Together was created so no one has to face this condition in
              silence.
            </p>

            <h3 className="about-subheading">
              What you'll find in our community
            </h3>

            <ul className="about-list">
              <li>
                <span role="img" aria-label="flower">
                  🌼
                </span>{" "}
                Circle Chats - weekly check-ins guided by lived experience
              </li>
              <li>
                <span role="img" aria-label="handshake">
                  🤝
                </span>{" "}
                Buddy Bench - match with someone who understands
              </li>
              <li>
                <span role="img" aria-label="books">
                  📚
                </span>{" "}
                Lupus Library - helpful stories and bite-sized support guides
              </li>
              <li>
                <span role="img" aria-label="microphone">
                  🎙️
                </span>{" "}
                Lupus Talks - real conversations from people walking this path
              </li>
              <li>
                <span role="img" aria-label="speech bubble">
                  💬
                </span>{" "}
                Private Forum - a safe space to share, ask, and connect
              </li>
            </ul>

            <blockquote className="about-quote">
              For once, I did not have to explain everything. They just
              understood
              <span className="quote-author">- Community Member</span>
            </blockquote>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
