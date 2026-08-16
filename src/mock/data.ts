import type {
  AdminBusiness,
  AdminUser,
  AIReceptionistConfig,
  AIAgent,
  Appointment,
  BusinessProfile,
  CallRecord,
  Customer,
  FeatureItem,
  IndustryCard,
  Integration,
  PricingPlan,
  ServiceItem,
  SystemService,
  TelephonyNumber,
} from '@/types';

const today = new Date();
const iso = (d: Date) => d.toISOString();
const at = (dayOffset: number, h = 10, m = 0) => {
  const d = new Date(today);
  d.setDate(d.getDate() + dayOffset);
  d.setHours(h, m, 0, 0);
  return iso(d);
};
const dateOnly = (dayOffset: number) => {
  const d = new Date(today);
  d.setDate(d.getDate() + dayOffset);
  return d.toISOString().slice(0, 10);
};

export const businessProfile: BusinessProfile = {
  id: 'biz_1',
  name: 'BrightSmile Dental',
  type: 'Dental Clinic',
  address: '214 Bayview Avenue, Suite 5, San Francisco, CA 94110',
  phone: '+1 (415) 555-0142',
  website: 'brightsmiledental.com',
  email: 'hello@brightsmiledental.com',
  hours: [
    { day: 'Monday', open: '09:00', close: '18:00', closed: false },
    { day: 'Tuesday', open: '09:00', close: '18:00', closed: false },
    { day: 'Wednesday', open: '09:00', close: '18:00', closed: false },
    { day: 'Thursday', open: '09:00', close: '18:00', closed: false },
    { day: 'Friday', open: '09:00', close: '17:00', closed: false },
    { day: 'Saturday', open: '10:00', close: '14:00', closed: false },
    { day: 'Sunday', open: '00:00', close: '00:00', closed: true },
  ],
  services: [
    { id: 'svc_1', name: 'Routine Cleaning', durationMin: 45, price: '$120' },
    { id: 'svc_2', name: 'Dental Exam', durationMin: 30, price: '$95' },
    { id: 'svc_3', name: 'Teeth Whitening', durationMin: 60, price: '$320' },
    { id: 'svc_4', name: 'Cavity Filling', durationMin: 60, price: '$240' },
    { id: 'svc_5', name: 'Root Canal', durationMin: 90, price: '$900' },
  ],
  faqs: [
    { id: 'faq_1', question: 'What are your opening hours?', answer: 'We are open Monday to Friday 9am to 6pm, and Saturdays 10am to 2pm. We are closed on Sundays.' },
    { id: 'faq_2', question: 'Do you accept new patients?', answer: 'Yes, we are currently accepting new patients. Your first exam includes x-rays and a cleaning plan.' },
    { id: 'faq_3', question: 'Do you take insurance?', answer: 'We accept most major PPO insurance plans. Please bring your card to your appointment.' },
    { id: 'faq_4', question: 'Where are you located?', answer: 'We are at 214 Bayview Avenue, Suite 5, San Francisco. Free parking is available behind the building.' },
  ],
  policies: [
    'Please give 24 hours notice for cancellations.',
    'A $50 no-show fee may apply for missed appointments.',
    'New patients should arrive 10 minutes early to complete forms.',
  ],
};

export const aiReceptionist: AIReceptionistConfig = {
  status: 'Online',
  agentName: 'AI Receptionist',
  voice: 'Aria — Warm, Professional',
  language: 'English (US)',
  greeting: "Hi, thanks for calling BrightSmile Dental. How can I help you today?",
  businessKnowledge:
    'BrightSmile Dental is a family dental practice in San Francisco offering cleanings, exams, whitening, fillings and root canals. Open Mon-Fri 9-6 and Sat 10-2. Accepts most PPO insurance.',
  allowedActions: [
    'Book appointments',
    'Reschedule appointments',
    'Cancel appointments',
    'Answer FAQs',
    'Capture lead details',
    'Transfer to human',
  ],
  humanHandoff: true,
  afterHoursBehavior: 'Continue answering calls, capture details and offer next available slot.',
  callHandlingRules: [
    'Always greet with the business name',
    'Confirm caller name and reason',
    'Check availability before offering times',
    'Transfer to human for emergencies or billing disputes',
    'Never quote prices not in the knowledge base',
  ],
};

