"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const RegisterPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4 md:p-6 font-body relative overflow-x-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 -left-48 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-0 -right-48 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-[0_32px_80px_-16px_rgba(0,0,0,0.1)] overflow-hidden relative z-10 border border-slate-100 animate-in zoom-in-95 duration-700 my-8">

        {/* Branding & Experience Section */}
        <div className="hidden lg:flex flex-col justify-between p-12 md:p-16 bg-slate-50 text-slate-900 relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-12">
              <div className="size-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30 text-white">
                <span className="material-symbols-outlined text-3xl font-bold">bolt</span>
              </div>
              <h1 className="text-3xl font-black font-display tracking-tight text-slate-900">UtilityPay</h1>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 font-display text-slate-900">Start Your Journey <br />Today.</h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-sm font-medium">
              Join thousands of Nigerians managing their bills with speed and absolute security.
            </p>
          </div>

          <div className="relative z-10">
            <div className="flex flex-col gap-6">
              {[
                { icon: 'verified', text: 'Secured by 256-bit Encryption' },
                { icon: 'speed', text: 'Instant Settlement Guarantee' },
                { icon: 'account_balance_wallet', text: 'Zero Transaction Fee on Wallet Hits' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="size-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <span className="text-sm font-bold text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
          <div className="mb-8 md:mb-10 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 font-display">Create Account</h3>
            <p className="text-sm text-slate-500 font-medium">Sign up in seconds and start paying smarter.</p>
          </div>

          <form className="space-y-5 md:space-y-6" onSubmit={(e) => { e.preventDefault(); router.push('/dashboard'); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name</Label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors z-10">
                    <span className="material-symbols-outlined text-lg">person</span>
                  </div>
                  <Input
                    className="h-12 md:h-14 bg-slate-50 border-slate-200 rounded-2xl pl-12 pr-4 focus-visible:ring-primary/20 transition-all font-medium text-sm text-slate-900"
                    placeholder="Alex Morgan"
                    type="text"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Phone Number</Label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors z-10">
                    <span className="material-symbols-outlined text-lg">call</span>
                  </div>
                  <Input
                    className="h-12 md:h-14 bg-slate-50 border-slate-200 rounded-2xl pl-12 pr-4 focus-visible:ring-primary/20 transition-all font-medium text-sm text-slate-900"
                    placeholder="080 123 4567"
                    type="tel"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Email Address</Label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors z-10">
                  <span className="material-symbols-outlined text-lg">mail</span>
                </div>
                <Input
                  className="h-12 md:h-14 bg-slate-50 border-slate-200 rounded-2xl pl-12 pr-4 focus-visible:ring-primary/20 transition-all font-medium text-sm text-slate-900"
                  placeholder="alex@example.com"
                  type="email"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Set Password</Label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors z-10">
                  <span className="material-symbols-outlined text-lg">lock</span>
                </div>
                <Input
                  className="h-12 md:h-14 bg-slate-50 border-slate-200 rounded-2xl pl-12 pr-4 focus-visible:ring-primary/20 transition-all font-medium text-sm text-slate-900"
                  placeholder="••••••••"
                  type="password"
                  required
                />
              </div>
            </div>

            <div className="flex items-center gap-2 px-1">
              <Checkbox id="terms" required className="border-slate-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
              <Label htmlFor="terms" className="text-[11px] md:text-xs text-slate-500 font-medium cursor-pointer">
                I agree to the <Link href="#" className="text-primary font-bold hover:underline">Terms of Service</Link>
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full h-13 md:h-14 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/30 hover:bg-primary-dark transition-all transform hover:scale-[1.01] flex items-center justify-center gap-3 text-base md:text-lg"
            >
              Sign Up Now
            </Button>

            <p className="text-center text-sm font-bold text-slate-500 mt-6 md:mt-8">
              Already have an account? <Link href="/" className="text-primary hover:underline">Log In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
