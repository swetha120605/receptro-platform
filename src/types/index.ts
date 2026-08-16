// Central type definitions for the Receptro platform.
// These mirror what real Supabase/Postgres tables would expose later.

export type ID = string;

export type BusinessType =
  | 'Dental Clinic'
  | 'Medical Clinic'
  | 'Salon & Spa'
  | 'Restaurant'
  | 'Real Estate'
  | 'Home Services'
  | 'Professional Services';

export type CallStatus = 'Answered' | 'Transferred' | 'Missed' | 'Appointment';
export type CallOutcome =
  | 'Appointment Requested'
  | 'Lead Captured'
  | 'FAQ Answered'
  | 'Transferred to Human'
  | 'Rescheduled'
  | 'Cancelled'
  | 'Information Provided';

export interface CallRecord {
  id: ID;
  customerName: string;
  customerPhone: string;
  date: string; // ISO
  durationSec: number;
  reason: string;
  status: CallStatus;
  outcome: CallOutcome;
  aiSummary: string;
  detectedIntent: string;
  appointmentStatus: 'None' | 'Requested' | 'Confirmed' | 'Rescheduled' | 'Cancelled';
  transcript: TranscriptLine[];
}

export interface TranscriptLine {
  speaker: 'Customer' | 'AI Receptionist';
  text: string;
  ts: string; // mm:ss
}

export type AppointmentStatus = 'Confirmed' | 'Requested' | 'Completed' | 'Cancelled' | 'Rescheduled';

export interface Appointment {
  id: ID;
  customerName: string;
  customerPhone: string;
  service: string;
  date: string; // ISO date
  time: string; // HH:MM
  status: AppointmentStatus;
  source: 'AI Call' | 'Manual' | 'Online';
  notes?: string;
}

export type CustomerStatus = 'New' | 'Contacted' | 'Booked' | 'Completed';

export interface Customer {
  id: ID;
  name: string;
  phone: string;
  email: string;
  reason: string;
  lastInteraction: string; // ISO
  status: CustomerStatus;
  calls: number;
  appointments: number;
}

export interface BusinessHours {
  day: string;
  open: string;
  close: string;
  closed: boolean;
}

export interface ServiceItem {
  id: ID;
  name: string;
  durationMin: number;
  price: string;
}

export interface FAQItem {
  id: ID;
  question: string;
  answer: string;
}

export interface BusinessProfile {
  id: ID;
  name: string;
  type: BusinessType;
  address: string;
  phone: string;
  website: string;
  email: string;
  hours: BusinessHours[];
  services: ServiceItem[];
  faqs: FAQItem[];
  policies: string[];
}

export interface AIReceptionistConfig {
  status: 'Online' | 'Offline' | 'After Hours';
  agentName: string;
  voice: string;
  language: string;
  greeting: string;
  businessKnowledge: string;
  allowedActions: string[];
  humanHandoff: boolean;
  afterHoursBehavior: string;
  callHandlingRules: string[];
}

export type IntegrationStatus = 'Connected' | 'Not Connected' | 'Error';

export interface Integration {
  id: ID;
  category: 'Telephony' | 'AI Voice' | 'Calendar' | 'CRM' | 'Email' | 'Webhook';
  name: string;
  description: string;
  status: IntegrationStatus;
  provider?: string;
  icon: string; // lucide icon name
}

export interface AdminBusiness {
  id: ID;
  name: string;
  industry: BusinessType;
  owner: string;
  ownerEmail: string;
  status: 'Active' | 'Trial' | 'Suspended';
  plan: 'Starter' | 'Pro' | 'Business' | 'Custom';
  phone: string;
  calls: number;
  aiMinutes: number;
  appointments: number;
  leads: number;
  createdAt: string;
  mrr: number;
}

export interface AdminUser {
  id: ID;
  name: string;
  email: string;
  role: 'Owner' | 'Admin' | 'Team Member';
  business: string;
  status: 'Active' | 'Invited' | 'Suspended';
  lastActive: string;
}

export interface AIAgent {
  id: ID;
  business: string;
  agentName: string;
  status: 'Online' | 'Offline' | 'Training';
  voice: string;
  language: string;
  calls: number;
  minutes: number;
  prompt: string;
  tools: string[];
  transferNumber?: string;
}

export interface TelephonyNumber {
  id: ID;
  number: string;
  provider: string;
  business: string;
  status: 'Active' | 'Porting' | 'Inactive';
  callVolume: number;
  country: string;
}

export interface SystemService {
  name: string;
  status: 'Operational' | 'Degraded' | 'Outage';
  uptime: string;
  latency: string;
}

export interface PricingPlan {
  id: ID;
  name: string;
  tagline: string;
  priceMonthly: string;
  priceNote: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface IndustryCard {
  id: ID;
  name: string;
  icon: string;
  description: string;
  useCases: string[];
}

export interface FeatureItem {
  id: ID;
  icon: string;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  to: string;
}
