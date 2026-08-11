'use client';

import React, { useState } from 'react';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/layout/Footer';
import { AppointmentModal } from '@/components/forms/AppointmentModal';
import { MiniCart } from '@/components/cart/MiniCart';
import { useAppStore } from '@/stores/useStore';
import { ShoppingCart, Filter, Search } from 'lucide-react';

export default function CatalogueAchatPage() {
  const { addToCart } = useAppStore();
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const catalogProducts = [
    { id: 'cat-1', name: '20 Francs Napoléon (Or)', category: 'pieces-or', price: 462.50, weight: '6.45g (Or 900‰)', image: 'https://maison-joubert.fr/app/uploads/2025/11/img_home_zone1_prod_1b.webp' },
    { id: 'cat-2', name: 'Lingot Or Pur 1 kg LBMA', category: 'lingots-or', price: 78450.00, weight: '1000g (Or 999.9‰)', image: 'https://maison-joubert.fr/app/uploads/2025/11/img_home_zone1_prod_2.webp' },
    { id: 'cat-3', name: 'Pièce Panda (Chine) 30g', category: 'pieces-or', price: 2490.00, weight: '30g (Or 999‰)', image: 'https://maison-joubert.fr/app/uploads/2025/11/img_home_zone1_prod_3.webp' },
    { id: 'cat-4', name: 'Lingot Or Pur 50g LBMA', category: 'lingots-or', price: 3950.00, weight: '50g (Or 999.9‰)', image: 'https://maison-joubert.fr/app/uploads/2025/11/img_home_zone1_prod_2.webp' },
    { id: 'cat-5', name: 'Souvetain Elizabeth II (Or)', category: 'pieces-or', price: 580.00, weight: '7.98g (Or 916.6‰)', image: 'https://maison-joubert.fr/app/uploads/2025/11/img_home_zone1_prod_1b.webp' },
    { id: 'cat-6', name: 'Lingot Argent Pur 1kg LBMA', category: 'lingots-argent', price: 895.00, weight: '1000g (Argent 999‰)', image: 'https://maison-joubert.fr/app/uploads/2025/11/img_home_zone2_prod_1b.webp' },
    { id: 'cat-7', name: 'Maple Leaf 1oz (Argent)', category: 'pieces-argent', price: 34.50, weight: '31.10g (Argent 999.9‰)', image: 'https://maison-joubert.fr/app/uploads/2025/11/img_home_zone2_prod_3.webp' },
    { id: 'cat-8', name: 'Krugerrand 1oz (Or)', category: 'pieces-or', price: 2480.00, weight: '33.93g (Or 916.6‰)', image: 'https://maison-joubert.fr/app/uploads/2025/11/img_home_zone2_prod_2.webp' },
  ];

  const filteredProducts = catalogProducts.filter((p) => {
    const matchesCategory = filterCategory === 'all' || p.category === filterCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#090D16] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Header Bar */}
          <div className="bg-[#121826] border border-[#1E293B] rounded-3xl p-8 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#b8a468]">Catalogue d'Achat</span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Acheter des Pièces & Lingots d'Or et d'Argent
            </h1>
            <p className="text-xs text-[#94A3B8] max-w-xl">
              Tous nos produits sont neufs, scellés sous pochette sécurisée de la Monnaie de Paris ou essayeurs certifiés LBMA (C.Hafner, Umicore, Metalor).
            </p>

            {/* Filter controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#1E293B]">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setFilterCategory('all')}
                  className={`py-2 px-4 rounded-xl text-xs font-semibold transition-all ${filterCategory === 'all' ? 'bg-[#b8a468] text-black' : 'bg-[#090D16] text-[#94A3B8] hover:text-white'}`}
                >
                  Tous les produits
                </button>
                <button
                  onClick={() => setFilterCategory('pieces-or')}
                  className={`py-2 px-4 rounded-xl text-xs font-semibold transition-all ${filterCategory === 'pieces-or' ? 'bg-[#b8a468] text-black' : 'bg-[#090D16] text-[#94A3B8] hover:text-white'}`}
                >
                  Pièces Or
                </button>
                <button
                  onClick={() => setFilterCategory('lingots-or')}
                  className={`py-2 px-4 rounded-xl text-xs font-semibold transition-all ${filterCategory === 'lingots-or' ? 'bg-[#b8a468] text-black' : 'bg-[#090D16] text-[#94A3B8] hover:text-white'}`}
                >
                  Lingots Or
                </button>
                <button
                  onClick={() => setFilterCategory('lingots-argent')}
                  className={`py-2 px-4 rounded-xl text-xs font-semibold transition-all ${filterCategory === 'lingots-argent' ? 'bg-[#b8a468] text-black' : 'bg-[#090D16] text-[#94A3B8] hover:text-white'}`}
                >
                  Argent
                </button>
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-[#94A3B8] absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Rechercher une pièce..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#090D16] border border-[#1E293B] rounded-xl pl-9 pr-4 py-2 text-xs text-white focus:outline-none focus:border-[#b8a468]"
                />
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="bg-[#121826] border border-[#1E293B] rounded-3xl p-5 flex flex-col justify-between hover:border-[#b8a468]/50 transition-all duration-300 group shadow-xl"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#b8a468] bg-[#090D16] px-2 py-0.5 rounded border border-[#1E293B]">
                    {p.weight}
                  </span>

                  <div className="h-44 my-3 flex items-center justify-center p-3 bg-[#090D16]/60 rounded-2xl border border-[#1E293B]/40 group-hover:bg-[#090D16] transition-colors">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="font-serif text-base font-bold text-white mb-1 group-hover:text-[#b8a468] transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-xl font-bold text-[#b8a468] my-1">
                    {p.price.toLocaleString('fr-FR')} €
                  </p>
                </div>

                <button
                  onClick={() => addToCart({ id: p.id, name: p.name, category: 'Investissement', price: p.price, image: p.image })}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#090D16] border border-[#1E293B] hover:bg-[#b8a468] hover:text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 mt-4"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Ajouter au panier</span>
                </button>
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
