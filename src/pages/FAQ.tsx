import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Reveal } from '@/components/marketing/Reveal';
import { faqs } from '@/mock/data';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="pt-28 pb-20">
      <section className="container-px py-12 text-center">
        <Reveal>
          <span className="pill mb-4">FAQ</span>
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight text-ink-950 sm:text-5xl">Frequently asked questions.</h1>
          <p className="mt-1 text-sm text-ink-500">Everything you need to know about how Receptro sets up your AI receptionist.</p>
        </Reveal>
      </section>

      <section className="container-narrow py-8">
        <div className="divide-y divide-ink-100 rounded-2xl border border-ink-200 bg-white">
          {faqs.map((item, i) => (
            <div key={i}>
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                <span className="text-base font-semibold text-ink-900">{item.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-ink-400 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm leading-relaxed text-ink-600">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
