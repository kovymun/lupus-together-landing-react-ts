import { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { supabase } from "../lib/supabaseClient";
import { Element } from "react-scroll";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaThreads,
} from "react-icons/fa6";
import "../styles/members.css";

interface Members {
  id: number;
  full_name: string;
  role: string;
  bio: string;
  email: string;
  phone: string;
  message: string;
  profile_img: string;
  alt: string;
}

const Members = () => {
  const [members, setMembers] = useState<Members[]>([]);
  const [expandedCards, setExpandedCards] = useState<{
    [key: number]: boolean;
  }>({});

  useEffect(() => {
    const fetchMembers = async () => {
      const { data, error } = await supabase
        .from("team_members")
        .select("*")
        .order("id", { ascending: true });
      if (error) {
        console.error("Error fetching members:", error);
      } else {
        setMembers(data || []);
      }
    };

    fetchMembers();
  }, []);

  const toggleText = (id: number) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <Element name="members">
      <section className="members-section" role="region">
        <div className="section-wrapper">
          <div className="section-header">
            <h2 className="section-title">
              Meet the People Behind Lupus Together
            </h2>
            <p>
              At Lupus Together, we're fighters, caregivers, and advocates who
              turned our stories into strength. Our lived experience drives
              everything we do - creating a safe space for real lupus support
              and real understanding. These are the hearts behind our mission -
              here to walk with you, uplift you, and make sure no one faces
              lupus alone.
            </p>
          </div>
          <div className="members-grid">
            {members.map(
              (
                {
                  id,
                  full_name,
                  role,
                  bio,
                  email,
                  phone,
                  message,
                  profile_img,
                  alt,
                },
                index
              ) => {
                const isExpanded = expandedCards[id];
                return (
                  <div className="member-card" key={id}>
                    <img
                      src={profile_img}
                      alt={alt}
                      className="member-image"
                      loading="lazy"
                      style={{
                        filter:
                          index === 0
                            ? "brightness(105%) saturate(90%)"
                            : index === 1
                            ? "brightness(95%) saturate(90%)"
                            : "",
                      }}
                    />
                    <div className="card-content">
                      <h3 className="member-name">{full_name}</h3>
                      <p className="member-role">{role}</p>
                      <p className="member-bio">{bio}</p>
                      {isExpanded && (
                        <div>
                          <blockquote className="member-message">
                            <FaQuoteLeft
                              style={{
                                marginRight: "8px",
                                color: "var(--primary-color)",
                              }}
                            />
                            {message}
                          </blockquote>

                          <div className="member-contact">
                            <div className="member-email">
                              <strong>Email:</strong>{" "}
                              <a href={`mailto:${email}`}>{email}</a>
                            </div>
                            <div className="member-phone">
                              <strong>Phone:</strong> <span>{phone}</span>
                            </div>
                          </div>
                          <div className="member-socials">
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Facebook"
                              title="Facebook"
                            >
                              <FaFacebookF />
                            </a>
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Instagram"
                              title="Instagram"
                            >
                              <FaInstagram />
                            </a>
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Twitter"
                              title="X / Twitter"
                            >
                              <FaTwitter />
                            </a>
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Threads"
                              title="Threads"
                            >
                              <FaThreads />
                            </a>
                          </div>
                        </div>
                      )}

                      <button
                        className="site-btn member-card-btn"
                        onClick={() => toggleText(id)}
                        aria-expanded={isExpanded}
                        aria-controls={`details-${id}`}
                      >
                        {isExpanded ? "Show Less" : "Show More"}
                      </button>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Members;
