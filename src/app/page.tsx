import React from 'react';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { CurrencyExchangeWidget } from '@/components/sections/CurrencyExchangeWidget';
import { FeaturedBuySection } from '@/components/sections/FeaturedBuySection';
import { FeaturedSellSection } from '@/components/sections/FeaturedSellSection';
import { NumismaticSection } from '@/components/sections/NumismaticSection';
import { AgencyMapSection } from '@/components/sections/AgencyMapSection';
import { AppointmentModal } from '@/components/forms/AppointmentModal';
import { MiniCart } from '@/components/cart/MiniCart';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#090D16] text-white">
        <HeroSection />
        <CurrencyExchangeWidget />
        <FeaturedBuySection />
        <FeaturedSellSection />
        <NumismaticSection />
        <AgencyMapSection />
      </main>
      <Footer />

      {/* Global Modals & Drawers */}
      <AppointmentModal />
      <MiniCart />
    </>
  );
}
