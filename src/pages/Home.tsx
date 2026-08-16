import { ArrowRight, PhoneCall, CalendarCheck, Users, Clock, Sparkles, PhoneForwarded, CheckCircle2, X, Bot, MessageSquare, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Reveal, SectionHeading } from '@/components/marketing/Reveal';
import { PhoneVisualization } from '@/components/marketing/PhoneVisualization';
import { Icon } from '@/components/ui/Icon';
import { features, industries } from '@/mock/data';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemSection />
      <ProductSection />
      <HowItWorks />
      <Features />
      <AfterHours />
      <BeforeAfter />
      <IndustriesPreview />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-50 pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      <div className="container-px relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          {/* Left */}
          <div className="animate-fade-in">
            <span className="pill mb-5">
              <span className="flex h-1.5 w-1.5 rounded-full bg-accent-500" />
              AI Automation Agency
            </span>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
              Never miss a customer<br className="hidden sm:block" /> because you missed a call.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-500">
Receptro is an AI automation agency that sets up an AI phone receptionist for your business. It answers calls, handles customer questions, captures leads, and helps manage appointments — even when your team is busy or your business is closed.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/book-demo" size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>Book a Demo</Button>
              <Button to="/#how-it-works" variant="secondary" size="lg" leftIcon={<PlayIcon />}>See How It Works</Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              {[
                { icon: Clock, label: '24/7 Availability' },
                { icon: MessageSquare, label: 'Natural Conversations' },
                { icon: CalendarCheck, label: 'Appointment Handling' },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-2 text-sm text-ink-600">
                  <t.icon className="h-4 w-4 text-accent-600" />
                  {t.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right - 3D visual */}
          <div className="relative">
            <PhoneVisualization />
          </div>
        </div>
      </div>
    </section>
  );
}

function PlayIcon() {
  return (
    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-600 text-white">
      <svg width="9" height="9" viewBox="0 0 12 12" fill="currentColor"><path d="M3 1.5v9l7-4.5z" /></svg>
    </span>
  );
}

