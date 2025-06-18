import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import { Element } from "react-scroll";
import { FaQuoteLeft } from "react-icons/fa";
import "../styles/stories.css";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  avatar: string;
  city: string;
  country: string;
  quote: string;
  date_posted: string;
}

const Stories = () => {
  const [stories, setStories] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchStories = async () => {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .order("id", { ascending: true });
      if (error) {
        console.error("Error fetching testimonials:", error);
      } else {
        setStories(data || []);
      }
    };

    fetchStories();
  }, []);

  return (
    <Element name="stories">
      <section className="stories-section">
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
            {stories.map(
              ({
                id,
                name,
                avatar,
                title,
                city,
                country,
                quote,
                date_posted,
              }) => (
                <article key={id} className="story-card">
                  <div className="avatar">
                    <img src={avatar} alt="Profile-Photo" loading="lazy" />
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
                  <p className="date-posted">- {date_posted}</p>
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
