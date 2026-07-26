import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TRAINERS } from '../../data/mockData';
import { Trainer } from '../../types';
import { Users, Star, Award, Instagram, Twitter, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';

interface TrainersProps {
  onOpenBooking: (planId?: string) => void;
}

export const Trainers: React.FC<TrainersProps> = ({ onOpenBooking }) => {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);

  return (
    <section id="trainers" className="py-24 bg-[#050505] text-white border-t border-[#1B1B1B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#111111] border border-[#262626] text-[#A3FF12] text-xs font-bold uppercase tracking-widest">
              <Users className="w-3.5 h-3.5" />
              <span>THE HUMAN PERFORMANCE STAFF</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              MEET OUR <span className="text-[#A3FF12]">ELITE COACHES</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xl">
              Master-level exercise physiologists, Olympic powerlifting leads, and IFBB pro conditioning leads.
            </p>
          </div>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRAINERS.map((trainer) => (
            <motion.div
              key={trainer.id}
              whileHover={{ y: -6 }}
              className="bg-[#111111] border border-[#262626] rounded-2xl overflow-hidden group hover:border-[#A3FF12] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-80 overflow-hidden bg-gray-900">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 px-2.5 py-1 bg-black/80 backdrop-blur-md rounded-md border border-white/10 flex items-center gap-1 text-xs font-bold text-[#A3FF12]">
                    <Star className="w-3.5 h-3.5 fill-[#A3FF12]" />
                    <span>{trainer.rating}</span>
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute bottom-4 left-4 px-2.5 py-1 bg-[#A3FF12] text-black rounded-md text-[10px] font-black uppercase tracking-widest">
                    {trainer.experience} EXP
                  </div>
                </div>

                {/* Trainer Details */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-xl font-black uppercase text-white tracking-tight group-hover:text-[#A3FF12] transition-colors">
                      {trainer.name}
                    </h3>
                    <span className="text-xs font-bold text-[#A3FF12] uppercase block mt-0.5">
                      {trainer.role}
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                    {trainer.bio}
                  </p>

                  {/* Achievements */}
                  <div className="pt-3 border-t border-[#262626] space-y-1">
                    <span className="text-[10px] font-bold text-gray-500 uppercase block">CREDENTIALS:</span>
                    {trainer.achievements.map((ach, idx) => (
                      <div key={idx} className="text-[11px] text-gray-300 flex items-center gap-1.5">
                        <Award className="w-3 h-3 text-[#A3FF12] shrink-0" />
                        <span className="truncate">{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action & Socials Footer */}
              <div className="p-6 pt-0 space-y-3">
                <button
                  onClick={() => onOpenBooking()}
                  className="w-full py-2.5 bg-[#1F1F1F] hover:bg-[#A3FF12] text-white hover:text-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Book Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                {/* Social Links */}
                <div className="flex items-center justify-center space-x-3 text-gray-400 pt-2 border-t border-[#262626]">
                  {trainer.socials.instagram && (
                    <a href={trainer.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-[#A3FF12] transition-colors">
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                  {trainer.socials.twitter && (
                    <a href={trainer.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-[#A3FF12] transition-colors">
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {trainer.socials.linkedin && (
                    <a href={trainer.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#A3FF12] transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
