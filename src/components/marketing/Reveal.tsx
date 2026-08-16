import type { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
  dark?: boolean;
  className?: string;
}

export function SectionHeading({ eyebrow, title, subtitle, center = true, dark = false, className = '' }: SectionHeadingProps) {
  return (
    <div className={`${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <span className={`mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] ${dark ? 'text-accent-300' : 'text-accent-600'}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${dark ? 'text-white' : 'text-ink-950'}`}>{title}</h2>
      {subtitle && <p className={`mt-4 text-base leading-relaxed ${dark ? 'text-ink-300' : 'text-ink-500'}`}>{subtitle}</p>}
    </div>
  );
}
