'use client';

import React, { useState } from 'react';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/layout/Footer';
import { AppointmentModal } from '@/components/forms/AppointmentModal';
import { MiniCart } from '@/components/cart/MiniCart';
import { Search, CheckCircle, Send } from 'lucide-react';

export default function NousMissionnerPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#090D16] text-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="bg-[#121826] border border-[#1E293B] rounded-3xl p-8 text-center space-y-3">
            <div className="p-3 bg-[#b8a468]/10 text-[#b8a468] rounded-2xl w-fit mx-auto">
              <Search className="w-8 h-8" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#b8a468]">Mandat de Recherche</span>
            <h1 className="font-serif text-3xl font-bold text-white">Je recherche une pièce spécifique</h1>
            <p className="text-xs text-[#94A3B8]">
              Vous êtes à la recherche d'un millésime rare, d'une variante spécifique ou d'une monnaie antique particulière ? Confiez votre ordre de recherche à nos numismates.
            </p>
          </div>

          <div className="bg-[#121826] border border-[#1E293B] rounded-3xl p-8 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">Ordre de recherche enregistré !</h3>
                <p className="text-sm text-[#94A3B8]">
                  Notre cabinet active son réseau de collectionneurs et salles de vente internationales. Nous vous contacterons dès qu'un exemplaire conforme est localisé.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#94A3B8] mb-1 font-medium">Nom complet *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      className="w-full bg-[#090D16] border border-[#1E293B] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#b8a468]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#94A3B8] mb-1 font-medium">Téléphone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="06 12 34 56 78"
                      className="w-full bg-[#090D16] border border-[#1E293B] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#b8a468]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#94A3B8] mb-1 font-medium">Adresse Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="jean@example.com"
                    className="w-full bg-[#090D16] border border-[#1E293B] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#b8a468]"
                  />
                </div>

                <div>
                  <label className="block text-[#94A3B8] mb-1 font-medium">Désignation de la pièce recherchée *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: 5 Francs Écu d'Or Charles IX 1565 Atelier A Paris"
                    className="w-full bg-[#090D16] border border-[#1E293B] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#b8a468]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#94A3B8] mb-1 font-medium">État de conservation minimal</label>
                    <select className="w-full bg-[#090D16] border border-[#1E293B] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#b8a468]">
                      <option value="indifferent">Indifférent</option>
                      <option value="TB">TB (Très Beau)</option>
                      <option value="TTB">TTB (Très Très Beau)</option>
                      <option value="SUP">SUP (Superbe)</option>
                      <option value="FDC">FDC (Fleur de Coin)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#94A3B8] mb-1 font-medium">Budget maximal envisagé (€)</label>
                    <input
                      type="number"
                      placeholder="Ex: 1500"
                      className="w-full bg-[#090D16] border border-[#1E293B] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#b8a468]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#b8a468] to-[#a98c35] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Confier ma recherche de pièce</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </main>
      <Footer />
      <AppointmentModal />
      <MiniCart />
    </>
  );
}
