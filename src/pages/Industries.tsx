import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Reveal, SectionHeading } from '@/components/marketing/Reveal';
import { Icon } from '@/components/ui/Icon';
import { industries } from '@/mock/data';

export default function Industries() {
  return (
    <div className="pt-28 pb-20">
      <section className="container-px py-12 text-center">
        <Reveal>
          <span className="pill mb-4">Industries</span>
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-ink-950 sm:text-5xl">Every industry. Every call. Answered.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-500">Receptro adapts to your business — your services, your hours, your voice. Here's how it works across industries.</p>
        </Reveal>
      </section>

      <section className="container-px py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.id} delay={(i % 3) * 80}>
              <Card className="group h-full p-6" hover>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-950 text-accent-400 transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent-600 group-hover:text-white">
                  <Icon name={ind.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink-900">{ind.name}</h3>
                <p className="mt-2 text-sm text-ink-500">{ind.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {ind.useCases.map((u) => (
                    <span key={u} className="rounded-md bg-ink-100 px-2 py-0.5 text-2xs font-medium text-ink-600">{u}</span>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-px py-12">
        <Reveal>
          <div className="rounded-3xl bg-ink-950 p-12 text-center text-white">
            <h2 className="text-3xl font-bold">Don't see your industry?</h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-300">Receptro is configurable for any business that receives phone calls. Talk to us about your use case.</p>
            <div className="mt-6"><Button to="/contact" variant="secondary" rightIcon={<ArrowRight className="h-4 w-4" />}>Talk to us</Button></div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
