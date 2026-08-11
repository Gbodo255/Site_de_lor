'use client';

import React, { useState } from 'react';
import { useAppStore } from '@/stores/useStore';
import { X, Calendar, Clock, MapPin, CheckCircle } from 'lucide-react';

export const AppointmentModal = () => {
  const { isAppointmentOpen, setAppointmentOpen } = useAppStore();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'achat-or',
    date: '',
    time: '10:00',
    notes: '',
  });

  if (!isAppointmentOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setAppointmentOpen(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={() => setAppointmentOpen(false)}
      />

      {/* Dialog Box */}
      <div className="relative w-full max-w-lg bg-[#121826] border border-[#1E293B] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-white">
        <button
          onClick={() => setAppointmentOpen(false)}
          className="absolute top-5 right-5 text-[#94A3B8] hover:text-[#b8a468] transition-colors p-2 rounded-xl hover:bg-[#1E293B]"
        >
          <X className="w-6 h-6" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">Rendez-vous Confirmé !</h3>
            <p className="text-sm text-[#94A3B8]">
              Merci {formData.name}. Notre équipe vous attend le <strong className="text-white">{formData.date} à {formData.time}</strong> dans notre agence Paris Bourse.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6 border-b border-[#1E293B] pb-4">
              <span className="text-xs uppercase font-semibold text-[#b8a468] tracking-widest">Agence Paris Bourse</span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">Prendre Rendez-vous</h3>
              <p className="text-xs text-[#94A3B8] mt-1">Échangez en toute confidentialité avec nos experts au 10 rue de la Bourse, 75002 Paris.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                <label className="block text-[#94A3B8] mb-1 font-medium">Objet du rendez-vous</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#090D16] border border-[#1E293B] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#b8a468]"
                >
                  <option value="achat-or">Achat d'Or ou d'Argent d'investissement</option>
                  <option value="vente-or">Vente / Rachat de bijoux ou lingots</option>
                  <option value="numismatique">Expertise / Recherche de pièces rares</option>
                  <option value="devises">Achat ou vente de devises étrangères</option>
                  <option value="stockage">Information gardiennage & stockage coffre</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#94A3B8] mb-1 font-medium">Date souhaitée *</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#090D16] border border-[#1E293B] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#b8a468]"
                  />
                </div>
                <div>
                  <label className="block text-[#94A3B8] mb-1 font-medium">Créneau horaire *</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-[#090D16] border border-[#1E293B] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#b8a468]"
                  >
                    <option value="09:30">09:30</option>
                    <option value="10:30">10:30</option>
                    <option value="11:30">11:30</option>
                    <option value="14:00">14:00</option>
                    <option value="15:30">15:30</option>
                    <option value="17:00">17:00</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#94A3B8] mb-1 font-medium">Précisions (optionnel)</label>
                <textarea
                  rows={2}
                  placeholder="Détails sur les pièces, volumes ou questions..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#090D16] border border-[#1E293B] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#b8a468]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#b8a468] to-[#a98c35] text-black font-bold text-sm hover:brightness-110 transition-all uppercase tracking-wider"
              >
                Confirmer mon rendez-vous
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