export const calls: CallRecord[] = [
  {
    id: 'call_1',
    customerName: 'Sarah Williams',
    customerPhone: '+1 (415) 555-0188',
    date: at(0, 9, 42),
    durationSec: 161,
    reason: 'Dental appointment',
    status: 'Appointment',
    outcome: 'Appointment Requested',
    aiSummary:
      'Caller wanted to book a routine cleaning for next Tuesday. Offered 3:30 PM and 5:00 PM. Caller selected 3:30 PM. Lead captured with name and phone.',
    detectedIntent: 'Book appointment',
    appointmentStatus: 'Requested',
    transcript: [
      { speaker: 'AI Receptionist', text: "Hi, thanks for calling BrightSmile Dental. How can I help you today?", ts: '00:00' },
      { speaker: 'Customer', text: "I'd like to book a cleaning next Tuesday.", ts: '00:04' },
      { speaker: 'AI Receptionist', text: 'Absolutely. We have availability at 3:30 PM and 5:00 PM. Which works best?', ts: '00:09' },
      { speaker: 'Customer', text: '3:30 is great.', ts: '00:15' },
      { speaker: 'AI Receptionist', text: "Done. I've requested a cleaning for Tuesday at 3:30 PM. The team will confirm shortly.", ts: '00:18' },
    ],
  },
  {
    id: 'call_2',
    customerName: 'Marcus Lee',
    customerPhone: '+1 (415) 555-0190',
    date: at(0, 11, 12),
    durationSec: 94,
    reason: 'Opening hours',
    status: 'Answered',
    outcome: 'FAQ Answered',
    aiSummary: 'Caller asked about opening hours and parking. Answered from knowledge base.',
    detectedIntent: 'Get information',
    appointmentStatus: 'None',
    transcript: [
      { speaker: 'AI Receptionist', text: "Hi, thanks for calling BrightSmile Dental. How can I help you today?", ts: '00:00' },
      { speaker: 'Customer', text: 'What time do you close today?', ts: '00:03' },
      { speaker: 'AI Receptionist', text: 'We are open today until 6 PM. Free parking is available behind the building.', ts: '00:06' },
    ],
  },
  {
    id: 'call_3',
    customerName: 'Priya Nair',
    customerPhone: '+1 (415) 555-0177',
    date: at(0, 13, 55),
    durationSec: 212,
    reason: 'New patient enquiry',
    status: 'Answered',
    outcome: 'Lead Captured',
    aiSummary: 'New patient asked about insurance and first visit. Captured name, phone and insurance provider.',
    detectedIntent: 'Lead capture',
    appointmentStatus: 'None',
    transcript: [
      { speaker: 'AI Receptionist', text: "Hi, thanks for calling BrightSmile Dental. How can I help you today?", ts: '00:00' },
      { speaker: 'Customer', text: 'I am a new patient. Do you take Delta Dental?', ts: '00:05' },
      { speaker: 'AI Receptionist', text: 'Yes, we accept Delta Dental. Your first visit includes x-rays and a cleaning plan.', ts: '00:10' },
      { speaker: 'Customer', text: 'Great, can I book something next week?', ts: '00:18' },
      { speaker: 'AI Receptionist', text: "I've noted your details and the team will call you back to confirm a slot.", ts: '00:22' },
    ],
  },
  {
    id: 'call_4',
    customerName: 'James Okafor',
    customerPhone: '+1 (415) 555-0155',
    date: at(0, 15, 30),
    durationSec: 78,
    reason: 'Billing dispute',
    status: 'Transferred',
    outcome: 'Transferred to Human',
    aiSummary: 'Caller had a billing question outside knowledge base. Transferred to front desk.',
    detectedIntent: 'Transfer to human',
    appointmentStatus: 'None',
    transcript: [
      { speaker: 'AI Receptionist', text: "Hi, thanks for calling BrightSmile Dental. How can I help you today?", ts: '00:00' },
      { speaker: 'Customer', text: 'I have a charge on my bill I do not recognise.', ts: '00:04' },
      { speaker: 'AI Receptionist', text: 'I will transfer you to our front desk team who can look into that for you.', ts: '00:09' },
    ],
  },
  {
    id: 'call_5',
    customerName: 'Elena Rossi',
    customerPhone: '+1 (415) 555-0123',
    date: at(-1, 10, 5),
    durationSec: 134,
    reason: 'Reschedule appointment',
    status: 'Appointment',
    outcome: 'Rescheduled',
    aiSummary: 'Caller wanted to move Thursday cleaning to Friday. Offered Friday 11am. Confirmed.',
    detectedIntent: 'Reschedule appointment',
    appointmentStatus: 'Rescheduled',
    transcript: [
      { speaker: 'AI Receptionist', text: "Hi, thanks for calling BrightSmile Dental. How can I help you today?", ts: '00:00' },
      { speaker: 'Customer', text: 'I need to move my cleaning from Thursday to Friday.', ts: '00:04' },
      { speaker: 'AI Receptionist', text: 'We have Friday at 11 AM available. Shall I confirm?', ts: '00:10' },
      { speaker: 'Customer', text: 'Yes please.', ts: '00:14' },
    ],
  },
  {
    id: 'call_6',
    customerName: 'David Chen',
    customerPhone: '+1 (415) 555-0166',
    date: at(-1, 14, 20),
    durationSec: 56,
    reason: 'Cancel appointment',
    status: 'Appointment',
    outcome: 'Cancelled',
    aiSummary: 'Caller cancelled Monday filling. Reminded about 24h cancellation policy.',
    detectedIntent: 'Cancel appointment',
    appointmentStatus: 'Cancelled',
    transcript: [
      { speaker: 'AI Receptionist', text: "Hi, thanks for calling BrightSmile Dental. How can I help you today?", ts: '00:00' },
      { speaker: 'Customer', text: 'I need to cancel my filling on Monday.', ts: '00:03' },
      { speaker: 'AI Receptionist', text: 'Done, that is cancelled. As a reminder, please give 24 hours notice next time.', ts: '00:07' },
    ],
  },
  {
    id: 'call_7',
    customerName: 'Aisha Khan',
    customerPhone: '+1 (415) 555-0199',
    date: at(-2, 9, 15),
    durationSec: 188,
    reason: 'Teeth whitening',
    status: 'Appointment',
    outcome: 'Appointment Requested',
    aiSummary: 'Caller asked about whitening and pricing. Quoted $320 from knowledge base. Booked consult.',
    detectedIntent: 'Book appointment',
    appointmentStatus: 'Requested',
    transcript: [
      { speaker: 'AI Receptionist', text: "Hi, thanks for calling BrightSmile Dental. How can I help you today?", ts: '00:00' },
      { speaker: 'Customer', text: 'How much is teeth whitening?', ts: '00:04' },
      { speaker: 'AI Receptionist', text: 'Teeth whitening is $320 for a 60 minute session.', ts: '00:08' },
      { speaker: 'Customer', text: 'Can I book that for next Wednesday?', ts: '00:14' },
    ],
  },
  {
    id: 'call_8',
    customerName: 'Tom Becker',
    customerPhone: '+1 (415) 555-0144',
    date: at(-2, 16, 48),
    durationSec: 0,
    reason: 'Missed call',
    status: 'Missed',
    outcome: 'Information Provided',
    aiSummary: 'Call dropped before AI answered. Callback scheduled.',
    detectedIntent: 'Unknown',
    appointmentStatus: 'None',
    transcript: [],
  },
];

