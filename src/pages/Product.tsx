import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Reveal, SectionHeading } from '@/components/marketing/Reveal';
import { Icon } from '@/components/ui/Icon';
import { features } from '@/mock/data';

export default function Product() {
  return (
    <div className="pt-28 pb-20">
      <section className="container-px py-12 text-center">
        <Reveal>
          <span className="pill mb-4">Solution</span>
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-ink-950 sm:text-5xl">An AI receptionist that actually handles the call.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-500">Receptro sets up an AI receptionist that answers your calls in natural conversation, understands what your customers want, and takes action — booking appointments, answering questions, capturing leads, and transferring when needed.</p>
          <div className="mt-8 flex justify-center gap-3">
            <Button to="/book-demo" size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>Book a Demo</Button>
            <Button to="/contact" variant="secondary" size="lg">Contact Us</Button>
          </div>
        </Reveal>
      </section>

      <section className="container-px py-12">
        <Reveal><SectionHeading eyebrow="Capabilities" title="Everything your receptionist does — automated." /></Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.id} delay={(i % 3) * 80}>
              <Card className="h-full p-5" hover>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-950 text-accent-400"><Icon name={f.icon} className="h-5 w-5" /></div>
                <h3 className="mt-4 text-base font-semibold text-ink-900">{f.title}</h3>
                <p className="mt-1.5 text-sm text-ink-500">{f.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-px py-12">
        <Reveal>
          <Card className="overflow-hidden bg-ink-950 p-10 text-white sm:p-14">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold">Built to integrate with your stack.</h2>
                <p className="mt-3 text-ink-300">We connect the AI receptionist to your phone number, calendar, and CRM. Provider-agnostic by design — we can work with Twilio, Vapi, Retell, or other providers.</p>
                <ul className="mt-6 space-y-3">
                  {['Keep your existing business number', 'Sync appointments to Google or Microsoft Calendar', 'Push leads to your CRM', 'Forward call events via webhooks'].map((t) => (
                    <li key={t} className="flex items-center gap-2.5 text-sm text-ink-200"><CheckCircle2 className="h-5 w-5 text-accent-400" />{t}</li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {['Telephony', 'AI Voice', 'Calendar', 'CRM', 'Email', 'Webhooks'].map((x) => (
                  <div key={x} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center text-sm font-medium text-ink-200">{x}</div>
                ))}
              </div>
            </div>
          </Card>
        </Reveal>
      </section>
    </div>
  );
}
