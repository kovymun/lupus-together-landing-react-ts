export interface Member {
  id: number;
  fullName: string;
  role: string;
  bio: string;
  email: string;
  phone: string;
  message: string;
  profileImg: string;
  alt: string;
}

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  avatar: string;
  city: string;
  country: string;
  quote: string;
  datePosted: string;
}
