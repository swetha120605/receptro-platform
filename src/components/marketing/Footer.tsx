import { Link } from 'react-router-dom';
import { Logo } from '@/components/brand/Logo';
import { Linkedin, Instagram, Mail } from 'lucide-react';

const columns = [
  {
    title: 'Solution',
    links: [
      { label: 'Solution', to: '/product' },
      { label: 'Industries', to: '/industries' },
      { label: 'How It Works', to: '/#how-it-works' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'Book a Demo', to: '/book-demo' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'FAQ', to: '/faq' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', to: '/contact' },
      { label: 'Terms', to: '/contact' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-white">
      <div className="container-px py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-ink-500">AI automation agency. We set up your AI receptionist.</p>
            <div className="mt-5 flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 text-ink-500 transition hover:border-ink-300 hover:text-ink-900"><Linkedin className="h-4 w-4" /></a>
              <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 text-ink-500 transition hover:border-ink-300 hover:text-ink-900"><Instagram className="h-4 w-4" /></a>
              <a href="mailto:hello@receptro.ai" aria-label="Email" className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 text-ink-500 transition hover:border-ink-300 hover:text-ink-900"><Mail className="h-4 w-4" /></a>
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-400">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-ink-600 transition-colors hover:text-ink-900">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink-100 pt-6 sm:flex-row">
          <p className="text-xs text-ink-400">© {new Date().getFullYear()} Receptro. All rights reserved.</p>
          <p className="text-xs text-ink-400">Never miss a customer because you missed a call.</p>
        </div>
      </div>
    </footer>
  );
}
