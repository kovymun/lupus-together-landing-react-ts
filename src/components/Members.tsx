import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import { Element } from "react-scroll";

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
        </div>
      </section>
    </Element>
  );
};

export default Members;
