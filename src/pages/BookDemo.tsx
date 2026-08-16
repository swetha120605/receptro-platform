import { useState } from 'react';
import { CalendarCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input, Textarea, Select } from '@/components/ui/Input';
import { Reveal } from '@/components/marketing/Reveal';
import { useToast } from '@/components/ui/Toast';

export default function BookDemo() {
  const { toast } = useToast();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast('Demo requested. We will be in touch shortly.', 'success');
  };

  return (
    <div className="pt-28 pb-20">
      <section className="container-px py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal>
            <div>
              <span className="pill mb-4">Book a Demo</span>
              <h1 className="text-4xl font-extrabold tracking-tight text-ink-950 sm:text-5xl">See Receptro in action.</h1>
              <p className="mt-5 text-lg text-ink-500">Book a personalised demo and we'll show you how the AI receptionist we set up answers calls, books appointments, and captures leads for businesses like yours.</p>

              <ul className="mt-8 space-y-3">
                {['A live walkthrough of the solution', 'Tailored to your industry and call volume', 'No commitment, no pressure'].map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-sm text-ink-700"><CheckCircle2 className="h-5 w-5 text-success-500" />{t}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-3xl border border-ink-200 bg-white p-8 shadow-soft">
              {sent ? (
                <div className="flex h-full min-h-[480px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success-50 text-success-600"><CalendarCheck className="h-7 w-7" /></div>
                  <h3 className="mt-4 text-2xl font-bold text-ink-950">Thanks — we'll be in touch shortly.</h3>
                  <p className="mt-2 max-w-sm text-ink-500">We've received your demo request. A team member will reach out within one business day to schedule your walkthrough.</p>
                  <Button className="mt-6" variant="secondary" onClick={() => setSent(false)}>Submit another</Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input label="Name" name="name" placeholder="Jane Doe" required />
                    <Input label="Business Name" name="business" placeholder="Acme Dental" required />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Select label="Business Type" name="type" required options={[
                      { value: 'Dental Clinic', label: 'Dental Clinic' },
                      { value: 'Medical Clinic', label: 'Medical Clinic' },
                      { value: 'Salon & Spa', label: 'Salon & Spa' },
                      { value: 'Restaurant', label: 'Restaurant' },
                      { value: 'Real Estate', label: 'Real Estate' },
                      { value: 'Home Services', label: 'Home Services' },
                      { value: 'Professional Services', label: 'Professional Services' },
                      { value: 'Other', label: 'Other' },
                    ]} />
                    <Input label="Email" name="email" type="email" placeholder="jane@business.com" required />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input label="Phone" name="phone" placeholder="+1 (415) 555-0100" required />
                    <Input label="Preferred Date" name="date" type="date" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Select label="Preferred Time" name="time" options={[
                      { value: 'Morning', label: 'Morning (9am - 12pm)' },
                      { value: 'Afternoon', label: 'Afternoon (12pm - 5pm)' },
                      { value: 'Evening', label: 'Evening (5pm - 8pm)' },
                    ]} />
                  </div>
                  <Textarea label="Message" name="message" rows={3} placeholder="Anything we should know about your business?" />
                  <Button type="submit" fullWidth size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>Request Demo</Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
