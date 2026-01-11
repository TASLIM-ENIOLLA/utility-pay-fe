"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const LandingPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="bg-white min-h-screen font-body scroll-smooth">
      {/* Navigation */}
      <header className="flex items-center justify-between border-b border-slate-200 px-6 md:px-12 py-5 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-[28px] font-bold">bolt</span>
          </div>
          <h2 className="text-2xl font-black font-display tracking-tight text-slate-900">UtilityPay</h2>
        </div>
        <div className="hidden lg:flex gap-10 items-center">
          <Link className="text-sm font-bold text-slate-600 hover:text-primary transition-colors" href="#features">Features</Link>
          <Link className="text-sm font-bold text-slate-600 hover:text-primary transition-colors" href="#how-it-works">How it Works</Link>
          <Link className="text-sm font-bold text-slate-600 hover:text-primary transition-colors" href="#pricing">Pricing</Link>
          <Link className="text-sm font-bold text-slate-600 hover:text-primary transition-colors" href="#faq">FAQ</Link>
        </div>
        <div className="flex gap-3">
          <Button variant="ghost" className="h-11 px-6 rounded-full bg-slate-100 font-bold text-sm hover:bg-slate-200 transition-all text-slate-700">
            <Link href="/login">Login</Link>
          </Button>
          <Button className="h-11 px-6 rounded-full bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all">
            <Link href="/register">Get Started</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left animate-in slide-in-from-left-8 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-[10px] md:text-xs font-black uppercase tracking-widest mb-6">
              <span className="material-symbols-outlined text-sm">verified</span> Trusted by 50,000+ Nigerians
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6 md:mb-8 font-display text-slate-900">
              The Smarter Way <br /><span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">to Manage Bills</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 mb-8 md:mb-10 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              All-in-one platform for your electricity, cable TV, and data subscriptions. Built for speed, secured with bank-grade encryption.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => router.push('/register')}
                className="w-full sm:w-auto h-14 px-10 rounded-2xl bg-primary text-white font-bold shadow-2xl shadow-primary/30 text-lg hover:scale-105 transition-all"
              >
                Create Free Account
              </Button>
              <Button variant="outline" className="w-full sm:w-auto h-14 px-10 rounded-2xl bg-white border border-slate-200 font-bold text-lg hover:bg-slate-50 transition-all text-slate-700">
                View All Pricing
              </Button>
            </div>

            <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center gap-6 md:gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex gap-6 md:gap-8 items-center border-r border-slate-200 pr-6 md:pr-8 hidden sm:flex">
                <span className="font-black text-xl md:text-2xl tracking-tighter">MTN</span>
                <span className="font-black text-xl md:text-2xl tracking-tighter">AIRTEL</span>
                <span className="font-black text-xl md:text-2xl tracking-tighter">GLO</span>
              </div>
              <div className="flex gap-6 md:gap-8 items-center">
                <span className="font-black text-xl md:text-2xl tracking-tighter">DSTV</span>
                <span className="font-black text-xl md:text-2xl tracking-tighter">EKEDC</span>
                <span className="font-black text-xl md:text-2xl tracking-tighter">GOTV</span>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-2xl relative animate-in slide-in-from-right-8 duration-700">
            <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full -z-10 transform translate-x-12 translate-y-12"></div>
            <div className="rounded-[2rem] md:rounded-[3rem] border border-white bg-white/40 backdrop-blur-sm p-3 md:p-4 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] transform hover:-rotate-1 transition-transform">
              <img
                className="rounded-[1.5rem] md:rounded-[2rem] shadow-2xl"
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="UtilityPay Dashboard Preview"
              />
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl border border-slate-100 hidden md:block animate-bounce-slow">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="size-10 md:size-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-xl md:text-24">payments</span>
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs font-bold text-slate-400">Latest Transaction</p>
                    <p className="text-base md:text-lg font-black text-slate-900">₦12,500.00 Successful</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="bg-white py-16 md:py-24 lg:py-32 border-t border-slate-100 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px] -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-display mb-4 md:mb-6 text-slate-900">Why thousands choose <span className="text-primary">UtilityPay</span></h2>
            <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">We've built a platform that removes the friction from bill payments, making it instant, safe, and rewarding.</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: 'bolt', title: 'Instant Processing', color: 'bg-orange-50 text-orange-600', desc: 'No more waiting. Your tokens and data are delivered in under 5 seconds.' },
              { icon: 'security', title: 'Military-Grade Security', color: 'bg-blue-50 text-blue-600', desc: 'We employ the same security protocols as major global banks.' },
              { icon: 'celebration', title: 'Cashback Rewards', color: 'bg-green-50 text-green-600', desc: 'Get up to 3% back into your wallet on every transaction you make.' },
              { icon: 'headset_mic', title: 'Human Support', color: 'bg-purple-50 text-purple-600', desc: 'Real people available 24/7 to help you resolve any issues instantly.' },
              { icon: 'devices', title: 'Across All Devices', color: 'bg-sky-50 text-sky-600', desc: 'Access UtilityPay from your phone, tablet, or web browser anywhere.' },
              { icon: 'account_balance_wallet', title: 'Low Fees', color: 'bg-slate-50 text-slate-700', desc: 'Enjoy the lowest commissions and zero hidden charges in the market.' }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-50/50 p-8 md:p-10 rounded-3xl border border-slate-100 hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-300 group text-left">
                <div className={`size-12 md:size-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-sm group-hover:scale-110 transition-transform`}>
                  <span className="material-symbols-outlined text-2xl md:text-3xl">{feature.icon}</span>
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-display text-slate-900">{feature.title}</h4>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 lg:py-32 bg-slate-50 text-slate-900 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
            <div className="flex-1 w-full">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-display mb-8 md:mb-12">Pay bills in <br /><span className="text-primary italic">3 simple steps</span></h2>

              <div className="space-y-10 md:space-y-12">
                {[
                  { step: '01', title: 'Create Account', desc: 'Sign up for free with just your name and email in less than 30 seconds.' },
                  { step: '02', title: 'Fund Your Wallet', desc: 'Add money safely using your debit card, USSD, or direct bank transfer.' },
                  { step: '03', title: 'Pay & Relax', desc: 'Select the utility you want to pay for and get instant delivery.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 md:gap-8 group">
                    <span className="text-4xl md:text-5xl font-black text-slate-100 group-hover:text-primary transition-colors duration-500 font-display italic shrink-0">{item.step}</span>
                    <div>
                      <h4 className="text-lg md:text-xl font-black mb-1 md:mb-2 group-hover:translate-x-2 transition-transform duration-500">{item.title}</h4>
                      <p className="text-sm md:text-base text-slate-500 group-hover:text-slate-700 transition-colors">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full relative">
              <div className="absolute inset-0 bg-primary/20 blur-[150px] rounded-full"></div>
              <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-8 border border-slate-200 shadow-xl relative z-10 overflow-hidden group">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-2">
                    <div className="size-3 rounded-full bg-rose-500"></div>
                    <div className="size-3 rounded-full bg-amber-500"></div>
                    <div className="size-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Transaction Status: Active</span>
                </div>
                <div className="space-y-4">
                  <div className="h-12 bg-slate-50 rounded-xl px-4 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500">Processing Payment...</span>
                    <span className="material-symbols-outlined text-primary animate-spin">refresh</span>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-primary/20 flex flex-col items-center gap-4 animate-in zoom-in duration-1000">
                    <div className="size-14 md:size-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center">
                      <span className="material-symbols-outlined !text-3xl md:!text-4xl">check_circle</span>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-bold text-slate-900">Transaction Successful</p>
                      <p className="text-[10px] text-slate-500">Receipt ID: UP-19283-ZX</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof/Testimonials */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 lg:order-1">
              {[
                { name: 'Emeka Obi', role: 'Business Owner', img: 'https://i.pravatar.cc/150?u=emeka' },
                { name: 'Sarah Ahmed', role: 'Student', img: 'https://i.pravatar.cc/150?u=sarah' },
                { name: 'John Bello', role: 'Freelancer', img: 'https://i.pravatar.cc/150?u=john' },
                { name: 'Peace Usuh', role: 'Teacher', img: 'https://i.pravatar.cc/150?u=peace' }
              ].map((person, i) => (
                <div key={i} className={`p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all ${i % 2 === 1 ? 'sm:mt-8' : ''}`}>
                  <div className="flex gap-1 mb-4 text-amber-500">
                    {[1, 2, 3, 4, 5].map(s => <span key={s} className="material-symbols-outlined !text-sm fill-1">star</span>)}
                  </div>
                  <p className="text-slate-600 text-[13px] md:text-sm italic mb-6">"UtilityPay has completely changed how I pay my electricity bills. No more going to DISCO offices!"</p>
                  <div className="flex items-center gap-3">
                    <img src={person.img} className="size-10 rounded-full border border-primary/20" alt={person.name} />
                    <div>
                      <p className="text-sm font-black text-slate-900">{person.name}</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{person.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-display mb-6 md:mb-8 text-slate-900 leading-tight">Rated <span className="text-primary italic">4.9/5</span> <br />by our users</h2>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10">
                Hear what regular Nigerians are saying about their experience with UtilityPay. We pride ourselves on reliability and customer focus.
              </p>
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-3xl md:text-4xl font-black text-slate-900">50K+</p>
                  <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Active Users</p>
                </div>
                <div className="w-px h-12 bg-slate-200"></div>
                <div>
                  <p className="text-3xl md:text-4xl font-black text-slate-900">5M+</p>
                  <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Transactions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 lg:py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black font-display mb-4 text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-500">Everything you need to know about using UtilityPay.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: 'Is UtilityPay secure?', a: 'Yes, we use the highest level of bank-grade encryption and partner with certified payment gateways like Flutterwave and Paystack.' },
              { q: 'How long does electricity token delivery take?', a: 'Tokens are delivered instantly via SMS and email immediately after payment confirmation.' },
              { q: 'Can I fund my wallet with bank transfer?', a: 'Absolutely. We provide dedicated virtual account numbers for instant wallet funding via bank transfer.' },
              { q: 'What utilities can I pay for?', a: 'You can pay for Internet Data, Airtime, Electricity (Prepaid/Postpaid), Cable TV (DSTV, GOTV, Startimes), and even school result pins.' }
            ].map((item, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 open:ring-2 open:ring-primary/10">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-slate-900">
                  {item.q}
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-6 pb-6 text-slate-500 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-white text-center relative overflow-hidden shadow-2xl shadow-primary/40">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-black font-display mb-8">Ready to experience <br />the future of payments?</h2>
              <p className="text-xl text-white/80 mb-12 max-w-xl mx-auto">Create your account today and get a bonus of ₦100 on your first wallet funding.</p>
              <Button
                onClick={() => router.push('/register')}
                className="h-16 px-12 rounded-2xl bg-white text-primary font-bold text-xl hover:scale-105 transition-all shadow-xl hover:bg-white/90 border-none"
              >
                Create Your Free Account
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-slate-900 pt-20 pb-10 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary text-4xl">bolt</span>
                <span className="text-2xl font-black font-display italic">UtilityPay</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Your number one choice for bill payments in Nigeria. Fast, secure, and always reliable.
              </p>
              <div className="flex gap-4">
                {['facebook', 'x', 'instagram', 'linkedin'].map(social => (
                  <div key={social} className="size-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer group">
                    <span className="material-symbols-outlined text-sm text-slate-400 group-hover:text-white">language</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-8 font-display">Services</h4>
              <ul className="space-y-4 text-slate-600 text-sm">
                <li><Link href="/register" className="hover:text-primary transition-colors">Data & Airtime</Link></li>
                <li><Link href="/register" className="hover:text-primary transition-colors">Electricity Bills</Link></li>
                <li><Link href="/register" className="hover:text-primary transition-colors">Cable TV Top-up</Link></li>
                <li><Link href="/register" className="hover:text-primary transition-colors">Academic Pins</Link></li>
                <li><Link href="/register" className="hover:text-primary transition-colors">Bulk SMS</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-8 font-display">Company</h4>
              <ul className="space-y-4 text-slate-600 text-sm">
                <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Contact Support</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-8 font-display">Install the App</h4>
              <p className="text-slate-600 text-sm mb-8">Download our mobile app for an even faster experience on the go.</p>
              <div className="space-y-4">
                <Button variant="outline" className="w-full h-auto py-3 bg-slate-50 border-slate-200 rounded-xl flex items-center px-4 gap-4 hover:border-primary transition-colors group justify-start">
                  <span className="material-symbols-outlined text-3xl text-slate-400 group-hover:text-primary transition-colors">phone_iphone</span>
                  <div className="text-left">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Available on</p>
                    <p className="text-sm font-bold text-slate-700">Apple App Store</p>
                  </div>
                </Button>
                <Button variant="outline" className="w-full h-auto py-3 bg-slate-50 border-slate-200 rounded-xl flex items-center px-4 gap-4 hover:border-primary transition-colors group justify-start">
                  <span className="material-symbols-outlined text-3xl text-slate-400 group-hover:text-primary transition-colors">smartphone</span>
                  <div className="text-left">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Download for</p>
                    <p className="text-sm font-bold text-slate-700">Android Play Store</p>
                  </div>
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-loose">
              &copy; 2026 UtilityPay Technologies Limited. Fully licensed for payment services.
            </p>
            <div className="flex gap-6 text-slate-500 text-[10px] font-black uppercase tracking-widest">
              <span>Support: 0800-UTILITY-PAY</span>
              <span>Email: help@utilitypay.ng</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
