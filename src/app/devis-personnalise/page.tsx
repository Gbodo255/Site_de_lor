'use client';

import React, { useState } from 'react';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/layout/Footer';
import { AppointmentModal } from '@/components/forms/AppointmentModal';
import { MiniCart } from '@/components/cart/MiniCart';
import { FileText, CheckCircle, Send } from 'lucide-react';

export default function DevisPersonnalisePage() {
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
              <FileText className="w-8 h-8" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#b8a468]">Propositions Sur-Mesure</span>
            <h1 className="font-serif text-3xl font-bold text-white">Demande de Devis Personnalisé</h1>
            <p className="text-xs text-[#94A3B8]">
              Vous désirez constituer un portefeuille d'or/argent d'investissement ou effectuer une transaction d'envergure ? Recevez notre meilleure offre ferme sous 24h ouvrées.
            </p>
          </div>

          <div className="bg-[#121826] border border-[#1E293B] rounded-3xl p-8 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">Demande de devis transmise !</h3>
                <p className="text-sm text-[#94A3B8]">
                  Un conseiller privé Maison Joubert prend en charge votre dossier et vous contacte par téléphone et email.
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#94A3B8] mb-1 font-medium">Budget d'investissement envisagé (€)</label>
                    <input
                      type="text"
                      placeholder="Ex: 10 000 € à 50 000 €"
                      className="w-full bg-[#090D16] border border-[#1E293B] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#b8a468]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#94A3B8] mb-1 font-medium">Lieu de délivrance souhaité</label>
                    <select className="w-full bg-[#090D16] border border-[#1E293B] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#b8a468]">
                      <option value="paris">Remise au guichet Agence Paris Bourse</option>
                      <option value="livraison">Livraison sécurisée avec transporteur blindé</option>
                      <option value="coffre">Gardiennage en coffre fort (Suisse / France)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#94A3B8] mb-1 font-medium">Détail des besoins & questions</label>
                  <textarea
                    rows={4}
                    placeholder="Précisez la répartition souhaitée entre pièces d'or, lingots ou argent..."
                    className="w-full bg-[#090D16] border border-[#1E293B] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#b8a468]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#b8a468] to-[#a98c35] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Obtenir mon devis personnalisé sous 24h</span>
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
