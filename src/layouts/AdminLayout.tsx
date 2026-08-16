import { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Building2, Users, Phone, Activity, DollarSign,
  Bot, Radio, Server, Settings, Menu, X, ChevronDown, LogOut, Shield,
} from 'lucide-react';
import { Logo } from '@/components/brand/Logo';

const nav = [
  { to: '/admin', label: 'Overview', icon: LayoutDashboard, end: true },
  { to: '/admin/businesses', label: 'Businesses', icon: Building2 },
  { to: '/admin/users', label: 'Users', icon: Users },
  { to: '/admin/calls', label: 'Calls', icon: Phone },
  { to: '/admin/usage', label: 'Usage', icon: Activity },
  { to: '/admin/revenue', label: 'Revenue', icon: DollarSign },
  { to: '/admin/ai-agents', label: 'AI Agents', icon: Bot },
  { to: '/admin/telephony', label: 'Telephony', icon: Radio },
  { to: '/admin/system', label: 'System', icon: Server },
  { to: '/admin/settings', label: 'Settings', icon: Settings },
];

export default function AdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-ink-50">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-ink-200 bg-ink-950 lg:flex">
        <div className="flex h-16 items-center gap-2 border-b border-white/10 px-5">
          <Logo size="sm" dark />
          <span className="ml-auto rounded-md bg-white/10 px-2 py-0.5 text-2xs font-semibold uppercase tracking-wider text-accent-300">Admin</span>
        </div>
        <nav className="flex-1 space-y-1 overflow-y-auto p-3">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${isActive ? 'bg-white/10 text-white' : 'text-ink-400 hover:bg-white/5 hover:text-white'}`
              }
            >
              <item.icon className="h-[18px] w-[18px]" />
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="border-t border-white/10 p-3">
          <div className="flex items-center gap-2 rounded-xl bg-white/5 p-3">
            <Shield className="h-4 w-4 text-accent-400" />
            <span className="text-xs text-ink-300">Receptro Operator</span>
          </div>
        </div>
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <aside className="absolute inset-y-0 left-0 flex w-72 flex-col bg-ink-950">
            <div className="flex h-16 items-center justify-between border-b border-white/10 px-5">
              <Logo size="sm" dark />
              <button onClick={() => setMobileOpen(false)} className="rounded-lg p-1.5 text-ink-400 hover:bg-white/10"><X className="h-5 w-5" /></button>
            </div>
            <nav className="flex-1 space-y-1 overflow-y-auto p-3">
              {nav.map((item) => (
                <NavLink key={item.to} to={item.to} end={item.end} onClick={() => setMobileOpen(false)} className={({ isActive }) => `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium ${isActive ? 'bg-white/10 text-white' : 'text-ink-400 hover:bg-white/5'}`}>
                  <item.icon className="h-[18px] w-[18px]" />{item.label}
                </NavLink>
              ))}
            </nav>
          </aside>
        </div>
      )}

      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-ink-200 bg-white/80 px-4 backdrop-blur-xl sm:px-6">
          <button onClick={() => setMobileOpen(true)} className="rounded-lg p-2 text-ink-600 hover:bg-ink-100 lg:hidden"><Menu className="h-5 w-5" /></button>
          <div className="flex items-center gap-2">
            <span className="hidden text-sm font-medium text-ink-500 sm:block">Receptro Admin</span>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <span className="hidden items-center gap-1.5 rounded-full bg-success-50 px-3 py-1 text-xs font-medium text-success-700 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-success-500" /> All systems operational
            </span>
            <div className="relative">
              <button onClick={() => setProfileOpen((v) => !v)} className="flex items-center gap-2 rounded-lg p-1 pr-2 hover:bg-ink-100">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink-900 text-xs font-semibold text-white">AD</span>
                <span className="hidden text-sm font-medium text-ink-800 sm:block">Admin</span>
                <ChevronDown className="hidden h-4 w-4 text-ink-400 sm:block" />
              </button>
              {profileOpen && (
                <div className="absolute right-0 top-12 w-52 animate-scale-in rounded-xl border border-ink-200 bg-white p-1.5 shadow-card">
                  <button onClick={() => navigate('/admin/settings')} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-ink-700 hover:bg-ink-100"><Settings className="h-4 w-4" />Settings</button>
                  <button onClick={() => navigate('/admin/login')} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-error-600 hover:bg-error-50"><LogOut className="h-4 w-4" />Sign out</button>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