export const appointments: Appointment[] = [
  { id: 'appt_1', customerName: 'Sarah Williams', customerPhone: '+1 (415) 555-0188', service: 'Routine Cleaning', date: dateOnly(7), time: '15:30', status: 'Requested', source: 'AI Call', notes: 'Requested via AI Receptionist' },
  { id: 'appt_2', customerName: 'Elena Rossi', customerPhone: '+1 (415) 555-0123', service: 'Routine Cleaning', date: dateOnly(1), time: '11:00', status: 'Confirmed', source: 'AI Call' },
  { id: 'appt_3', customerName: 'Aisha Khan', customerPhone: '+1 (415) 555-0199', service: 'Teeth Whitening', date: dateOnly(9), time: '14:00', status: 'Requested', source: 'AI Call' },
  { id: 'appt_4', customerName: 'Marcus Lee', customerPhone: '+1 (415) 555-0190', service: 'Dental Exam', date: dateOnly(0), time: '10:30', status: 'Confirmed', source: 'Online' },
  { id: 'appt_5', customerName: 'Priya Nair', customerPhone: '+1 (415) 555-0177', service: 'Dental Exam', date: dateOnly(3), time: '09:00', status: 'Requested', source: 'AI Call', notes: 'New patient, Delta Dental' },
  { id: 'appt_6', customerName: 'Robert Vance', customerPhone: '+1 (415) 555-0111', service: 'Cavity Filling', date: dateOnly(-2), time: '13:00', status: 'Completed', source: 'Manual' },
  { id: 'appt_7', customerName: 'Sofia Marin', customerPhone: '+1 (415) 555-0122', service: 'Routine Cleaning', date: dateOnly(2), time: '16:00', status: 'Confirmed', source: 'Online' },
  { id: 'appt_8', customerName: 'David Chen', customerPhone: '+1 (415) 555-0166', service: 'Cavity Filling', date: dateOnly(-1), time: '09:00', status: 'Cancelled', source: 'AI Call' },
];

