import type { ReactNode } from 'react';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
};

export function Modal({ open, onClose, title, description, children, footer, size = 'md' }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-ink-950/40 backdrop-blur-sm animate-fade-in-fast" onClick={onClose} />
      <div className={`relative w-full ${sizeClasses[size]} animate-scale-in`}>
        <div className="card-surface max-h-[85vh] overflow-auto">
          {(title || description) && (
            <div className="flex items-start justify-between gap-4 border-b border-ink-100 p-5 sm:p-6">
              <div>
                {title && <h3 className="text-lg font-semibold text-ink-900">{title}</h3>}
                {description && <p className="mt-1 text-sm text-ink-500">{description}</p>}
              </div>
              <button onClick={onClose} className="rounded-lg p-1.5 text-ink-400 transition hover:bg-ink-100 hover:text-ink-700">
                <X className="h-5 w-5" />
              </button>
            </div>
          )}
          <div className="p-5 sm:p-6">{children}</div>
          {footer && <div className="flex justify-end gap-3 border-t border-ink-100 p-5 sm:p-6">{footer}</div>}
        </div>
      </div>
    </div>
  );
}
