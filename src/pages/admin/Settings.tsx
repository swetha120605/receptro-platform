import { useState } from 'react';
import { User, Lock, Bell, Shield, Save } from 'lucide-react';
import { PageHeader } from '@/components/dashboard/StatCard';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input, Checkbox } from '@/components/ui/Input';
import { useToast } from '@/components/ui/Toast';

const sections = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'security', label: 'Security', icon: Lock },
  { id: 'notifications', label: 'Notifications', icon: Bell },
];

export default function Settings() {
  const { toast } = useToast();
  const [active, setActive] = useState('profile');

  return (
    <div>
      <PageHeader title="Settings" subtitle="Manage your admin account." />

      <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
        <div className="flex gap-2 overflow-x-auto lg:flex-col">
          {sections.map((s) => (
            <button key={s.id} onClick={() => setActive(s.id)} className={`flex shrink-0 items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-medium transition ${active === s.id ? 'bg-ink-900 text-white' : 'text-ink-600 hover:bg-ink-100'}`}>
              <s.icon className="h-4 w-4" />{s.label}
            </button>
          ))}
        </div>

        <div>
          {active === 'profile' && (
            <Card className="p-5 sm:p-6">
              <h3 className="text-base font-semibold text-ink-900">Admin Profile</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Input label="Full Name" defaultValue="Admin User" />
                <Input label="Email" defaultValue="admin@receptro.ai" />
                <Input label="Role" defaultValue="Super Admin" disabled />
              </div>
              <div className="mt-5 flex justify-end"><Button onClick={() => toast('Profile saved.', 'success')} leftIcon={<Save className="h-4 w-4" />}>Save</Button></div>
            </Card>
          )}

          {active === 'security' && (
            <Card className="p-5 sm:p-6">
              <h3 className="flex items-center gap-2 text-base font-semibold text-ink-900"><Shield className="h-5 w-5 text-accent-600" />Security</h3>
              <div className="mt-5 space-y-4">
                <Input label="Current Password" type="password" placeholder="••••••••" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input label="New Password" type="password" placeholder="••••••••" />
                  <Input label="Confirm Password" type="password" placeholder="••••••••" />
                </div>
                <div className="flex items-center justify-between rounded-xl border border-ink-100 p-3.5">
                  <div><p className="text-sm font-medium text-ink-900">Two-factor authentication</p><p className="text-xs text-ink-500">Required for admin accounts</p></div>
                  <Checkbox defaultChecked />
                </div>
              </div>
              <div className="mt-5 flex justify-end"><Button onClick={() => toast('Security settings saved.', 'success')} leftIcon={<Save className="h-4 w-4" />}>Save</Button></div>
            </Card>
          )}

          {active === 'notifications' && (
            <Card className="p-5 sm:p-6">
              <h3 className="text-base font-semibold text-ink-900">Notifications</h3>
              <div className="mt-5 space-y-4">
                {['New business signup', 'Business suspended', 'Payment failed', 'System outage alert', 'Weekly platform report'].map((n) => (
                  <div key={n} className="flex items-center justify-between rounded-xl border border-ink-100 p-3.5">
                    <span className="text-sm text-ink-700">{n}</span>
                    <Checkbox defaultChecked />
                  </div>
                ))}
              </div>
              <div className="mt-5 flex justify-end"><Button onClick={() => toast('Notification preferences saved.', 'success')} leftIcon={<Save className="h-4 w-4" />}>Save</Button></div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
