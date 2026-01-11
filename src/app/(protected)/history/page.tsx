"use client";

import React from 'react';
import { AuthenticatedLayout } from '@/components/Layout';
import { TRANSACTIONS } from '@/constants';
import { Button } from "@/components/ui/button";

const HistoryPage: React.FC = () => {
  return (
    <AuthenticatedLayout>
      <div className="p-4 md:p-8 max-w-[1200px] mx-auto w-full flex flex-col gap-6 md:gap-8 animate-in slide-in-from-right-4 duration-500 overflow-x-hidden text-slate-900">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm gap-6">
          <div className="w-full lg:w-auto">
            <h1 className="text-2xl md:text-3xl font-black mb-1 font-display leading-tight">Activity Log</h1>
            <p className="text-slate-500 text-xs md:text-sm font-medium">Review your utility payments and top-up transactions.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 w-full lg:w-auto">
            <Button variant="outline" className="h-10 px-4 md:px-5 rounded-full border-slate-100 font-bold text-xs md:text-sm flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors text-slate-600 bg-white shadow-sm">
              <span className="material-symbols-outlined text-base md:text-lg">filter_alt</span> Filters
            </Button>
            <Button className="h-10 px-4 md:px-5 rounded-full bg-primary text-white font-bold text-xs md:text-sm flex items-center justify-center gap-2 hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-base md:text-lg">download</span> Export
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left min-w-[600px]">
              <thead className="bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <tr>
                  <th className="px-5 md:px-6 py-5">Service Details</th>
                  <th className="px-5 md:px-6 py-5">Date & Time</th>
                  <th className="px-5 md:px-6 py-5">Amount</th>
                  <th className="px-5 md:px-6 py-5">Status</th>
                  <th className="px-5 md:px-6 py-5 text-right">Invoice</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {TRANSACTIONS.map((t, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-5 md:px-6 py-5">
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className={`size-10 md:size-12 rounded-xl md:rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-inner`}>
                          <span className="material-symbols-outlined text-slate-500 text-xl md:text-2xl font-bold">{t.icon}</span>
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-black text-slate-900 truncate">{t.name}</p>
                          <p className="text-[11px] md:text-xs text-slate-400 font-bold uppercase tracking-wider truncate">{t.sub}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 md:px-6 py-5">
                      <p className="text-sm font-bold text-slate-700">{t.date}</p>
                      <p className="text-[11px] text-slate-400 font-medium">{t.time}</p>
                    </td>
                    <td className="px-5 md:px-6 py-5">
                      <span className="text-sm font-black text-slate-900">{t.amt}</span>
                    </td>
                    <td className="px-5 md:px-6 py-5">
                      <span className={`px-3 md:px-4 py-1.5 rounded-full text-[10px] font-black tracking-tight border ${t.status === 'Success' ? 'bg-green-50 text-green-700 border-green-200' :
                        t.status === 'Pending' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                          'bg-red-50 text-red-700 border-red-200'
                        }`}>
                        {t.status}
                      </span>
                    </td>
                    <td className="px-5 md:px-6 py-5 text-right">
                      <Button variant="ghost" size="icon" className="text-slate-300 hover:text-primary rounded-full hover:bg-primary/5 transition-all">
                        <span className="material-symbols-outlined text-lg">description</span>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {TRANSACTIONS.length === 0 && (
            <div className="py-20 flex flex-col items-center justify-center text-slate-400 p-6">
              <span className="material-symbols-outlined text-6xl mb-4 opacity-20">history</span>
              <p className="font-bold text-center">No transactions found in your records yet.</p>
            </div>
          )}
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default HistoryPage;
