import React from 'react';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/layout/Footer';
import { CurrencyExchangeWidget } from '@/components/sections/CurrencyExchangeWidget';
import { AppointmentModal } from '@/components/forms/AppointmentModal';
import { MiniCart } from '@/components/cart/MiniCart';
import Link from 'next/link';
import { ArrowRight, DollarSign, Globe, ShieldCheck } from 'lucide-react';

export default function DevisesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#090D16] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="bg-[#121826] border border-[#1E293B] rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#b8a468] bg-[#090D16] px-3 py-1.5 rounded-lg border border-[#1E293B]">
              Bureau de Change Officiel Paris Bourse
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Achat & Vente de Devises Étrangères
            </h1>
            <p className="max-w-2xl mx-auto text-sm text-[#94A3B8] leading-relaxed">
              Préparez vos voyages et déplacements professionnels aux meilleurs cours de change à Paris. Plus de 40 devises internationales immédiatement disponibles en billets neufs sans frais de dossier ni commissions dissimulées.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Link
                href="/devises/catalogue"
                className="py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#b8a468] to-[#a98c35] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2"
              >
                <span>Consulter la liste de toutes nos devises</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <CurrencyExchangeWidget />
        </div>
      </main>
      <Footer />
      <AppointmentModal />
      <MiniCart />
    </>
  );
}
