"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { NAV_ITEMS, USER } from '../constants';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LayoutProps {
  children: React.ReactNode;
}

export const AuthenticatedLayout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Close mobile menu when pathname changes
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const SidebarContent = () => (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between lg:justify-start gap-4 px-2">
          <div className="flex items-center gap-4">
            <div className="size-10 flex items-center justify-center rounded-full bg-primary text-white">
              <span className="material-symbols-outlined !text-3xl font-bold">bolt</span>
            </div>
            <h2 className="text-slate-900 text-2xl font-black leading-tight tracking-tight font-display">UtilityPay</h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-slate-400 hover:text-rose-500 rounded-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </Button>
        </div>
        <nav className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-full transition-all ${pathname === item.path ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-500 hover:bg-slate-50'}`}
            >
              <span className={`material-symbols-outlined ${pathname === item.path ? 'fill-1' : ''}`}>{item.icon}</span>
              <p className="text-sm font-bold">{item.label}</p>
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex flex-col gap-4">
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div
              className="bg-cover bg-center rounded-full size-10 border-2 border-primary shadow-sm"
              style={{ backgroundImage: `url(${USER.avatar})` }}
            ></div>
            <div className="flex flex-col">
              <p className="text-sm font-bold text-slate-900">{USER.name}</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{USER.plan}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            onClick={() => router.push('/')}
            className="w-full py-2 text-xs font-bold text-rose-500 hover:text-rose-600 hover:bg-rose-50 transition-colors"
          >
            Log Out
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <div className="flex h-screen w-full overflow-hidden bg-white relative">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-72 flex-col justify-between border-r border-slate-100 bg-white p-6 h-full transition-colors shrink-0">
        <SidebarContent />
      </aside>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-[2px] z-[60] lg:hidden animate-in fade-in duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="w-72 h-full bg-white p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-left duration-300 border-r border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            <SidebarContent />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex flex-1 flex-col h-full relative overflow-hidden bg-white">
        <header className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-6 py-4 bg-white/80 backdrop-blur-md border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-3 md:gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="material-symbols-outlined">menu</span>
            </Button>
            <div className="hidden md:flex flex-1 min-w-[200px] lg:min-w-[400px]">
              <div className="relative w-full group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors z-10">search</span>
                <Input
                  className="w-full bg-slate-50 border-slate-100 focus-visible:ring-primary/20 rounded-full pl-12 pr-4 text-sm font-medium transition-all"
                  placeholder="Search transactions..."
                  type="text"
                />
              </div>
            </div>
            <div className="md:hidden flex items-center gap-2">
              <div className="size-8 flex items-center justify-center rounded-lg bg-primary text-white shadow-sm">
                <span className="material-symbols-outlined !text-xl font-bold">bolt</span>
              </div>
              <span className="font-bold text-slate-900 font-display">UtilityPay</span>
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border border-slate-100 text-slate-400 hover:bg-slate-50 transition-colors"
            >
              <span className="material-symbols-outlined text-[20px] md:text-[24px]">notifications</span>
            </Button>
            <div
              className="lg:hidden size-9 md:size-10 rounded-full bg-cover bg-center border border-slate-100 shadow-sm"
              style={{ backgroundImage: `url(${USER.avatar})` }}
            ></div>
          </div>
        </header>

        {/* Scrollable Content Container */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar pb-10">
          {children}
        </div>
      </main>
    </div>
  );
};
