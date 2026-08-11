'use client';

import React from 'react';
import Link from 'next/link';
import { useAppStore } from '@/stores/useStore';
import { ArrowRight, ShoppingCart, ShieldCheck } from 'lucide-react';

export const FeaturedBuySection = () => {
  const { addToCart } = useAppStore();

  const featuredItems = [
    {
      id: 'napoleon-20f',
      name: '20 Francs Napoléon (Or)',
      category: 'Investissement',
      price: 462.50,
      image: 'https://maison-joubert.fr/app/uploads/2025/11/img_home_zone1_prod_1b.webp',
      weight: '6.45g (Or 900‰)',
    },
    {
      id: 'lingot-1kg',
      name: 'Lingot Or Pur 1 kg LBMA',
      category: 'Investissement',
      price: 78450.00,
      image: 'https://maison-joubert.fr/app/uploads/2025/11/img_home_zone1_prod_2.webp',
      weight: '1000g (Or 999.9‰)',
    },
    {
      id: 'panda-30g',
      name: 'Pièce Panda (Chine) 30g',
      category: 'Investissement',
      price: 2490.00,
      image: 'https://maison-joubert.fr/app/uploads/2025/11/img_home_zone1_prod_3.webp',
      weight: '30g (Or 999‰)',
    },
  ];

  return (
    <section className="py-24 bg-[#090D16] text-white border-b border-[#1E293B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#b8a468] font-semibold bg-[#121826] px-3 py-1.5 rounded-lg border border-[#1E293B]">
              Investir dans les métaux précieux
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-4">
              Acheter <span className="text-[#b8a468] italic font-normal">L’ultime valeur refuge</span>
            </h2>
          </div>

          <Link
            href="/achat-metaux/catalogue-achat"
            className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-[#121826] border border-[#1E293B] hover:border-[#b8a468] text-white text-xs font-bold uppercase tracking-wider transition-all w-fit"
          >
            <span>Voir tout le catalogue d'achat</span>
            <ArrowRight className="w-4 h-4 text-[#b8a468]" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#121826] border border-[#1E293B] rounded-3xl p-6 flex flex-col justify-between hover:border-[#b8a468]/50 transition-all duration-300 group shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#b8a468] bg-[#090D16] px-2.5 py-1 rounded-md border border-[#1E293B]">
                    {item.category}
                  </span>
                  <span className="text-xs text-[#94A3B8]">{item.weight}</span>
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
                <p className="text-2xl font-bold text-[#b8a468] my-2">
                  {item.price.toLocaleString('fr-FR')} €
                </p>
              </div>

              <div className="pt-4 border-t border-[#1E293B] flex items-center gap-3">
                <button
                  onClick={() => addToCart(item)}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#090D16] border border-[#1E293B] hover:bg-[#b8a468] hover:text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Ajouter au panier</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quick Links */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#1E293B]/60">
          <Link
            href="/achat-metaux/catalogue-achat"
            className="flex items-center gap-4 p-4 rounded-2xl bg-[#121826]/60 border border-[#1E293B] hover:border-[#b8a468] transition-all"
          >
            <div className="p-2.5 bg-[#b8a468]/10 text-[#b8a468] rounded-xl font-serif text-lg font-bold">01</div>
            <div>
              <h4 className="text-sm font-bold text-white">Je veux acheter</h4>
              <p className="text-xs text-[#94A3B8]">Découvrez notre stock certifié LBMA</p>
            </div>
          </Link>

          <Link
            href="/achat-metaux/stockage"
            className="flex items-center gap-4 p-4 rounded-2xl bg-[#121826]/60 border border-[#1E293B] hover:border-[#b8a468] transition-all"
          >
            <div className="p-2.5 bg-[#b8a468]/10 text-[#b8a468] rounded-xl font-serif text-lg font-bold">02</div>
            <div>
              <h4 className="text-sm font-bold text-white">Je veux stocker</h4>
              <p className="text-xs text-[#94A3B8]">Gardiennage en coffre fort sécurisé</p>
            </div>
          </Link>

          <Link
            href="/devis-personnalise"
            className="flex items-center gap-4 p-4 rounded-2xl bg-[#121826]/60 border border-[#1E293B] hover:border-[#b8a468] transition-all"
          >
            <div className="p-2.5 bg-[#b8a468]/10 text-[#b8a468] rounded-xl font-serif text-lg font-bold">03</div>
            <div>
              <h4 className="text-sm font-bold text-white">Je veux un devis</h4>
              <p className="text-xs text-[#94A3B8]">Proposition sur-mesure sous 24h</p>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
};
