import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';
import { Reveal } from '@/components/marketing/Reveal';
import { useToast } from '@/components/ui/Toast';

export default function Contact() {
  const { toast } = useToast();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast('Message sent. We will be in touch shortly.', 'success');
  };

  return (
    <div className="pt-28 pb-20">
      <section className="container-px py-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal>
            <div>
              <span className="pill mb-4">Contact</span>
              <h1 className="text-4xl font-extrabold tracking-tight text-ink-950 sm:text-5xl">Talk to our team.</h1>
              <p className="mt-5 text-lg text-ink-500">Questions about Receptro, our AI receptionist setup, or other AI automations? Send us a message and we'll get back to you.</p>

              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50 text-accent-600"><Mail className="h-5 w-5" /></span><div><p className="text-sm text-ink-400">Email</p><p className="text-sm font-medium text-ink-900">hello@receptro.ai</p></div></div>
                <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50 text-accent-600"><Phone className="h-5 w-5" /></span><div><p className="text-sm text-ink-400">Phone</p><p className="text-sm font-medium text-ink-900">+1 (415) 555-0100</p></div></div>
                <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50 text-accent-600"><MapPin className="h-5 w-5" /></span><div><p className="text-sm text-ink-400">Office</p><p className="text-sm font-medium text-ink-900">San Francisco, CA</p></div></div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-3xl border border-ink-200 bg-white p-8 shadow-soft">
              {sent ? (
                <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-success-50 text-success-600"><Send className="h-6 w-6" /></div>
                  <h3 className="mt-4 text-xl font-bold text-ink-950">Thanks — we'll be in touch shortly.</h3>
                  <p className="mt-2 text-ink-500">A member of our team will reach out within one business day.</p>
                  <Button className="mt-6" variant="secondary" onClick={() => setSent(false)}>Send another</Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input label="Name" name="name" placeholder="Jane Doe" required />
                    <Input label="Business" name="business" placeholder="Acme Dental" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input label="Email" name="email" type="email" placeholder="jane@business.com" required />
                    <Input label="Phone" name="phone" placeholder="+1 (415) 555-0100" />
                  </div>
                  <Textarea label="Message" name="message" rows={5} placeholder="Tell us about your business..." required />
                  <Button type="submit" fullWidth size="lg" rightIcon={<Send className="h-4 w-4" />}>Send Message</Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
