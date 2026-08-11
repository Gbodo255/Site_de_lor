import React from 'react';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/layout/Footer';
import { FeaturedSellSection } from '@/components/sections/FeaturedSellSection';
import { AppointmentModal } from '@/components/forms/AppointmentModal';
import { MiniCart } from '@/components/cart/MiniCart';
import Link from 'next/link';
import { ArrowRight, Scale, FileText, Calculator } from 'lucide-react';

export default function VenteMetauxPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#090D16] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Hero Banner */}
          <div className="bg-[#121826] border border-[#1E293B] rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#b8a468] bg-[#090D16] px-3 py-1.5 rounded-lg border border-[#1E293B]">
              Vente & Rachat d'Or et d'Argent
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Vendez votre Or au Meilleur Prix du Marché
            </h1>
            <p className="max-w-2xl mx-auto text-sm text-[#94A3B8] leading-relaxed">
              Maison Joubert rachete vos lingots, pièces de monnaies, bijoux cassés et vieil or au guichet de Paris Bourse ou à distance avec paiement immédiat et choix d'imposition optimal.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href="/vente-metaux/catalogue-rachat"
                className="py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#b8a468] to-[#a98c35] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2"
              >
                <span>Voir nos cours de rachat net</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/vente-metaux/estimer"
                className="py-3.5 px-6 rounded-xl bg-[#090D16] border border-[#1E293B] hover:border-[#b8a468] text-white font-semibold text-xs uppercase tracking-wider transition-all"
              >
                Demander une estimation gratuite
              </Link>
            </div>
          </div>

          <FeaturedSellSection />
        </div>
      </main>
      <Footer />
      <AppointmentModal />
      <MiniCart />
    </>
  );
}
