'use client';

import React from 'react';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/layout/Footer';
import { AppointmentModal } from '@/components/forms/AppointmentModal';
import { MiniCart } from '@/components/cart/MiniCart';
import Link from 'next/link';
import { ArrowRight, Scale, CheckCircle } from 'lucide-react';

export default function CatalogueRachatPage() {
  const rachatProducts = [
    { name: '20 Francs Napoléon (Or)', price: 448.00, grossPrice: 462.50, type: 'Pièce Or Bourse' },
    { name: 'Lingot Or Pur 1kg', price: 76800.00, grossPrice: 78450.00, type: 'Lingot Certifié' },
    { name: '50 Francs Hercule (Argent)', price: 29.80, grossPrice: 32.50, type: 'Pièce Argent 900‰' },
    { name: 'Souverain Britannique (Or)', price: 560.00, grossPrice: 580.00, type: 'Pièce Or' },
    { name: 'Lingot Argent 1kg', price: 850.00, grossPrice: 895.00, type: 'Lingot Argent' },
    { name: 'Krugerrand 1oz (Or)', price: 2410.00, grossPrice: 2480.00, type: 'Pièce 1oz' },
    { name: 'Or Monétaire Dentaire (Gramme)', price: 38.50, grossPrice: 42.00, type: 'Gramme Or 18k' },
    { name: 'Bijoux Or 18 Carats (Gramme)', price: 48.20, grossPrice: 52.00, type: 'Gramme Or 750‰' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#090D16] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="bg-[#121826] border border-[#1E293B] rounded-3xl p-8 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#b8a468]">Catalogue de Rachat Net</span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Prix de Rachat Nette en Direct (Or & Argent)
            </h1>
            <p className="text-xs text-[#94A3B8] max-w-2xl">
              Les prix affichés ci-dessous correspondent au montant net proposé avant l'application de la taxe légale (TMP ou TPVP au choix du client). Paiement immédiat par virement bancaire ou chèque barré.
            </p>
          </div>

          <div className="bg-[#121826] border border-[#1E293B] rounded-3xl p-6 overflow-x-auto shadow-2xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#1E293B] text-[#94A3B8] uppercase">
                  <th className="py-4 px-4">Produit / Désignation</th>
                  <th className="py-4 px-4">Type</th>
                  <th className="py-4 px-4">Cote Vente Bourse</th>
                  <th className="py-4 px-4 text-right">Prix de Rachat Net</th>
                  <th className="py-4 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E293B]">
                {rachatProducts.map((p, idx) => (
                  <tr key={idx} className="hover:bg-[#090D16]/50 transition-colors">
                    <td className="py-4 px-4 font-bold text-white flex items-center gap-2">
                      <Scale className="w-4 h-4 text-[#b8a468]" />
                      <span>{p.name}</span>
                    </td>
                    <td className="py-4 px-4 text-[#94A3B8]">{p.type}</td>
                    <td className="py-4 px-4 text-slate-400 font-mono">{p.grossPrice.toLocaleString('fr-FR')} €</td>
                    <td className="py-4 px-4 text-right font-bold text-[#b8a468] text-sm font-mono">
                      {p.price.toLocaleString('fr-FR')} €
                    </td>
                    <td className="py-4 px-4 text-right">
                      <Link
                        href="/vente-metaux/demande-de-rachat"
                        className="py-1.5 px-3 rounded-lg bg-[#090D16] border border-[#1E293B] hover:border-[#b8a468] text-white text-[11px] font-semibold transition-all inline-flex items-center gap-1"
                      >
                        <span>Vendre</span>
                        <ArrowRight className="w-3 h-3 text-[#b8a468]" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </main>
      <Footer />
      <AppointmentModal />
      <MiniCart />
    </>
  );
}
