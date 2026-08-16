import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useToast } from '@/components/ui/Toast';

export default function AdminLogin() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast('Signed in to Receptro Admin.', 'success');
      navigate('/admin');
    }, 800);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink-950 px-4">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint-dark bg-grid opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-600/20 blur-[140px]" />

      <div className="relative w-full max-w-md">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="flex items-center justify-center gap-2">
            <Logo size="lg" dark />
            <span className="rounded-md bg-accent-600/20 px-2 py-0.5 text-2xs font-semibold uppercase tracking-wider text-accent-300">Admin</span>
          </div>

          <div className="mt-8 flex flex-col items-center text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-600/20 text-accent-300"><Shield className="h-7 w-7" /></div>
            <h1 className="mt-4 text-2xl font-bold text-white">Receptro Admin</h1>
            <p className="mt-1 text-sm text-ink-400">Operator access only.</p>
          </div>

          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <Input label="Admin Email" name="email" type="email" placeholder="admin@receptro.ai" required className="border-white/10 bg-white/5 text-white placeholder:text-ink-500" />
            <Input label="Password" name="password" type="password" placeholder="••••••••" required leftIcon={<Lock className="h-4 w-4 text-ink-500" />} className="border-white/10 bg-white/5 text-white placeholder:text-ink-500" />
            <Button type="submit" fullWidth size="lg" loading={loading} rightIcon={!loading ? <ArrowRight className="h-5 w-5" /> : undefined}>Sign in to Admin</Button>
          </form>

          <p className="mt-6 text-center text-xs text-ink-500">Authorized personnel only. All access is logged.</p>
        </div>
      </div>
    </div>
  );
}
