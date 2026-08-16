import { DollarSign, TrendingUp, CreditCard, Users } from 'lucide-react';
import { PageHeader, StatCard } from '@/components/dashboard/StatCard';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { AreaChart, BarChart } from '@/components/ui/Charts';
import { useCountUp } from '@/hooks/useCountUp';
import { adminRevenue, adminBusinesses } from '@/mock/data';

function Counter({ value, prefix = '' }: { value: number; prefix?: string }) {
  return <span>{prefix}{useCountUp(value).toLocaleString()}</span>;
}

export default function Revenue() {
  const totalMrr = adminBusinesses.reduce((s, b) => s + b.mrr, 0);
  const active = adminBusinesses.filter((b) => b.status === 'Active');

  return (
    <div>
      <PageHeader title="Revenue" subtitle="Monthly recurring revenue and billing." />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="MRR" value={<Counter value={totalMrr} prefix="$" />} icon={DollarSign} trend="+19%" trendUp accent="success" />
        <StatCard label="ARR" value={<Counter value={totalMrr * 12} prefix="$" />} icon={TrendingUp} accent="success" />
        <StatCard label="Paying Businesses" value={<Counter value={active.length} />} icon={Users} />
        <StatCard label="Avg / Business" value={`$${Math.round(totalMrr / (active.length || 1))}`} icon={CreditCard} />
      </div>

      <Card className="mt-6 p-5 sm:p-6">
        <h3 className="text-base font-semibold text-ink-900">Revenue Growth</h3>
        <p className="text-sm text-ink-500">Monthly recurring revenue</p>
        <div className="mt-6"><AreaChart data={adminRevenue} height={240} color="#11b07d" gradientId="rev-grad" /></div>
      </Card>

      <Card className="mt-6 overflow-hidden">
        <div className="border-b border-ink-100 p-5"><h3 className="text-base font-semibold text-ink-900">Revenue by Business</h3></div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-ink-100 text-left text-xs uppercase tracking-wider text-ink-400">
                <th className="px-5 py-3 font-medium">Business</th>
                <th className="px-5 py-3 font-medium">Plan</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">MRR</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100">
              {adminBusinesses.map((b) => (
                <tr key={b.id} className="table-row-hover">
                  <td className="px-5 py-3 font-medium text-ink-900">{b.name}</td>
                  <td className="px-5 py-3 text-ink-600">{b.plan}</td>
                  <td className="px-5 py-3"><Badge variant={b.status === 'Active' ? 'success' : b.status === 'Trial' ? 'warning' : 'error'} dot>{b.status}</Badge></td>
                  <td className="px-5 py-3 font-mono font-semibold text-ink-900">${b.mrr}/mo</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
