import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck, CheckCircle2, Navigation } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] text-white border-t border-[#1B1B1B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#111111] border border-[#262626] text-[#A3FF12] text-xs font-bold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            <span>VISIT OUR FLAGSHIP LOCATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            GET IN <span className="text-[#A3FF12]">TOUCH</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Have questions regarding memberships, corporate packages, or private coaching? Contact our VIP Concierge team.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details & Opening Hours */}
          <div className="lg:col-span-5 bg-[#111111] border border-[#262626] rounded-2xl p-6 sm:p-8 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-xl font-black uppercase tracking-tight text-white border-b border-[#262626] pb-3">
                FLAGSHIP ADDRESS & INFO
              </h3>

              <div className="space-y-5 text-sm">
                {/* Location */}
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#080808] border border-[#262626] flex items-center justify-center text-[#A3FF12] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-white uppercase block text-xs">Gym Station Sanctuary</strong>
                    <span className="text-xs text-gray-400 leading-relaxed block mt-0.5">
                      Plot 42, Elite Towers, Central Business District, Worli, Mumbai 400018
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#080808] border border-[#262626] flex items-center justify-center text-[#A3FF12] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-white uppercase block text-xs">Direct Concierge</strong>
                    <span className="text-xs text-gray-400 block mt-0.5">+91 (0) 22 8888 9999</span>
                    <span className="text-xs text-gray-400 block">+1 (800) GYM-STATION</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#080808] border border-[#262626] flex items-center justify-center text-[#A3FF12] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="text-white uppercase block text-xs">VIP Inquiries</strong>
                    <span className="text-xs text-gray-400 block mt-0.5">concierge@gymstation.com</span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#080808] border border-[#262626] flex items-center justify-center text-[#A3FF12] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-xs text-gray-300">
                    <strong className="text-white uppercase block">Operating Hours</strong>
                    <div>Mon – Sat: <span className="text-[#A3FF12] font-mono">5:00 AM – 11:00 PM</span></div>
                    <div>Sunday: <span className="text-[#A3FF12] font-mono">6:00 AM – 9:00 PM</span></div>
                    <div className="text-[11px] text-[#00FF88] font-bold">24/7 Keycard Access for Black Label VIP</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Mock Card */}
            <div className="relative rounded-xl overflow-hidden border border-[#262626] h-48 bg-[#080808] flex items-center justify-center p-4">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="relative text-center space-y-2">
                <Navigation className="w-8 h-8 text-[#A3FF12] mx-auto animate-bounce" />
                <span className="text-xs font-bold uppercase text-white block">INTERACTIVE MAP NAVIGATION</span>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-3 py-1.5 bg-[#A3FF12] text-black text-[10px] font-black uppercase rounded-md hover:bg-[#8ee600] transition-colors"
                >
                  OPEN IN GOOGLE MAPS
                </a>
              </div>
            </div>
          </div>

          {/* Direct Contact / Booking Form */}
          <div className="lg:col-span-7 bg-[#111111] border border-[#262626] rounded-2xl p-6 sm:p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-black uppercase tracking-tight text-white border-b border-[#262626] pb-3">
                  SEND CONCIERGE MESSAGE
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-300 uppercase block mb-1">Your Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Ananya Roy"
                      className="w-full p-3 bg-[#080808] border border-[#262626] rounded-xl text-xs text-white focus:outline-none focus:border-[#A3FF12]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-300 uppercase block mb-1">Phone Number</label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 98765 00000"
                      className="w-full p-3 bg-[#080808] border border-[#262626] rounded-xl text-xs text-white focus:outline-none focus:border-[#A3FF12]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-300 uppercase block mb-1">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="ananya@example.com"
                    className="w-full p-3 bg-[#080808] border border-[#262626] rounded-xl text-xs text-white focus:outline-none focus:border-[#A3FF12]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-300 uppercase block mb-1">Inquiry Topic</label>
                  <select className="w-full p-3 bg-[#080808] border border-[#262626] rounded-xl text-xs font-bold text-white focus:outline-none focus:border-[#A3FF12]">
                    <option>General Membership Inquiry</option>
                    <option>Black Label VIP Personal Coaching</option>
                    <option>Corporate Fitness & Wellness</option>
                    <option>Media & Press Partnerships</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-300 uppercase block mb-1">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your fitness goals or questions..."
                    className="w-full p-3 bg-[#080808] border border-[#262626] rounded-xl text-xs text-white focus:outline-none focus:border-[#A3FF12]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#A3FF12] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-[#8ee600] transition-all glow-lime cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT INQUIRY TO CONCIERGE</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#00FF88]/10 border-2 border-[#00FF88] text-[#00FF88] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black uppercase text-white tracking-tight">MESSAGE TRANSMITTED</h3>
                <p className="text-xs text-gray-300 max-w-sm mx-auto leading-relaxed">
                  Thank you for contacting Gym Station. Our VIP Concierge team has received your inquiry and will respond within 2 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#262626] text-white hover:text-[#A3FF12] font-bold text-xs uppercase rounded-xl"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
