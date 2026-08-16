import { Building2, PhoneCall, Clock, CalendarCheck, Users, DollarSign, Activity, TrendingUp } from 'lucide-react';
import { StatCard, PageHeader } from '@/components/dashboard/StatCard';
import { Card } from '@/components/ui/Card';
import { AreaChart, BarChart } from '@/components/ui/Charts';
import { useCountUp } from '@/hooks/useCountUp';
import { adminOverviewStats, adminCallsOverTime, adminActiveBusinesses, adminRevenue } from '@/mock/data';

function Counter({ value, prefix = '' }: { value: number; prefix?: string }) {
  return <span>{prefix}{useCountUp(value).toLocaleString()}</span>;
}

export default function Overview() {
  return (
    <div>
      <PageHeader title="Overview" subtitle="Platform-wide metrics across all businesses." />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        <StatCard label="Total Businesses" value={<Counter value={adminOverviewStats.totalBusinesses} />} icon={Building2} trend="+13" trendUp />
        <StatCard label="Active Businesses" value={<Counter value={adminOverviewStats.activeBusinesses} />} icon={Building2} accent="success" trend="84%" trendUp />
        <StatCard label="Total Calls" value={<Counter value={adminOverviewStats.totalCalls} />} icon={PhoneCall} trend="+18%" trendUp />
        <StatCard label="AI Minutes" value={<Counter value={adminOverviewStats.totalAiMinutes} />} icon={Clock} trend="+22%" trendUp />
        <StatCard label="Appointments" value={<Counter value={adminOverviewStats.appointments} />} icon={CalendarCheck} />
        <StatCard label="Leads" value={<Counter value={adminOverviewStats.leads} />} icon={Users} />
      </div>

      <div className="mt-4">
        <Card className="flex items-center gap-4 p-5">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-success-50 text-success-600"><DollarSign className="h-6 w-6" /></span>
          <div className="flex-1">
            <p className="text-sm text-ink-500">Monthly Recurring Revenue</p>
            <p className="text-2xl font-bold text-ink-950"><Counter value={adminOverviewStats.mrr} prefix="$" /></p>
          </div>
          <span className="flex items-center gap-1 text-sm font-medium text-success-600"><TrendingUp className="h-4 w-4" />+19%</span>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card className="p-5 sm:p-6">
          <h3 className="text-base font-semibold text-ink-900">Calls Over Time</h3>
          <p className="text-sm text-ink-500">Last 6 weeks</p>
          <div className="mt-6"><AreaChart data={adminCallsOverTime} height={200} /></div>
        </Card>
        <Card className="p-5 sm:p-6">
          <h3 className="text-base font-semibold text-ink-900">Active Businesses</h3>
          <p className="text-sm text-ink-500">Growth this year</p>
          <div className="mt-6"><BarChart data={adminActiveBusinesses} height={200} color="#11b07d" /></div>
        </Card>
      </div>

      <Card className="mt-6 p-5 sm:p-6">
        <h3 className="text-base font-semibold text-ink-900">Revenue</h3>
        <p className="text-sm text-ink-500">Monthly recurring revenue</p>
        <div className="mt-6"><AreaChart data={adminRevenue} height={200} color="#11b07d" gradientId="rev-grad" /></div>
      </Card>
    </div>
  );
}
