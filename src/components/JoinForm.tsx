import { Element } from "react-scroll";
import "../styles/join.css";

const JoinForm = () => {
  return (
    <Element name="join">
      <section id="join" className="join-section">
        <div className="section-wrapper">
          {" "}
          <div className="section-header">
            {" "}
            <h2 className="section-title">Let's Walk This Journey Together</h2>
            <p>
              Join a community that understands your journey - share your story,
              connect with others, and be inspired.
            </p>
          </div>
          <div className="container">
            <form className="join-form">
              <div className="input-container">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="input-container">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="input-container">
                {" "}
                <label htmlFor="phone">Phone Number (optional)</label>
                <input type="tel" id="phone" name="phone" />
              </div>

              <div className="input-container">
                {" "}
                <label htmlFor="message">Tell us more</label>
                <textarea id="message" name="message" rows={5} required />
              </div>

              <div className="consent">
                <input type="checkbox" id="consent" required />
                <label htmlFor="consent">
                  I agree to be contacted by Lupus Together.
                </label>
              </div>

              <button type="submit" className="site-btn join-form-btn">
                Join the Community
              </button>
            </form>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default JoinForm;
