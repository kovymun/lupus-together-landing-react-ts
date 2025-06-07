import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import { Element } from "react-scroll";
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
}

const Members = () => {
  const [members, setMembers] = useState<Members[]>([]);
  console.log(members);

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
        console.log("DB:", data);
      }
    };

    fetchMembers();
  }, []);

  return (
    <Element name="members">
      <section className="members-section">
        <div className="section-wrapper">
          <div className="section-header">
            <h2 className="section-title">Meet the Team</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              inventore delectus, veritatis pariatur atque porro ipsam quos non
              suscipit nostrum!
            </p>
          </div>
          <div className="members-grid">
            {members.map(
              ({
                id,
                full_name,
                role,
                bio,
                email,
                phone,
                message,
                profile_img,
              }) => (
                <div className="member-card" key={id}>
                  <img
                    src={profile_img}
                    alt="Profile-pic"
                    className="member-image"
                    loading="lazy"
                    // style={{
                    //   filter:
                    //     index === 0 ? "saturate(50%), brightness(50%)" : "",
                    // }}
                  />
                  <div className="overlay overlay-blur">
                    <h3 className="member-name">{full_name}</h3>
                    <p className="member-role">{role}</p>
                    <p className="member-bio">{bio}</p>
                    <p className="member-message">{message}</p>
                    <div className="member-contact">
                      <div className="member-email">
                        <strong>Email:</strong>{" "}
                        <a href={`mailto:${email}`}>{email}</a>
                      </div>
                      <div className="member-phone">
                        <strong>Phone:</strong>{" "}
                        <a href={`tel:${phone}`}>{phone}</a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Members;
