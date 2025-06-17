import { Element } from "react-scroll";
import { FaQuoteLeft } from "react-icons/fa";
import "../styles/stories.css";

interface Testimonial {
  id: string;
  name: string;
  title: string;
  avatarUrl: string;
  city: string;
  country: string;
  quote: string;
  datePosted: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Anke van Tonder",
    title: "Teacher",
    avatarUrl: "../src/assets/anke-van-tonder.webp",
    city: "Cape Town",
    country: "South Africa",
    quote:
      "I felt invisible until I found Lupus Together. This support group helped me feel understood, valued, and no longer completely alone.",
    datePosted: "12 March 2024",
  },
  {
    id: "2",
    name: "Michael Johnson",
    title: "Accountant",
    avatarUrl: "../src/assets/michael-johnson.webp",
    city: "Paarl",
    country: "South Africa",
    quote:
      "The community at Lupus Together genuinely cares. Weekly check ins and shared stories gave me strength and purpose again. It's life changing support.",
    datePosted: "14 February 2024",
  },
  {
    id: "3",
    name: "Ayesha Hussain",
    title: "Student",
    avatarUrl: "../src/assets/ayesha-hussain.webp",
    city: "Durban",
    country: "South Africa",
    quote:
      "Lupus Together has been a lifeline. After diagnosis, I felt lost, until this group welcomed me and gave me support, guidance, and hope again.",
    datePosted: "16 January 2024",
  },
  {
    id: "4",
    name: "Thabo Mokoena",
    title: "Engineer",
    avatarUrl: "../src/assets/thabo-mokoena.webp",
    city: "Pretoria",
    country: "South Africa",
    quote:
      "I joined for my sister. I stayed for the strength. This group's outreach inspires me daily with purpose, love, and real connection.",
    datePosted: "24 April 2024",
  },
  {
    id: "5",
    name: "Sophia Kim",
    title: "Nurse",
    avatarUrl: "../src/assets/sophia-kim.webp",
    city: "Boksburg",
    country: "South Africa",
    quote:
      "Lupus Together changed everything. As a nurse, I appreciate their mental health focus. As a patient, I found care, empathy, and belonging.",
    datePosted: "19 May 2024",
  },
  {
    id: "6",
    name: "Jane Naidoo",
    title: "Photographer",
    avatarUrl: "../src/assets/jane-naidoo.webp",
    city: "East London",
    country: "South Africa",
    quote:
      "Living with Lupus in silence nearly broke me. This support group helped me feel seen, heard, accepted, and loved. I found strength, community, and hope.",
    datePosted: "16 December 2023",
  },
];

const Stories = () => {
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
            {testimonials.map(
              ({
                id,
                name,
                avatarUrl,
                title,
                city,
                country,
                quote,
                datePosted,
              }) => (
                <article key={id} className="story-card">
                  <div className="avatar">
                    <img src={avatarUrl} alt="Profile-Photo" loading="lazy" />
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
