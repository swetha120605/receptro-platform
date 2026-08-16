import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, Bot, CalendarCheck, Users, CreditCard, Plug, Activity, Pause, Play, Edit, Ban } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { adminBusinesses, integrations } from '@/mock/data';
import { useToast } from '@/components/ui/Toast';

const statusVariant: Record<string, 'success' | 'warning' | 'error'> = {
  Active: 'success',
  Trial: 'warning',
  Suspended: 'error',
};

export default function BusinessDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const business = adminBusinesses.find((b) => b.id === id);

  if (!business) {
    return (
      <div className="text-center">
        <p className="text-ink-500">Business not found.</p>
        <Button to="/admin/businesses" variant="secondary" className="mt-4">Back to Businesses</Button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => navigate('/admin/businesses')} className="mb-4 flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-900"><ArrowLeft className="h-4 w-4" />Back to Businesses</button>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-ink-950">{business.name}</h1>
          <p className="mt-1 text-sm text-ink-500">{business.industry} · {business.plan} Plan</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant={statusVariant[business.status]} dot>{business.status}</Badge>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatTile icon={Phone} label="Phone" value={business.phone} />
        <StatTile icon={CalendarCheck} label="Appointments" value={business.appointments.toString()} />
        <StatTile icon={Users} label="Leads" value={business.leads.toString()} />
        <StatTile icon={Activity} label="AI Minutes" value={business.aiMinutes.toLocaleString()} />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card className="p-5 sm:p-6">
          <h3 className="text-base font-semibold text-ink-900">Owner Information</h3>
          <div className="mt-4 space-y-3">
            <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-ink-400" /><span className="text-sm text-ink-700">{business.ownerEmail}</span></div>
            <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-ink-400" /><span className="text-sm text-ink-700">{business.phone}</span></div>
          </div>
        </Card>

        <Card className="p-5 sm:p-6">
          <h3 className="flex items-center gap-2 text-base font-semibold text-ink-900"><Bot className="h-5 w-5 text-accent-600" />AI Receptionist</h3>
          <div className="mt-4 flex items-center gap-3">
            <Badge variant="success" dot>Online</Badge>
            <span className="text-sm text-ink-600">AI Receptionist · Aria</span>
          </div>
        </Card>

        <Card className="p-5 sm:p-6">
          <h3 className="flex items-center gap-2 text-base font-semibold text-ink-900"><CreditCard className="h-5 w-5 text-accent-600" />Subscription</h3>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-ink-500">Plan</span><span className="font-medium text-ink-900">{business.plan}</span></div>
            <div className="flex justify-between"><span className="text-ink-500">MRR</span><span className="font-medium text-ink-900">${business.mrr}/mo</span></div>
            <div className="flex justify-between"><span className="text-ink-500">Created</span><span className="font-medium text-ink-900">{business.createdAt}</span></div>
          </div>
        </Card>

        <Card className="p-5 sm:p-6">
          <h3 className="flex items-center gap-2 text-base font-semibold text-ink-900"><Plug className="h-5 w-5 text-accent-600" />Integration Status</h3>
          <div className="mt-4 space-y-2">
            {integrations.slice(0, 5).map((i) => (
              <div key={i.id} className="flex items-center justify-between text-sm">
                <span className="text-ink-600">{i.name}</span>
                <Badge variant={i.status === 'Connected' ? 'success' : 'neutral'}>{i.status}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="mt-6 p-5 sm:p-6">
        <h3 className="text-base font-semibold text-ink-900">Admin Actions</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button variant="secondary" size="sm" onClick={() => toast('Viewing business details.', 'info')} leftIcon={<Edit className="h-4 w-4" />}>Edit</Button>
          {business.status === 'Suspended' ? (
            <Button size="sm" onClick={() => toast('Business reactivated.', 'success')} leftIcon={<Play className="h-4 w-4" />}>Reactivate</Button>
          ) : (
            <Button variant="danger" size="sm" onClick={() => toast('Business suspended.', 'info')} leftIcon={<Pause className="h-4 w-4" />}>Suspend</Button>
          )}
          <Button variant="danger" size="sm" onClick={() => toast('This is a demo action.', 'info')} leftIcon={<Ban className="h-4 w-4" />}>Delete</Button>
        </div>
      </Card>
    </div>
  );
}

function StatTile({ icon: Icon, label, value }: { icon: typeof Phone; label: string; value: string }) {
  return (
    <div className="stat-tile">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50 text-accent-600"><Icon className="h-5 w-5" /></span>
      <p className="mt-3 text-lg font-bold text-ink-950">{value}</p>
      <p className="text-sm text-ink-500">{label}</p>
    </div>
  );
}
