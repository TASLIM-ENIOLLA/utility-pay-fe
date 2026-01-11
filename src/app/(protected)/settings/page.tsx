"use client";

import React from 'react';
import { AuthenticatedLayout } from '@/components/Layout';
import { USER } from '@/constants';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SettingsPage: React.FC = () => {
  return (
    <AuthenticatedLayout>
      <div className="p-4 md:p-8 max-w-[1000px] mx-auto w-full pb-20 animate-in fade-in duration-500 text-slate-900">
        <div className="mb-8 md:mb-10">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-2 font-display">Settings & Profile</h1>
          <p className="text-sm md:text-base text-slate-500 font-medium">Manage your account identity and system preferences.</p>
        </div>

        <div className="flex flex-col gap-8">
          <section className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold mb-8 font-display flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">person</span> Personal Information
            </h3>
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex flex-col items-center gap-4 shrink-0">
                <div
                  className="size-32 rounded-full border-4 border-slate-50 bg-cover bg-center shadow-md"
                  style={{ backgroundImage: `url(${USER.avatar})` }}
                ></div>
                <Button variant="secondary" className="text-primary font-bold text-xs bg-primary/5 px-6 h-9 rounded-full hover:bg-primary/10 transition-colors border-none">
                  Update Avatar
                </Button>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase text-slate-400 ml-1">Full Name</Label>
                  <Input className="w-full bg-slate-50 border-slate-100 rounded-xl h-12 px-4 focus-visible:ring-primary/20 transition-all font-bold text-slate-700" defaultValue={USER.name} />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase text-slate-400 ml-1">Email Address</Label>
                  <Input className="w-full bg-slate-50 border-slate-100 rounded-xl h-12 px-4 focus-visible:ring-primary/20 transition-all font-bold text-slate-700" defaultValue="alex.morgan@example.com" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase text-slate-400 ml-1">Phone Number</Label>
                  <Input className="w-full bg-slate-50 border-slate-100 rounded-xl h-12 px-4 focus-visible:ring-primary/20 transition-all font-bold text-slate-700" defaultValue="+234 803 123 4567" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold uppercase text-slate-400 ml-1">Currency Preferred</Label>
                  <Select defaultValue="ngn">
                    <SelectTrigger className="w-full bg-slate-50 border-slate-100 rounded-xl h-12 px-4 focus:ring-primary/20 transition-all font-bold text-slate-700">
                      <SelectValue placeholder="Select Currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ngn">NGN (Nigerian Naira)</SelectItem>
                      <SelectItem value="usd">USD (US Dollar)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-black mb-8 flex items-center gap-2 font-display text-slate-900 leading-none">
                <span className="material-symbols-outlined text-primary">security</span> Privacy & Security
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center group cursor-pointer">
                  <div className="space-y-0.5">
                    <Label htmlFor="2fa" className="text-sm font-bold cursor-pointer">Two-Factor Authentication</Label>
                    <p className="text-xs text-slate-400 font-medium">Keep your account extra secure</p>
                  </div>
                  <Switch id="2fa" defaultChecked />
                </div>
                <div className="border-t border-slate-50 pt-6 flex justify-between items-center group cursor-pointer">
                  <div className="space-y-0.5">
                    <Label htmlFor="biometric" className="text-sm font-bold cursor-pointer">Biometric Login</Label>
                    <p className="text-xs text-slate-400 font-medium">Unlock with FaceID/TouchID</p>
                  </div>
                  <Switch id="biometric" />
                </div>
                <Button variant="outline" className="w-full mt-4 h-12 rounded-xl border-slate-200 text-sm font-black text-slate-500 hover:bg-slate-50 transition-all bg-white">
                  Update Password
                </Button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="font-black mb-8 flex items-center gap-2 font-display text-slate-900 leading-none">
                <span className="material-symbols-outlined text-primary">notifications</span> Alerts
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <Label htmlFor="reminders" className="text-sm font-bold cursor-pointer">Bill Due Reminders</Label>
                  <Switch id="reminders" defaultChecked />
                </div>
                <div className="border-t border-slate-50 pt-6 flex justify-between items-center">
                  <Label htmlFor="promo" className="text-sm font-bold cursor-pointer">Promotional Emails</Label>
                  <Switch id="promo" />
                </div>
                <div className="border-t border-slate-50 pt-6 flex justify-between items-center">
                  <Label htmlFor="login-alerts" className="text-sm font-bold cursor-pointer">Login Alerts</Label>
                  <Switch id="login-alerts" defaultChecked />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-4">
            <Button variant="ghost" className="px-8 h-12 rounded-xl font-black text-slate-400 hover:bg-slate-50 transition-all uppercase tracking-widest text-[10px]">Discard Changes</Button>
            <Button className="px-8 h-12 rounded-xl font-black bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all transform hover:scale-[1.02] uppercase tracking-widest text-[10px]">Save Settings</Button>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default SettingsPage;
