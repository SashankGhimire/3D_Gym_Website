import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MEMBERSHIP_PLANS } from '../../data/mockData';
import { Check, X, ShieldCheck, Sparkles, ArrowRight, Zap } from 'lucide-react';

interface MembershipsProps {
  onOpenBooking: (planId?: string) => void;
}

export const Memberships: React.FC<MembershipsProps> = ({ onOpenBooking }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [currency, setCurrency] = useState<'INR' | 'USD' | 'EUR'>('INR');

  const currencyRates = {
    INR: { symbol: '₹', multiplier: 1, label: 'INR (Rs.)' },
    USD: { symbol: '$', multiplier: 0.012, label: 'USD ($)' },
    EUR: { symbol: '€', multiplier: 0.011, label: 'EUR (€)' },
  };

  const currentRate = currencyRates[currency];

  const formatPrice = (amountInInr: number) => {
    const converted = amountInInr * currentRate.multiplier;
    if (currency === 'INR') {
      return `₹ ${converted.toLocaleString('en-IN')}`;
    }
    return `${currentRate.symbol}${Math.round(converted)}`;
  };

  return (
    <section id="memberships" className="py-24 bg-[#050505] text-white border-t border-[#1B1B1B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#111111] border border-[#262626] text-[#A3FF12] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT LUXURY PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            MEMBERSHIP <span className="text-[#A3FF12]">PACKAGES</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Choose your tier of physical transformation. All memberships include full amenity access and InBody assessments.
          </p>

          {/* Billing Cycle & Currency Controls */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Monthly / Annual Toggle */}
            <div className="bg-[#111111] p-1.5 rounded-xl border border-[#262626] flex items-center">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-5 py-2 rounded-lg text-xs font-bold uppercase transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-black shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly Pass
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-5 py-2 rounded-lg text-xs font-bold uppercase transition-all flex items-center gap-1.5 ${
                  billingCycle === 'annual'
                    ? 'bg-[#A3FF12] text-black shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span>Annual Pass</span>
                <span className="bg-black text-[#A3FF12] text-[9px] px-1.5 py-0.5 rounded font-black">
                  SAVE 20%
                </span>
              </button>
            </div>

            {/* Currency Switcher */}
            <div className="bg-[#111111] p-1.5 rounded-xl border border-[#262626] flex items-center">
              {(Object.keys(currencyRates) as Array<keyof typeof currencyRates>).map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`px-3 py-1.5 rounded-md text-[11px] font-bold uppercase transition-all ${
                    currency === c ? 'bg-[#262626] text-[#A3FF12]' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Membership Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => {
            const rawPrice = billingCycle === 'annual' ? plan.priceAnnualMonthly : plan.priceMonthly;
            const displayPrice = formatPrice(rawPrice);

            return (
              <motion.div
                key={plan.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className={`relative bg-[#111111] rounded-2xl p-8 border flex flex-col justify-between ${
                  plan.popular
                    ? 'border-[#A3FF12] glow-lime shadow-2xl scale-[1.02] bg-gradient-to-b from-[#162208] to-[#111111]'
                    : 'border-[#262626] hover:border-white/30'
                }`}
              >
                {/* Popular Highlight Ribbon */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#A3FF12] text-black text-xs font-black uppercase tracking-widest rounded-full shadow-lg flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5" /> MOST POPULAR CHOICE
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="space-y-2 mb-6">
                    <h3 className="text-xl font-black uppercase tracking-tight text-white">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed min-h-[36px]">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price Display */}
                  <div className="mb-8 p-4 rounded-xl bg-[#080808] border border-[#262626] flex items-baseline justify-between">
                    <div>
                      <span className="text-3xl sm:text-4xl font-black text-[#A3FF12] tracking-tight">
                        {displayPrice}
                      </span>
                      <span className="text-xs text-gray-400 font-bold ml-1">/ Month</span>
                    </div>
                    {billingCycle === 'annual' && (
                      <span className="text-[10px] uppercase font-bold text-[#00FF88] bg-[#00FF88]/10 px-2 py-0.5 rounded border border-[#00FF88]/20">
                        Billed Annually
                      </span>
                    )}
                  </div>

                  {/* Included Features */}
                  <div className="space-y-3 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">
                      INCLUDED AMENITIES:
                    </span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-200">
                        <Check className="w-4 h-4 text-[#A3FF12] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Not Included Features */}
                  {plan.notIncluded && plan.notIncluded.length > 0 && (
                    <div className="space-y-2 mb-8 pt-4 border-t border-[#262626]">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">
                        NOT INCLUDED IN THIS TIER:
                      </span>
                      {plan.notIncluded.map((notFeat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-gray-500 line-through">
                          <X className="w-4 h-4 text-red-500/70 shrink-0 mt-0.5" />
                          <span>{notFeat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Plan CTA Button */}
                <button
                  onClick={() => onOpenBooking(plan.id)}
                  className={`w-full py-4 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-[#A3FF12] text-black hover:bg-[#8ee600] glow-lime-sm'
                      : 'bg-[#262626] text-white hover:bg-white hover:text-black'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
