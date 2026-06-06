export interface Book {
  title: string;
  subtitle: string;
  description: string;
  color: string; // Tailind class for cover background color
  accentColor: string; // Tailwind text color accent
}

export interface PressMention {
  quote: string;
  source: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}
