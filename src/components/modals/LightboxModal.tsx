import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GalleryItem } from '../../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative max-w-5xl w-full bg-[#0A0A0A] border border-[#262626] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-3 bg-black/80 hover:bg-[#A3FF12] text-white hover:text-black rounded-full transition-colors backdrop-blur-md border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Full Image */}
          <div className="relative max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain max-h-[75vh]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Caption Footer */}
          <div className="p-6 bg-[#111111] border-t border-[#262626] space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-[#A3FF12] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>GYM STATION GALLERY — {item.category}</span>
            </div>
            <h3 className="text-xl font-black uppercase text-white tracking-tight">{item.title}</h3>
            <p className="text-xs text-gray-400">{item.caption}</p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
