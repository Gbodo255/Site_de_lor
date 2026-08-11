'use client';

import React, { useState } from 'react';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/layout/Footer';
import { AppointmentModal } from '@/components/forms/AppointmentModal';
import { MiniCart } from '@/components/cart/MiniCart';
import { CheckCircle, Send } from 'lucide-react';

export default function DemandeDeRachatPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    itemType: 'lingot-or',
    quantity: '1',
    description: '',
    deliveryMethod: 'guichet',
  });

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
            <span className="text-xs font-semibold uppercase tracking-widest text-[#b8a468]">Formulaire Officiel</span>
            <h1 className="font-serif text-3xl font-bold text-white">Demande de Rachat d'Or & d'Argent</h1>
            <p className="text-xs text-[#94A3B8]">
              Remplissez ce formulaire pour bloquer la cote de rachat net sous 24h. Notre équipe vous recontacte immédiatement pour valider la transaction.
            </p>
          </div>

          <div className="bg-[#121826] border border-[#1E293B] rounded-3xl p-8 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">Demande de rachat envoyée !</h3>
                <p className="text-sm text-[#94A3B8]">
                  Merci {formData.name}. Un bordereau de rachat nominatif a été généré et transmis à votre adresse email <strong className="text-white">{formData.email}</strong>.
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
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#090D16] border border-[#1E293B] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#b8a468]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#94A3B8] mb-1 font-medium">Téléphone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="06 12 34 56 78"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#090D16] border border-[#1E293B] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#b8a468]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#94A3B8] mb-1 font-medium">Type d'objet à vendre *</label>
                    <select
                      value={formData.itemType}
                      onChange={(e) => setFormData({ ...formData, itemType: e.target.value })}
                      className="w-full bg-[#090D16] border border-[#1E293B] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#b8a468]"
                    >
                      <option value="lingot-or">Lingot / Lingotin Or (LBMA)</option>
                      <option value="piece-or">Pièces Or (Napoléon, Souverain...)</option>
                      <option value="argent">Lingots / Pièces Argent</option>
                      <option value="bijoux">Bijoux Or / Vieil Or / Débris</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#94A3B8] mb-1 font-medium">Mode de transaction souhaité *</label>
                    <select
                      value={formData.deliveryMethod}
                      onChange={(e) => setFormData({ ...formData, deliveryMethod: e.target.value })}
                      className="w-full bg-[#090D16] border border-[#1E293B] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#b8a468]"
                    >
                      <option value="guichet">Dépot direct au guichet (Paris Bourse)</option>
                      <option value="valeur-assuree">Envoi postal sécurisé sous valeur déclarée</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#94A3B8] mb-1 font-medium">Détails des objets & Poids approximatif</label>
                  <textarea
                    rows={3}
                    placeholder="Ex: 2 Napoléons 20F en bon état, 1 lingotin 50g avec certificat..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full bg-[#090D16] border border-[#1E293B] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#b8a468]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#b8a468] to-[#a98c35] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Soumettre ma demande de rachat</span>
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
