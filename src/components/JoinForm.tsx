import { Element } from "react-scroll";

const JoinForm = () => {
  return (
    <Element name="join">
      <section id="join" className="join-section">
        <div className="join-container">
          <h2>Let's Walk This Journey Together</h2>
          <p>
            Join a community that understands your journey - share your story,
            connect with others, and be inspired.
          </p>

          <form className="join-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone Number (optional)</label>
            <input type="tel" id="phone" name="phone" />

            <label htmlFor="message">Tell us more</label>
            <textarea id="message" name="message" rows={5} required />

            <div className="consent">
              <input type="checkbox" id="consent" required />
              <label htmlFor="consent">
                I agree to be contacted by Lupus Together.
              </label>
            </div>

            <button type="submit">Join the Community</button>
          </form>
        </div>
      </section>
    </Element>
  );
};

export default JoinForm;
