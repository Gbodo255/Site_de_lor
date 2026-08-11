import React from 'react';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/layout/Footer';
import { AppointmentModal } from '@/components/forms/AppointmentModal';
import { MiniCart } from '@/components/cart/MiniCart';
import Link from 'next/link';
import { ShieldCheck, Lock, Award, CheckCircle, ArrowRight } from 'lucide-react';

export default function StockagePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#090D16] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header Banner */}
          <div className="bg-[#121826] border border-[#1E293B] rounded-3xl p-8 sm:p-12 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#b8a468]/10 rounded-full blur-3xl pointer-events-none" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#b8a468] bg-[#090D16] px-3 py-1.5 rounded-lg border border-[#1E293B]">
              Gardiennage & Coffre Fort Sécurisé
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Stockage Haute Sécurité Hors Système Bancaire
            </h1>
            <p className="max-w-2xl text-sm text-[#94A3B8] leading-relaxed">
              Conservez vos lingots et pièces précieux dans nos coffres-forts ultra-sécurisés en Suisse et en France. Vos métaux sont conservés en votre nom propre (Alloué & Nominatif) avec assurance totale valeur à neuf.
            </p>
          </div>

          {/* Advantages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#121826] border border-[#1E293B] rounded-3xl p-8 space-y-4">
              <div className="p-3 bg-[#b8a468]/10 text-[#b8a468] rounded-2xl w-fit">
                <Lock className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Propriété Directe (Nominatif)</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Vos métaux précieux ne figurent pas au bilan de Maison Joubert ni d'une banque. Vous en êtes l'unique propriétaire légal avec certificat d'allotement scellé.
              </p>
            </div>

            <div className="bg-[#121826] border border-[#1E293B] rounded-3xl p-8 space-y-4">
              <div className="p-[#b8a468]/10 text-[#b8a468] rounded-2xl w-fit p-3">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Assurance 100% valeur à neuf</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Assurance complète souscrite auprès de Lloyd's London couvrant vol, perte et dégradation au cours du jour.
              </p>
            </div>

            <div className="bg-[#121826] border border-[#1E293B] rounded-3xl p-8 space-y-4">
              <div className="p-3 bg-[#b8a468]/10 text-[#b8a468] rounded-2xl w-fit">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Retrait & Revente Flash</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Demandez le retrait physique à notre guichet Bourse Paris sous 48h ou revendez vos produits directement en ligne au cours en direct.
              </p>
            </div>
          </div>

          {/* Pricing Table */}
          <div className="bg-[#121826] border border-[#1E293B] rounded-3xl p-8 sm:p-12 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-white text-center">Tarifs de Stockage Annuel</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto pt-4">
              <div className="bg-[#090D16] border border-[#b8a468]/40 rounded-2xl p-6 space-y-4">
                <span className="text-xs uppercase font-bold text-[#b8a468]">Gardiennage Or</span>
                <div className="text-3xl font-bold text-white">0,9 % <span className="text-xs text-[#94A3B8] font-normal">/ an (TTC)</span></div>
                <ul className="space-y-2 text-xs text-[#94A3B8]">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> Sans minimum de stock</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> Assurance valeur intégrale</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> Audit annuel par tiers indépendant</li>
                </ul>
              </div>

              <div className="bg-[#090D16] border border-[#1E293B] rounded-2xl p-6 space-y-4">
                <span className="text-xs uppercase font-bold text-[#b8a468]">Gardiennage Argent</span>
                <div className="text-3xl font-bold text-white">1,2 % <span className="text-xs text-[#94A3B8] font-normal">/ an (TTC)</span></div>
                <ul className="space-y-2 text-xs text-[#94A3B8]">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> Zone franche exonérée de TVA</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> Audit physique régulier</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> Revente en 1 clic</li>
                </ul>
              </div>
            </div>

            <div className="text-center pt-6">
              <Link
                href="/devis-personnalise"
                className="inline-flex items-center gap-2 py-4 px-8 rounded-xl bg-gradient-to-r from-[#b8a468] to-[#a98c35] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all"
              >
                <span>Demander un contrat de garde</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
      <AppointmentModal />
      <MiniCart />
    </>
  );
}
