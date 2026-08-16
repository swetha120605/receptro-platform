import { useState } from 'react';
import { Search } from 'lucide-react';
import { PageHeader } from '@/components/dashboard/StatCard';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { adminUsers, formatRelative } from '@/mock/data';

const roleVariant: Record<string, 'info' | 'neutral' | 'warning'> = {
  Owner: 'info',
  Admin: 'neutral',
  'Team Member': 'warning',
};
const statusVariant: Record<string, 'success' | 'warning' | 'error'> = {
  Active: 'success',
  Invited: 'warning',
  Suspended: 'error',
};

export default function Users() {
  const [query, setQuery] = useState('');
  const filtered = adminUsers.filter((u) => u.name.toLowerCase().includes(query.toLowerCase()) || u.email.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <PageHeader title="Users" subtitle="All users across the platform." />

      <div className="mb-4 max-w-sm">
        <Input placeholder="Search users..." value={query} onChange={(e) => setQuery(e.target.value)} leftIcon={<Search className="h-4 w-4" />} />
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-ink-100 text-left text-xs uppercase tracking-wider text-ink-400">
                <th className="px-5 py-3 font-medium">Name</th>
                <th className="px-5 py-3 font-medium">Email</th>
                <th className="px-5 py-3 font-medium">Role</th>
                <th className="px-5 py-3 font-medium">Business</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Last Active</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100">
              {filtered.map((u) => (
                <tr key={u.id} className="table-row-hover">
                  <td className="px-5 py-3 font-medium text-ink-900">{u.name}</td>
                  <td className="px-5 py-3 text-ink-600">{u.email}</td>
                  <td className="px-5 py-3"><Badge variant={roleVariant[u.role]}>{u.role}</Badge></td>
                  <td className="px-5 py-3 text-ink-600">{u.business}</td>
                  <td className="px-5 py-3"><Badge variant={statusVariant[u.status]} dot>{u.status}</Badge></td>
                  <td className="px-5 py-3 text-ink-500">{formatRelative(u.lastActive)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
