import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Memberships } from './components/sections/Memberships';
import { Trainers } from './components/sections/Trainers';
import { Programs } from './components/sections/Programs';
import { BmiCalculator } from './components/sections/BmiCalculator';
import { Gallery } from './components/sections/Gallery';
import { Testimonials } from './components/sections/Testimonials';
import { Faq } from './components/sections/Faq';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { BrandSystemModal } from './components/brand/BrandSystemModal';
import { BookingModal } from './components/modals/BookingModal';
import { SeoHead } from './components/seo/SeoHead';

export default function App() {
  const [brandDeckOpen, setBrandDeckOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (planId?: string) => {
    setSelectedPlanId(planId);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#A3FF12] selection:text-black font-sans antialiased">
      {/* Dynamic SEO JSON-LD Scripts */}
      <SeoHead />

      {/* Brand Deck Specification Modal */}
      <BrandSystemModal
        isOpen={brandDeckOpen}
        onClose={() => setBrandDeckOpen(false)}
      />

      {/* Day Pass & Trial Registration Modal */}
      <BookingModal
        isOpen={bookingOpen}
        selectedPlanId={selectedPlanId}
        onClose={() => setBookingOpen(false)}
      />

      {/* Glassmorphic Navigation Header */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenBrandDeck={() => setBrandDeckOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onOpenBooking={handleOpenBooking} />
        <About />
        <Memberships onOpenBooking={handleOpenBooking} />
        <Trainers onOpenBooking={handleOpenBooking} />
        <Programs onOpenBooking={handleOpenBooking} />
        <BmiCalculator />
        <Gallery />
        <Testimonials />
        <Faq />
        <Contact />
      </main>

      {/* Footer */}
      <Footer
        onOpenBrandDeck={() => setBrandDeckOpen(true)}
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}
