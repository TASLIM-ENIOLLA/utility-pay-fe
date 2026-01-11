"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthenticatedLayout } from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CheckoutPage: React.FC = () => {
  const router = useRouter();
  const [method, setMethod] = useState<'card' | 'wallet'>('card');

  return (
    <AuthenticatedLayout>
      <div className="p-4 md:p-8 max-w-6xl mx-auto w-full animate-in fade-in duration-500 text-slate-900">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 font-display">Review & Pay</h1>
        <div className="grid lg:grid-cols-12 gap-6 md:gap-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold flex items-center gap-3 font-display">
                <span className="size-7 bg-primary text-white rounded-full flex items-center justify-center text-xs">1</span>
                Payment Method
              </h3>

              <div
                onClick={() => setMethod('card')}
                className={`cursor-pointer bg-white rounded-2xl border-2 p-6 shadow-md relative transition-all ${method === 'card' ? 'border-primary' : 'border-slate-50 hover:bg-slate-50'}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`size-5 rounded-full border-2 flex items-center justify-center ${method === 'card' ? 'border-primary' : 'border-slate-200'}`}>
                    {method === 'card' && <div className="size-2.5 bg-primary rounded-full"></div>}
                  </div>
                  <div className="flex-1">
                    <span className="font-bold block">Debit / Credit Card</span>
                    <span className="text-sm text-slate-500">Secure payment via Flutterwave / Paystack</span>
                  </div>
                  <div className="flex gap-2">
                    <img className="h-4 opacity-70" src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" />
                    <img className="h-4 opacity-70" src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" />
                  </div>
                </div>
                {method === 'card' && (
                  <div className="mt-8 space-y-4 bg-slate-50 p-6 rounded-xl animate-in zoom-in-95 duration-200 border border-slate-100">
                    <div className="space-y-1">
                      <Label className="text-[10px] font-black uppercase text-slate-400 ml-1">Card Number</Label>
                      <Input
                        className="w-full bg-white rounded-lg border-slate-200 h-11 focus-visible:ring-primary/30 font-bold text-slate-700"
                        placeholder="0000 0000 0000 0000"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <Label className="text-[10px] font-black uppercase text-slate-400 ml-1">Expiry Date</Label>
                        <Input
                          className="w-full bg-white rounded-lg border-slate-200 h-11 focus-visible:ring-primary/30 font-bold text-slate-700"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-[10px] font-black uppercase text-slate-400 ml-1">CVC</Label>
                        <Input
                          className="w-full bg-white rounded-lg border-slate-200 h-11 focus-visible:ring-primary/30 font-bold text-slate-700"
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div
                onClick={() => setMethod('wallet')}
                className={`cursor-pointer bg-white rounded-2xl border-2 p-6 shadow-md transition-all ${method === 'wallet' ? 'border-primary' : 'border-slate-50 hover:bg-slate-50'}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`size-5 rounded-full border-2 flex items-center justify-center ${method === 'wallet' ? 'border-primary' : 'border-slate-300'}`}>
                    {method === 'wallet' && <div className="size-2.5 bg-primary rounded-full"></div>}
                  </div>
                  <div className="flex-1">
                    <span className="font-bold block">UtilityPay Wallet</span>
                    <span className="text-sm text-green-600 font-bold">Balance: ₦12,450.00</span>
                  </div>
                  <span className="material-symbols-outlined text-slate-400">account_balance_wallet</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Card className="rounded-[2rem] shadow-2xl border-slate-100 overflow-hidden sticky top-24 bg-white">
              <CardHeader className="bg-slate-50 p-6 md:p-8 border-b border-slate-100">
                <p className="text-[10px] md:text-xs text-slate-400 font-black uppercase tracking-widest mb-1">Order Summary</p>
                <CardTitle className="text-3xl md:text-4xl font-black font-display text-slate-900">₦10,100.00</CardTitle>
              </CardHeader>
              <CardContent className="p-6 md:p-8 space-y-6">
                <div className="flex gap-4">
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">bolt</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Electricity Bill</h4>
                    <p className="text-sm text-slate-500">Ikeja Electric (Prepaid)</p>
                  </div>
                </div>
                <div className="border-t border-slate-100 pt-6 space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Service Amount</span>
                    <span className="font-bold text-slate-900">₦10,000.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Service Charge</span>
                    <span className="font-bold text-slate-900">₦100.00</span>
                  </div>
                  <div className="flex justify-between text-lg pt-4 border-t border-slate-50">
                    <span className="font-bold text-slate-900">Total Payable</span>
                    <span className="font-black text-primary">₦10,100.00</span>
                  </div>
                </div>
                <Button
                  onClick={() => {
                    alert('Payment successful!');
                    router.push('/history');
                  }}
                  className="w-full h-14 bg-primary text-white font-bold shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all transform hover:scale-[1.02] text-base"
                >
                  Pay Now & Finalize
                </Button>
                <p className="text-[10px] text-center text-slate-400 px-4 font-medium">
                  By clicking "Pay Now", you agree to UtilityPay Terms of Service and Privacy Policy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default CheckoutPage;
