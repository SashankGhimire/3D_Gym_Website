export interface MembershipPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceAnnualMonthly: number;
  currency: string;
  currencySymbol: string;
  tagline: string;
  popular?: boolean;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
  color: string;
}

export interface Facility {
  id: string;
  title: string;
  category: 'strength' | 'cardio' | 'wellness' | 'amenities';
  description: string;
  features: string[];
  image: string;
  spec: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  achievements: string[];
  bio: string;
  image: string;
  socials: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
  };
  clientCount: number;
  rating: number;
}

export interface Program {
  id: string;
  title: string;
  category: 'Strength' | 'Weight Loss' | 'Bodybuilding' | 'CrossFit' | 'Cardio' | 'Personal Training';
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  durationWeeks: number;
  intensity: 'Medium' | 'High' | 'Extreme';
  description: string;
  highlights: string[];
  image: string;
  caloriesPerSession: string;
  coach: string;
}

export interface Transformation {
  id: string;
  memberName: string;
  age: number;
  programUsed: string;
  durationMonths: number;
  weightLossKg?: number;
  muscleGainKg?: number;
  bodyFatChange?: string;
  quote: string;
  beforeImage: string;
  afterImage: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  memberSince: string;
  rating: number;
  comment: string;
  avatar: string;
  achievement: string;
  videoUrl?: string;
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'All' | 'Facility' | 'Action' | 'Recovery' | 'Events';
  image: string;
  caption: string;
}

export interface BmiResult {
  bmi: number;
  category: 'Underweight' | 'Normal' | 'Overweight' | 'Obese';
  categoryColor: string;
  idealWeightRange: string;
  bmr: number;
  tdee: number;
  waterLitres?: string;
  proteinGrams?: number;
  recommendations?: string[];
}
