import { PhoneCall, Clock, TrendingUp } from 'lucide-react';
import { PageHeader, StatCard } from '@/components/dashboard/StatCard';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { AreaChart, BarChart } from '@/components/ui/Charts';
import { useCountUp } from '@/hooks/useCountUp';
import { calls, adminCallsOverTime, formatDuration, formatDateTime } from '@/mock/data';

function Counter({ value }: { value: number }) {
  return <span>{useCountUp(value).toLocaleString()}</span>;
}

export default function Calls() {
  return (
    <div>
      <PageHeader title="Calls" subtitle="All calls across the platform." />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Total Calls" value={<Counter value={9264} />} icon={PhoneCall} trend="+18%" trendUp />
        <StatCard label="Avg Duration" value="2:14" icon={Clock} />
        <StatCard label="Answered" value="98%" icon={TrendingUp} accent="success" trend="+2%" trendUp />
        <StatCard label="This Week" value={<Counter value={2950} />} icon={PhoneCall} />
      </div>

      <Card className="mt-6 p-5 sm:p-6">
        <h3 className="text-base font-semibold text-ink-900">Calls Over Time</h3>
        <p className="text-sm text-ink-500">Last 6 weeks</p>
        <div className="mt-6"><AreaChart data={adminCallsOverTime} height={220} /></div>
      </Card>

      <Card className="mt-6 overflow-hidden">
        <div className="border-b border-ink-100 p-5"><h3 className="text-base font-semibold text-ink-900">Recent Calls</h3></div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-ink-100 text-left text-xs uppercase tracking-wider text-ink-400">
                <th className="px-5 py-3 font-medium">Customer</th>
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium">Duration</th>
                <th className="px-5 py-3 font-medium">Reason</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100">
              {calls.map((c) => (
                <tr key={c.id} className="table-row-hover">
                  <td className="px-5 py-3 font-medium text-ink-900">{c.customerName}</td>
                  <td className="px-5 py-3 text-ink-500">{formatDateTime(c.date)}</td>
                  <td className="px-5 py-3 font-mono text-ink-600">{formatDuration(c.durationSec)}</td>
                  <td className="px-5 py-3 text-ink-600">{c.reason}</td>
                  <td className="px-5 py-3"><Badge variant={c.status === 'Missed' ? 'error' : c.status === 'Transferred' ? 'warning' : c.status === 'Appointment' ? 'success' : 'neutral'}>{c.status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