export const customers: Customer[] = [
  { id: 'cus_1', name: 'Sarah Williams', phone: '+1 (415) 555-0188', email: 'sarah.w@email.com', reason: 'Dental appointment', lastInteraction: at(0, 9, 42), status: 'Booked', calls: 3, appointments: 2 },
  { id: 'cus_2', name: 'Marcus Lee', phone: '+1 (415) 555-0190', email: 'marcus.lee@email.com', reason: 'Opening hours', lastInteraction: at(0, 11, 12), status: 'Contacted', calls: 1, appointments: 1 },
  { id: 'cus_3', name: 'Priya Nair', phone: '+1 (415) 555-0177', email: 'priya.n@email.com', reason: 'New patient enquiry', lastInteraction: at(0, 13, 55), status: 'New', calls: 1, appointments: 0 },
  { id: 'cus_4', name: 'James Okafor', phone: '+1 (415) 555-0155', email: 'j.okafor@email.com', reason: 'Billing dispute', lastInteraction: at(0, 15, 30), status: 'Contacted', calls: 2, appointments: 0 },
  { id: 'cus_5', name: 'Elena Rossi', phone: '+1 (415) 555-0123', email: 'elena.r@email.com', reason: 'Reschedule appointment', lastInteraction: at(-1, 10, 5), status: 'Booked', calls: 4, appointments: 3 },
  { id: 'cus_6', name: 'David Chen', phone: '+1 (415) 555-0166', email: 'd.chen@email.com', reason: 'Cancel appointment', lastInteraction: at(-1, 14, 20), status: 'Completed', calls: 2, appointments: 1 },
  { id: 'cus_7', name: 'Aisha Khan', phone: '+1 (415) 555-0199', email: 'aisha.k@email.com', reason: 'Teeth whitening', lastInteraction: at(-2, 9, 15), status: 'Booked', calls: 1, appointments: 1 },
  { id: 'cus_8', name: 'Robert Vance', phone: '+1 (415) 555-0111', email: 'r.vance@email.com', reason: 'Cavity filling', lastInteraction: at(-3, 10, 0), status: 'Completed', calls: 5, appointments: 4 },
];

export const integrations: Integration[] = [
  { id: 'int_1', category: 'Telephony', name: 'Phone / Telephony', description: 'Connect your business number or port a new one.', status: 'Connected', provider: 'Twilio', icon: 'Phone' },
  { id: 'int_2', category: 'AI Voice', name: 'AI Voice Provider', description: 'The voice AI engine that powers Receptro.', status: 'Connected', provider: 'Vapi', icon: 'AudioLines' },
  { id: 'int_3', category: 'Calendar', name: 'Google Calendar', description: 'Sync appointments to your team calendar.', status: 'Connected', provider: 'Google', icon: 'Calendar' },
  { id: 'int_4', category: 'Calendar', name: 'Microsoft Calendar', description: 'Sync appointments to Outlook.', status: 'Not Connected', icon: 'CalendarDays' },
  { id: 'int_5', category: 'CRM', name: 'CRM', description: 'Push captured leads to your CRM.', status: 'Not Connected', icon: 'Users' },
  { id: 'int_6', category: 'Email', name: 'Email Notifications', description: 'Send call summaries and lead alerts by email.', status: 'Connected', provider: 'Resend', icon: 'Mail' },
  { id: 'int_7', category: 'Webhook', name: 'Webhooks', description: 'Forward call events to your own systems.', status: 'Not Connected', icon: 'Webhook' },
];

