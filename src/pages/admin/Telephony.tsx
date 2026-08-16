import { Radio, Plus, Search } from 'lucide-react';
import { PageHeader } from '@/components/dashboard/StatCard';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { telephonyNumbers } from '@/mock/data';
import { useToast } from '@/components/ui/Toast';

const statusVariant: Record<string, 'success' | 'warning' | 'neutral'> = {
  Active: 'success',
  Porting: 'warning',
  Inactive: 'neutral',
};

export default function Telephony() {
  const { toast } = useToast();

  return (
    <div>
      <PageHeader
        title="Telephony"
        subtitle="Manage phone numbers and telephony providers."
        action={<Button size="sm" leftIcon={<Plus className="h-4 w-4" />} onClick={() => toast('Number provisioning is a demo.', 'info')}>Add Number</Button>}
      />

      <Card className="mb-6 flex items-center gap-4 p-5">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600"><Radio className="h-5 w-5" /></span>
        <div className="flex-1">
          <p className="text-sm font-semibold text-ink-900">Provider-agnostic telephony</p>
          <p className="text-sm text-ink-500">Supports Twilio, Vonage, Bandwidth and others. Numbers can be ported or provisioned.</p>
        </div>
      </Card>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-ink-100 text-left text-xs uppercase tracking-wider text-ink-400">
                <th className="px-5 py-3 font-medium">Number</th>
                <th className="px-5 py-3 font-medium">Provider</th>
                <th className="px-5 py-3 font-medium">Business</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Call Volume</th>
                <th className="px-5 py-3 font-medium">Country</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100">
              {telephonyNumbers.map((t) => (
                <tr key={t.id} className="table-row-hover">
                  <td className="px-5 py-3 font-mono font-medium text-ink-900">{t.number}</td>
                  <td className="px-5 py-3 text-ink-600">{t.provider}</td>
                  <td className="px-5 py-3 text-ink-600">{t.business}</td>
                  <td className="px-5 py-3"><Badge variant={statusVariant[t.status]} dot>{t.status}</Badge></td>
                  <td className="px-5 py-3 font-mono text-ink-600">{t.callVolume.toLocaleString()}</td>
                  <td className="px-5 py-3 text-ink-600">{t.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
