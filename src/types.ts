export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  category: string;
  iconName: string;
  deliverables: string[];
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  badge: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  designation: string;
  company: string;
  location: string;
}

export interface BookingFormData {
  fullName: string;
  companyName: string;
  designation: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  message: string;
}
