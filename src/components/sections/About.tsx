import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Award, Sparkles, CheckCircle2, ChevronRight, Clock } from 'lucide-react';
import { BRAND_INFO, FACILITY_MAIN_IMAGE } from '../../data/mockData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#050505] relative overflow-hidden text-white border-t border-[#1B1B1B]">
      {/* Background Accent glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#A3FF12]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#111111] border border-[#262626] text-[#A3FF12] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE GYM STATION LEGACY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            WE DO NOT COMPROMISE ON <span className="text-[#A3FF12]">EXCELLENCE</span>
          </h2>
          <p className="text-gray-400 text-base max-w-2xl">
            {BRAND_INFO.story}
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <motion.div
            whileHover={{ y: -4 }}
            className="p-8 rounded-2xl bg-[#111111] border border-[#262626] space-y-4 hover:border-[#A3FF12]/50 transition-all shadow-xl"
          >
            <div className="w-12 h-12 rounded-xl bg-[#A3FF12]/10 border border-[#A3FF12]/30 flex items-center justify-center text-[#A3FF12]">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold uppercase tracking-tight text-white">OUR MISSION</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {BRAND_INFO.mission}
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -4 }}
            className="p-8 rounded-2xl bg-[#111111] border border-[#262626] space-y-4 hover:border-[#A3FF12]/50 transition-all shadow-xl"
          >
            <div className="w-12 h-12 rounded-xl bg-[#A3FF12]/10 border border-[#A3FF12]/30 flex items-center justify-center text-[#A3FF12]">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold uppercase tracking-tight text-white">OUR VISION</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {BRAND_INFO.vision}
            </p>
          </motion.div>
        </div>

        {/* Core Values Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-black uppercase tracking-tight mb-8 text-white flex items-center gap-2">
            <span>CORE VALUES</span>
            <div className="h-[2px] flex-1 bg-[#262626] ml-4" />
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRAND_INFO.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#111111] border border-[#262626] space-y-3 hover:border-white/20 transition-all"
              >
                <div className="text-xs font-bold text-[#A3FF12] font-mono">0{idx + 1}.</div>
                <h4 className="text-base font-extrabold text-white uppercase">{val.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Facility Spotlight & Interactive Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Facility Image Feature */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#262626]">
            <img
              src={FACILITY_MAIN_IMAGE}
              alt="Gym Station Interior Facility"
              className="w-full h-[480px] object-cover hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border border-white/10">
              <span className="text-xs font-bold text-[#A3FF12] uppercase block">FLAGSHIP SANCTUARY</span>
              <span className="text-lg font-black text-white uppercase">25,000 SQ FT OF PURE ATHLETIC LUXURY</span>
            </div>
          </div>

          {/* Timeline & Awards */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-2xl font-black uppercase tracking-tight text-white flex items-center gap-3">
              <Clock className="w-6 h-6 text-[#A3FF12]" />
              <span>THE EVOLUTION TIMELINE</span>
            </h3>

            <div className="space-y-6 relative border-l-2 border-[#262626] pl-6">
              {BRAND_INFO.timeline.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#111111] border-2 border-[#A3FF12] group-hover:scale-125 transition-transform" />
                  <div className="flex items-baseline space-x-3">
                    <span className="text-sm font-black font-mono text-[#A3FF12]">{item.year}</span>
                    <h4 className="text-base font-extrabold text-white uppercase">{item.title}</h4>
                  </div>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Awards Box */}
            <div className="p-6 rounded-xl bg-[#111111] border border-[#262626] space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#A3FF12]" />
                <span>AWARDS & RECOGNITION</span>
              </h4>
              <ul className="space-y-2">
                {BRAND_INFO.awards.map((award, idx) => (
                  <li key={idx} className="text-xs text-gray-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A3FF12] shrink-0" />
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
