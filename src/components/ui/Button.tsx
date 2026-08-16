import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'dark' | 'danger';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-accent-600 text-white shadow-sm hover:bg-accent-700 active:bg-accent-800 focus-visible:ring-accent-500/30',
  secondary:
    'bg-white text-ink-900 border border-ink-200 shadow-sm hover:bg-ink-50 hover:border-ink-300 focus-visible:ring-ink-300/40',
  outline:
    'bg-transparent text-ink-900 border border-ink-300 hover:bg-ink-50 focus-visible:ring-ink-300/40',
  ghost: 'bg-transparent text-ink-700 hover:bg-ink-100 focus-visible:ring-ink-300/40',
  dark: 'bg-ink-900 text-white shadow-sm hover:bg-ink-800 active:bg-ink-950 focus-visible:ring-ink-700/40',
  danger: 'bg-error-600 text-white shadow-sm hover:bg-error-700 active:bg-error-800 focus-visible:ring-error-500/30',
};

const sizeClasses: Record<Size, string> = {
  sm: 'h-9 px-3.5 text-sm gap-1.5',
  md: 'h-11 px-5 text-sm gap-2',
  lg: 'h-12 px-6 text-base gap-2',
};

const baseClass =
  'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus-visible:ring-4 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap';

type ButtonAsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { to?: undefined };
type ButtonAsLink = BaseProps & { to: string } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>;

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', leftIcon, rightIcon, loading, fullWidth, className, children, ...rest },
  ref,
) {
  const classes = `${baseClass} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className ?? ''}`;
  const content = (
    <>
      {loading && <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />}
      {!loading && leftIcon}
      {children}
      {!loading && rightIcon}
    </>
  );

  if ('to' in rest && rest.to) {
    const { to, ...linkProps } = rest as ButtonAsLink;
    return (
      <Link to={to} className={classes} {...(linkProps as Record<string, unknown>)}>
        {content}
      </Link>
    );
  }

  return (
    <button ref={ref} className={classes} disabled={loading || (rest as ButtonHTMLAttributes<HTMLButtonElement>).disabled} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
});
