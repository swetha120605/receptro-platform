import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronRight } from 'lucide-react';
import { PageHeader } from '@/components/dashboard/StatCard';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { adminBusinesses } from '@/mock/data';

const statusVariant: Record<string, 'success' | 'warning' | 'error'> = {
  Active: 'success',
  Trial: 'warning',
  Suspended: 'error',
};

export default function Businesses() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<'All' | 'Active' | 'Trial' | 'Suspended'>('All');

  const filtered = adminBusinesses.filter(
    (b) => (filter === 'All' || b.status === filter) && (b.name.toLowerCase().includes(query.toLowerCase()) || b.owner.toLowerCase().includes(query.toLowerCase())),
  );

  return (
    <div>
      <PageHeader title="Businesses" subtitle="All businesses on the Receptro platform." />

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="max-w-sm flex-1">
          <Input placeholder="Search businesses..." value={query} onChange={(e) => setQuery(e.target.value)} leftIcon={<Search className="h-4 w-4" />} />
        </div>
        <div className="flex flex-wrap gap-2">
          {(['All', 'Active', 'Trial', 'Suspended'] as const).map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`rounded-lg px-3.5 py-2 text-sm font-medium transition ${filter === f ? 'bg-ink-900 text-white' : 'bg-white text-ink-600 border border-ink-200 hover:bg-ink-50'}`}>{f}</button>
          ))}
        </div>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-ink-100 text-left text-xs uppercase tracking-wider text-ink-400">
                <th className="px-5 py-3 font-medium">Business</th>
                <th className="px-5 py-3 font-medium">Industry</th>
                <th className="px-5 py-3 font-medium">Owner</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Calls</th>
                <th className="px-5 py-3 font-medium">AI Minutes</th>
                <th className="px-5 py-3 font-medium">Created</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100">
              {filtered.map((b) => (
                <tr key={b.id} onClick={() => navigate(`/admin/businesses/${b.id}`)} className="table-row-hover cursor-pointer">
                  <td className="px-5 py-3 font-medium text-ink-900">{b.name}</td>
                  <td className="px-5 py-3 text-ink-600">{b.industry}</td>
                  <td className="px-5 py-3 text-ink-600">{b.owner}</td>
                  <td className="px-5 py-3"><Badge variant={statusVariant[b.status]} dot>{b.status}</Badge></td>
                  <td className="px-5 py-3 font-mono text-ink-600">{b.calls.toLocaleString()}</td>
                  <td className="px-5 py-3 font-mono text-ink-600">{b.aiMinutes.toLocaleString()}</td>
                  <td className="px-5 py-3 text-ink-500">{b.createdAt}</td>
                  <td className="px-5 py-3 text-ink-400"><ChevronRight className="h-4 w-4" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
