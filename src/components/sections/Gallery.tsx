import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GALLERY_ITEMS } from '../../data/mockData';
import { GalleryItem } from '../../types';
import { LightboxModal } from '../modals/LightboxModal';
import { Camera, Maximize2 } from 'lucide-react';

const GALLERY_TABS = ['All', 'Facility', 'Action', 'Recovery', 'Events'] as const;
type GalleryTab = (typeof GALLERY_TABS)[number];

export const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<GalleryTab>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeTab === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((i) => i.category === activeTab);

  return (
    <section id="gallery" className="py-24 bg-[#050505] text-white border-t border-[#1B1B1B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#111111] border border-[#262626] text-[#A3FF12] text-xs font-bold uppercase tracking-widest">
              <Camera className="w-3.5 h-3.5" />
              <span>VISUAL IMMERSION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              GALLERY & <span className="text-[#A3FF12]">SANCTUARY SHOTS</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xl">
              Take a visual tour through our state-of-the-art platforms, recovery suites, and community lift-offs.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2 bg-[#111111] p-1.5 rounded-xl border border-[#262626]">
            {GALLERY_TABS.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === cat
                    ? 'bg-[#A3FF12] text-black shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              onClick={() => setSelectedItem(item)}
              whileHover={{ scale: 1.02 }}
              className="relative h-72 rounded-2xl overflow-hidden cursor-pointer group border border-[#262626] hover:border-[#A3FF12] transition-all shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Overlay Icon */}
              <div className="absolute top-4 right-4 p-2 bg-black/70 rounded-full border border-white/20 text-[#A3FF12] opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Title & Category Info */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#A3FF12]">
                  {item.category}
                </span>
                <h3 className="text-base font-extrabold uppercase text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 line-clamp-1">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
};
