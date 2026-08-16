import { Reveal } from '@/components/marketing/Reveal';
import { Button } from '@/components/ui/Button';
import { PhoneCall, Target, Users, Zap } from 'lucide-react';

const values = [
  { icon: Target, title: 'Customer-obsessed', text: 'Every decision starts with what helps businesses serve their customers better.' },
  { icon: Zap, title: 'Relentlessly practical', text: 'We set up automations that work in the real world — not demos that fall over.' },
  { icon: Users, title: 'Built with businesses', text: 'We design alongside the clinics, salons, and teams we serve.' },
];

export default function About() {
  return (
    <div className="pt-28 pb-20">
      <section className="container-px py-12 text-center">
        <Reveal>
          <span className="pill mb-4">About</span>
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-ink-950 sm:text-5xl">We set up the AI front desk for every business.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-500">Receptro is an AI automation agency. We were founded on a simple idea: no business should lose a customer because it missed a call. We set up AI receptionists — and other AI automations — that answer, understand, and act.</p>
        </Reveal>
      </section>

      <section className="container-px py-12">
        <Reveal>
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 rounded-3xl border border-ink-200 bg-white p-10 sm:grid-cols-4">
            {[
              { label: 'Calls answered', value: '120K+' },
              { label: 'Businesses served', value: '84' },
              { label: 'Appointments booked', value: '24K+' },
              { label: 'Uptime', value: '99.9%' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-extrabold text-ink-950">{s.value}</p>
                <p className="mt-1 text-sm text-ink-500">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="container-px py-12">
        <div className="grid gap-5 sm:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 100}>
              <div className="rounded-2xl border border-ink-200 bg-white p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600"><v.icon className="h-5 w-5" /></div>
                <h3 className="mt-4 text-lg font-semibold text-ink-900">{v.title}</h3>
                <p className="mt-2 text-sm text-ink-500">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-px py-12">
        <Reveal>
          <div className="mx-auto max-w-2xl rounded-3xl bg-ink-950 p-12 text-center text-white">
            <PhoneCall className="mx-auto h-10 w-10 text-accent-400" />
            <h2 className="mt-4 text-2xl font-bold">Want to join us?</h2>
            <p className="mt-2 text-ink-300">We're always looking for people who care about building things that matter.</p>
            <div className="mt-6"><Button to="/contact" variant="secondary">Get in touch</Button></div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
