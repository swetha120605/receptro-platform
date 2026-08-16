import { useEffect, useRef, useState } from 'react';
import { Phone, PhoneCall, CalendarPlus, UserPlus, FileText, Sparkles } from 'lucide-react';

interface FloatingNode {
  label: string;
  icon: typeof Phone;
  top: string;
  left: string;
  delay: string;
}

const nodes: FloatingNode[] = [
  { label: 'Incoming Call', icon: PhoneCall, top: '6%', left: '4%', delay: '0s' },
  { label: 'Customer', icon: Phone, top: '24%', left: '-6%', delay: '0.4s' },
  { label: 'AI Receptionist', icon: Sparkles, top: '46%', left: '88%', delay: '0.8s' },
  { label: 'Appointment', icon: CalendarPlus, top: '70%', left: '-4%', delay: '1.2s' },
  { label: 'Lead Captured', icon: UserPlus, top: '88%', left: '10%', delay: '1.6s' },
  { label: 'Call Summary', icon: FileText, top: '78%', left: '82%', delay: '2s' },
];

export function PhoneVisualization() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      setTilt({ x: dy * -8, y: dx * 10 });
    };
    const onLeave = () => setTilt({ x: 0, y: 0 });
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  // cycle through conversation steps
  useEffect(() => {
    const steps = ['incoming', 'greeting', 'intent', 'availability', 'booked'];
    const i = setInterval(() => setActiveStep((s) => (s + 1) % steps.length), 2200);
    return () => clearInterval(i);
  }, []);

  const conversation: { speaker: string; text: string; step: number }[] = [
    { speaker: 'Incoming Call', text: 'New Customer · 9:42 AM', step: 0 },
    { speaker: 'AI Receptionist', text: "Hi, thanks for calling. How can I help you today?", step: 1 },
    { speaker: 'Customer', text: "I'd like to book a cleaning next Tuesday.", step: 2 },
    { speaker: 'AI Receptionist', text: 'We have 3:30 PM and 5:00 PM available.', step: 3 },
    { speaker: 'AI Receptionist', text: "Appointment requested. Lead captured.", step: 4 },
  ];

  return (
    <div ref={containerRef} className="perspective-1000 relative mx-auto h-[520px] w-full max-w-[560px] select-none">
      {/* ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/20 blur-[100px]" />

      {/* floating nodes */}
      {nodes.map((n, i) => {
        const Icon = n.icon;
        return (
          <div
            key={n.label}
            className="absolute z-20 animate-float-slow"
            style={{ top: n.top, left: n.left, animationDelay: n.delay, transform: `translateZ(40px) translate(${tilt.x * 0.6}px, ${tilt.y * 0.6}px)` }}
          >
            <div className="flex items-center gap-2 rounded-xl border border-ink-200/80 bg-white/90 px-3 py-2 shadow-card backdrop-blur-md">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                <Icon className="h-3.5 w-3.5" />
              </span>
              <span className="text-xs font-semibold text-ink-700">{n.label}</span>
            </div>
          </div>
        );
      })}

      {/* connecting lines (SVG overlay) */}
      <svg className="pointer-events-none absolute inset-0 z-10 h-full w-full" viewBox="0 0 560 520" fill="none">
        <defs>
          <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#376bff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#5b8eff" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path d="M 60 60 Q 200 120 280 220" stroke="url(#line-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
        <path d="M 30 150 Q 160 200 280 240" stroke="url(#line-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
        <path d="M 500 240 Q 380 280 280 260" stroke="url(#line-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
        <path d="M 40 380 Q 160 320 280 280" stroke="url(#line-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
        <path d="M 120 460 Q 200 380 280 300" stroke="url(#line-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
        <path d="M 470 410 Q 380 340 290 300" stroke="url(#line-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
      </svg>

      {/* phone */}
      <div
        className="preserve-3d absolute left-1/2 top-1/2 z-30 h-[460px] w-[230px] -translate-x-1/2 -translate-y-1/2 animate-float"
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(0)` }}
      >
        <div className="relative h-full w-full rounded-[2.4rem] border border-ink-200/60 bg-gradient-to-b from-ink-900 to-ink-950 p-3 shadow-2xl">
          {/* notch */}
          <div className="absolute left-1/2 top-3 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-ink-950" />
          {/* screen */}
          <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] bg-gradient-to-b from-ink-50 to-white">
            {/* status bar */}
            <div className="flex items-center justify-between px-5 pt-4 text-[10px] font-medium text-ink-400">
              <span>9:42</span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-success-500" /> AI Online
              </span>
            </div>

            {/* call header */}
            <div className="mt-6 flex flex-col items-center">
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-600 text-white shadow-glow">
                  <PhoneCall className="h-7 w-7" />
                </div>
                <span className="absolute -inset-1 rounded-full border-2 border-accent-500/40 animate-pulse-ring" />
              </div>
              <p className="mt-3 text-sm font-semibold text-ink-900">BrightSmile Dental</p>
              <p className="text-2xs text-ink-400">Incoming · Live call</p>
            </div>

            {/* conversation */}
            <div className="mt-4 space-y-2 px-3">
              {conversation.map((c, i) => (
                <div
                  key={i}
                  className={`flex ${c.speaker === 'Customer' ? 'justify-start' : 'justify-end'} transition-all duration-500`}
                  style={{ opacity: i <= activeStep ? 1 : 0.25, transform: i <= activeStep ? 'translateY(0)' : 'translateY(6px)' }}
                >
                  <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-[11px] leading-snug ${c.speaker === 'Customer' ? 'bg-ink-100 text-ink-800' : 'bg-accent-600 text-white'}`}>
                    {c.text}
                  </div>
                </div>
              ))}
            </div>

            {/* status footer */}
            <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center gap-2">
              <span className={`badge ${activeStep >= 4 ? 'bg-success-50 text-success-700' : 'bg-ink-100 text-ink-500'}`}>
                {activeStep >= 4 ? 'Appointment Requested' : 'Call in progress'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
