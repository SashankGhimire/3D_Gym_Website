import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Phone, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenBooking: (planId?: string) => void;
  onOpenBrandDeck: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenBrandDeck }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Memberships', href: '#memberships' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Programs', href: '#programs' },
    { name: 'BMI Calculator', href: '#bmi-calculator' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'glass-nav py-3' : 'bg-gradient-to-b from-black/90 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-[#A3FF12] rounded-lg flex items-center justify-center font-black text-black text-xl shadow-[0_0_15px_rgba(163,255,18,0.4)] group-hover:scale-105 transition-transform clip-slanted">
              GS
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-widest text-white leading-none">
                GYM <span className="text-[#A3FF12]">STATION</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-gray-400 font-bold mt-1">
                LUXURY FITNESS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-xs font-bold uppercase tracking-wider text-gray-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#A3FF12] transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#A3FF12] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={onOpenBrandDeck}
              className="px-3.5 py-2 text-xs font-bold text-gray-300 hover:text-white bg-white/5 border border-white/10 hover:border-[#A3FF12] rounded-lg flex items-center gap-1.5 transition-all"
              title="Inspect Complete Brand Strategy & Identity"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#A3FF12]" />
              <span>Brand System</span>
            </button>

            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 bg-[#A3FF12] text-black font-extrabold text-xs uppercase tracking-wider rounded-lg hover:bg-[#8ee600] transition-all glow-lime-sm hover:scale-[1.02] flex items-center gap-1.5"
            >
              <span>Free Pass</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenBrandDeck}
              className="p-2 bg-white/5 border border-white/10 text-[#A3FF12] rounded-lg"
              title="Brand System"
            >
              <Sparkles className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#A3FF12] bg-white/5 border border-white/10 rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[65px] left-0 right-0 z-30 bg-[#050505]/95 border-b border-[#262626] backdrop-blur-2xl lg:hidden overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
              <div className="grid grid-cols-1 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 px-3 rounded-lg text-sm font-bold uppercase tracking-wider text-gray-200 hover:text-[#A3FF12] hover:bg-white/5 transition-all"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-[#262626] flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBrandDeck();
                  }}
                  className="w-full py-3 bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#A3FF12]" />
                  <span>Inspect Brand Deck & System</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 bg-[#A3FF12] text-black font-extrabold text-xs uppercase tracking-wider rounded-lg glow-lime text-center"
                >
                  Claim Free Trial Day Pass
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
