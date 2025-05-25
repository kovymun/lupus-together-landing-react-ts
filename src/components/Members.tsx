import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

interface Members {
  id: string;
  full_name: string;
  role: string;
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
      }
    };

    fetchMembers();
  }, []);

  return (
    <div>
      {members.map((member) => (
        <div key={member.id} style={{ color: "red" }}>
          <p>
            <strong>Name:</strong> {member.full_name}
          </p>
          <p>
            <strong>Role:</strong> {member.role}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Members;
