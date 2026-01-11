"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { AuthenticatedLayout } from '@/components/Layout';
import { QUICK_ACTIONS } from '@/constants';
import { BarChart, Bar, ResponsiveContainer, Tooltip, Cell } from 'recharts';
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const data = [
  { name: 'Mon', value: 400 },
  { name: 'Tue', value: 600 },
  { name: 'Wed', value: 300 },
  { name: 'Thu', value: 800 },
  { name: 'Fri', value: 500 },
  { name: 'Sat', value: 750 },
  { name: 'Sun', value: 450 },
];

const DashboardPage: React.FC = () => {
  const router = useRouter();

  return (
    <AuthenticatedLayout>
      <div className="p-4 md:p-8 max-w-[1400px] mx-auto w-full flex flex-col gap-6 md:gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 overflow-x-hidden">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 flex flex-col justify-center">
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-2 font-display text-slate-900">Good evening, Alex</h1>
            <p className="text-sm md:text-base text-slate-500">Here is your financial overview for today.</p>
            <div className="flex flex-wrap gap-3 md:gap-4 mt-6">
              <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-slate-100 shadow-sm grow sm:grow-0">
                <span className="material-symbols-outlined text-green-600 bg-green-50 p-2 rounded-full">trending_up</span>
                <div>
                  <p className="text-[10px] md:text-xs text-slate-400 uppercase font-black tracking-wider">Total Cashback</p>
                  <p className="text-sm md:text-base font-bold text-slate-900">+$12.40</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-slate-100 shadow-sm grow sm:grow-0">
                <span className="material-symbols-outlined text-orange-600 bg-orange-50 p-2 rounded-full">warning</span>
                <div>
                  <p className="text-[10px] md:text-xs text-slate-400 uppercase font-black tracking-wider">Due Bills</p>
                  <p className="text-sm md:text-base font-bold text-slate-900">2 Pending</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-primary-dark border border-white/10 p-6 md:p-8 flex flex-col justify-between min-h-[220px] shadow-2xl text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 flex justify-between items-start">
              <div>
                <p className="text-white/70 font-bold mb-1 text-sm md:text-base uppercase tracking-widest text-[10px]">Total Balance</p>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight font-display">₦12,450.00</h2>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="p-2 rounded-full bg-white/10 border border-white/5 backdrop-blur-sm hover:bg-white/20 text-white transition-all shadow-none"
              >
                <span className="material-symbols-outlined">visibility</span>
              </Button>
            </div>
            <div className="relative z-10 flex items-end justify-between mt-8">
              <div>
                <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Bonus Balance</p>
                <p className="text-lg md:text-xl font-black">$250.00</p>
              </div>
              <Button
                variant="secondary"
                onClick={() => router.push('/wallet')}
                className="bg-white hover:bg-slate-100 text-primary px-5 md:px-6 h-10 md:h-12 rounded-full font-bold shadow-lg transition-all transform hover:scale-105 text-sm md:text-base"
              >
                Fund Wallet
              </Button>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-bold mb-4 font-display text-slate-900">Quick Actions</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {QUICK_ACTIONS.map((action) => (
              <Button
                variant="ghost"
                onClick={() => router.push(action.path)}
                key={action.label}
                className="group flex flex-col items-center gap-2 md:gap-3 p-4 md:p-5 h-auto rounded-2xl bg-white border border-slate-100 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:bg-white"
              >
                <div className={`size-12 md:size-14 rounded-full flex items-center justify-center transition-colors bg-slate-50 text-slate-600 group-hover:bg-primary group-hover:text-white shadow-inner`}>
                  <span className="material-symbols-outlined text-2xl md:text-3xl font-bold">{action.icon}</span>
                </div>
                <span className="text-xs md:text-sm font-bold text-slate-700">{action.label}</span>
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-5 md:p-6 border border-slate-100 shadow-sm h-full">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-base md:text-lg font-black font-display text-slate-900">Spending Analytics</h3>
                <Select defaultValue="this-month">
                  <SelectTrigger className="w-[130px] h-8 bg-slate-50 border-slate-100 text-xs md:text-sm font-bold text-slate-600 rounded-lg">
                    <SelectValue placeholder="Period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="this-month">This Month</SelectItem>
                    <SelectItem value="last-month">Last Month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="h-48 md:h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <Tooltip
                      cursor={{ fill: 'transparent' }}
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '12px' }}
                    />
                    <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.value > 700 ? '#2b7cee' : '#2b7cee33'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-2xl bg-primary p-6 md:p-8 text-white shadow-lg h-full flex flex-col justify-center min-h-[160px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-lg md:text-xl font-bold mb-1 font-display">Get 5% Off Airtime</h3>
              <p className="text-white/80 text-xs md:text-sm mb-6">Recharge over $50 today and get instant cashback to your wallet.</p>
              <Button
                variant="secondary"
                className="w-full bg-white text-primary font-bold h-10 md:h-11 rounded-full text-sm hover:bg-slate-100 transition-colors"
              >
                Claim Offer Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default DashboardPage;
