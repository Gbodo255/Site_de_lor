import React from 'react';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/layout/Footer';
import { NumismaticSection } from '@/components/sections/NumismaticSection';
import { AppointmentModal } from '@/components/forms/AppointmentModal';
import { MiniCart } from '@/components/cart/MiniCart';
import Link from 'next/link';
import { History, Search, ShieldCheck, ArrowRight } from 'lucide-react';

export default function CabinetNumismatiquePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#090D16] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="bg-[#121826] border border-[#1E293B] rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#b8a468] bg-[#090D16] px-3 py-1.5 rounded-lg border border-[#1E293B]">
              Département Curiosités & Monnaies d'Exception
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Le Cabinet Numismatique Joubert
            </h1>
            <p className="max-w-2xl mx-auto text-sm text-[#94A3B8] leading-relaxed">
              Monnaies grecques, romaines, gauloises, royales françaises et monnaies modernes de collection. Nos experts diplômés vous accompagnent dans la constitution et la valorisation de votre collection.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href="/cabinet-numismatique/collection"
                className="py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#b8a468] to-[#a98c35] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2"
              >
                <span>Explorer la collection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/cabinet-numismatique/expertiser"
                className="py-3.5 px-6 rounded-xl bg-[#090D16] border border-[#1E293B] hover:border-[#b8a468] text-white font-semibold text-xs uppercase tracking-wider transition-all"
              >
                Demander une expertise
              </Link>
            </div>
          </div>

          <NumismaticSection />
        </div>
      </main>
      <Footer />
      <AppointmentModal />
      <MiniCart />
    </>
  );
}
