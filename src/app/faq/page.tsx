'use client';

import React, { useState } from 'react';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/layout/Footer';
import { AppointmentModal } from '@/components/forms/AppointmentModal';
import { MiniCart } from '@/components/cart/MiniCart';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Comment acheter de l'Or en toute sécurité chez Maison Joubert ?",
      a: "Vous pouvez commander directement en ligne ou vous rendre dans notre agence au 10 rue de la Bourse, 75002 Paris. Tous nos lingots (1g à 1kg) et pièces sont certifiés neufs et livrés scellés avec facture nominative."
    },
    {
      q: "Quel est le moyen de paiement accepté au guichet ?",
      a: "Conformément à la réglementation française (article L. 112-6 du Code monétaire et financier), l'achat et la vente d'or ne peuvent se faire en espèces. Les règlements s'effectuent exclusivement par carte bancaire, virement instantané ou chèque de banque."
    },
    {
      q: "Quelle est la différence entre pièces de bourse et monnaies numismatiques ?",
      a: "Une pièce d'or de bourse (ex: Napoléon 20F, Krugerrand) est cotée sur la valeur de son poids en or pur plus une prime de marché. Une monnaie numismatique tire sa valeur essentielle de sa rareté historique, son millésime, son atelier de frappe et son état de conservation."
    },
    {
      q: "Comment fonctionne la taxe lors de la revente d'or ?",
      a: "Vous avez le choix entre la Taxe forfaitaire sur les Métaux Précieux (TMP de 11,5% sur le total) ou la Taxe sur la Plus-Value Réelle (TPVP de 36,2% sur le gain avec exonération totale au bout de 22 ans si vous possédez la facture nominative)."
    },
    {
      q: "Proposez-vous la réservation de devises en ligne ?",
      a: "Oui, vous pouvez consulter nos taux de change en direct et réserver vos devises étrangères (Dollar, Livre Sterling, Yen, Franc Suisse...) pour un retrait immédiat sans frais en agence."
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#090D16] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="bg-[#121826] border border-[#1E293B] rounded-3xl p-8 sm:p-12 text-center space-y-4">
            <div className="p-3 bg-[#b8a468]/10 text-[#b8a468] rounded-2xl w-fit mx-auto">
              <HelpCircle className="w-8 h-8" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#b8a468]">Aide & Informations</span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Questions Fréquentes (FAQ)
            </h1>
            <p className="text-sm text-[#94A3B8]">
              Toutes les réponses relatives à l'achat, la vente d'or, la fiscalité, les devises et la livraison.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#121826] border border-[#1E293B] rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-base text-white hover:text-[#b8a468] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#b8a468] transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
                </button>

                {openIndex === idx && (
                  <div className="px-6 pb-6 text-xs text-[#94A3B8] leading-relaxed border-t border-[#1E293B]/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
      <AppointmentModal />
      <MiniCart />
    </>
  );
}
