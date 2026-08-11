import React from 'react';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/layout/Footer';
import { AgencyMapSection } from '@/components/sections/AgencyMapSection';
import { AppointmentModal } from '@/components/forms/AppointmentModal';
import { MiniCart } from '@/components/cart/MiniCart';

export default function ContactezNousPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#090D16] text-white">
        <AgencyMapSection />
      </main>
      <Footer />
      <AppointmentModal />
      <MiniCart />
    </>
  );
}
