import { Clock, PhoneCall, Activity, TrendingUp } from 'lucide-react';
import { PageHeader, StatCard } from '@/components/dashboard/StatCard';
import { Card } from '@/components/ui/Card';
import { BarChart, AreaChart } from '@/components/ui/Charts';
import { useCountUp } from '@/hooks/useCountUp';
import { usageByBusiness, adminCallsOverTime } from '@/mock/data';

function Counter({ value }: { value: number }) {
  return <span>{useCountUp(value).toLocaleString()}</span>;
}

export default function Usage() {
  return (
    <div>
      <PageHeader title="Usage" subtitle="AI minutes and call usage across the platform." />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Total Minutes" value={<Counter value={21360} />} icon={Clock} trend="+22%" trendUp />
        <StatCard label="Total Calls" value={<Counter value={9264} />} icon={PhoneCall} trend="+18%" trendUp />
        <StatCard label="Avg Duration" value="2:14" icon={Activity} />
        <StatCard label="Cost / Min" value="$0.12" icon={TrendingUp} />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card className="p-5 sm:p-6">
          <h3 className="text-base font-semibold text-ink-900">Usage by Business</h3>
          <p className="text-sm text-ink-500">AI minutes consumed</p>
          <div className="mt-6"><BarChart data={usageByBusiness} height={220} /></div>
        </Card>
        <Card className="p-5 sm:p-6">
          <h3 className="text-base font-semibold text-ink-900">Usage by Date</h3>
          <p className="text-sm text-ink-500">Weekly trend</p>
          <div className="mt-6"><AreaChart data={adminCallsOverTime} height={220} gradientId="usage-grad" /></div>
        </Card>
      </div>

      <Card className="mt-6 overflow-hidden">
        <div className="border-b border-ink-100 p-5"><h3 className="text-base font-semibold text-ink-900">Usage by Business</h3></div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-ink-100 text-left text-xs uppercase tracking-wider text-ink-400">
                <th className="px-5 py-3 font-medium">Business</th>
                <th className="px-5 py-3 font-medium">Minutes</th>
                <th className="px-5 py-3 font-medium">Calls</th>
                <th className="px-5 py-3 font-medium">Avg / Call</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100">
              {usageByBusiness.map((u, i) => {
                const callCounts = [3110, 2104, 1284, 880, 720];
                const avg = callCounts[i] ? (u.value / callCounts[i]).toFixed(1) : '—';
                return (
                  <tr key={u.label} className="table-row-hover">
                    <td className="px-5 py-3 font-medium text-ink-900">{u.label}</td>
                    <td className="px-5 py-3 font-mono text-ink-600">{u.value.toLocaleString()}</td>
                    <td className="px-5 py-3 font-mono text-ink-600">{callCounts[i]?.toLocaleString() ?? '—'}</td>
                    <td className="px-5 py-3 font-mono text-ink-600">{avg}m</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
