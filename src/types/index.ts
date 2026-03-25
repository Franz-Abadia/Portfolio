export interface NavLink {
  label: string;
  href: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  image: string;
  logo?: string;
  socials?: string[];
  website?: string;
  metric?: string;
  stars: number;
}

export interface PainPoint {
  id: number;
  icon: string;
  title: string;
  description: string;
  cta?: string;
}

export interface ProcessStepData {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface ShowroomItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  metric?: string;
  link?: string;
}
