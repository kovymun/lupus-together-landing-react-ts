import type { Member } from "../types/lupus-together-types";
import tammi from "../assets/team-members/tammi-jacobs-quinn.webp";
import emma from "../assets/team-members/emma-van-der-merwe.webp";
import jessica from "../assets/team-members/jessica-pretorius.webp";

export const members: Member[] = [
  {
    id: 1,
    fullName: "Tammi Jacobs-Quinn",
    role: "Founder & Lupus Advocate",
    bio: "Tammi knows Lupus from both sides, as a patient and a sister. After years of misdiagnoses and watching her family suffer too, she built Lupus Together to give patients a voice, a space, and strength to keep going.",
    email: "tammi.jacobsquinn@lupustogether.org",
    phone: "+27 82 123 4567",
    message:
      "I created Lupus Together so no one ever has to feel alone. We fight with you, walk with you, and believe in your healing.",
    profileImg: tammi,
    alt: "Tammi Jacobs-Quinn, Lupus Together founder and lupus advocate smiling in elegant profile portrait.",
  },
  {
    id: 2,
    fullName: "Emma van der Merwe",
    role: "Operations & Outreach Lead",
    bio: "Emma watched her mother struggle quietly with Lupus. That aching silence drove her to act. Today, she leads outreach with deep compassion, showing patients they matter, are seen, are heard, and never alone.",
    email: "emma.vdm@lupustogether.org",
    phone: "+27 81 123 4567",
    message:
      "You are more than your diagnosis. We're here to walk with you - every step, every flare, every victory.",
    profileImg: emma,
    alt: "Emma van der Merwe, Lupus Together Operations & Outreach Lead, wearing a warm smile in profile photo.",
  },
  {
    id: 3,
    fullName: "Jessica Pretorius",
    role: "Community Volunteer",
    bio: "When Jessica's sister was diagnosed with Lupus, she witnessed the quiet, invisible pain that followed. Now, she offers heartfelt support, comforting others so no one feels forgotten, unseen, or alone in their fight for hope and healing.",
    email: "jessica.pretorius@lupustogether.org",
    phone: "+27 74 123 7612",
    message:
      "I do this for my sister, and for every woman facing Lupus who deserves to feel seen, heard, and deeply supported.",
    profileImg: jessica,
    alt: "Jessica Pretorius, Lupus Together volunteer and lupus supporter, shown in elegant head-shot portrait.",
  },
];
