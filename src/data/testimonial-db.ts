import type { Testimonial } from "../types/lupus-together-types";
import anke from "../assets/testimonials/anke-van-tonder-1.webp";
import michael from "../assets/testimonials/michael-johnson-2.webp";
import ayesha from "../assets/testimonials/ayesha-hussain-3.webp";
import thabo from "../assets/testimonials/thabo-mokoena-4.webp";
import sophia from "../assets/testimonials/sophia-kim-5.webp";
import jane from "../assets/testimonials/jane-naidoo-6.webp";

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Anke van Tonder",
    title: "Teacher",
    avatar: anke,
    city: "Cape Town",
    country: "South Africa",
    quote:
      "I felt invisible until I found Lupus Together. This support group helped me feel understood, valued, and no longer completely alone.",
    datePosted: "2023-12-16",
  },
  {
    id: 2,
    name: "Michael Johnson",
    title: "Accountant",
    avatar: michael,
    city: "Paarl",
    country: "South Africa",
    quote:
      "The community at Lupus Together genuinely cares. Weekly check ins and shared stories gave me strength and purpose again. It's life changing support.",
    datePosted: "2024-01-16",
  },
  {
    id: 3,
    name: "Ayesha Hussain",
    title: "Student",
    avatar: ayesha,
    city: "Durban",
    country: "South Africa",
    quote:
      "Lupus Together has been a lifeline. After diagnosis, I felt lost, until this group welcomed me and gave me support, guidance, and hope again.",
    datePosted: "2024-02-14",
  },
  {
    id: 4,
    name: "Thabo Mokoena",
    title: "Engineer",
    avatar: thabo,
    city: "Pretoria",
    country: "South Africa",
    quote:
      "I joined for my sister. I stayed for the strength. This group's outreach inspires me daily with purpose, love, and real connection.",
    datePosted: "2024-03-12",
  },
  {
    id: 5,
    name: "Sophia Kim",
    title: "Nurse",
    avatar: sophia,
    city: "Boksburg",
    country: "South Africa",
    quote:
      "Lupus Together changed everything. As a nurse, I appreciate their mental health focus. As a patient, I found care, empathy, and belonging.",
    datePosted: "2024-04-24",
  },
  {
    id: 6,
    name: "Jane Naidoo",
    title: "Photographer",
    avatar: jane,
    city: "East London",
    country: "South Africa",
    quote:
      "Living with Lupus in silence nearly broke me. This support group helped me feel seen, heard, accepted, and loved. I found strength, community, and hope.",
    datePosted: "2024-05-19",
  },
];
