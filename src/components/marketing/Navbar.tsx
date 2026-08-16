import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { Button } from '@/components/ui/Button';

const navItems = [
  { label: 'Solution', to: '/product' },
  { label: 'How It Works', to: '/#how-it-works' },
  { label: 'Industries', to: '/industries' },
  { label: 'About', to: '/about' },
  { label: 'FAQ', to: '/faq' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-ink-200/70 bg-white/80 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'}`}>
      <nav className="container-px flex h-16 items-center justify-between lg:h-18">
        <Logo />

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) => `nav-link ${isActive && !item.to.includes('#') ? 'nav-link-active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button to="/book-demo" size="sm" rightIcon={<ArrowRight className="h-4 w-4" />}>Book a Demo</Button>
        </div>

        <button onClick={() => setMobileOpen((v) => !v)} className="rounded-lg p-2 text-ink-700 lg:hidden" aria-label="Menu">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`lg:hidden ${mobileOpen ? 'block' : 'hidden'}`}>
        <div className="border-t border-ink-200 bg-white px-5 py-4 shadow-soft">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link key={item.label} to={item.to} className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-ink-100">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-3 flex flex-col gap-2 border-t border-ink-100 pt-3">
            <Button to="/book-demo" size="sm" fullWidth>Book a Demo</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
