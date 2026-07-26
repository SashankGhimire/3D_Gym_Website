import React, { useState } from 'react';
import { X, CheckCircle2, Zap, Calendar, Phone, User, Mail, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MEMBERSHIP_PLANS } from '../../data/mockData';

interface BookingModalProps {
  isOpen: boolean;
  selectedPlanId?: string;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  selectedPlanId,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredTime: 'Morning (6 AM - 11 AM)',
    selectedPlan: selectedPlanId || 'full-gym',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-[#0A0A0A] border border-[#262626] rounded-2xl shadow-2xl p-6 sm:p-8 text-white"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#111111] border border-[#262626] rounded-md text-[#A3FF12] text-[10px] font-black uppercase tracking-widest mb-2">
                  <Zap className="w-3 h-3" />
                  <span>COMPLIMENTARY PASS REGISTRATION</span>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                  CLAIM YOUR <span className="text-[#A3FF12]">GYM PASS</span>
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  Enjoy 1-day complimentary full access to free weights, cardio suites, and steam.
                </p>
              </div>

              <div className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="text-xs font-bold text-gray-300 uppercase block mb-1">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-500 absolute left-3 top-3.5" />
                    <input
                      required
                      type="text"
                      placeholder="e.g. Vikram Malhotra"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-[#111111] border border-[#262626] rounded-xl text-xs text-white focus:outline-none focus:border-[#A3FF12]"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="text-xs font-bold text-gray-300 uppercase block mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-500 absolute left-3 top-3.5" />
                    <input
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-[#111111] border border-[#262626] rounded-xl text-xs text-white focus:outline-none focus:border-[#A3FF12]"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="text-xs font-bold text-gray-300 uppercase block mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-500 absolute left-3 top-3.5" />
                    <input
                      required
                      type="email"
                      placeholder="vikram@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-[#111111] border border-[#262626] rounded-xl text-xs text-white focus:outline-none focus:border-[#A3FF12]"
                    />
                  </div>
                </div>

                {/* Preferred Plan */}
                <div>
                  <label className="text-xs font-bold text-gray-300 uppercase block mb-1">Membership Plan</label>
                  <select
                    value={formData.selectedPlan}
                    onChange={(e) => setFormData({ ...formData, selectedPlan: e.target.value })}
                    className="w-full p-3 bg-[#111111] border border-[#262626] rounded-xl text-xs font-bold text-white focus:outline-none focus:border-[#A3FF12]"
                  >
                    {MEMBERSHIP_PLANS.map((plan) => (
                      <option key={plan.id} value={plan.id}>
                        {plan.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#A3FF12] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-[#8ee600] transition-all glow-lime cursor-pointer"
              >
                CONFIRM PASS RESERVATION
              </button>

              <p className="text-[10px] text-gray-500 text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00FF88]" />
                Zero obligation. Your pass will be issued via SMS & Email.
              </p>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#00FF88]/10 border-2 border-[#00FF88] text-[#00FF88] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black uppercase text-white tracking-tight">PASS RESERVED!</h3>
              <p className="text-xs text-gray-300 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. Your Gym Station complimentary VIP day pass code has been generated. Our concierge team will reach out to confirm your orientation.
              </p>

              <button
                onClick={handleReset}
                className="px-6 py-3 bg-[#A3FF12] text-black font-extrabold text-xs uppercase rounded-xl hover:bg-[#8ee600] transition-colors"
              >
                DONE
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
