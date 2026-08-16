import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  dark?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: { mark: 'h-7 w-7', text: 'text-lg' },
  md: { mark: 'h-9 w-9', text: 'text-xl' },
  lg: { mark: 'h-11 w-11', text: 'text-2xl' },
};

export function Logo({ className = '', showWordmark = true, dark = false, size = 'md' }: LogoProps) {
  const s = sizes[size];
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <span className={`relative inline-flex ${s.mark} items-center justify-center rounded-xl bg-ink-950 transition-transform duration-300 group-hover:scale-105`}>
        <svg viewBox="0 0 32 32" className="h-[60%] w-[60%]" fill="none">
          {/* abstract R + phone + conversation */}
          <path d="M11 8h6a4 4 0 0 1 0 8h-6V8z" stroke="#5b8eff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11 16v8" stroke="#5b8eff" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M11 12h-2" stroke="#376bff" strokeWidth="2.4" strokeLinecap="round" />
          <circle cx="23" cy="22" r="3.4" fill="#376bff" />
          <path d="M21.4 22l1 1 2.2-2.2" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-accent-500 ring-2 ring-ink-950" />
      </span>
      {showWordmark && (
        <span className={`font-display ${s.text} font-extrabold tracking-tight ${dark ? 'text-white' : 'text-ink-950'}`}>
          Receptro
        </span>
      )}
    </Link>
  );
}