export const features: FeatureItem[] = [
  { id: 'f1', icon: 'PhoneCall', title: '24/7 Call Answering', description: 'Every call answered instantly, day or night, weekends and holidays included.' },
  { id: 'f2', icon: 'MessageSquare', title: 'Natural AI Conversations', description: 'Customers speak naturally. Receptro understands intent, context and nuance.' },
  { id: 'f3', icon: 'CalendarPlus', title: 'Appointment Booking', description: 'Checks your availability and books appointments in real time.' },
  { id: 'f4', icon: 'CalendarClock', title: 'Appointment Rescheduling', description: 'Handles reschedule requests and updates your calendar automatically.' },
  { id: 'f5', icon: 'CalendarX', title: 'Appointment Cancellation', description: 'Processes cancellations with your policies applied.' },
  { id: 'f6', icon: 'HelpCircle', title: 'FAQ Handling', description: 'Answers common questions from your business knowledge base.' },
  { id: 'f7', icon: 'UserPlus', title: 'Lead Capture', description: 'Captures caller details and intent for every enquiry.' },
  { id: 'f8', icon: 'FileText', title: 'Call Summaries', description: 'Every call transcribed and summarised for your team.' },
  { id: 'f9', icon: 'PhoneForwarded', title: 'Human Handoff', description: 'Transfers complex or sensitive calls to your team instantly.' },
  { id: 'f10', icon: 'BrainCircuit', title: 'Business Knowledge', description: 'Learns your services, hours, pricing and policies.' },
  { id: 'f11', icon: 'History', title: 'Call History', description: 'A complete, searchable record of every conversation.' },
  { id: 'f12', icon: 'BarChart3', title: 'Analytics', description: 'Understand call volume, outcomes and trends at a glance.' },
];

export const industries: IndustryCard[] = [
  { id: 'i1', name: 'Dental Clinics', icon: 'Stethoscope', description: 'Book cleanings, handle new patient calls, answer insurance questions.', useCases: ['Appointment booking', 'Insurance FAQs', 'New patient capture'] },
  { id: 'i2', name: 'Medical Clinics', icon: 'HeartPulse', description: 'Triage enquiries, schedule visits, capture patient details securely.', useCases: ['Appointment scheduling', 'Patient intake', 'Hours & location'] },
  { id: 'i3', name: 'Salons & Spas', icon: 'Scissors', description: 'Book treatments, answer pricing, manage stylist availability.', useCases: ['Treatment booking', 'Pricing FAQs', 'Rescheduling'] },
  { id: 'i4', name: 'Restaurants', icon: 'UtensilsCrossed', description: 'Handle reservations, opening hours, and private event enquiries.', useCases: ['Reservations', 'Hours & menu', 'Event enquiries'] },
  { id: 'i5', name: 'Real Estate', icon: 'Building2', description: 'Capture property enquiries, schedule viewings, qualify leads.', useCases: ['Viewing scheduling', 'Lead qualification', 'Property FAQs'] },
  { id: 'i6', name: 'Home Services', icon: 'Wrench', description: 'Book service calls, quote from your price list, dispatch jobs.', useCases: ['Service booking', 'Quote capture', 'Job dispatch'] },
  { id: 'i7', name: 'Professional Services', icon: 'Briefcase', description: 'Schedule consultations, answer service questions, capture leads.', useCases: ['Consultation booking', 'Service FAQs', 'Lead capture'] },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'p1',
    name: 'Starter',
    tagline: 'For solo businesses getting started with AI reception.',
    priceMonthly: '$[PRICE]',
    priceNote: 'Usage-based minutes included. Pricing set per business.',
    features: ['AI receptionist', 'Up to 200 calls / mo', 'Appointment booking', 'Call summaries', 'Email support', '1 business number'],
    cta: 'Book a Demo',
  },
  {
    id: 'p2',
    name: 'Pro',
    tagline: 'For growing businesses that need full coverage.',
    priceMonthly: '$[PRICE]',
    priceNote: 'Flexible call volume with usage-based overage.',
    features: ['Everything in Starter', 'Up to 1,000 calls / mo', 'Calendar integrations', 'Lead capture & CRM sync', 'Analytics dashboard', 'Human handoff', 'Priority support'],
    cta: 'Book a Demo',
    highlighted: true,
  },
  {
    id: 'p3',
    name: 'Business',
    tagline: 'For multi-location and high-volume operations.',
    priceMonthly: '$[PRICE]',
    priceNote: 'Custom usage allowances and team features.',
    features: ['Everything in Pro', 'Unlimited calls', 'Multi-location support', 'Team & roles', 'Advanced analytics', 'Custom AI voice', 'Dedicated support'],
    cta: 'Book a Demo',
  },
  {
    id: 'p4',
    name: 'Custom',
    tagline: 'For enterprises with custom telephony and AI needs.',
    priceMonthly: 'Custom',
    priceNote: 'Tailored pricing for volume and integrations.',
    features: ['Everything in Business', 'Custom integrations', 'Onboarding & migration', 'SLA & uptime guarantees', 'Account manager', 'Custom telephony routing'],
    cta: 'Talk to Sales',
  },
];

