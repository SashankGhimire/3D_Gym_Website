import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../../data/mockData';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] text-white border-t border-[#1B1B1B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#111111] border border-[#262626] text-[#A3FF12] text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>VERIFIED MEMBER VOICES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            WHAT OUR <span className="text-[#A3FF12]">ATHLETES SAY</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Read authentic reviews from executives, competitive bodybuilders, and fitness enthusiasts.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testi) => (
            <motion.div
              key={testi.id}
              whileHover={{ y: -6 }}
              className="bg-[#111111] border border-[#262626] rounded-2xl p-8 flex flex-col justify-between space-y-6 hover:border-[#A3FF12]/60 transition-all shadow-xl"
            >
              <div className="space-y-4">
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#A3FF12]">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#A3FF12]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#262626]" />
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic">
                  "{testi.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-[#262626] flex items-center space-x-3">
                <img
                  src={testi.avatar}
                  alt={testi.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#A3FF12]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase">{testi.name}</h4>
                  <span className="text-[11px] text-[#A3FF12] block">{testi.role}</span>
                  <span className="text-[10px] text-gray-500 font-mono">Member Since {testi.memberSince} • {testi.achievement}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