function TrustBar() {
  const items = ['Dental', 'Healthcare', 'Restaurants', 'Salons', 'Real Estate', 'Professional Services'];
  return (
    <section className="border-y border-ink-200 bg-white py-10">
      <div className="container-px">
        <p className="text-center text-sm font-medium text-ink-400">Built for businesses where every call matters.</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {items.map((i) => (
            <span key={i} className="text-base font-semibold text-ink-400 transition-colors hover:text-ink-700">{i}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const timeline = [
    { time: '09:42 AM', text: 'Receptionist helping a customer', tone: 'neutral' },
    { time: '09:43 AM', text: 'Another customer calls', tone: 'neutral' },
    { time: '09:43 AM', text: 'Call missed', tone: 'error' },
    { time: '09:44 AM', text: 'Customer moves on', tone: 'error' },
  ];
  return (
    <section className="py-20 sm:py-28">
      <div className="container-px">
        <Reveal>
          <SectionHeading
            eyebrow="The Problem"
            title="Every missed call could be a missed customer."
            subtitle="Most businesses miss calls every single day. Each one is a potential customer, appointment, or sale — gone."
          />
        </Reveal>

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-ink-200 sm:left-[11px]" />
            <div className="space-y-5">
              {timeline.map((t, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="flex items-start gap-4">
                    <span className={`mt-1 h-3.5 w-3.5 shrink-0 rounded-full border-2 ${t.tone === 'error' ? 'border-error-500 bg-error-50' : 'border-ink-300 bg-white'}`} />
                    <div className="flex-1">
                      <span className="font-mono text-xs text-ink-400">{t.time}</span>
                      <p className={`text-lg font-medium ${t.tone === 'error' ? 'text-error-600' : 'text-ink-800'}`}>{t.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal delay={200}>
          <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-accent-200 bg-accent-50 p-8 text-center">
            <p className="text-xl font-semibold text-ink-900">What if every call was answered?</p>
            <p className="mt-2 text-ink-600">Receptro sets up an AI receptionist for your business that never misses a call.</p>
            <div className="mt-5">
              <Button to="/book-demo" rightIcon={<ArrowRight className="h-4 w-4" />}>Book a Demo</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProductSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-px">
        <Reveal>
          <SectionHeading eyebrow="The Solution" title="Meet your AI receptionist." subtitle="A live look at the AI receptionist Receptro sets up for you — handling a real customer call from greeting to appointment." />
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-14 max-w-4xl">
            <div className="overflow-hidden rounded-3xl border border-ink-200 bg-ink-950 shadow-2xl">
              {/* window chrome */}
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
                <span className="h-3 w-3 rounded-full bg-error-400/80" />
                <span className="h-3 w-3 rounded-full bg-warning-400/80" />
                <span className="h-3 w-3 rounded-full bg-success-400/80" />
                <span className="ml-3 text-xs text-ink-400">Receptro · Live Call</span>
                <span className="ml-auto flex items-center gap-1.5 text-xs text-success-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success-400" /> LIVE
                </span>
              </div>

              <div className="grid gap-0 sm:grid-cols-[1fr_1.3fr]">
                {/* caller info */}
                <div className="border-b border-white/10 p-6 sm:border-b-0 sm:border-r">
                  <p className="text-xs uppercase tracking-wider text-ink-400">Customer</p>
                  <p className="mt-1 text-lg font-semibold text-white">Sarah Williams</p>
                  <p className="text-sm text-ink-400">+1 (415) 555-0188</p>

                  <div className="mt-5 space-y-3">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-ink-400">Reason</p>
                      <p className="text-sm text-white">Dental appointment</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-ink-400">Call duration</p>
                      <p className="font-mono text-sm text-white">02:41</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-ink-400">Status</p>
                      <Badge variant="success" dot>Appointment Requested</Badge>
                    </div>
                  </div>
                </div>

                {/* conversation */}
                <div className="space-y-3 p-6">
                  <ConvBubble speaker="Customer" text="I'd like to book a cleaning next Tuesday." />
                  <ConvBubble speaker="AI Receptionist" text="Absolutely. We have availability at 3:30 PM and 5:00 PM." />
                  <ConvBubble speaker="Customer" text="3:30 is great." />
                  <ConvBubble speaker="AI Receptionist" text="Done. I've requested a cleaning for Tuesday at 3:30 PM. The team will confirm shortly." />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ConvBubble({ speaker, text }: { speaker: string; text: string }) {
  const ai = speaker === 'AI Receptionist';
  return (
    <div className={`flex ${ai ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${ai ? 'bg-accent-600 text-white' : 'bg-white/10 text-ink-100'}`}>
        <span className="mb-0.5 block text-2xs font-semibold opacity-70">{speaker}</span>
        {text}
      </div>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    { n: '01', title: 'Customer Calls', text: 'A customer calls your existing business number.', icon: PhoneCall },
    { n: '02', title: 'No Answer? AI Steps In', text: "If your team can't pick up or it's after hours, the AI receptionist answers instantly.", icon: Bot },
    { n: '03', title: 'AI Understands', text: 'It understands natural conversations and customer intent.', icon: MessageSquare },
    { n: '04', title: 'Action Happens', text: 'Bookings, enquiries, lead capture or transfers are handled.', icon: CalendarCheck },
    { n: '05', title: 'Business Gets the Result', text: 'Your team receives the important information.', icon: CheckCircle2 },
  ];
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="container-px">
        <Reveal><SectionHeading eyebrow="How It Works" title="From call to outcome in seconds." /></Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="relative h-full">
                <Card className="h-full p-5" hover>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-bold text-ink-200">{s.n}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50 text-accent-600"><s.icon className="h-5 w-5" /></span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-ink-900">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-500">{s.text}</p>
                </Card>
                {i < steps.length - 1 && (
                  <div className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-ink-300 lg:block">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-px">
        <Reveal><SectionHeading eyebrow="Features" title="More than answering the phone." subtitle="Receptro handles the full conversation — booking, rescheduling, FAQs, lead capture, and human handoff." /></Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.id} delay={(i % 3) * 80}>
              <Card className="group h-full p-5" hover>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-950 text-accent-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent-600 group-hover:text-white">
                  <Icon name={f.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink-900">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{f.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AfterHours() {
  const timeline = [
    { time: '6:00 PM', label: 'Business Closes', icon: X },
    { time: '6:01 PM', label: 'AI Takes Over', icon: Bot },
    { time: '11:47 PM', label: 'Customer Calls', icon: PhoneCall },
    { time: '11:48 PM', label: 'Customer Gets Help', icon: CheckCircle2 },
  ];
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint-dark bg-grid opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-accent-600/20 blur-[120px]" />
      <div className="container-px relative">
        <Reveal>
          <SectionHeading dark eyebrow="After Hours" title="When your team goes home, your AI receptionist stays available." subtitle="Your customers don't always call during business hours. Receptro makes sure they don't have to wait." />
        </Reveal>

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <div className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-600/20 text-accent-300"><t.icon className="h-4 w-4" /></span>
                    <span className="font-mono text-sm text-accent-300">{t.time}</span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-white">{t.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300}>
            <p className="mt-10 text-center text-lg text-ink-300">Your customers don't always call during business hours. Receptro makes sure they don't have to wait.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  const withoutSteps = ['Customer calls', 'Receptionist busy', 'Missed call', 'Customer leaves', 'Lost opportunity'];
  const withSteps = ['Customer calls', 'AI answers', 'Conversation handled', 'Lead captured / Appointment requested', 'Business gets the result'];
  return (
    <section className="py-20 sm:py-28">
      <div className="container-px">
        <Reveal><SectionHeading eyebrow="The Difference" title="Turn missed calls into handled conversations." /></Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-error-200 bg-error-50/40 p-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-error-600">
                <X className="h-4 w-4" /> Without Receptro
              </h3>
              <div className="mt-5 space-y-3">
                {withoutSteps.map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-error-100 text-xs font-semibold text-error-600">{i + 1}</span>
                    <span className="text-sm text-ink-700">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl border border-success-200 bg-success-50/40 p-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-success-600">
                <CheckCircle2 className="h-4 w-4" /> With Receptro
              </h3>
              <div className="mt-5 space-y-3">
                {withSteps.map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-success-100 text-xs font-semibold text-success-700">{i + 1}</span>
                    <span className="text-sm text-ink-700">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function IndustriesPreview() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-px">
        <Reveal><SectionHeading eyebrow="Industries" title="Built for businesses where every call matters." /></Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.id} delay={(i % 3) * 80}>
              <Card className="group h-full p-5" hover>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-600 transition-transform duration-300 group-hover:scale-110">
                  <Icon name={ind.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink-900">{ind.name}</h3>
                <p className="mt-1.5 text-sm text-ink-500">{ind.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {ind.useCases.map((u) => (
                    <span key={u} className="rounded-md bg-ink-100 px-2 py-0.5 text-2xs font-medium text-ink-600">{u}</span>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/industries" variant="secondary" rightIcon={<ArrowRight className="h-4 w-4" />}>Explore all industries</Button>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-600/25 blur-[120px]" />
      <div className="container-px relative text-center">
        <Reveal>
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-600 shadow-glow-dark">
            <PhoneCall className="h-7 w-7 text-white" />
          </div>
          <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">Your next customer could be calling right now.</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink-300">Give every caller an immediate, professional response — set up by Receptro.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button to="/book-demo" size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>Book a Demo</Button>
            <Button to="/contact" variant="secondary" size="lg">Contact Us</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
