import { CheckCircle2, Activity, Server, Database, Plug, Radio } from 'lucide-react';
import { PageHeader } from '@/components/dashboard/StatCard';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { systemServices } from '@/mock/data';

const icons: Record<string, typeof Activity> = {
  'AI Service': Activity,
  'Telephony': Radio,
  'Calendar Integration': Plug,
  'Database': Database,
  'API': Server,
};

export default function System() {
  return (
    <div>
      <PageHeader title="System" subtitle="Real-time status of all platform services." />

      <Card className="mb-6 flex items-center gap-4 p-5">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-success-50 text-success-600"><CheckCircle2 className="h-6 w-6" /></span>
        <div>
          <p className="text-base font-semibold text-ink-900">All systems operational</p>
          <p className="text-sm text-ink-500">All services are running normally.</p>
        </div>
        <Badge variant="success" dot className="ml-auto">Operational</Badge>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2">
        {systemServices.map((s) => {
          const Icon = icons[s.name] ?? Activity;
          return (
            <Card key={s.name} className="flex items-center gap-4 p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-success-50 text-success-600"><Icon className="h-5 w-5" /></span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-ink-900">{s.name}</p>
                <div className="mt-1 flex items-center gap-4 text-xs text-ink-500">
                  <span>Uptime: <span className="font-medium text-ink-700">{s.uptime}</span></span>
                  <span>Latency: <span className="font-medium text-ink-700">{s.latency}</span></span>
                </div>
              </div>
              <Badge variant="success" dot>{s.status}</Badge>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
