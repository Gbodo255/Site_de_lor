'use client';

import React, { useState } from 'react';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/layout/Footer';
import { AppointmentModal } from '@/components/forms/AppointmentModal';
import { MiniCart } from '@/components/cart/MiniCart';
import Link from 'next/link';
import { Search, ShieldCheck } from 'lucide-react';

export default function CollectionPage() {
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const coins = [
    { name: '5 Francs Louis-Philippe Ier (1841 K)', period: 'royales', price: 185.00, rarity: 'TB+', image: 'https://maison-joubert.fr/app/uploads/2025/11/img_home_zone3_prod_1b.webp' },
    { name: 'Ambiani - Statère Uniface (Classe II)', period: 'antiques', price: 2450.00, rarity: 'SUP', image: 'https://maison-joubert.fr/app/uploads/2025/11/img_home_zone3_prod_2.webp' },
    { name: 'Solidus de Léon Ier - Constantinople', period: 'antiques', price: 1120.00, rarity: 'SUP', image: 'https://maison-joubert.fr/app/uploads/2025/11/img_home_zone3_prod_4.webp' },
    { name: '40 Francs Napoléon Ier (1806 A)', period: 'modernes', price: 1680.00, rarity: 'TTB', image: 'https://maison-joubert.fr/app/uploads/2025/11/img_home_zone3_prod_3.webp' },
    { name: 'Ecu d\'Or à la couronne - Charles VI', period: 'royales', price: 3200.00, rarity: 'Superbe', image: 'https://maison-joubert.fr/app/uploads/2025/11/img_home_zone3_prod_1b.webp' },
    { name: 'Denier Romain d\'Julien l\'Apostat', period: 'antiques', price: 420.00, rarity: 'TB', image: 'https://maison-joubert.fr/app/uploads/2025/11/img_home_zone3_prod_4.webp' },
  ];

  const filteredCoins = coins.filter((c) => categoryFilter === 'all' || c.period === categoryFilter);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#090D16] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="bg-[#121826] border border-[#1E293B] rounded-3xl p-8 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#b8a468]">Monnaies de Collection</span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Catalogue Numismatique & Monnaies Rares
            </h1>
            <p className="text-xs text-[#94A3B8] max-w-xl">
              Chaque pièce présentée dans notre catalogue est scrupuleusement authentifiée, gradée selon les standards internationaux et garantie à vie par Maison Joubert.
            </p>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1E293B]">
              <button
                onClick={() => setCategoryFilter('all')}
                className={`py-2 px-4 rounded-xl text-xs font-semibold transition-all ${categoryFilter === 'all' ? 'bg-[#b8a468] text-black' : 'bg-[#090D16] text-[#94A3B8] hover:text-white'}`}
              >
                Toutes les époques
              </button>
              <button
                onClick={() => setCategoryFilter('antiques')}
                className={`py-2 px-4 rounded-xl text-xs font-semibold transition-all ${categoryFilter === 'antiques' ? 'bg-[#b8a468] text-black' : 'bg-[#090D16] text-[#94A3B8] hover:text-white'}`}
              >
                Antiques (Grecques, Romaines, Gauloises)
              </button>
              <button
                onClick={() => setCategoryFilter('royales')}
                className={`py-2 px-4 rounded-xl text-xs font-semibold transition-all ${categoryFilter === 'royales' ? 'bg-[#b8a468] text-black' : 'bg-[#090D16] text-[#94A3B8] hover:text-white'}`}
              >
                Royales Françaises
              </button>
              <button
                onClick={() => setCategoryFilter('modernes')}
                className={`py-2 px-4 rounded-xl text-xs font-semibold transition-all ${categoryFilter === 'modernes' ? 'bg-[#b8a468] text-black' : 'bg-[#090D16] text-[#94A3B8] hover:text-white'}`}
              >
                Monnaies Modernes & Napoléoniennes
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCoins.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#121826] border border-[#1E293B] rounded-3xl p-6 flex flex-col justify-between hover:border-[#b8a468]/50 transition-all duration-300 group shadow-xl"
              >
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#b8a468] bg-[#090D16] px-2 py-0.5 rounded border border-[#1E293B]">
                    État : {item.rarity}
                  </span>

                  <div className="h-48 my-3 flex items-center justify-center p-3 bg-[#090D16]/60 rounded-2xl border border-[#1E293B]/40 group-hover:bg-[#090D16] transition-colors">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-white mb-1 group-hover:text-[#b8a468] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-2xl font-bold text-[#b8a468] my-1">
                    {item.price.toLocaleString('fr-FR')} €
                  </p>
                </div>

                <Link
                  href="/cabinet-numismatique/nous-missionner"
                  className="w-full py-2.5 px-3 rounded-xl bg-[#090D16] border border-[#1E293B] hover:border-[#b8a468] text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5 mt-4"
                >
                  <Search className="w-3.5 h-3.5 text-[#b8a468]" />
                  <span>Se faire réserver cette monnaie</span>
                </Link>
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
