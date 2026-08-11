'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calculator, FileText, Sparkles, Scale } from 'lucide-react';

export const FeaturedSellSection = () => {
  const buybackItems = [
    {
      name: 'Demi-once Krugerrand',
      category: 'Rachat Or',
      price: 1210.00,
      image: 'https://maison-joubert.fr/app/uploads/2025/11/img_home_zone2_prod_2.webp',
      type: 'Afrique du Sud 1/2 oz',
    },
    {
      name: 'Lingot Argent Pur 1kg',
      category: 'Rachat Argent',
      price: 850.00,
      image: 'https://maison-joubert.fr/app/uploads/2025/11/img_home_zone2_prod_1b.webp',
      type: 'Certifié LBMA 999‰',
    },
    {
      name: 'Philharmonique (Autriche) 1oz',
      category: 'Rachat Or',
      price: 2410.00,
      image: 'https://maison-joubert.fr/app/uploads/2025/11/img_home_zone2_prod_3.webp',
      type: 'Autriche 1 oz',
    },
  ];

  return (
    <section className="py-24 bg-[#06080F] text-white border-b border-[#1E293B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#b8a468] font-semibold bg-[#121826] px-3 py-1.5 rounded-lg border border-[#1E293B]">
              Vendre vos métaux précieux
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-4">
              Vendre <span className="text-[#b8a468] italic font-normal">Une liquidité incontestée</span>
            </h2>
          </div>

          <Link
            href="/vente-metaux/estimer"
            className="inline-flex items-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#b8a468] to-[#a98c35] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all w-fit"
          >
            <span>Demander une estimation gratuite</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {buybackItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#121826] border border-[#1E293B] rounded-3xl p-6 flex flex-col justify-between hover:border-[#b8a468]/50 transition-all duration-300 group shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#9d1a19] bg-[#9d1a19]/10 px-2.5 py-1 rounded-md border border-[#9d1a19]/30">
                    {item.category}
                  </span>
                  <span className="text-xs text-[#94A3B8]">{item.type}</span>
                </div>

                <div className="h-56 my-4 flex items-center justify-center p-4 bg-[#090D16]/60 rounded-2xl border border-[#1E293B]/40 group-hover:bg-[#090D16] transition-colors">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <h3 className="font-serif text-xl font-bold text-white mb-1 group-hover:text-[#b8a468] transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-[#94A3B8]">Prix de Rachat Nette Estimé:</p>
                <p className="text-2xl font-bold text-[#b8a468] my-1">
                  {item.price.toLocaleString('fr-FR')} €
                </p>
              </div>

              <div className="pt-4 border-t border-[#1E293B]">
                <Link
                  href="/vente-metaux/demande-de-rachat"
                  className="w-full py-3 px-4 rounded-xl bg-[#090D16] border border-[#1E293B] hover:border-[#b8a468] text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <span>Demander le rachat</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#b8a468]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Services Links Bar */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-4 gap-6 pt-8 border-t border-[#1E293B]/60">
          <Link
            href="/vente-metaux/catalogue-rachat"
            className="p-5 rounded-2xl bg-[#121826]/60 border border-[#1E293B] hover:border-[#b8a468] transition-all space-y-2"
          >
            <Scale className="w-5 h-5 text-[#b8a468]" />
            <h4 className="text-sm font-bold text-white">Je veux vendre</h4>
            <p className="text-xs text-[#94A3B8]">Tarifs de rachat nets mis à jour selon le cours officiel.</p>
          </Link>

          <Link
            href="/vente-metaux/demande-de-rachat"
            className="p-5 rounded-2xl bg-[#121826]/60 border border-[#1E293B] hover:border-[#b8a468] transition-all space-y-2"
          >
            <FileText className="w-5 h-5 text-[#b8a468]" />
            <h4 className="text-sm font-bold text-white">Demande de rachat</h4>
            <p className="text-xs text-[#94A3B8]">Procédure sécurisée par envoi assuré ou au guichet.</p>
          </Link>

          <Link
            href="/vente-metaux/estimer"
            className="p-5 rounded-2xl bg-[#121826]/60 border border-[#1E293B] hover:border-[#b8a468] transition-all space-y-2"
          >
            <Sparkles className="w-5 h-5 text-[#b8a468]" />
            <h4 className="text-sm font-bold text-white">Estimation à distance</h4>
            <p className="text-xs text-[#94A3B8]">Envoi de photos pour pré-expertise gratuite.</p>
          </Link>

          <Link
            href="/vente-metaux/fiscalite"
            className="p-5 rounded-2xl bg-[#121826]/60 border border-[#1E293B] hover:border-[#b8a468] transition-all space-y-2"
          >
            <Calculator className="w-5 h-5 text-[#b8a468]" />
            <h4 className="text-sm font-bold text-white">Information fiscalité</h4>
            <p className="text-xs text-[#94A3B8]">Explication des régimes TMP (11.5%) et TPVP (36.2%).</p>
          </Link>
        </div>

      </div>
    </section>
  );
};
