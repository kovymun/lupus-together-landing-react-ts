import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

interface Members {
  id: number;
  full_name: string;
  role: string;
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
      const { data, error } = await supabase.from("team_members").select("*");
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
    <section className="members-section">
      <div className="members-section-intro">
        <h2 className="section-title">Meet the Team</h2>
      </div>
      <div className="members-grid">
        {members.map(
          ({ id, full_name, role, email, phone, message, profile_img }) => (
            <div className="member-card" key={id}>
              <img
                src={profile_img}
                alt="Profile-pic"
                className="member-image"
                loading="lazy"
                style={{ height: 100, width: 100, objectFit: "cover" }}
              />
              <h3 style={{ color: "red" }}>{full_name}</h3>
              <p>{role}</p>
              <p>{message}</p>
              <p>{email}</p>
              <p>{phone}</p>
              <div className="member-socials"></div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Members;
