"use client";

import React from 'react';
import { AuthenticatedLayout } from '@/components/Layout';
import { Button } from "@/components/ui/button";

const WalletPage: React.FC = () => {
  return (
    <AuthenticatedLayout>
      <div className="p-4 md:p-8 max-w-[1280px] mx-auto w-full flex flex-col gap-6 md:gap-8 animate-in fade-in duration-500">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <h1 className="text-2xl md:text-4xl font-black mb-1 font-display text-slate-900">My Wallet</h1>
            <p className="text-sm md:text-base text-slate-500">Manage your balance and funding sources</p>
          </div>
          <div className="px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-xs md:text-sm font-bold border border-green-200 flex items-center gap-2">
            <span className="material-symbols-outlined text-base md:text-lg">verified_user</span> Secure Connection
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-2xl p-6 md:p-8 bg-gradient-to-br from-primary to-primary-dark text-white shadow-xl min-h-[180px] md:min-h-[220px] flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full"></div>
              <div className="relative z-10">
                <p className="text-white/70 text-[10px] font-black uppercase tracking-widest mb-1">Total Available Balance</p>
                <h2 className="text-3xl md:text-4xl font-black font-display">₦ 45,200.00</h2>
                <div className="mt-8 flex items-center justify-between text-white/60 text-sm border-t border-white/10 pt-4 font-bold">
                  <span>Primary Account</span>
                  <span>**** 8829</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button className="h-12 rounded-full bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all transform hover:scale-[1.02]">
                Fund Wallet
              </Button>
              <Button variant="outline" className="h-12 rounded-full border-slate-100 font-bold hover:bg-slate-50 transition-all text-slate-700 shadow-sm bg-white">
                Withdraw
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h3 className="text-xl font-black mb-6 font-display text-slate-900">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { name: "Electricity Bill", sub: "Ikeja Electric", amt: "-₦5,000", status: "Success", type: "bill" },
                  { name: "Wallet Funding", sub: "Via Mastercard", amt: "+₦20,000", status: "Success", type: "fund" },
                  { name: "Data Subscription", sub: "MTN 40GB Plan", amt: "-₦11,000", status: "Failed", type: "bill" }
                ].map((t, i) => (
                  <Button
                    key={i}
                    variant="ghost"
                    className="flex items-center justify-between w-full h-auto p-3 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-slate-100 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`size-10 rounded-full flex items-center justify-center ${t.amt.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-slate-50 text-slate-600'} group-hover:scale-110 transition-transform`}>
                        <span className="material-symbols-outlined text-lg">{t.type === 'fund' ? 'account_balance_wallet' : 'shopping_bag'}</span>
                      </div>
                      <div className="text-left">
                        <p className="font-bold text-sm text-slate-900">{t.name}</p>
                        <p className="text-xs text-slate-500 font-medium">{t.sub}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-black ${t.amt.startsWith('+') ? 'text-green-600' : 'text-slate-900'}`}>{t.amt}</p>
                      <p className={`text-[10px] font-black uppercase tracking-wider ${t.status === 'Failed' ? 'text-rose-500' : 'text-green-500'}`}>{t.status}</p>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default WalletPage;
