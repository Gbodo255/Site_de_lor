'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, History, Search, ShieldCheck } from 'lucide-react';

export const NumismaticSection = () => {
  const numismaticItems = [
    {
      name: '5 Francs Louis-Philippe Ier (1841 K)',
      period: 'Bordeaux • Argent 900‰',
      price: 185.00,
      image: 'https://maison-joubert.fr/app/uploads/2025/11/img_home_zone3_prod_1b.webp',
      rarity: 'Très Beau (TB+)',
    },
    {
      name: 'Ambiani - Statère Uniface (Classe II)',
      period: 'Gaule Belgique • Or massif antique',
      price: 2450.00,
      image: 'https://maison-joubert.fr/app/uploads/2025/11/img_home_zone3_prod_2.webp',
      rarity: 'Superbe (SUP)',
    },
    {
      name: 'Solidus de Léon Ier - Constantinople',
      period: 'Empire Byzantin • Or pur 457 ap. J.-C.',
      price: 1120.00,
      image: 'https://maison-joubert.fr/app/uploads/2025/11/img_home_zone3_prod_4.webp',
      rarity: 'Superbe avec velours',
    },
    {
      name: '40 Francs Napoléon Ier (1806 A)',
      period: 'Atelier de Paris • Or 900‰ rare',
      price: 1680.00,
      image: 'https://maison-joubert.fr/app/uploads/2025/11/img_home_zone3_prod_3.webp',
      rarity: 'Très Très Beau (TTB)',
    },
  ];

  return (
    <section className="py-24 bg-[#090D16] text-white border-b border-[#1E293B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#b8a468] font-semibold bg-[#121826] px-3 py-1.5 rounded-lg border border-[#1E293B]">
              Curiosités et collection
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-4">
              Le Cabinet Numismatique <br />
              <span className="text-[#b8a468] italic font-normal">Une rencontre avec l’histoire</span>
            </h2>
          </div>

          <Link
            href="/cabinet-numismatique/collection"
            className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-[#121826] border border-[#1E293B] hover:border-[#b8a468] text-white text-xs font-bold uppercase tracking-wider transition-all w-fit"
          >
            <span>Voir toute la collection de pièces rares</span>
            <ArrowRight className="w-4 h-4 text-[#b8a468]" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {numismaticItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#121826] border border-[#1E293B] rounded-3xl p-5 flex flex-col justify-between hover:border-[#b8a468]/50 transition-all duration-300 group shadow-xl hover:-translate-y-1"
            >
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#b8a468] bg-[#090D16] px-2 py-0.5 rounded border border-[#1E293B]">
                  {item.rarity}
                </span>

                <div className="h-44 my-3 flex items-center justify-center p-3 bg-[#090D16]/60 rounded-2xl border border-[#1E293B]/40 group-hover:bg-[#090D16] transition-colors">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                  />
                </div>

                <h3 className="font-serif text-lg font-bold text-white mb-1 group-hover:text-[#b8a468] transition-colors leading-snug">
                  {item.name}
                </h3>
                <p className="text-[11px] text-[#94A3B8] mb-2">{item.period}</p>
                <p className="text-xl font-bold text-[#b8a468]">
                  {item.price.toLocaleString('fr-FR')} €
                </p>
              </div>

              <div className="pt-4 border-t border-[#1E293B] mt-4">
                <Link
                  href="/cabinet-numismatique/nous-missionner"
                  className="w-full py-2.5 px-3 rounded-xl bg-[#090D16] border border-[#1E293B] hover:border-[#b8a468] text-slate-200 text-xs font-medium transition-all flex items-center justify-center gap-1.5"
                >
                  <Search className="w-3.5 h-3.5 text-[#b8a468]" />
                  <span>Demander cette monnaie</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Sub-navigation items */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#1E293B]/60">
          <Link
            href="/cabinet-numismatique/collection"
            className="flex items-center gap-4 p-4 rounded-2xl bg-[#121826]/60 border border-[#1E293B] hover:border-[#b8a468] transition-all"
          >
            <History className="w-6 h-6 text-[#b8a468]" />
            <div>
              <h4 className="text-sm font-bold text-white">Je veux voir la collection</h4>
              <p className="text-xs text-[#94A3B8]">Monnaies antiques, royales et modernes</p>
            </div>
          </Link>

          <Link
            href="/cabinet-numismatique/nous-missionner"
            className="flex items-center gap-4 p-4 rounded-2xl bg-[#121826]/60 border border-[#1E293B] hover:border-[#b8a468] transition-all"
          >
            <Search className="w-6 h-6 text-[#b8a468]" />
            <div>
              <h4 className="text-sm font-bold text-white">Je recherche une pièce</h4>
              <p className="text-xs text-[#94A3B8]">Missionnez nos numismates experts</p>
            </div>
          </Link>

          <Link
            href="/cabinet-numismatique/expertiser"
            className="flex items-center gap-4 p-4 rounded-2xl bg-[#121826]/60 border border-[#1E293B] hover:border-[#b8a468] transition-all"
          >
            <ShieldCheck className="w-6 h-6 text-[#b8a468]" />
            <div>
              <h4 className="text-sm font-bold text-white">Je veux une expertise</h4>
              <p className="text-xs text-[#94A3B8]">Évaluation et authentification sur devis</p>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
};
