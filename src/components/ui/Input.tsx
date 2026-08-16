import type { InputHTMLAttributes, TextareaHTMLAttributes, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  leftIcon?: ReactNode;
  rightSlot?: ReactNode;
}

export function Input({ label, hint, error, leftIcon, rightSlot, className, id, ...props }: InputProps) {
  const inputId = id || props.name;
  return (
    <div className="w-full">
      {label && <label htmlFor={inputId} className="label-text">{label}</label>}
      <div className="relative">
        {leftIcon && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-400">{leftIcon}</span>
        )}
        <input
          id={inputId}
          className={`input-field ${leftIcon ? 'pl-10' : ''} ${rightSlot ? 'pr-10' : ''} ${error ? 'border-error-300 focus:border-error-400 focus:ring-error-500/10' : ''} ${className ?? ''}`}
          {...props}
        />
        {rightSlot && <span className="absolute right-3 top-1/2 -translate-y-1/2">{rightSlot}</span>}
      </div>
      {error ? (
        <p className="mt-1.5 text-xs text-error-600">{error}</p>
      ) : hint ? (
        <p className="mt-1.5 text-xs text-ink-400">{hint}</p>
      ) : null}
    </div>
  );
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export function Textarea({ label, hint, error, className, id, ...props }: TextareaProps) {
  const inputId = id || props.name;
  return (
    <div className="w-full">
      {label && <label htmlFor={inputId} className="label-text">{label}</label>}
      <textarea
        id={inputId}
        className={`input-field resize-none ${error ? 'border-error-300 focus:border-error-400 focus:ring-error-500/10' : ''} ${className ?? ''}`}
        {...props}
      />
      {error ? (
        <p className="mt-1.5 text-xs text-error-600">{error}</p>
      ) : hint ? (
        <p className="mt-1.5 text-xs text-ink-400">{hint}</p>
      ) : null}
    </div>
  );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export function Select({ label, hint, error, options, className, id, ...props }: SelectProps) {
  const inputId = id || props.name;
  return (
    <div className="w-full">
      {label && <label htmlFor={inputId} className="label-text">{label}</label>}
      <select id={inputId} className={`input-field appearance-none bg-[length:16px] bg-[right_0.75rem_center] bg-no-repeat ${className ?? ''}`} style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2367738a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")" }} {...props}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      {error ? (
        <p className="mt-1.5 text-xs text-error-600">{error}</p>
      ) : hint ? (
        <p className="mt-1.5 text-xs text-ink-400">{hint}</p>
      ) : null}
    </div>
  );
}

export function Checkbox({ label, ...props }: { label?: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="inline-flex cursor-pointer items-center gap-2.5 select-none">
      <input type="checkbox" className="h-4 w-4 rounded border-ink-300 text-accent-600 focus:ring-accent-500/30" {...props} />
      {label && <span className="text-sm text-ink-700">{label}</span>}
    </label>
  );
}
