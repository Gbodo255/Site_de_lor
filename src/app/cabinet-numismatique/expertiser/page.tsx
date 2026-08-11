'use client';

import React, { useState } from 'react';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/layout/Footer';
import { AppointmentModal } from '@/components/forms/AppointmentModal';
import { MiniCart } from '@/components/cart/MiniCart';
import { ShieldCheck, Upload, CheckCircle } from 'lucide-react';

export default function ExpertiserPage() {
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
              <ShieldCheck className="w-8 h-8" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#b8a468]">Expertise & Certification</span>
            <h1 className="font-serif text-3xl font-bold text-white">Expertise Numismatique Gratuite</h1>
            <p className="text-xs text-[#94A3B8]">
              Faites expertiser vos monnaies anciennes, médailles ou successions numismatiques par des spécialistes réputés. Évaluation gratuite au guichet ou sur dossier d'images.
            </p>
          </div>

          <div className="bg-[#121826] border border-[#1E293B] rounded-3xl p-8 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">Demande d'expertise reçue !</h3>
                <p className="text-sm text-[#94A3B8]">
                  Nos experts analysent vos photos et informations. Nous revenons vers vous dans les plus brefs délais avec une fiche d'évaluation préalable.
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
                  <label className="block text-[#94A3B8] mb-1 font-medium">Description des monnaies (Avers, Revers, Poids, Diamètre)</label>
                  <textarea
                    rows={3}
                    placeholder="Indiquez les inscriptions déchiffrées, la légende, le diamètre en mm..."
                    className="w-full bg-[#090D16] border border-[#1E293B] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#b8a468]"
                  />
                </div>

                <div className="border-2 border-dashed border-[#1E293B] hover:border-[#b8a468] rounded-2xl p-6 text-center cursor-pointer transition-colors bg-[#090D16]/50">
                  <Upload className="w-8 h-8 text-[#b8a468] mx-auto mb-2" />
                  <p className="font-semibold text-white">Charger des photos haute résolution (Avers & Revers)</p>
                  <p className="text-[11px] text-[#94A3B8] mt-1">Formats acceptés: JPG, PNG, WEBP (Max 15 Mo)</p>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#b8a468] to-[#a98c35] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all"
                >
                  Soumettre pour expertise gratuite
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