export const faqs = [
  { q: 'What is Receptro?', a: 'Receptro is an AI automation agency. We set up AI phone receptionists for businesses. The AI receptionist we build answers your calls, speaks naturally with customers, understands their requests, and takes action — booking appointments, answering questions, capturing leads and transferring calls when needed. We can also set up other AI automations for your business.' },
  { q: 'How does the AI receptionist answer calls?', a: 'We connect the AI receptionist to your existing business number through a telephony integration. When a call comes in and your team can\'t answer — or it\'s outside business hours — the AI receptionist steps in and handles the conversation using your business knowledge base.' },
  { q: 'Can it work outside business hours?', a: 'Yes. The AI receptionist is available 24/7. When your team goes home, it keeps answering, capturing leads and booking appointments for the next day.' },
  { q: 'Can it book appointments?', a: 'Yes. The AI receptionist checks your availability and books, reschedules or cancels appointments, then syncs everything to your connected calendar.' },
  { q: 'Can it answer business FAQs?', a: 'Yes. We add your services, hours, pricing and policies to the knowledge base, and the AI receptionist answers those questions accurately on every call.' },
  { q: 'Can customers speak naturally?', a: 'Absolutely. The AI receptionist understands natural, conversational speech — no menus or button-pressing required.' },
  { q: 'Can calls be transferred to a human?', a: 'Yes. For complex, sensitive or emergency situations, the AI receptionist transfers the call to your team instantly.' },
  { q: 'Can I use my existing business number?', a: 'Yes. You can keep your current number — we connect the AI receptionist to it, or you can port a new number if you prefer.' },
  { q: 'How does pricing work?', a: 'Pricing is usage-based and flexible, scaled to your call volume. Plans start from Starter and scale to Custom enterprise agreements. Talk to us for a quote tailored to your business.' },
  { q: 'How do I get started?', a: 'Book a demo, tell us about your business, and we will set up your AI receptionist, connect your number and get you live — usually within a few days.' },
  { q: 'Do you offer other AI automations?', a: 'Yes. While the AI phone receptionist is our flagship service, we also set up other AI automations — including chatbots, workflow automation, lead routing, and custom AI integrations. Talk to us about what you need.' },
];

// Admin mock data
export const adminBusinesses: AdminBusiness[] = [
  { id: 'ab_1', name: 'BrightSmile Dental', industry: 'Dental Clinic', owner: 'Dr. Lena Park', ownerEmail: 'lena@brightsmiledental.com', status: 'Active', plan: 'Pro', phone: '+1 (415) 555-0142', calls: 1284, aiMinutes: 3420, appointments: 412, leads: 318, createdAt: '2025-11-02', mrr: 499 },
  { id: 'ab_2', name: 'Northgate Medical Clinic', industry: 'Medical Clinic', owner: 'Dr. Omar Faruk', ownerEmail: 'omar@northgatemed.com', status: 'Active', plan: 'Business', phone: '+1 (212) 555-0190', calls: 3110, aiMinutes: 8840, appointments: 980, leads: 612, createdAt: '2025-09-14', mrr: 1290 },
  { id: 'ab_3', name: 'Lumière Salon & Spa', industry: 'Salon & Spa', owner: 'Camille Royer', ownerEmail: 'camille@lumierespa.com', status: 'Trial', plan: 'Pro', phone: '+1 (310) 555-0177', calls: 540, aiMinutes: 980, appointments: 188, leads: 142, createdAt: '2026-07-28', mrr: 0 },
  { id: 'ab_4', name: 'Harbor View Bistro', industry: 'Restaurant', owner: 'Marco Bianchi', ownerEmail: 'marco@harborviewbistro.com', status: 'Active', plan: 'Starter', phone: '+1 (617) 555-0144', calls: 720, aiMinutes: 1240, appointments: 0, leads: 210, createdAt: '2026-01-20', mrr: 199 },
  { id: 'ab_5', name: 'Skyline Realty Group', industry: 'Real Estate', owner: 'Janet Wu', ownerEmail: 'janet@skylinerealty.com', status: 'Active', plan: 'Business', phone: '+1 (415) 555-0133', calls: 2104, aiMinutes: 5230, appointments: 640, leads: 1180, createdAt: '2025-12-05', mrr: 1290 },
  { id: 'ab_6', name: 'Apex Home Services', industry: 'Home Services', owner: 'Trevor Hale', ownerEmail: 'trevor@apexhome.co', status: 'Suspended', plan: 'Pro', phone: '+1 (720) 555-0155', calls: 880, aiMinutes: 1640, appointments: 240, leads: 196, createdAt: '2026-03-11', mrr: 0 },
  { id: 'ab_7', name: 'Crestwood Legal', industry: 'Professional Services', owner: 'Sandra Crest', ownerEmail: 'sandra@crestwoodlegal.com', status: 'Active', plan: 'Pro', phone: '+1 (415) 555-0166', calls: 410, aiMinutes: 720, appointments: 96, leads: 130, createdAt: '2026-05-22', mrr: 499 },
  { id: 'ab_8', name: 'Riverside Family Dental', industry: 'Dental Clinic', owner: 'Dr. Raj Patel', ownerEmail: 'raj@riversidedental.com', status: 'Trial', plan: 'Starter', phone: '+1 (503) 555-0188', calls: 220, aiMinutes: 410, appointments: 64, leads: 58, createdAt: '2026-08-01', mrr: 0 },
];

