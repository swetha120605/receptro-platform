import {
  PhoneCall, MessageSquare, CalendarPlus, CalendarClock, CalendarX,
  HelpCircle, UserPlus, FileText, PhoneForwarded, BrainCircuit,
  History, BarChart3, Stethoscope, HeartPulse, Scissors, UtensilsCrossed,
  Building2, Wrench, Briefcase, Phone, Calendar, CalendarDays, Users,
  Mail, Webhook, AudioLines, Circle, type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  PhoneCall, MessageSquare, CalendarPlus, CalendarClock, CalendarX,
  HelpCircle, UserPlus, FileText, PhoneForwarded, BrainCircuit,
  History, BarChart3, Stethoscope, HeartPulse, Scissors, UtensilsCrossed,
  Building2, Wrench, Briefcase, Phone, Calendar, CalendarDays, Users,
  Mail, Webhook, AudioLines,
};

interface IconProps {
  name: string;
  className?: string;
}

export function Icon({ name, className = 'h-5 w-5' }: IconProps) {
  const Cmp = iconMap[name] ?? Circle;
  return <Cmp className={className} />;
}
