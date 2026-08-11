import React from 'react';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/layout/Footer';
import { AppointmentModal } from '@/components/forms/AppointmentModal';
import { MiniCart } from '@/components/cart/MiniCart';
import Link from 'next/link';
import { Newspaper, Calendar, ArrowRight } from 'lucide-react';

export default function ActualitesPage() {
  const articles = [
    {
      title: "Pourquoi l'Or bat de nouveaux records en 2026 ?",
      date: "05 Août 2026",
      category: "Marchés & Économie",
      snippet: "Décryptage des facteurs géopolitiques, des politiques des banques centrales et de l'inflation qui propulsent l'once d'or vers des sommets.",
      image: "https://maison-joubert.fr/app/uploads/2025/09/img-hero-home-1909.webp",
    },
    {
      title: "Napoléon 20 Francs : La pièce maîtresse des épargnants français",
      date: "18 Juillet 2026",
      category: "Numismatique",
      snippet: "Histoire, tirage et calcul de la prime du Napoléon 20F, véritable référence de l'or d'investissement en France.",
      image: "https://maison-joubert.fr/app/uploads/2025/11/img_home_zone1_prod_1b.webp",
    },
    {
      title: "Comment fonctionne la fiscalité sur l'argent physique ?",
      date: "02 Juin 2026",
      category: "Guide Pratique",
      snippet: "Comprendre les règles de TVA, les taxes de revente et l'intérêt d'acheter des lingots en zone franche.",
      image: "https://maison-joubert.fr/app/uploads/2025/11/img_home_zone2_prod_1b.webp",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#090D16] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="bg-[#121826] border border-[#1E293B] rounded-3xl p-8 sm:p-12 text-center space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#b8a468]">Actualités & Analyses</span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Le Journal d'Information Maison Joubert
            </h1>
            <p className="max-w-2xl mx-auto text-sm text-[#94A3B8]">
              Retrouvez l'actualité des marchés de l'or, de l'argent, des devises internationales et les dossiers numismatiques rédigés par nos conseillers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((art, idx) => (
              <div
                key={idx}
                className="bg-[#121826] border border-[#1E293B] rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between hover:border-[#b8a468]/50 transition-all group"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-[#090D16]/90 backdrop-blur-md text-[10px] uppercase font-bold text-[#b8a468] px-3 py-1 rounded-full border border-[#1E293B]">
                      {art.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[11px] text-[#94A3B8]">
                      <Calendar className="w-3.5 h-3.5 text-[#b8a468]" />
                      <span>{art.date}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#b8a468] transition-colors leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      {art.snippet}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <span className="text-xs font-bold text-[#b8a468] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                    <span>Lire l'article complet</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
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
