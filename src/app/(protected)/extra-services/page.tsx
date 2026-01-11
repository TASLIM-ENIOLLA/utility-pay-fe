"use client";

import React from 'react';
import { AuthenticatedLayout } from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ExtraServicesPage: React.FC = () => {
  return (
    <AuthenticatedLayout>
      <div className="p-4 md:p-8 max-w-[1200px] mx-auto w-full flex flex-col gap-6 md:gap-8 animate-in fade-in duration-500 text-slate-900">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-black mb-1 font-display">Extra Services</h1>
            <p className="text-sm md:text-base text-slate-500 font-medium">Value-added tools for business and personal growth.</p>
          </div>
          <div className="bg-white border border-slate-100 rounded-2xl p-4 md:p-6 shadow-sm w-full md:min-w-[280px] md:w-auto flex justify-between items-center">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Service Wallet</p>
              <h2 className="text-xl md:text-2xl font-black font-display text-slate-900">$2,450.00</h2>
            </div>
            <Button size="icon" className="size-11 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-none border-none">
              <span className="material-symbols-outlined font-bold">add</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-8 h-full">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner">
                <span className="material-symbols-outlined font-bold">sms</span>
              </div>
              <div>
                <h3 className="text-xl font-black font-display text-slate-900">Compose Bulk SMS</h3>
                <p className="text-sm text-slate-500 font-medium">Send notifications to thousands instantly.</p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase text-slate-400 ml-1">Sender ID</Label>
                  <Input className="w-full bg-slate-50 border-slate-100 rounded-xl h-12 px-4 focus-visible:ring-primary/20 font-bold text-slate-700" placeholder="e.g. UtilityPay" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase text-slate-400 ml-1">Route Type</Label>
                  <Select defaultValue="transactional">
                    <SelectTrigger className="w-full h-12 bg-slate-50 border-slate-100 rounded-xl px-4 focus:ring-primary/20 transition-all font-bold text-slate-700">
                      <SelectValue placeholder="Select Route" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="transactional">Transactional (High Priority)</SelectItem>
                      <SelectItem value="promotional">Promotional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase text-slate-400 ml-1">Recipients (One per line or comma separated)</Label>
                <Textarea className="w-full bg-slate-50 border-slate-100 rounded-xl h-40 focus-visible:ring-primary/20 resize-none font-bold text-slate-700 placeholder:text-slate-300 p-4" placeholder="08012345678, 08087654321..." />
              </div>
              <Button type="submit" className="w-full h-14 bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all transform hover:scale-[1.01] text-base">
                Proceed to Campaign Send
              </Button>
            </form>
          </div>

          <div className="space-y-6 flex flex-col h-full">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-3xl p-8 flex flex-col flex-1 shadow-sm">
              <div className="size-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                <span className="material-symbols-outlined text-indigo-600 font-bold">school</span>
              </div>
              <h4 className="font-black text-indigo-900 text-xl font-display mb-2">Academic Result Pins</h4>
              <p className="text-sm text-indigo-700 mb-8 leading-relaxed font-medium">
                Purchase WAEC, NECO, and JAMB result checker pins instantly. Enjoy up to 5% discount on bulk orders.
              </p>
              <div className="mt-auto">
                <Button className="w-full h-12 bg-white text-indigo-600 font-black border border-indigo-200 shadow-sm hover:bg-indigo-600 hover:text-white transition-all uppercase tracking-widest text-[10px] rounded-xl">
                  Buy Pins Now
                </Button>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 text-slate-900 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-10 rounded-xl bg-orange-50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-orange-600 font-bold">currency_exchange</span>
                </div>
                <h4 className="font-black font-display text-slate-900 leading-none">Airtime to Cash</h4>
              </div>
              <p className="text-sm text-slate-500 mb-6 font-medium">Convert extra airtime balance back to your bank account with low commissions.</p>
              <Button variant="link" className="text-xs font-black text-primary hover:underline uppercase tracking-widest h-auto p-0">
                Get Started &rarr;
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default ExtraServicesPage;
