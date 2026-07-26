import React, { useState } from 'react';
import { X, Palette, Type, Layers, Sparkles, Shield, Compass, BookOpen, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BrandSystemModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandSystemModal: React.FC<BrandSystemModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'brand' | 'design' | 'components'>('brand');

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-5xl max-h-[90vh] bg-[#0A0A0A] border border-[#262626] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-white"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#262626] bg-[#111111]/80">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-[#A3FF12] flex items-center justify-center text-black font-black text-xl">
                GS
              </div>
              <div>
                <h2 className="text-xl font-extrabold tracking-tight">GYM STATION — BRAND IDENTITY DECK</h2>
                <p className="text-xs text-gray-400">Official Design System & Brand Guidelines v1.0</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-[#262626] bg-[#050505] px-6">
            <button
              onClick={() => setActiveTab('brand')}
              className={`flex items-center space-x-2 py-3 px-4 font-semibold text-sm border-b-2 transition-all ${
                activeTab === 'brand'
                  ? 'border-[#A3FF12] text-[#A3FF12]'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Brand Strategy & Voice</span>
            </button>
            <button
              onClick={() => setActiveTab('design')}
              className={`flex items-center space-x-2 py-3 px-4 font-semibold text-sm border-b-2 transition-all ${
                activeTab === 'design'
                  ? 'border-[#A3FF12] text-[#A3FF12]'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              <Palette className="w-4 h-4" />
              <span>Design System & Tokens</span>
            </button>
            <button
              onClick={() => setActiveTab('components')}
              className={`flex items-center space-x-2 py-3 px-4 font-semibold text-sm border-b-2 transition-all ${
                activeTab === 'components'
                  ? 'border-[#A3FF12] text-[#A3FF12]'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>UI Components & Guidelines</span>
            </button>
          </div>

          {/* Content Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
            {activeTab === 'brand' && (
              <div className="space-y-6">
                {/* Logo Concept */}
                <div className="bg-[#111111] p-6 rounded-xl border border-[#262626]">
                  <h3 className="text-lg font-bold text-[#A3FF12] mb-2 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" /> Logo Concept & Typography Mark
                  </h3>
                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                    The GYM STATION logo features a bold geometric wordmark with an iconic angular station badge. 
                    The slanted chevron signifies forward kinetic momentum and peak strength output.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#050505] p-6 rounded-lg border border-[#262626] flex items-center justify-center">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[#A3FF12] flex items-center justify-center text-black font-black text-2xl rounded-md clip-slanted">
                          G
                        </div>
                        <span className="text-2xl font-black tracking-widest text-white">
                          GYM <span className="text-[#A3FF12]">STATION</span>
                        </span>
                      </div>
                    </div>
                    <div className="bg-[#181818] p-4 rounded-lg text-xs space-y-2 text-gray-300">
                      <div><strong className="text-white">Primary Emblem:</strong> Angular Station Badge</div>
                      <div><strong className="text-white">Minimum Clearance:</strong> 24px surrounding space</div>
                      <div><strong className="text-white">Aspect Ratio:</strong> Locked 1:1 badge or horizontal lockup</div>
                    </div>
                  </div>
                </div>

                {/* Story & Voice */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#111111] p-6 rounded-xl border border-[#262626] space-y-3">
                    <h4 className="font-bold text-white uppercase text-sm tracking-wider text-[#A3FF12]">
                      Brand Story & Message
                    </h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      "Gym Station is a luxury fitness sanctuary engineered for people who demand uncompromising excellence. 
                      We unite world-class bio-mechanical equipment, elite certified coaches, data-driven recovery suites, 
                      and an electrifying environment."
                    </p>
                    <div className="pt-2 text-xs text-[#A3FF12] font-semibold">
                      Tagline: "More Than A Gym. Build Your Best Self."
                    </div>
                  </div>

                  <div className="bg-[#111111] p-6 rounded-xl border border-[#262626] space-y-3">
                    <h4 className="font-bold text-white uppercase text-sm tracking-wider text-[#A3FF12]">
                      Brand Voice Traits
                    </h4>
                    <ul className="text-sm text-gray-300 space-y-2">
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#A3FF12]" /> <strong>Strong & Confident:</strong> Authoritative without arrogance.</li>
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#A3FF12]" /> <strong>Modern & Exclusive:</strong> High-end luxury athletic tone.</li>
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#A3FF12]" /> <strong>High Energy:</strong> Motivates immediate physical action.</li>
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#A3FF12]" /> <strong>Precision Science:</strong> Grounded in biomechanics & recovery.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'design' && (
              <div className="space-y-6">
                {/* Color Palette */}
                <div className="bg-[#111111] p-6 rounded-xl border border-[#262626]">
                  <h3 className="text-lg font-bold text-white mb-4">Color Palette & Tokens</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="space-y-2">
                      <div className="h-16 rounded-lg bg-[#A3FF12] flex items-end p-2 text-black font-bold text-xs">
                        #A3FF12
                      </div>
                      <span className="text-xs font-semibold block text-white">Electric Lime</span>
                      <span className="text-[10px] text-gray-400 block">Primary Accent</span>
                    </div>

                    <div className="space-y-2">
                      <div className="h-16 rounded-lg bg-[#FFFFFF] flex items-end p-2 text-black font-bold text-xs border border-gray-700">
                        #FFFFFF
                      </div>
                      <span className="text-xs font-semibold block text-white">Pure White</span>
                      <span className="text-[10px] text-gray-400 block">Headings & Contrast</span>
                    </div>

                    <div className="space-y-2">
                      <div className="h-16 rounded-lg bg-[#050505] border border-gray-800 flex items-end p-2 text-white font-bold text-xs">
                        #050505
                      </div>
                      <span className="text-xs font-semibold block text-white">Background</span>
                      <span className="text-[10px] text-gray-400 block">Canvas Dark</span>
                    </div>

                    <div className="space-y-2">
                      <div className="h-16 rounded-lg bg-[#111111] border border-gray-800 flex items-end p-2 text-white font-bold text-xs">
                        #111111
                      </div>
                      <span className="text-xs font-semibold block text-white">Surface Card</span>
                      <span className="text-[10px] text-gray-400 block">Elevated Panels</span>
                    </div>

                    <div className="space-y-2">
                      <div className="h-16 rounded-lg bg-[#00FF88] flex items-end p-2 text-black font-bold text-xs">
                        #00FF88
                      </div>
                      <span className="text-xs font-semibold block text-white">Success Mint</span>
                      <span className="text-[10px] text-gray-400 block">Verified & Badges</span>
                    </div>
                  </div>
                </div>

                {/* Typography Scale */}
                <div className="bg-[#111111] p-6 rounded-xl border border-[#262626] space-y-4">
                  <h3 className="text-lg font-bold text-white">Typography Hierarchy</h3>
                  <div className="space-y-3 text-left">
                    <div className="border-b border-gray-800 pb-2">
                      <span className="text-xs text-gray-500 uppercase font-mono block">Display Hero (64px - 80px)</span>
                      <span className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
                        MORE THAN A GYM. <span className="text-[#A3FF12]">BUILD YOUR BEST SELF.</span>
                      </span>
                    </div>
                    <div className="border-b border-gray-800 pb-2">
                      <span className="text-xs text-gray-500 uppercase font-mono block">Section Title (28px - 36px)</span>
                      <span className="text-xl font-extrabold uppercase text-white">
                        STATE-OF-THE-ART EQUIPMENT & FACILITIES
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 uppercase font-mono block">Body Copy (16px)</span>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        Engineered with 1.5 - 1.7 line height for crisp readability on dark obsidian backgrounds.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'components' && (
              <div className="space-y-6">
                {/* Button & Card Styles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#111111] p-6 rounded-xl border border-[#262626] space-y-4">
                    <h4 className="font-bold text-[#A3FF12] text-sm uppercase tracking-wider">Button Styles</h4>
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs text-gray-400 block mb-1">Primary CTA Button</span>
                        <button className="px-6 py-3 bg-[#A3FF12] text-black font-bold uppercase tracking-wider rounded-lg shadow-lg hover:bg-[#8ee600] transition-all glow-lime-sm">
                          CLAIM YOUR PASS
                        </button>
                      </div>
                      <div>
                        <span className="text-xs text-gray-400 block mb-1">Secondary Outline Button</span>
                        <button className="px-6 py-3 bg-transparent border border-white/20 text-white font-bold uppercase tracking-wider rounded-lg hover:border-[#A3FF12] hover:text-[#A3FF12] transition-all">
                          EXPLORE PROGRAMS
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#111111] p-6 rounded-xl border border-[#262626] space-y-4">
                    <h4 className="font-bold text-[#A3FF12] text-sm uppercase tracking-wider">Card Styles & Radius Rules</h4>
                    <div className="bg-[#181818] p-4 rounded-xl border border-[#262626] space-y-2">
                      <div className="text-xs text-[#A3FF12] font-semibold">Glassmorphic Elevation</div>
                      <p className="text-xs text-gray-300">
                        Cards utilize 12px-16px corner radii, 1px subtle hairline borders (#262626), 
                        and 12% max surface brightness differential to prevent visual strain.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Spacing & Motion */}
                <div className="bg-[#111111] p-6 rounded-xl border border-[#262626] space-y-3">
                  <h4 className="font-bold text-[#A3FF12] text-sm uppercase tracking-wider">Animation & Spacing Rules</h4>
                  <p className="text-sm text-gray-300">
                    Micro-interactions leverage spring physics (`stiffness: 300, damping: 20`) for fluid touch feel. 
                    Scroll-triggered reveals use subtle 0.2s - 0.4s staggered reveals.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-[#262626] bg-[#111111] flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 bg-[#A3FF12] text-black font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-[#8ee600] transition-colors"
            >
              CLOSE BRAND SPECIFICATION
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
