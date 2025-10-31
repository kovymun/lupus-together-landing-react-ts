import { Element } from "react-scroll";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "../data/testimonial-db";
import "../styles/stories.css";

const Stories = () => {
  return (
    <Element name="stories">
      <section className="stories-section" id="stories">
        <div className="section-wrapper">
          <div className="section-header">
            <h2 className="section-title">
              Real Stories. Real Strength. Real Support.
            </h2>
            <p>
              Step into the lives of those who've faced Lupus, and found
              healing, hope, and strength in community. These personal
              testimonials prove one thing,{" "}
              <strong>you're not alone, and you never have to be.</strong>
            </p>
          </div>
          <div className="story-content">
            {testimonials.map(
              ({
                id,
                name,
                avatar,
                title,
                city,
                country,
                quote,
                datePosted,
              }) => (
                <article key={id} className="story-card">
                  <div className="avatar">
                    <img
                      src={avatar}
                      alt={`Profile Image of ${name}`}
                      loading="lazy"
                    />
                    <div className="avatar-title">
                      <span>{name}</span>
                      <span>{`${title} · ${city}, ${country}`}</span>
                    </div>
                  </div>
                  <blockquote>
                    <FaQuoteLeft
                      style={{
                        marginRight: "8px",
                        color: "var(--primary-color)",
                      }}
                    />
                    {quote}
                  </blockquote>
                  <p className="date-posted">- {datePosted}</p>
                </article>
              )
            )}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Stories;
