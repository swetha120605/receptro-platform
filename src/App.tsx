import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastProvider } from '@/components/ui/Toast';
import { ScrollToTop } from '@/components/ScrollToTop';

const MarketingLayout = lazy(() => import('@/layouts/MarketingLayout'));
const AdminLayout = lazy(() => import('@/layouts/AdminLayout'));

const Home = lazy(() => import('@/pages/Home'));
const Product = lazy(() => import('@/pages/Product'));
const Industries = lazy(() => import('@/pages/Industries'));
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const FAQ = lazy(() => import('@/pages/FAQ'));
const BookDemo = lazy(() => import('@/pages/BookDemo'));

const AdminOverview = lazy(() => import('@/pages/admin/Overview'));
const AdminBusinesses = lazy(() => import('@/pages/admin/Businesses'));
const AdminBusinessDetail = lazy(() => import('@/pages/admin/BusinessDetail'));
const AdminUsers = lazy(() => import('@/pages/admin/Users'));
const AdminCalls = lazy(() => import('@/pages/admin/Calls'));
const AdminUsage = lazy(() => import('@/pages/admin/Usage'));
const AdminRevenue = lazy(() => import('@/pages/admin/Revenue'));
const AdminAIAgents = lazy(() => import('@/pages/admin/AIAgents'));
const AdminTelephony = lazy(() => import('@/pages/admin/Telephony'));
const AdminSystem = lazy(() => import('@/pages/admin/System'));
const AdminSettings = lazy(() => import('@/pages/admin/Settings'));
const AdminLogin = lazy(() => import('@/pages/admin/AdminLogin'));

function PageFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink-50">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent-600 border-t-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <ScrollToTop />
        <Suspense fallback={<PageFallback />}>
          <Routes>
            {/* Public marketing */}
            <Route element={<MarketingLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/book-demo" element={<BookDemo />} />
            </Route>

            {/* Receptro admin */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminOverview />} />
              <Route path="businesses" element={<AdminBusinesses />} />
              <Route path="businesses/:id" element={<AdminBusinessDetail />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="calls" element={<AdminCalls />} />
              <Route path="usage" element={<AdminUsage />} />
              <Route path="revenue" element={<AdminRevenue />} />
              <Route path="ai-agents" element={<AdminAIAgents />} />
              <Route path="telephony" element={<AdminTelephony />} />
              <Route path="system" element={<AdminSystem />} />
              <Route path="settings" element={<AdminSettings />} />
            </Route>
          </Routes>
        </Suspense>
      </ToastProvider>
    </BrowserRouter>
  );
}
