import type { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: ReactNode;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  accent?: 'default' | 'success' | 'error' | 'warning';
}

const accents = {
  default: 'bg-accent-50 text-accent-600',
  success: 'bg-success-50 text-success-600',
  error: 'bg-error-50 text-error-600',
  warning: 'bg-warning-50 text-warning-600',
};

export function StatCard({ label, value, icon: Icon, trend, trendUp, accent = 'default' }: StatCardProps) {
  return (
    <div className="stat-tile">
      <div className="flex items-center justify-between">
        <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${accents[accent]}`}><Icon className="h-5 w-5" /></span>
        {trend && (
          <span className={`text-xs font-medium ${trendUp ? 'text-success-600' : 'text-ink-400'}`}>{trend}</span>
        )}
      </div>
      <p className="mt-4 text-2xl font-bold text-ink-950">{value}</p>
      <p className="text-sm text-ink-500">{label}</p>
    </div>
  );
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

export function PageHeader({ title, subtitle, action }: PageHeaderProps) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-ink-950">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-ink-500">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
