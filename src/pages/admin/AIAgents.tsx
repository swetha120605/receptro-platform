import { useState } from 'react';
import { Bot, Search, ArrowLeft, Phone, Globe, Wrench } from 'lucide-react';
import { PageHeader } from '@/components/dashboard/StatCard';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';
import { Modal } from '@/components/ui/Modal';
import { aiAgents } from '@/mock/data';
import type { AIAgent } from '@/types';
import { useToast } from '@/components/ui/Toast';

const statusVariant: Record<string, 'success' | 'neutral' | 'warning'> = {
  Online: 'success',
  Offline: 'neutral',
  Training: 'warning',
};

export default function AIAgents() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<AIAgent | null>(null);
  const { toast } = useToast();

  const filtered = aiAgents.filter((a) => a.business.toLowerCase().includes(query.toLowerCase()) || a.agentName.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <PageHeader title="AI Agents" subtitle="All AI receptionist agents across the platform." />

      <div className="mb-4 max-w-sm">
        <Input placeholder="Search agents..." value={query} onChange={(e) => setQuery(e.target.value)} leftIcon={<Search className="h-4 w-4" />} />
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-ink-100 text-left text-xs uppercase tracking-wider text-ink-400">
                <th className="px-5 py-3 font-medium">Business</th>
                <th className="px-5 py-3 font-medium">Agent</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Voice</th>
                <th className="px-5 py-3 font-medium">Language</th>
                <th className="px-5 py-3 font-medium">Calls</th>
                <th className="px-5 py-3 font-medium">Minutes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100">
              {filtered.map((a) => (
                <tr key={a.id} onClick={() => setSelected(a)} className="table-row-hover cursor-pointer">
                  <td className="px-5 py-3 font-medium text-ink-900">{a.business}</td>
                  <td className="px-5 py-3 text-ink-600">{a.agentName}</td>
                  <td className="px-5 py-3"><Badge variant={statusVariant[a.status]} dot>{a.status}</Badge></td>
                  <td className="px-5 py-3 text-ink-600">{a.voice}</td>
                  <td className="px-5 py-3 text-ink-600">{a.language}</td>
                  <td className="px-5 py-3 font-mono text-ink-600">{a.calls.toLocaleString()}</td>
                  <td className="px-5 py-3 font-mono text-ink-600">{a.minutes.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Modal open={!!selected} onClose={() => setSelected(null)} title="Agent Configuration" size="lg">
        {selected && (
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600"><Bot className="h-6 w-6" /></span>
              <div>
                <p className="text-base font-semibold text-ink-900">{selected.agentName}</p>
                <p className="text-sm text-ink-500">{selected.business}</p>
              </div>
              <Badge variant={statusVariant[selected.status]} dot className="ml-auto">{selected.status}</Badge>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-ink-100 p-3"><p className="text-xs text-ink-400">Voice</p><p className="mt-0.5 text-sm font-medium text-ink-900">{selected.voice}</p></div>
              <div className="rounded-xl border border-ink-100 p-3"><p className="text-xs text-ink-400">Language</p><p className="mt-0.5 text-sm font-medium text-ink-900">{selected.language}</p></div>
              <div className="rounded-xl border border-ink-100 p-3"><p className="text-xs text-ink-400">Calls</p><p className="mt-0.5 text-sm font-medium text-ink-900">{selected.calls.toLocaleString()}</p></div>
              <div className="rounded-xl border border-ink-100 p-3"><p className="text-xs text-ink-400">Minutes</p><p className="mt-0.5 text-sm font-medium text-ink-900">{selected.minutes.toLocaleString()}</p></div>
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold text-ink-900">System Prompt</p>
              <Textarea readOnly rows={4} value={selected.prompt} />
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold text-ink-900">Tools</p>
              <div className="flex flex-wrap gap-2">
                {selected.tools.map((t) => <Badge key={t} variant="info">{t}</Badge>)}
              </div>
            </div>

            {selected.transferNumber && (
              <div className="flex items-center gap-3 rounded-xl border border-ink-100 p-3">
                <Phone className="h-4 w-4 text-ink-400" />
                <span className="text-sm text-ink-700">Transfer number: {selected.transferNumber}</span>
              </div>
            )}

            <div className="flex justify-end gap-2">
              <Button variant="secondary" onClick={() => setSelected(null)}>Close</Button>
              <Button onClick={() => toast('Agent configuration saved.', 'success')}>Save</Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
