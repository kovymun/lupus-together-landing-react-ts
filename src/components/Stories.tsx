import { Element } from "react-scroll";
import "../styles/stories.css";

const stories = [
  {
    id: 1,
    name: "Amanda L.",
    role: "Primary School Teacher",
    location: "Cape Town, South Africa",
    image:
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVwcHl8ZW58MHx8MHx8fDA%3D",
    message:
      "When I joined Lupus Together, I finally felt seen. It's a space where my journey is met with empathy and strength.",
  },
  {
    id: 2,
    name: "Michael D.",
    role: "Graphic Designer",
    location: "Nairobi, Kenya",
    image:
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVwcHl8ZW58MHx8MHx8fDA%3D",
    message:
      "I used to feel alone until I found this group. Sharing my story gave me a new sense of purpose and hope.",
  },
  {
    id: 3,
    name: "Sibongile M.",
    role: "Community Worker",
    location: "Johannesburg, South Africa",
    image:
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVwcHl8ZW58MHx8MHx8fDA%3D",
    message:
      "Lupus Together gave me more than support — it gave me family. Every voice matters here, including mine.",
  },
  {
    id: 4,
    name: "Joshua N.",
    role: "Student",
    location: "Lusaka, Zambia",
    image:
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHVwcHl8ZW58MHx8MHx8fDA%3D",
    message:
      "Finding people who get it changed everything. This group is a lifeline and a light.",
  },
];

const Stories = () => {
  return (
    <Element name="stories">
      <section className="stories-section">
        <div className="section-header">
          <h2 className="section-title">Real Stories. Real Strength.</h2>
          <p>
            Hear from people who truly understand your journey. These heartfelt
            stories are a testament to the power of connection, courage, and
            community.
          </p>
        </div>

        <div className="stories-grid">
          {stories.map(({ id, image, name, role, location, message }) => (
            <div className="story-card" key={id}>
              <img
                src={image}
                alt={name}
                className="story-image"
                loading="lazy"
              />
              <div className="story-info">
                <h3>{name}</h3>
                <p className="story-role">
                  {role} · {location}
                </p>
                <p className="story-message">{message}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-container">
          <button className="cta-button">Share Your Story</button>
        </div>
      </section>
    </Element>
  );
};

export default Stories;
