import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, Trophy, ShieldCheck, Flame, Zap } from 'lucide-react';
import { HERO_BG_IMAGE, BRAND_INFO } from '../../data/mockData';
import { GymCanvas3D } from '../3d/GymCanvas3D';

interface HeroProps {
  onOpenBooking: (planId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#050505]">
      {/* Background Image with Dark Gradient Vignette */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src={HERO_BG_IMAGE}
          alt="Gym Station Luxury Fitness Sanctuary"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
      </div>

      {/* Subtle Three.js 3D Background Overlay */}
      <div className="absolute inset-0 z-10 opacity-70 pointer-events-none">
        <GymCanvas3D />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111]/80 border border-[#A3FF12]/30 text-[#A3FF12] text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md shadow-lg"
        >
          <Zap className="w-3.5 h-3.5 text-[#A3FF12] animate-pulse" />
          <span>EXCLUSIVE LUXURY FITNESS & RECOVERY SANCTUARY</span>
        </motion.div>

        {/* Main Display Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none max-w-5xl text-balance"
        >
          MORE THAN A GYM. <br />
          <span className="gradient-text-lime inline-block mt-2">
            BUILD YOUR BEST SELF.
          </span>
        </motion.h1>

        {/* Subtitle Message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl font-normal leading-relaxed"
        >
          World-class biomechanical equipment, elite Olympic coaching, science-backed 
          hypertrophy protocols, and luxury cold plunge recovery—engineered for those who demand peak performance.
        </motion.p>

        {/* Hero CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => onOpenBooking()}
            className="px-8 py-4 bg-[#A3FF12] text-black font-extrabold text-sm uppercase tracking-wider rounded-xl hover:bg-[#8ee600] transition-all glow-lime hover:scale-105 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>CLAIM 1-DAY COMPLIMENTARY PASS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#memberships"
            className="px-8 py-4 bg-[#111111]/80 hover:bg-[#1A1A1A] text-white font-bold text-sm uppercase tracking-wider rounded-xl border border-white/20 hover:border-[#A3FF12] transition-all flex items-center justify-center gap-2 backdrop-blur-md"
          >
            VIEW MEMBERSHIP PLANS
          </a>
        </motion.div>

        {/* Stats Counter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl glass-panel border border-white/10"
        >
          {BRAND_INFO.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-2 text-center border-r last:border-r-0 border-white/10">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-[#A3FF12] tracking-tight">
                {stat.value}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-12 inline-flex flex-col items-center text-gray-400 hover:text-[#A3FF12] transition-colors group"
        >
          <span className="text-[10px] uppercase font-bold tracking-widest mb-1">Scroll To Discover</span>
          <ChevronDown className="w-5 h-5 animate-bounce text-[#A3FF12]" />
        </motion.a>
      </div>
    </section>
  );
};
