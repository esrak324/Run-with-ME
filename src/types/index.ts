export type PageSection = 
  | 'home'
  | 'local-job-market'
  | 'career-paths'
  | 'specialists'
  | 'abroad-masters'
  | 'countries'
  | 'country-details'
  | 'agencies'
  | 'contact';

export interface CareerTrack {
  id: string;
  title: string;
  category: 'Software' | 'FullStack' | 'AI' | 'Data' | 'Security' | 'Cloud' | 'Networking';
  entrySalaryBDT: string;
  midSalaryBDT: string;
  marketDemandPct: number;
  demandLevel: 'Very High' | 'High' | 'Moderate';
  prepTimeline: string;
  shortDescription: string;
  fullDescription: string;
  skills: string[];
  portfolioProjects: string[];
  interviewTips: string[];
  roadmapSteps: {
    step: number;
    title: string;
    subtext: string;
    detail: string;
  }[];
}

export interface Specialist {
  id: string;
  name: string;
  role: string;
  company: string;
  yearsExp: string;
  initials: string;
  bio: string;
  skills: string[];
  category: 'Software Eng' | 'Full Stack' | 'AI & Data' | 'DevOps & Security' | 'Networking';
  isAvailable: boolean;
  statusText: string;
  rating: number;
  sessionsCompleted: number;
}

export interface CountryDestination {
  id: string;
  name: string;
  flag: string;
  topUniversities: string[];
  avgTuitionEUR: string;
  livingCostEUR: string;
  scholarshipName: string;
  scholarshipDetails: string;
  postStudyWork: string;
  budgetCategory: 'under10' | '10-15' | '15-20' | '20-30' | '30plus';
  budgetBDTFormatted: string;
  blockedAccountRequired: boolean;
  blockedAccountEUR?: string;
  keyTags: string[];
  highlights: string[];
  prPathway: string;
  partTimeJobDetails: string;
  embassyDhakaLocation: string;
  visaSuccessRate: string;
}

export interface Agency {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  reviewCount: number;
  description: string;
  destinations: string[];
  services: string[];
  isVerified: boolean;
  officeLocation: string;
  guaranteeText: string;
}

export interface CareerSprint {
  id: string;
  sprintNumber: number;
  title: string;
  subtitle: string;
  stages: string[];
  outcomes: string;
}

export interface Testimonial {
  id: string;
  name: string;
  university: string;
  currentRole: string;
  destination: string;
  quote: string;
  rating: number;
  initials: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phoneWhatsApp: string;
  areaOfInterest: string;
  academicBackground: string;
  targetTimeline: string;
  notes?: string;
}