export const adminUsers: AdminUser[] = [
  { id: 'au_1', name: 'Dr. Lena Park', email: 'lena@brightsmiledental.com', role: 'Owner', business: 'BrightSmile Dental', status: 'Active', lastActive: at(0, 9, 30) },
  { id: 'au_2', name: 'Mia Torres', email: 'mia@brightsmiledental.com', role: 'Team Member', business: 'BrightSmile Dental', status: 'Active', lastActive: at(0, 8, 12) },
  { id: 'au_3', name: 'Dr. Omar Faruk', email: 'omar@northgatemed.com', role: 'Owner', business: 'Northgate Medical Clinic', status: 'Active', lastActive: at(0, 10, 5) },
  { id: 'au_4', name: 'Camille Royer', email: 'camille@lumierespa.com', role: 'Owner', business: 'Lumière Salon & Spa', status: 'Invited', lastActive: at(-1, 14, 0) },
  { id: 'au_5', name: 'Janet Wu', email: 'janet@skylinerealty.com', role: 'Owner', business: 'Skyline Realty Group', status: 'Active', lastActive: at(0, 11, 40) },
  { id: 'au_6', name: 'Trevor Hale', email: 'trevor@apexhome.co', role: 'Owner', business: 'Apex Home Services', status: 'Suspended', lastActive: at(-7, 9, 0) },
];

export const aiAgents: AIAgent[] = [
  { id: 'ag_1', business: 'BrightSmile Dental', agentName: 'AI Receptionist', status: 'Online', voice: 'Aria', language: 'English (US)', calls: 1284, minutes: 3420, prompt: 'You are the receptionist for BrightSmile Dental...', tools: ['Book appointment', 'Reschedule', 'Cancel', 'FAQ', 'Transfer'], transferNumber: '+1 (415) 555-0142' },
  { id: 'ag_2', business: 'Northgate Medical Clinic', agentName: 'Northgate Assistant', status: 'Online', voice: 'Ethan', language: 'English (US)', calls: 3110, minutes: 8840, prompt: 'You are the receptionist for Northgate Medical Clinic...', tools: ['Book appointment', 'Patient intake', 'FAQ', 'Transfer'], transferNumber: '+1 (212) 555-0190' },
  { id: 'ag_3', business: 'Lumière Salon & Spa', agentName: 'Lumière Concierge', status: 'Training', voice: 'Sienna', language: 'English (US)', calls: 540, minutes: 980, prompt: 'You are the concierge for Lumière Salon & Spa...', tools: ['Book treatment', 'Pricing', 'Reschedule'] },
  { id: 'ag_4', business: 'Harbor View Bistro', agentName: 'Harbor Host', status: 'Online', voice: 'Logan', language: 'English (US)', calls: 720, minutes: 1240, prompt: 'You are the host for Harbor View Bistro...', tools: ['Reservations', 'Hours', 'Events'] },
  { id: 'ag_5', business: 'Skyline Realty Group', agentName: 'Skyline Agent', status: 'Online', voice: 'Aria', language: 'English (US)', calls: 2104, minutes: 5230, prompt: 'You are the assistant for Skyline Realty Group...', tools: ['Schedule viewing', 'Qualify lead', 'Property FAQ', 'Transfer'] },
  { id: 'ag_6', business: 'Apex Home Services', agentName: 'Apex Dispatcher', status: 'Offline', voice: 'Ethan', language: 'English (US)', calls: 880, minutes: 1640, prompt: 'You are the dispatcher for Apex Home Services...', tools: ['Book service', 'Quote', 'Dispatch'] },
];

