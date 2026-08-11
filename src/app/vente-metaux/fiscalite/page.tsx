import React from 'react';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/layout/Footer';
import { AppointmentModal } from '@/components/forms/AppointmentModal';
import { MiniCart } from '@/components/cart/MiniCart';
import Link from 'next/link';
import { Calculator, ShieldCheck, CheckCircle } from 'lucide-react';

export default function FiscalitePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#090D16] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="bg-[#121826] border border-[#1E293B] rounded-3xl p-8 sm:p-12 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#b8a468]">Guide Fiscalité Or & Métaux</span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Guide complet de la Fiscalité lors de la vente d'Or
            </h1>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              En France, la revente d'or et d'argent d'investissement (lingots, pièces de bourse) est soumise à un régime fiscal avantageux au choix du contribuable. Maison Joubert calcule et gère l'ensemble des imprimés fiscaux (Formulaire 2091 et 2092).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Regime 1 */}
            <div className="bg-[#121826] border border-[#1E293B] rounded-3xl p-8 space-y-4">
              <span className="text-xs uppercase font-bold text-[#b8a468] bg-[#090D16] px-3 py-1 rounded-md border border-[#1E293B]">
                Option 1 (Par défaut)
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">Taxe forfaitaire sur les Métaux Précieux (TMP)</h3>
              <div className="text-3xl font-bold text-[#b8a468]">11,5 % <span className="text-xs text-[#94A3B8] font-normal">du prix de vente brut</span></div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Appliquée directement sur le montant total de la transaction (11% de taxe forfaitaire + 0,5% de CRDS).
              </p>
              <ul className="space-y-2 text-xs text-[#94A3B8] pt-2">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> Sans besoin de justificatif d'achat</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> Prélevée à la source par Maison Joubert</li>
              </ul>
            </div>

            {/* Regime 2 */}
            <div className="bg-[#121826] border border-[#b8a468]/40 rounded-3xl p-8 space-y-4">
              <span className="text-xs uppercase font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
                Option 2 (Sur justificatif)
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">Taxe sur les Plus-Values Réelles (TPVP)</h3>
              <div className="text-3xl font-bold text-[#b8a468]">36,2 % <span className="text-xs text-[#94A3B8] font-normal">uniquement sur le gain réalisé</span></div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Nécessite une facture d'achat nominative avec prix et date. Abattement de 5% par an à partir de la 3ème année de détention.
              </p>
              <ul className="space-y-2 text-xs text-[#94A3B8] pt-2">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> 0% d'impôt en cas de vente à perte</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> **Exonération totale d'impôt au bout de 22 ans**</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#121826] border border-[#1E293B] rounded-3xl p-8 text-center space-y-4">
            <h3 className="font-serif text-2xl font-bold text-white">Besoin d'une simulation fiscale exacte ?</h3>
            <p className="text-xs text-[#94A3B8] max-w-xl mx-auto">
              Nos conseillers en agence analysent vos factures et titres de propriété pour choisir le régime fiscal qui vous fera réaliser la plus forte économie d'impôt.
            </p>
            <Link
              href="/contactez-nous"
              className="inline-flex items-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#b8a468] to-[#a98c35] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all"
            >
              Consulter un expert Maison Joubert
            </Link>
          </div>

        </div>
      </main>
      <Footer />
      <AppointmentModal />
      <MiniCart />
    </>
  );
}
