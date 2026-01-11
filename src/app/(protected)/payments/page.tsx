"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthenticatedLayout } from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const PaymentsPage: React.FC = () => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('Data');

  const categories = [
    { name: "Data", icon: "wifi" },
    { name: "Airtime", icon: "phone_iphone" },
    { name: "Electricity", icon: "bolt" },
    { name: "Cable TV", icon: "tv" }
  ];

  return (
    <AuthenticatedLayout>
      <div className="p-4 md:p-8 max-w-[1440px] mx-auto w-full flex flex-col gap-6 md:gap-8 animate-in fade-in duration-500">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-2xl md:text-4xl font-black mb-1 font-display text-slate-900">Payments Center</h1>
            <p className="text-sm md:text-base text-slate-500">Select a service and provider to complete your payment.</p>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-4 md:p-5 text-white w-full md:min-w-[300px] md:w-auto flex justify-between items-center shadow-lg transform hover:scale-[1.02] transition-all">
            <div>
              <p className="text-[10px] md:text-xs opacity-70 mb-1 font-bold uppercase tracking-wider">Wallet Balance</p>
              <h2 className="text-2xl md:text-3xl font-black font-display text-white">₦12,450.00</h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.push('/wallet')}
              className="bg-white/20 p-2 rounded-xl hover:bg-white/30 transition-colors text-white"
            >
              <span className="material-symbols-outlined">add</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-2 rounded-2xl border border-slate-100 shadow-sm flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat.name}
                  variant="ghost"
                  onClick={() => setActiveCategory(cat.name)}
                  className={`flex-1 min-w-[100px] h-auto py-4 rounded-xl font-black text-sm transition-all flex flex-col items-center gap-2 ${activeCategory === cat.name ? 'bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-dark hover:text-white' : 'text-slate-500 hover:bg-slate-50'}`}
                >
                  <span className="material-symbols-outlined font-bold">{cat.icon}</span>
                  {cat.name}
                </Button>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-5 md:p-8 border border-slate-100 shadow-sm space-y-6">
              <h3 className="text-lg md:text-xl font-bold font-display text-slate-900">Transaction Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase text-slate-500 ml-1">Service Provider</Label>
                  <Select>
                    <SelectTrigger className="w-full h-12 md:h-14 bg-slate-50 border-slate-100 rounded-xl px-4 outline-none focus:ring-2 focus:ring-primary/20 transition-all font-bold text-slate-700">
                      <SelectValue placeholder="Select Provider" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mtn">MTN Nigeria</SelectItem>
                      <SelectItem value="airtel">Airtel</SelectItem>
                      <SelectItem value="glo">Glo</SelectItem>
                      <SelectItem value="9mobile">9Mobile</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase text-slate-500 ml-1">Phone Number / ID</Label>
                  <Input
                    className="w-full h-12 md:h-14 bg-slate-50 border-slate-100 rounded-xl px-4 outline-none focus-visible:ring-2 focus-visible:ring-primary/20 transition-all font-bold text-slate-700 placeholder:text-slate-300"
                    placeholder="e.g. 08012345678"
                    type="text"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label className="text-xs font-bold uppercase text-slate-500 ml-1">Select Bundle / Plan</Label>
                  <Select>
                    <SelectTrigger className="w-full h-12 md:h-14 bg-slate-50 border-slate-100 rounded-xl px-4 outline-none focus:ring-2 focus:ring-primary/20 transition-all font-bold text-slate-700">
                      <SelectValue placeholder="Select a plan..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1gb">1GB Weekly - ₦500</SelectItem>
                      <SelectItem value="5gb">5GB Monthly - ₦1,500</SelectItem>
                      <SelectItem value="15gb">15GB Monthly - ₦3,500</SelectItem>
                      <SelectItem value="unlimited">Unlimited Data - ₦15,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button
                onClick={() => router.push('/checkout')}
                className="w-full h-14 bg-primary text-white font-bold shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2"
              >
                Continue to Payment Review <span className="material-symbols-outlined">arrow_forward</span>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 h-full">
              <h3 className="text-lg font-black mb-4 font-display text-slate-900">Quick Pay Contacts</h3>
              <div className="space-y-4">
                {[1, 2, 3].map(i => (
                  <Button
                    key={i}
                    variant="ghost"
                    className="flex items-center gap-4 w-full h-auto p-2 hover:bg-slate-50 rounded-xl transition-colors group text-left justify-start"
                  >
                    <div className="size-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary transition-colors border border-slate-100 shadow-sm shadow-inner overflow-hidden">
                      <span className="material-symbols-outlined text-slate-400 group-hover:text-white transition-colors">person</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-black block text-slate-900">Contact {i}</span>
                      <span className="text-xs text-slate-400 font-medium">080 **** 567{i}</span>
                    </div>
                  </Button>
                ))}
              </div>
              <Button
                variant="outline"
                className="w-full mt-4 h-12 rounded-xl border-dashed border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary hover:border-primary transition-all bg-white"
              >
                + Add New Beneficiary
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default PaymentsPage;
