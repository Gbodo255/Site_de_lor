'use client';

import React, { useState } from 'react';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/layout/Footer';
import { AppointmentModal } from '@/components/forms/AppointmentModal';
import { MiniCart } from '@/components/cart/MiniCart';
import { User, Lock, ShoppingBag, ShieldCheck } from 'lucide-react';

export default function ComptePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#090D16] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="bg-[#121826] border border-[#1E293B] rounded-3xl p-8 text-center space-y-3">
            <div className="p-3 bg-[#b8a468]/10 text-[#b8a468] rounded-2xl w-fit mx-auto">
              <User className="w-8 h-8" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#b8a468]">Espace Client Crypté</span>
            <h1 className="font-serif text-3xl font-bold text-white">Mon Compte Maison Joubert</h1>
            <p className="text-xs text-[#94A3B8]">
              Accédez à vos avoirs en coffre fort, à l'historique de vos factures et à vos ordres de réservation.
            </p>
          </div>

          {!isLoggedIn ? (
            <div className="bg-[#121826] border border-[#1E293B] rounded-3xl p-8 max-w-md mx-auto shadow-2xl">
              <h2 className="font-serif text-xl font-bold text-white mb-4">Connexion à votre espace</h2>
              <form onSubmit={handleLogin} className="space-y-4 text-xs">
                <div>
                  <label className="block text-[#94A3B8] mb-1 font-medium">Adresse Email</label>
                  <input
                    type="email"
                    required
                    placeholder="jean@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#090D16] border border-[#1E293B] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#b8a468]"
                  />
                </div>

                <div>
                  <label className="block text-[#94A3B8] mb-1 font-medium">Mot de passe</label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#090D16] border border-[#1E293B] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#b8a468]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#b8a468] to-[#a98c35] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all"
                >
                  Se connecter
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-[#121826] border border-[#1E293B] rounded-3xl p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-[#1E293B] pb-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">Bienvenue, {email}</h3>
                  <p className="text-xs text-emerald-400 font-semibold mt-0.5">● Compte vérifié Identité & KYC Complété</p>
                </div>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="py-2 px-4 rounded-xl bg-[#090D16] text-[#94A3B8] hover:text-white text-xs border border-[#1E293B]"
                >
                  Déconnexion
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-[#090D16] p-4 rounded-2xl border border-[#1E293B]">
                  <span className="text-[#94A3B8]">Avoirs en coffre</span>
                  <div className="text-xl font-bold text-[#b8a468] mt-1">12 450,00 €</div>
                  <span className="text-[10px] text-[#94A3B8]">1 Lingot 100g Or + 10 Napoléons</span>
                </div>
                <div className="bg-[#090D16] p-4 rounded-2xl border border-[#1E293B]">
                  <span className="text-[#94A3B8]">Dernière commande</span>
                  <div className="text-xl font-bold text-white mt-1">#MJ-2026-889</div>
                  <span className="text-[10px] text-emerald-400 font-semibold">Livré & Scellé</span>
                </div>
                <div className="bg-[#090D16] p-4 rounded-2xl border border-[#1E293B]">
                  <span className="text-[#94A3B8]">Devises réservées</span>
                  <div className="text-xl font-bold text-white mt-1">1 500 USD</div>
                  <span className="text-[10px] text-[#94A3B8]">Prêt au guichet Paris Bourse</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
      <Footer />
      <AppointmentModal />
      <MiniCart />
    </>
  );
}
