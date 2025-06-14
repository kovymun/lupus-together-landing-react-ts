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
    name: "Emma van Tonder",
    title: "Teacher",
    avatarUrl:
      "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8MXwwfHx8MA%3D%3D",
    city: "Cape Town",
    country: "South Africa",
    quote:
      "I used to feel so alone until I joined Lupus Together. Knowing there are others who truly understand changed everything. The support group helped me find strength and hope again.",
    datePosted: "March 2024",
  },
  {
    id: "2",
    name: "Michael Johnson",
    title: "Accountant",
    avatarUrl:
      "https://ui-avatars.com/api/?name=Michael+Johnson&background=7b6cf6&color=fff",
    city: "Paarl",
    country: "South Africa",
    quote:
      "What stood out was the community. People genuinely care. Weekly check-ins made a real difference in my mental health.",
    datePosted: "February 2024",
  },
  {
    id: "3",
    name: "Ayesha Patel",
    title: "Student",
    avatarUrl:
      "https://ui-avatars.com/api/?name=Ayesha+Patel&background=7b6cf6&color=fff",
    city: "Durban",
    country: "South Africa",
    quote:
      "Lupus Together has been a lifeline. I was scared after my diagnosis, but their warm welcome made me feel seen and supported.",
    datePosted: "January 2024",
  },
  {
    id: "4",
    name: "Thabo Mokoena",
    title: "Engineer",
    avatarUrl:
      "https://ui-avatars.com/api/?name=Thabo+Mokoena&background=7b6cf6&color=fff",
    city: "Pretoria",
    country: "South Africa",
    quote:
      "I joined to support my sister, and I stayed for the purpose. The stories, the outreach—it’s truly empowering.",
    datePosted: "April 2024",
  },
  {
    id: "5",
    name: "Sophia Kim",
    title: "Nurse",
    avatarUrl:
      "https://ui-avatars.com/api/?name=Sophia+Kim&background=7b6cf6&color=fff",
    city: "Boksburg",
    country: "South Africa",
    quote:
      "Professionally and personally, I see the value Lupus Together brings. Their focus on mental well-being is rare and needed.",
    datePosted: "May 2024",
  },
  {
    id: "6",
    name: "Jane Naidoo",
    title: "Photographer",
    avatarUrl:
      "https://ui-avatars.com/api/?name=Jane+Naidoo&background=7b6cf6&color=fff",
    city: "East London",
    country: "South Africa",
    quote:
      "Living with Lupus in silence is hard. This group gave me a voice, and more importantly, people who listen without judgment.",
    datePosted: "December 2023",
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
              ({ id, name, avatarUrl, title, city, country, quote }) => (
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
