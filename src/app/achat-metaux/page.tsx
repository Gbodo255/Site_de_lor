import React from 'react';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/layout/Footer';
import { FeaturedBuySection } from '@/components/sections/FeaturedBuySection';
import { CurrencyExchangeWidget } from '@/components/sections/CurrencyExchangeWidget';
import { AppointmentModal } from '@/components/forms/AppointmentModal';
import { MiniCart } from '@/components/cart/MiniCart';
import Link from 'next/link';
import { ShieldCheck, Award, ArrowRight, Lock } from 'lucide-react';

export default function AchatMetauxPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#090D16] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Hero Banner */}
          <div className="bg-[#121826] border border-[#1E293B] rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#b8a468]/10 rounded-full blur-3xl" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#b8a468] bg-[#090D16] px-3 py-1.5 rounded-lg border border-[#1E293B]">
              Achat d'Or & d'Argent d'Investissement
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Acheter de l'Or & d'Argent Physique
            </h1>
            <p className="max-w-2xl mx-auto text-sm text-[#94A3B8] leading-relaxed">
              Maison Joubert vous propose un catalogue complet de lingots et pièces certifiés LBMA. Protégez votre patrimoine avec de l'or pur 999.9‰ et bénéficiez d'une livraison sécurisée ou d'une remise en main propre à Paris.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href="/achat-metaux/catalogue-achat"
                className="py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#b8a468] to-[#a98c35] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2"
              >
                <span>Accéder au catalogue d'achat</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/achat-metaux/stockage"
                className="py-3.5 px-6 rounded-xl bg-[#090D16] border border-[#1E293B] hover:border-[#b8a468] text-white font-semibold text-xs uppercase tracking-wider transition-all"
              >
                Garde en coffre-fort
              </Link>
            </div>
          </div>

          <div id="graphs-rates-metals">
            <CurrencyExchangeWidget />
          </div>
          <FeaturedBuySection />
        </div>
      </main>
      <Footer />
      <AppointmentModal />
      <MiniCart />
    </>
  );
}
