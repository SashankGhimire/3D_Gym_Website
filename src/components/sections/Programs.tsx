import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROGRAMS } from '../../data/mockData';
import { Flame, Clock, Zap, ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface ProgramsProps {
  onOpenBooking: (planId?: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Strength', 'Weight Loss', 'Bodybuilding', 'CrossFit', 'Cardio'];

  const filteredPrograms = selectedCategory === 'All'
    ? PROGRAMS
    : PROGRAMS.filter((p) => p.category === selectedCategory);

  return (
    <section id="programs" className="py-24 bg-[#050505] text-white border-t border-[#1B1B1B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#111111] border border-[#262626] text-[#A3FF12] text-xs font-bold uppercase tracking-widest">
              <Flame className="w-3.5 h-3.5" />
              <span>PERIODIZED ATHLETIC PROTOCOLS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              WORKOUT <span className="text-[#A3FF12]">PROGRAMS</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xl">
              Science-backed training programs led by master coaches and tailored for specific physiological goals.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 bg-[#111111] p-1.5 rounded-xl border border-[#262626]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#A3FF12] text-black shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <motion.div
              layout
              key={program.id}
              whileHover={{ y: -6 }}
              className="bg-[#111111] border border-[#262626] rounded-2xl overflow-hidden group hover:border-[#A3FF12] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image & Header Tags */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />

                  {/* Level & Intensity */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/10 rounded-md text-[10px] font-bold uppercase text-[#A3FF12]">
                      {program.level}
                    </span>
                    <span className="px-2.5 py-1 bg-[#A3FF12] text-black rounded-md text-[10px] font-black uppercase">
                      INTENSITY: {program.intensity}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-black uppercase text-white tracking-tight group-hover:text-[#A3FF12] transition-colors">
                    {program.title}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Program Highlights */}
                  <div className="pt-2 space-y-1.5 border-t border-[#262626]">
                    <span className="text-[10px] font-bold text-gray-500 uppercase block">KEY PROTOCOLS:</span>
                    {program.highlights.map((hl, idx) => (
                      <div key={idx} className="text-xs text-gray-300 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#A3FF12] shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Meta & Action */}
              <div className="p-6 pt-0 space-y-4">
                <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-[#080808] border border-[#262626] text-center text-xs">
                  <div>
                    <span className="text-[10px] text-gray-500 block uppercase">Duration</span>
                    <span className="font-bold text-white font-mono">{program.durationWeeks} WEEKS</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 block uppercase">Est. Calorie Burn</span>
                    <span className="font-bold text-[#A3FF12] font-mono">{program.caloriesPerSession}</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking()}
                  className="w-full py-3 bg-[#262626] hover:bg-[#A3FF12] text-white hover:text-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <span>Enroll In Program</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
