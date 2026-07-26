import React, { useState } from 'react';
import { ArrowUpRight, Instagram, Twitter, Linkedin, Youtube, Send, ShieldCheck, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenBrandDeck: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBrandDeck, onOpenBooking }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#050505] text-white border-t border-[#1B1B1B] relative pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Banner Box */}
        <div className="bg-[#111111] border border-[#262626] rounded-3xl p-8 sm:p-12 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#080808] border border-[#262626] text-[#A3FF12] text-[10px] font-black uppercase tracking-widest">
              <Sparkles className="w-3 h-3" />
              <span>THE PERFORMANCE DISPATCH</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
              JOIN THE <span className="text-[#A3FF12]">INSIDER NETWORK</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Receive weekly science-backed workout protocols, macro nutrition guides, and VIP event invitations.
            </p>
          </div>

          <div className="w-full lg:w-auto min-w-[320px]">
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  required
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-[#080808] border border-[#262626] rounded-xl text-xs text-white focus:outline-none focus:border-[#A3FF12]"
                />
                <button
                  type="submit"
                  className="px-5 py-3 bg-[#A3FF12] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-[#8ee600] transition-all shrink-0"
                >
                  SUBSCRIBE
                </button>
              </form>
            ) : (
              <div className="p-3 bg-[#00FF88]/10 border border-[#00FF88] rounded-xl text-[#00FF88] text-xs font-bold text-center">
                ✓ YOU ARE SUBSCRIBED TO THE INSIDER NETWORK
              </div>
            )}
          </div>
        </div>

        {/* Main Footer Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1B1B1B]">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#A3FF12] rounded-lg flex items-center justify-center font-black text-black text-xl clip-slanted">
                GS
              </div>
              <span className="text-xl font-black tracking-widest text-white">
                GYM <span className="text-[#A3FF12]">STATION</span>
              </span>
            </a>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Gym Station is a luxury fitness destination built for people who demand excellence. 
              World-class equipment, certified coaches, and an inspiring athletic sanctuary.
            </p>

            <button
              onClick={onOpenBrandDeck}
              className="px-4 py-2 bg-white/5 border border-white/10 text-xs font-bold text-[#A3FF12] rounded-lg hover:bg-white/10 transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Inspect Brand Strategy Deck</span>
            </button>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">QUICK LINKS</h4>
            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              <li><a href="#about" className="hover:text-[#A3FF12] transition-colors">About Us</a></li>
              <li><a href="#memberships" className="hover:text-[#A3FF12] transition-colors">Membership Packages</a></li>
              <li><a href="#trainers" className="hover:text-[#A3FF12] transition-colors">Elite Coaches</a></li>
              <li><a href="#programs" className="hover:text-[#A3FF12] transition-colors">Workout Programs</a></li>
            </ul>
          </div>

          {/* Tools & Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">INTERACTIVE TOOLS</h4>
            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              <li><a href="#bmi-calculator" className="hover:text-[#A3FF12] transition-colors">BMI & Metabolic Calculator</a></li>
              <li><a href="#gallery" className="hover:text-[#A3FF12] transition-colors">Sanctuary Gallery</a></li>
              <li><a href="#faq" className="hover:text-[#A3FF12] transition-colors">Knowledge Base & FAQ</a></li>
              <li><a href="#contact" className="hover:text-[#A3FF12] transition-colors">Location & Hours</a></li>
            </ul>
          </div>

          {/* Socials & Location */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">CONNECT WITH US</h4>
            <div className="flex space-x-3 text-gray-400">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-[#111111] border border-[#262626] flex items-center justify-center hover:text-[#A3FF12] hover:border-[#A3FF12] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-[#111111] border border-[#262626] flex items-center justify-center hover:text-[#A3FF12] hover:border-[#A3FF12] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-[#111111] border border-[#262626] flex items-center justify-center hover:text-[#A3FF12] hover:border-[#A3FF12] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-[#111111] border border-[#262626] flex items-center justify-center hover:text-[#A3FF12] hover:border-[#A3FF12] transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-2.5 bg-[#A3FF12] text-black font-extrabold text-xs uppercase tracking-wider rounded-lg hover:bg-[#8ee600] transition-colors"
            >
              CLAIM COMPLIMENTARY PASS
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 space-y-4 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} GYM STATION LUXURY FITNESS INC. ALL RIGHTS RESERVED.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-300 transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-gray-300 transition-colors">TERMS OF SERVICE</a>
            <a href="#" className="hover:text-gray-300 transition-colors">MEMBER GUIDELINES</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
