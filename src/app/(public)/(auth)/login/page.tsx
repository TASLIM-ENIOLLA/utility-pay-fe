"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-white font-body">
      <header className="flex items-center justify-between border-b border-slate-200 px-4 md:px-6 py-4 bg-white sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="size-8 md:size-9 flex items-center justify-center rounded-lg md:rounded-xl bg-primary/10 text-primary">
            <span className="material-symbols-outlined text-xl md:text-2xl font-bold">bolt</span>
          </div>
          <h2 className="text-lg md:text-xl font-bold text-slate-900 font-display">UtilityPay</h2>
        </div>
        <div className="hidden lg:flex gap-8">
          <Link className="text-slate-600 text-sm font-semibold hover:text-primary transition-colors" href="/landing">Services</Link>
          <Link className="text-slate-600 text-sm font-semibold hover:text-primary transition-colors" href="/landing">Pricing</Link>
        </div>
        <Button
          variant="secondary"
          onClick={() => router.push('/landing')}
          className="rounded-full h-9 md:h-10 px-4 md:px-5 font-bold"
        >
          Public Info
        </Button>
      </header>

      <main className="flex-grow flex items-center justify-center p-4 py-8 md:py-12 relative overflow-hidden">
        {/* Decorative Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-100/50 rounded-full blur-[80px] md:blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-100/50 rounded-full blur-[80px] md:blur-[120px]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-w-5xl w-full z-10 mx-auto">
          <div
            className="hidden lg:flex lg:col-span-5 relative flex-col justify-between p-10 bg-slate-50 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1554224155-169641357599?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")', backgroundBlendMode: 'overlay' }}
          >
            <div className="relative z-10">
              <h1 className="text-4xl font-extrabold text-slate-900 leading-tight mb-4 font-display">One Platform,<br /><span className="text-primary">All Utilities.</span></h1>
              <p className="text-slate-600 font-medium">Recharge data, pay electricity bills, and manage subscriptions seamlessly with UtilityPay.</p>
            </div>
            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white shadow-sm border border-slate-200">
                <span className="material-symbols-outlined text-green-600">verified_user</span>
                <div className="text-xs text-slate-700 font-bold">Bank-Grade Security Encryption</div>
              </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-7 p-6 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="w-full max-w-sm mx-auto flex flex-col gap-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-slate-900 font-display">Welcome Back</h2>
                <p className="text-slate-500 text-sm">Access your UtilityPay dashboard</p>
              </div>
              <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <span className="text-slate-700 text-xs font-bold uppercase ml-3 block">Email or Phone</span>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors z-10">person</span>
                    <Input
                      className="h-14 bg-slate-50 border-slate-200 focus-visible:ring-primary/20 rounded-xl pl-12 pr-4 text-sm transition-all"
                      placeholder="user@example.com"
                      type="text"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-slate-700 text-xs font-bold uppercase ml-3 block">Password</span>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors z-10">lock</span>
                    <Input
                      className="h-14 bg-slate-50 border-slate-200 focus-visible:ring-primary/20 rounded-xl pl-12 pr-4 text-sm transition-all"
                      placeholder="••••••••"
                      type="password"
                    />
                  </div>
                </div>
                <Button
                  onClick={() => router.push('/dashboard')}
                  className="w-full h-14 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02]"
                >
                  Secure Login
                </Button>
                <Button
                  variant="outline"
                  onClick={() => router.push('/dashboard')}
                  className="w-full h-14 border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-all"
                >
                  Login with OTP
                </Button>
              </form>
              <div className="text-center mt-4">
                <p className="text-slate-500 text-sm font-medium">New here? <Link className="text-primary font-bold hover:underline" href="/register">Create free account</Link></p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