export const telephonyNumbers: TelephonyNumber[] = [
  { id: 'tn_1', number: '+1 (415) 555-0142', provider: 'Twilio', business: 'BrightSmile Dental', status: 'Active', callVolume: 1284, country: 'United States' },
  { id: 'tn_2', number: '+1 (212) 555-0190', provider: 'Twilio', business: 'Northgate Medical Clinic', status: 'Active', callVolume: 3110, country: 'United States' },
  { id: 'tn_3', number: '+1 (310) 555-0177', provider: 'Bandwidth', business: 'Lumière Salon & Spa', status: 'Porting', callVolume: 540, country: 'United States' },
  { id: 'tn_4', number: '+1 (617) 555-0144', provider: 'Twilio', business: 'Harbor View Bistro', status: 'Active', callVolume: 720, country: 'United States' },
  { id: 'tn_5', number: '+1 (415) 555-0133', provider: 'Twilio', business: 'Skyline Realty Group', status: 'Active', callVolume: 2104, country: 'United States' },
  { id: 'tn_6', number: '+44 20 7946 0123', provider: 'Vonage', business: 'Crestwood Legal', status: 'Active', callVolume: 410, country: 'United Kingdom' },
];

export const systemServices: SystemService[] = [
  { name: 'AI Service', status: 'Operational', uptime: '99.98%', latency: '420ms' },
  { name: 'Telephony', status: 'Operational', uptime: '99.99%', latency: '120ms' },
  { name: 'Calendar Integration', status: 'Operational', uptime: '99.95%', latency: '210ms' },
  { name: 'Database', status: 'Operational', uptime: '100.0%', latency: '18ms' },
  { name: 'API', status: 'Operational', uptime: '99.97%', latency: '95ms' },
];

// Chart data helpers
export const callsOverTime = [
  { label: 'Mon', value: 38 },
  { label: 'Tue', value: 52 },
  { label: 'Wed', value: 41 },
  { label: 'Thu', value: 61 },
  { label: 'Fri', value: 48 },
  { label: 'Sat', value: 22 },
  { label: 'Sun', value: 14 },
];

export const adminCallsOverTime = [
  { label: 'Wk 1', value: 1840 },
  { label: 'Wk 2', value: 2120 },
  { label: 'Wk 3', value: 1980 },
  { label: 'Wk 4', value: 2410 },
  { label: 'Wk 5', value: 2680 },
  { label: 'Wk 6', value: 2950 },
];

export const adminActiveBusinesses = [
  { label: 'Jan', value: 18 },
  { label: 'Feb', value: 24 },
  { label: 'Mar', value: 31 },
  { label: 'Apr', value: 39 },
  { label: 'May', value: 47 },
  { label: 'Jun', value: 58 },
  { label: 'Jul', value: 71 },
  { label: 'Aug', value: 84 },
];

export const adminRevenue = [
  { label: 'Jan', value: 18000 },
  { label: 'Feb', value: 24500 },
  { label: 'Mar', value: 31200 },
  { label: 'Apr', value: 41800 },
  { label: 'May', value: 52400 },
  { label: 'Jun', value: 63100 },
  { label: 'Jul', value: 78900 },
  { label: 'Aug', value: 94200 },
];

export const peakCallingTimes = [
  { label: '8a', value: 12 },
  { label: '9a', value: 28 },
  { label: '10a', value: 42 },
  { label: '11a', value: 38 },
  { label: '12p', value: 31 },
  { label: '1p', value: 22 },
  { label: '2p', value: 34 },
  { label: '3p', value: 48 },
  { label: '4p', value: 36 },
  { label: '5p', value: 24 },
  { label: '6p', value: 18 },
  { label: '7p', value: 14 },
];

export const usageByBusiness = [
  { label: 'Northgate Medical', value: 8840 },
  { label: 'Skyline Realty', value: 5230 },
  { label: 'BrightSmile Dental', value: 3420 },
  { label: 'Apex Home Services', value: 1640 },
  { label: 'Harbor View Bistro', value: 1240 },
];

export const overviewStats = {
  callsToday: 42,
  answered: 39,
  missed: 0,
  appointments: 14,
  leads: 18,
};

export const adminOverviewStats = {
  totalBusinesses: 84,
  activeBusinesses: 71,
  totalCalls: 9264,
  totalAiMinutes: 21360,
  appointments: 2420,
  leads: 2844,
  mrr: 94200,
};

export function formatDuration(sec: number): string {
  if (sec === 0) return '—';
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export function formatDateTime(isoStr: string): string {
  const d = new Date(isoStr);
  return d.toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' });
}

export function formatTime(isoStr: string): string {
  return new Date(isoStr).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
}

export function formatRelative(isoStr: string): string {
  const diff = Date.now() - new Date(isoStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

export type { ServiceItem };
