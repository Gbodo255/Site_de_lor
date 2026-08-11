'use client';

import React, { useState } from 'react';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/layout/Footer';
import { AppointmentModal } from '@/components/forms/AppointmentModal';
import { MiniCart } from '@/components/cart/MiniCart';
import { useAppStore } from '@/stores/useStore';
import { DollarSign, Search, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CatalogueDevisesPage() {
  const { currencyRates } = useAppStore();
  const [search, setSearch] = useState('');

  const filteredCurrencies = currencyRates.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#090D16] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="bg-[#121826] border border-[#1E293B] rounded-3xl p-8 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#b8a468]">Catalogue Devises</span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Taux de Change Nouveaux Billets (Achat & Vente)
            </h1>
            <p className="text-xs text-[#94A3B8] max-w-xl">
              Cotations nettes appliquées en temps réel au guichet du bureau de change Paris Bourse.
            </p>

            <div className="pt-2">
              <div className="relative max-w-md">
                <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  placeholder="Rechercher une devise (ex: Dollar, Livre, CHF...)"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-[#090D16] border border-[#1E293B] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#b8a468]"
                />
              </div>
            </div>
          </div>

          <div className="bg-[#121826] border border-[#1E293B] rounded-3xl p-6 overflow-x-auto shadow-2xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#1E293B] text-[#94A3B8] uppercase">
                  <th className="py-4 px-4">Devise</th>
                  <th className="py-4 px-4">Code</th>
                  <th className="py-4 px-4 text-right">Taux Achat (Vous achetez)</th>
                  <th className="py-4 px-4 text-right">Taux Vente (Vous vendez)</th>
                  <th className="py-4 px-4 text-right">Réservation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E293B]">
                {filteredCurrencies.map((c) => (
                  <tr key={c.code} className="hover:bg-[#090D16]/50 transition-colors">
                    <td className="py-4 px-4 font-bold text-white flex items-center gap-3">
                      <span className="text-xl">{c.flag}</span>
                      <span>{c.name}</span>
                    </td>
                    <td className="py-4 px-4 text-[#b8a468] font-mono font-bold">{c.code}</td>
                    <td className="py-4 px-4 text-right font-mono text-emerald-400 font-semibold">
                      1 EUR = {c.buyRate} {c.code}
                    </td>
                    <td className="py-4 px-4 text-right font-mono text-slate-300">
                      1 EUR = {c.sellRate} {c.code}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <Link
                        href="/devises"
                        className="py-1.5 px-3 rounded-lg bg-[#090D16] border border-[#1E293B] hover:border-[#b8a468] text-white text-[11px] font-semibold transition-all inline-flex items-center gap-1"
                      >
                        <span>Convertir</span>
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
